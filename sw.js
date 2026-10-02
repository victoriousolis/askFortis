// Ask Fortis service worker – offline support.
// Bump VERSION whenever you upload a new SSSP bundle or app update.
const VERSION = 'ask-fortis-v71';
const SHELL = ['./', 'index.html', 'sounds/truck-horn.mp3', 'manifest.webmanifest', 'sssp.enc.json', 'figures.enc.json', 'sty2a.enc.json', 'figures-sty2a.enc.json', 'config.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png', 'icons/fortis-logo.png'];

self.addEventListener('install', e => {
  // Download each file fresh. If one fails (bad signal), keep the copy from the previous version so the app still works offline.
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    const res = await Promise.allSettled(SHELL.map(u => c.add(new Request(u, {cache: 'reload'}))));
    for (let i = 0; i < SHELL.length; i++){
      if (res[i].status === 'fulfilled') continue;
      const old = await caches.match(SHELL[i], {ignoreSearch: true});
      if (old) await c.put(SHELL[i], old); else if (SHELL[i] === 'index.html') throw new Error('index.html not reachable');
    }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Network first (so updates show up), fall back to cache when offline.
// cache: 'no-cache' asks GitHub every time (a quick "not modified" if nothing changed), so a new upload shows up right away.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  const fresh = e.request.mode === 'navigate' ? fetch(e.request.url, {cache: 'no-cache', credentials: 'same-origin'}) : fetch(e.request, {cache: 'no-cache'});
  e.respondWith(
    fresh.then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('index.html')))
  );
});

// ---------- Automatic updates ----------
// The app asks for its version, and checks GitHub for a new sw.js on open, when it comes back on screen, and hourly.
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type === 'af-version' && e.source) e.source.postMessage({type: 'af-version', version: VERSION});
  if (d.type === 'af-check') e.waitUntil(self.registration.update().catch(() => {}));
  if (d.type === 'af-skip') self.skipWaiting();
});
// Once a day in the background where the phone allows it (Android and desktop Chrome/Edge, installed app). iPhone checks when the app opens.
self.addEventListener('periodicsync', e => {
  if (e.tag === 'af-update') e.waitUntil(self.registration.update().catch(() => {}));
});

// ---------- Emergency pop-up notifications ----------
function idbGet(key){
  return new Promise(res => {
    const r = indexedDB.open('askfortis', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onsuccess = () => { try { const tx = r.result.transaction('kv', 'readonly'); const q = tx.objectStore('kv').get(key); q.onsuccess = () => res(q.result); q.onerror = () => res(null); } catch(e){ res(null); } };
    r.onerror = () => res(null);
  });
}
function alertText(a){
  const title = 'MEDICAL EMERGENCY – ' + (a.area || 'Project Comstock') + (a.spot ? ' (' + a.spot + ')' : '');
  const body = [(a.victim ? 'Injured: ' + a.victim + (a.victimCo ? ' (' + a.victimCo + ')' : '') + ' – ' : '') + (a.what || 'Medical emergency'), 'Awake & breathing: ' + (a.breathing || '?'), 'Safety contacted: ' + (a.called || '?'),
    'Reported by ' + (a.name || '?') + (a.company ? ' (' + a.company + ')' : '') + (a.phone ? ' · ' + a.phone : ''),
    a.foreman ? 'Foreman: ' + a.foreman : ''].filter(Boolean).join('\n');
  return {title, body};
}
self.addEventListener('push', e => {
  e.waitUntil((async () => {
    const cfg = (await idbGet('push')) || {};
    let a = null, test = false, bc = null, dl = null;
    try {
      const sub = await self.registration.pushManager.getSubscription();
      const r = await fetch(cfg.api.replace(/\/$/, '') + '/latest', {method: 'POST', headers: {'Content-Type': 'application/json', 'X-Ask-Fortis-Key': cfg.token}, body: JSON.stringify({endpoint: sub ? sub.endpoint : ''})});
      const j = await r.json(); a = j.alert; test = !!j.test; dl = j.delivery || null;
      // Emergency broadcast from Admin: show it when it's the newest thing (worker devices only ever get broadcasts)
      if (!test && j.broadcast && (!a || j.broadcast.at >= a.at)) { bc = j.broadcast; a = null; }
    } catch(err){}
    // a driver checked in for this worker's company: truck-horn style alert
    if (dl && !test){
      await self.registration.showNotification('🚛 DELIVERY WAITING – ' + (dl.company || ''), {body: (dl.sty || '') + (dl.spot ? ' – ' + dl.spot : '') + '\nLoad: ' + (dl.load || '') + '\nDriver: ' + ((dl.driver && dl.driver.name) || '') + (dl.driver && dl.driver.phone ? ' · ' + dl.driver.phone : '') + '\nTap to answer the driver.',
        tag: 'af-dl-' + dl.id, renotify: true, requireInteraction: true, icon: 'icons/icon-192.png', badge: 'icons/favicon-32.png', vibrate: [700, 180, 1300, 300, 700, 180, 1300], data: {dl: dl.id}});
      (await self.clients.matchAll({type: 'window', includeUncontrolled: true})).forEach(w => w.postMessage({type: 'af-dl', delivery: dl}));
      return;
    }
    if (bc){
      await self.registration.showNotification((bc.kind === 'clear' ? 'ALL CLEAR – ' : 'EMERGENCY – ') + bc.title, {body: bc.text + (bc.area && bc.area !== 'All' ? '\nArea: ' + bc.area : ''), tag: 'af-bc-' + bc.id, renotify: true, requireInteraction: bc.kind !== 'clear',
        icon: 'icons/icon-192.png', badge: 'icons/favicon-32.png', vibrate: [600, 200, 600, 200, 1000], data: {bc: bc.id}});
      (await self.clients.matchAll({type: 'window', includeUncontrolled: true})).forEach(w => w.postMessage({type: 'af-bc', broadcast: bc}));
      return;
    }
    let t = test ? {title: 'Ask Fortis – test alert', body: 'Emergency pop-ups are working on this device.'}
      : a ? alertText(a) : {title: 'MEDICAL EMERGENCY reported', body: 'Open Ask Fortis for the details.'};
    await self.registration.showNotification(t.title, {body: t.body, tag: test ? 'af-test' : 'af-alert-' + (a ? a.id : Date.now()), renotify: true, requireInteraction: !test,
      icon: 'icons/icon-192.png', badge: 'icons/favicon-32.png', vibrate: [400, 150, 400, 150, 800], data: {id: a ? a.id : null, test}});
    const wins = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    wins.forEach(w => w.postMessage({type: 'af-alert', alert: a, test}));
  })());
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.notification.data && e.notification.data.test) return;
  const isBc = !!(e.notification.data && e.notification.data.bc), dlId = e.notification.data && e.notification.data.dl;
  if (dlId){
    e.waitUntil((async () => {
      const wins = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
      for (const w of wins){ if ('focus' in w){ w.postMessage({type: 'af-open-dl', id: dlId}); return w.focus(); } }
      return self.clients.openWindow('./#delivery=' + dlId);
    })());
    return;
  }
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({type: 'window', includeUncontrolled: true});
    if (isBc){ for (const w of wins){ if ('focus' in w){ w.postMessage({type: 'af-open-bc'}); return w.focus(); } } return self.clients.openWindow('./#broadcast'); }
    for (const w of wins){ if ('focus' in w){ w.postMessage({type: 'af-open-alert'}); return w.focus(); } }
    return self.clients.openWindow('./#alert');
  })());
});
