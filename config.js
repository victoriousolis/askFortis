// Ask Fortis settings.
// Leave ASK_FORTIS_API empty to use the built-in answers (free, works offline).
// To turn on the conversational AI, deploy server/worker.js (see server/README.md)
// and paste its URL between the quotes, e.g. 'https://ask-fortis.yourname.workers.dev'
window.ASK_FORTIS_API = '';

// Fortis Safety Team phone numbers. Fill these in once and every device gets them
// (used by Who to Call and by the Emergency report's "Text the safety team" button).
window.ASK_FORTIS_TEAM_PHONES = {
  'p-rosillo':  '',   // J Rosillo – Project Lead, STY 10 / STY3 / Marcus
  'p-morehead': '',   // Dave Morehead – Project Lead, STY 2
  'p-engelke':  '',   // Stuart Engelke – Campus Lead
  'p-valles':   '',   // Savannah Valles – Safety Admin
  'p-griffin':  '',   // Donovan Griffin – Program Safety Team Lead
  'p-black':    '',   // Cathy Black – Swing shift, after hours & weekends
  'p-seyfarth': '',   // Justin Seyfarth – gCub, weekends
  'p-porter':   '',   // David Porter – 1st floor DC, weekends
  'p-guajardo': '',   // Gilbert Guajardo – 2nd floor DC, weekends
  'medic':      '',   // Onsite medic (medical team) – gets the emergency text too
  'security':   ''    // Site security / SOC
};

// Push key for emergency pop-up notifications (public; the private half goes in the relay).
window.ASK_FORTIS_VAPID_PUBLIC = 'BGVzGKIWGsH8hr7tyDnZF355xJ4glvv2Mdp-OPqORZ507I7tykgEwl76gcxM34Cb5BP6huzPUelh29GdbweIKGY';

// Fortis superintendents by work area. The SSSP doesn't name them, so fill these in once and
// every device highlights the right superintendent next to the area's Fortis safety lead.
// Add as many per area as you need: { name: 'Jane Doe', phone: '775-555-0100', title: 'Area Superintendent – MEP' }
// "STY 3" entries also show for STY 3 – gCub / 1st floor DC / 2nd floor DC.
window.ASK_FORTIS_SUPERS = {
  'STY 10': [ /* { name: '', phone: '', title: 'Fortis Superintendent' } */ ],
  'STY 3': [],
  'STY 3 – gCub': [],
  'STY 3 – 1st floor DC': [],
  'STY 3 – 2nd floor DC': [],
  'Marcus': [],
  'STY 2': []
};

// Site boundary for GPS check-ins. Workers' locations are shared with Fortis Safety only while
// the app is open AND they're inside this boundary (emergency reports always include GPS).
// Easiest: in Google Maps, long-press the middle of the site, copy the numbers it shows
// (e.g. 39.5301, -119.4702) into lat / lng, and set radiusM to cover the whole site.
// Or trace the fence line: polygon: [[lat, lng], [lat, lng], ...]  (3 or more corners).
window.ASK_FORTIS_SITE = { name: 'Project Comstock', lat: null, lng: null, radiusM: 1200, polygon: null };

// Optional: a Google Maps JavaScript API key shows every worker as a pin on one map in
// "Find a worker". Without a key, each worker still opens in Google Maps with one tap.
window.ASK_FORTIS_GMAPS_KEY = '';

// Site-specific safety plans, one per STY. Every plan uses the same site password.
// When a question is asked, Ask Fortis asks which STY the worker is on and answers from that plan.
// STYs without a plan here still work: answers come from the default plan with a "confirm it applies" note.
// Add a plan by dropping its encrypted files next to index.html and listing them, e.g.
//   'STY 3': { file: 'sssp-sty3.enc.json', figs: 'figures-sty3.enc.json', title: 'Project Comstock STY 3 SSSP, V.1.0', short: 'STY 3 SSSP · V.1.0' },
window.ASK_FORTIS_PLANS = {
  'STY 10': { file: 'sssp.enc.json', figs: 'figures.enc.json', orig: 'orig/sty10', pages: 87, title: 'Project Comstock STY 10 SSSP, V.1.0 (06-04-2025)', short: 'STY 10 SSSP · V.1.0' },
  'STY 2':  { file: 'sty2a.enc.json', figs: 'figures-sty2a.enc.json', orig: 'orig/sty2a', pages: 63, title: 'Project Comstock STY 2A SSSP, Rev. 2.0 (05.2025)', short: 'STY 2A SSSP · Rev 2.0' }
};
