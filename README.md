# Ask Fortis

A search app for the Fortis Construction **Project Comstock – STY 10 Site-Specific Safety Plan (V.1.0, 06-04-2025)**.
It works in any modern browser and installs like an app on iPhone, iPad, Android, and Windows.

## Put it online (GitHub Pages)
1. Create a new GitHub repository (for example `ask-fortis`).
2. Upload **everything in this folder**, including the `icons` folder and the hidden `.nojekyll` file, to the root of the repo.
3. Go to **Settings → Pages**. Under "Build and deployment", pick **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After about a minute your link will be `https://<your-username>.github.io/ask-fortis/`.

> Do **not** upload the SSSP PDF to the repo. The plan's text in `sssp.enc.json` and `figures.enc.json` is encrypted and can only be opened with the site password.

## Install on a device
- **iPhone / iPad (Safari):** open the link → Share → **Add to Home Screen** → Add.
- **Android (Chrome):** open the link → ⋮ menu → **Install app** (or **Add to Home screen**).
- **Windows (Edge or Chrome):** open the link → click the install icon in the address bar (or ⋯ menu → **Apps → Install this site as an app**).

After it has been opened once, the app works offline.

## Ask Fortis (the assistant)
- Ask in your own words by typing or tapping the mic. Ask Fortis answers like a site safety pro: straight answer first, the SSSP section it came from, and who to contact.
- If the SSSP doesn't cover a question, it says so, suggests OSHA / Nevada OSHA / NFPA / ANSI / NCCCO references, and sends you to Fortis Safety or your Superintendent.
- Tap the speaker button to hear replies read aloud, or the waveform button for hands-free Talk mode (a back-and-forth voice conversation). Voice and speed are in the ⋮ menu.
- **Ask Fortis's own voice:** by default she talks in an original bright, bouncy cartoon-sidekick voice (⋮ → Voice → Style; switch to “Natural coworker voice” anytime). In emergencies she automatically drops to a calm, clear delivery.
- **Natural voice:** with the relay and an OpenAI key set up (server/README.md, step B2), she speaks with a human-sounding AI voice like ChatGPT's or Gemini's, with her tone matched to the moment. Without it, the app uses the most natural voice on the device and rewrites replies the way a person would say them. For the best device voice: iPhone → Settings → Accessibility → Spoken Content → Voices → English → download a *Premium* or *Enhanced* voice (Ava, Zoe); Windows → use the Edge browser (Natural voices); Android → install Google Speech Services voice data.
- The persona (tone, cadence, pacing, emotional response, words it never uses) is written up in `PERSONA.md`.
- Without an AI connection, Ask Fortis answers from its **built-in knowledge base**: about 190 prepared answers written from every SSSP section, the HECP, Nevada dig and OSHA-10 rules, and common OSHA requirements, each with its source. It also understands misspellings, follow-up questions, and hazards happening right now (get-safe steps first, then Fortis Safety contacts). If a question isn’t about safety at all, it sends the worker to the Fortis Safety Team.
- Ask Fortis knows Fortis’s **program names**. Workers can use everyday words (“call before you dig”, “JSA”, “housekeeping”, “toolbox talk”, “write-up”, “UA”, “yo-yo”) and she ties the question to the Fortis program (Don’t Hit It, JHA & Pre-Task Planning, Nothing Hits the Floor, Safety Meetings, Disciplinary Action, Drug & Alcohol, Fall Protection & Ladders Last…) and answers from its details. The SSSP tab lists all programs A–Z.
- **Question ideas:** the home screen shows 4 “Try asking” suggestions that change each day. Tap **💡 More question ideas** to open a full window of 117 questions grouped by topic (Emergencies, PPE, Permits, Fall protection, Digging, LOTO, Equipment, Health & weather, Site rules, Training, Reporting). Search the list or tap a topic chip; tap any question to ask it.
- **Pictures in the SSSP:** every chart, form and graphic is typed into the app word for word (Life Saving Rules icons, sample chemical label, Ladders Last poster, High Winds chart, Hurt Matrix, org chart, the three “Don’t Hit It” forms, the Pre-Task Plan, the Appendix C heat program, the Energy Wheel and the Hierarchy of Controls), so search, answers and the AI can use them. Each one opens as the original picture from the Forms tab or “View original chart.”
- **Heat (Appendix C):** the SSSP's Appendix C heat program is image-only in the PDF, so it is typed into the app word for word: heat index chart, 80°F and 90°F controls, rest-break Options A/B/C (including the NIOSH work/rest table), the heat emergency plan, acclimatization, and training. Heat questions ("breaks when it's over 100 degrees") answer from it, “See Appendix C” links open it, and the AI gets those exact passages.
- Answers come from the built-in writer by default. To make them fully conversational AI, follow `server/README.md`.

## Profile, consent & GPS
- On first use on each device (after the site password), workers must create a profile. It needs an **ID photo (selfie)**, first and last name, company, employee ID, title, foreman or superintendent, and mobile phone; work area is optional. Then they must accept the **location & photo consent** and allow location.
- **Work email:** the profile asks for a work email. It's required unless the worker ticks "I don't have a work email", since many craft workers don't have one. It shows on their ID card and in Find a worker. When a listed contact confirms "Is this you?", their listing's email is updated too.
- **Emails on contacts and charts:** every contact with a work email has an ✉ email button, in Who to Call, the safety team card, superintendent rows and the emergency screens. Every box on the org charts shows the email under the phone number. Superintendents and medical now have an email field in Admin.
- **Camera access:** the first time someone takes their ID selfie, the browser asks to allow the camera. Ask Fortis shows a live view: front camera for the selfie, back camera for reports. On a phone there's also *Use phone camera app*. If camera access was blocked, Ask Fortis explains how to turn it back on for iPhone, Android or Windows and offers *Try again*. The camera status is on the profile screen. The Claude preview can't use a computer's camera; the GitHub version can.
- **ID photo:** on a phone, *Take selfie* opens the front camera. On a computer it shows a live webcam preview, with *Upload a photo instead* as a fallback. The photo is cropped to a head-and-shoulders ID shot (about 25 KB). It shows on the worker's ID card (tap the location dot). The Fortis Safety Team sees it in **Find a worker** and on the emergency alert screen. Withdrawing consent deletes it.
- **No duplicate profiles:** if the new profile's mobile number and company match someone already on the preloaded contact list, Ask Fortis asks **"Is this you?"** and shows the listing beside what they entered. On *Yes*, that listing is updated with their name and title and linked to their app profile; no second record is made. The relay double-checks the number and company before changing anything. Admin → 🧭 Org charts & upload → **Confirmed by workers** shows every change. If the same person signs up again on a new phone (same number and company), the old profile is retired automatically.
- **Photos on contact cards:** when a listed contact (safety team, superintendent, medical, site or company contact) confirms "Is this you?", they can choose **Show my ID photo on my contact card**, which is on by default. Their photo then replaces the initials in Who to Call, the safety team card, superintendent rows, emergency screens and the alert screen, on every device. Tap the photo to see it larger. They can turn it off any time under their profile (tap the location dot). Retaking the ID photo updates the card everywhere.
- The consent now covers the ID photo, so everyone who already has a profile is asked once to add a selfie and re-accept.
- Their profile fills in the Emergency report automatically, so it asks fewer questions. Every report includes their GPS location as a Google Maps link, and the team's alert screen shows a map and directions.
- While the app is open on site, their location is shared with the Fortis Safety Team, who see it in ⋮ → **Find a worker** (team PIN).
- The green dot in the header shows the location status; tap it to see it, edit the profile, or withdraw consent.
- **Set the site boundary** in `config.js` (`ASK_FORTIS_SITE`). Until you do, locations are only sent with Emergency reports.
- Have Fortis HR/legal review the consent wording (in `index.html`, `CONSENT_HTML`). If you change it, change `CONSENT_VERSION` so everyone accepts the new version.

## Home screen themes & tickle
- **Themes:** a scene goes around Ask Fortis on the home screen, with a safety tip that fits the occasion.
  - **Seasons:** spring, summer, fall, winter.
  - **Holidays:** New Year's, Memorial Day, Independence Day, Labor Day, Halloween, Veterans Day, Thanksgiving, the winter holidays.
  - **Sports:** Super Bowl week, Stanley Cup Final, World Cup, World Series, March Madness.
  - **Which one shows:** national holidays first, then sports events, then Halloween, then the season.
  - Only the animations show (falling leaves, snow, confetti, fireworks, a thrown ball and so on) around Ask Fortis on the normal home screen, with no background panel. They're drawn in the app (no team or league logos), move gently, and stay still for people who turn off motion on their phone.
- **Admin → 🎉 Themes:** automatic by date, always show one theme, or off for everyone. Tap any theme to preview it, see what's coming up, and set the real sports dates once they're announced. The Super Bowl (Feb 8–14, 2027), World Series (Oct 23–31, 2026), March Madness (Mar 14–Apr 5, 2027) and Women's World Cup (Jun 24–Jul 25, 2027) dates are already confirmed. The Stanley Cup Final is estimated (June 1–22) until the NHL announces it.
- Workers can turn themes off for themselves in ⋮.
- **Helmet day:** on a league's opening day, Ask Fortis's hard hat flips up in a puff and lands as that sport's helmet, and she wears it everywhere in the app that day, with a head-protection tip. The helmets are Fortis-branded, with no league or team logos.
  - **Hockey:** helmet with a clear visor. Opening day Sep 29, 2026 (confirmed).
  - **Basketball:** sweatband. Opening day Oct 20, 2026 (confirmed).
  - **Baseball:** batting helmet with ear flap. Opening Day Mar 24–25, 2027 (confirmed).
  - **Football:** helmet with face mask. Sep 9, 2027 (estimated: the usual Thursday after Labor Day).
  - Later years use each league's usual pattern until you set the real date in **Admin → 🎉 Themes → Season openers**, where *Try it* previews the helmet on your device. Helmet day follows the theme switch: off for everyone, or off for one worker, turns it off too.
- **Tickle:** poke Ask Fortis on the home screen and she wiggles, squints, blushes and giggles, with a cartoon laugh made in the app (no sound file) and a speech bubble. Poke three times fast for a spin and a big laugh.

## Harassment or physical abuse reports
- **Where:** Report → *Harassment or physical abuse*, or the **Report harassment or abuse** button Ask Fortis shows when someone asks about harassment, threats, bullying, discrimination or being hit or pushed.
- **Safety first:** if anyone is hurt or in danger, it tells them to call 911 and site Security and opens the Emergency report.
- **Company chain of command first:** serious questions check that the worker already went to (1) their foreman or supervisor, (2) their superintendent or project manager, and (3) their company's safety or HR, that the company had time to respond (2 working days, unless it's still happening or there was retaliation), and that the report is true. Any "not yet" stops the report and sends them back to their company supervision with the next step. Nothing is sent to Fortis. If the person involved *is* their foreman or superintendent, they can skip that level.
- **Conduct report log:** once every level is used, the log opens: where, when, what happened, who was involved, witnesses, who they told at their company and when, optional photos, and how to reach them. It can't be anonymous, because Fortis must follow up.
- **Who gets it:** Fortis area safety for that area. With the relay and Twilio, each area safety contact on the Safety team list gets a short text with the case number (no details by text). Conduct reports (case numbers **CR-**) are visible only in **Admin → Reports library → Conduct**. They're hidden from the shared team-PIN inbox, because the PIN is also shared with the medic and security. Fortis Safety logs follow-ups with the worker and their company supervision and closes the case there.
- **Relay update needed:** redeploy `server/worker.js` for conduct reports to save on the relay. Without it, reports are kept on the device and the worker is given Text/Email buttons to reach area safety.

## Industry best practice (when the SSSP is silent)
- When the SSSP requires something but doesn't give the number (how far back a CAZ goes, what yellow tape means, how close an eyewash must be), Ask Fortis first states what the SSSP requires, then gives the industry standard with its citation (OSHA 1926, ANSI, NFPA, ASME), clearly labeled as not the SSSP. It reminds workers that the SSSP wins where it's stricter, and to confirm with Fortis Safety before setting up.
- Curated topics (in both SSSPs): CAZ and control-line distances (1926.502(g), crane swing radius 1926.1424), barricade tape colors (ANSI Z535), hot work 35 ft (NFPA 51B), eyewash 10 seconds / 55 ft (ANSI Z358.1), scaffolds (1926.451), slings and tag lines (ASME B30.9), tool tethering (ANSI/ISEA 121), lighting levels (1926.56), and electrical panel clearance (NEC 110.26). They're in the question ideas under **Industry best practice**.
- With the AI on, questions outside these topics get the same treatment: the SSSP requirement first, then the widely accepted standard with a citation, and a specific number only when it's certain.
- To add more: edit `bestpractice.py` and re-run `picfix.py` and `sty2/build2.py`.
- "Lighting" on its own is read as lightning (the storm procedure). It's only read as light levels when the question asks about brightness, foot-candles, or night work.

## Drop box (Admin)
- **Admin → 📥 Drop box:** drop or pick any file. There's nothing to type. Ask Fortis works out what the file is:
  - **Contact list** (Excel, CSV, Word, PDF, .htm or text): each person is sorted into Safety team, Superintendents, Medical, Site contacts or Companies by their title. The STY is read from the file. Adds and updates (phone, email, title) come pre-checked. People missing from a full STY list show as removals, left unchecked, and only within the lists the file covers.
  - **Daily headcount / manpower report:** needs a company column and a count column. It adds or updates that day's counts under Companies & counts.
  - **SSSP (PDF):** finds the STY and revision. If Ask Fortis already has that revision, nothing changes. A new STY is added. A new revision of a built-in plan should go to Claude to rebuild, or it can be loaded as-is right away.
  - **Anything else** gets a plain “couldn’t tell what this is” message.
- Nothing changes until you tap **Apply** and then **Save/Publish**. The typed-instruction box is still under 🧭 Org charts & upload.

## Original SSSP (as printed)
- **SSSP tab → View the original SSSP** shows every page exactly as printed, charts and forms included. Use + and − to zoom (or double-tap), and type a page number to jump to it.
- In any section, **View the original page** (and each “PDF page N · view original” link) opens that exact page. Asking Ask Fortis for “the original SSSP” or “the PDF” gives an **Open the original** button.
- Pages are stored encrypted in `orig/sty10/` and `orig/sty2a/` (one file per page, same site password). Only the pages you scroll to are downloaded. The PDF itself is still not in the repo.

## STY 2A SSSP
- Built in alongside STY 10: `sty2a.enc.json` and `figures-sty2a.enc.json` (same site password). Picking **STY 2** in the STY picker (or tapping the STY line at the top of a chat) loads the **Project Comstock STY 2A SSSP, Rev. 2.0 (05.2025)**. The SSSP tab, Forms tab, reader, answers and AI all switch to it.
- Every picture in the STY 2A plan is typed in: Life Saving Rules icons, the 03/21/25 org chart, the sample chemical label, the Ladders Last poster, the High Winds chart, the three “Don’t Hit It” forms (Appendix A), the PTP (Appendix B) and the heat program (Appendix C).
- Answers follow STY 2A where it differs from STY 10. Examples: near misses and first aid are reported within 4 hours; drug testing at over $500 property damage; there's no lightning rule and no ladder permit; toe boards are at least 3.5 in; steel erection plans are due 14 days ahead; heat plans use the OR OSHA templates; enrollment is by email to Fortis Safety; and there's no Fatigue Management Plan.
- The STY 2A plan (§21.0) refers to the Fortis HECP but doesn't print it, so the STY HECP from the STY 10 SSSP is included and clearly labeled as “Referenced”.
- Contacts and the safety team roster are shared with STY 10 and weren't changed by the STY 2A plan (its org chart is shown as printed, with a note to use Who to Call for current contacts).

## Voice
Tap **Listen** under any answer to hear it. While Ask Fortis is talking, the button turns into a red **Stop**; tap it, or her avatar, to cut her off. This also works when *Read replies aloud* is on.

## Reading the SSSP from an answer
- **Exact wording first:** every **Read in SSSP**, **Read section**, program card and section link that comes from a question opens the section with an **Exact wording from the SSSP** box at the top. It shows the plan's word-for-word passages for that question, with the key words highlighted, the section and PDF page, and a button to jump to each one in context. The passages come first from the section the answer was built from. The section itself (overview included) follows below. From the contacts list, the search you typed is used as the question.
- **Links everywhere:** section references such as "§16.0", "HECP §7.0", "Section 3.0" or "Appendix D" are tappable in answers, program cards, Talk mode and the plan text.
- **Appendix contents:** the HECP overview's list of sections (1 Objective … 13 Hierarchy of Controls) is all links, with a contents list at the bottom. Each HECP section has previous/next buttons.
- **Back and Home:** the reader's title bar stays pinned at the top while you scroll. **‹** steps back through every section you opened, then returns to the chat. **⌂ Home** goes straight to the main screen. The bottom tabs stay visible while reading, and any of them takes you right there.

## Moving around charts
Charts and org charts open at a readable size, starting at the top. Slide left, right, up and down by dragging with a finger or the mouse, scrolling (a two-finger swipe on a trackpad), the arrow buttons on the edges (tap to nudge, hold to glide), or the keyboard arrow keys. Zoom with a pinch, the + and − buttons, or Ctrl+scroll. Fit width and Fit screen reset the view.

## Charts & forms
The charts and forms were re-scanned at high resolution and cropped to the content. The org chart, Hurt Matrix, and Hierarchy of Controls were low-resolution pictures in the PDF, so they were redrawn as sharp graphics. The viewer has pinch or scroll zoom, drag to pan, double-tap to zoom, Fit width, Fit screen, and Rotate for wide charts.

## Org charts (button next to Admin)
The **Org chart** button (the chart icon next to the Admin lock at the top of every screen) opens the org charts for everyone: a button for every STY's safety organization (STY 2, STY 4, STY 10, STY 12; your own area first), all of Project Comstock, and subcontractor safety for each STY or all of them. They're built live from the contact list, so they change as soon as Admin publishes new names or numbers. Pinch to zoom and slide around. Workers can also just ask, e.g. "org chart for STY 2".

## Driver delivery check-in (QR code at the gate)
Drivers who can't reach anyone scan a QR code, fill in a short form, and the receiving company's people get a "Delivery waiting" alert with a truck horn.
- **The QR poster:** Admin → 🚛 Deliveries → **Open the printable QR poster** (or open `delivery-qr.html` on your GitHub link). Print it and post it at the gate, the parking lot and each STY laydown. **Download QR image** gives a high-resolution PNG for signs or stickers. The QR always points at `delivery.html` on your own GitHub link, so it keeps working after updates.
- **The driver page (`delivery.html`):** no password, English or Spanish. Drivers enter their name, cell, trucking company, the company they're delivering to (the list suggests company names; no phone numbers are shown), the STY, where they're parked, what's on the load, and optionally the PO/ticket, truck and notes. It remembers the driver's name and phone for next time. After sending, the page shows who was alerted and updates live when someone answers ("Luis Mendez is on the way", with a Call button).
- **Who gets the alert:** everyone at that company who uses Ask Fortis on that STY (or with no STY set), unless they turned delivery alerts off in the ⋮ menu. They get:
  - a **full-screen "Delivery waiting" alert with the truck horn** when Ask Fortis is open or opened, with *I'm on my way*, *Call / Text the driver*, *Someone else is coming* and *Not our delivery*;
  - a **pop-up notification** (Android vibrates in a horn pattern) if they turned on pop-ups;
  - a **text message** with the details and a link (Twilio);
  - optionally a **phone call that plays the truck horn** and reads the delivery out loud, to the first 3 people. Turn this on with `DELIVERY_CALLS = on` in the relay. This is the only way to get a horn sound on a locked phone: web apps can't change the phone's notification sound.
- **No one from that company on the app?** The driver is told to call their contact, and Fortis site contacts whose role mentions security, gate, logistics or deliveries (Admin → Site contacts) get the text instead.
- **Admin → 🚛 Deliveries** lists every check-in with who was alerted and who answered.
- **Abuse limits:** 6 check-ins an hour per connection, 3 an hour per driver phone, and a hidden field that catches bots.

## Admin
⋮ menu → **Admin** (admin password; see your secrets file; never put it in GitHub). From here you manage:
- the safety team;
- the medical team;
- superintendents;
- site contacts and SSSP role numbers;
- the company directory with on-site counts;
- SSSP uploads.

**Search:** every list tab (Safety team, Medical, Superintendents, Site contacts, Companies & counts) has a search bar at the top. Type a name, title, company, phone, email or area. "STY 4" finds everyone covering STY 4, including titles like "STY2/4/10". It shows how many match, and Esc clears it.

Tap **Publish** and every device updates the next time Ask Fortis opens, or within 5 minutes if it's open. Without the relay, Admin runs in preview mode and changes stay on that one device.

## Safety reports library (Admin)
Admin → **📋 Reports library** is a catalog of every incident and observation. You can filter it by status, type, and area, search it, and export it to CSV. Each report gets a case number (SR-2026-0001) and tracks:
- when it was reported, who reported it, and who it went to;
- who Fortis Safety assigned it to;
- the Hurt Matrix level;
- the root cause (category plus notes);
- lessons learned and the prevention plan;
- corrective actions (owner, due date, done);
- dated follow-up notes and close-out verification.

Every change is logged in the report's history. Cases can be reopened. Without the relay, the library shows reports sent from that device only.

## Org charts & "Upload & ask" (Admin)
- **In chat:** ask "show me the org chart for STY 10" or "make a flow chart of the organization for all projects". Ask Fortis replies with the chart, and you can tap it to zoom, pan, or download it.
- **Admin → 🧭 Org charts & upload:** one chart tile per STY plus an all-projects chart, each with Open and Download.
- **Subcontractor safety charts:** one box per trade partner (ACCO, Bombard, Newtron and so on) with each company's safety people, their titles and phones, under the Fortis safety lead. There's one for all projects and one for each STY. A person counts for an STY when their title mentions it ("STY10", "STY 2/4/10", "STY 2,4,10&12"). Clients are left out. They're built from Admin → Companies & counts, so they update when you publish. In chat, ask "make a safety sub org chart" or "subcontractor safety chart for STY 10".
- **Upload drop box:** drop or pick a file (Excel, CSV, Word, PDF, .htm or text), then type what you want in the instruction bar. Examples: "Update the STY 10 roster from this file", "Add these companies", "Make an org chart from this", "Add this SSSP for STY 2".
- **Proposed changes:** Ask Fortis reads the file and lists each add, update, or remove as a checkbox. Tick the ones you want, tap **Apply**, then **Publish**. Nothing changes for workers until you publish.
- **SSSPs:** an SSSP PDF is routed to the plan upload.
- **Scanned files:** a scanned picture with no text can't be read here.

## Emergency broadcast
Admin → **🚨 Broadcast** sends an evacuate, shelter in place, severe weather, stop work, all clear, or custom message. It goes to every user (or one STY) as a phone and computer pop-up, a full-screen alert in the app, and a text message. Workers tap to confirm they're safe, and Admin shows who has and hasn't responded. Workers' mobile numbers are required in their profile so texts reach them.

## Safety reports (incidents & observations)
Tap **Report** (bottom bar or home screen). There are **no photos**, since photography isn't allowed on site. Workers describe it in their own words instead. If someone is hurt right now, it switches to the Emergency report.
1. What they're reporting: positive or at-risk observation, near miss, injury, damage, spill.
2. What kind of danger, in plain words ("Someone could fall", "Mess, trip or slip hazard", "Missing PPE"…). The safety team still sees the category (Fall protection, Housekeeping, PPE…).
3. What they saw, **in their own words, in any language**. With the AI on, Ask Fortis adds a one-sentence English summary for the safety team and keeps their original words.
4. **Site** (STY), **area** of the site (inside the building, roof, yard…), and **section** (level, grid line, room or landmark; required for at-risk reports).
5. When, which company was involved, whether it was corrected, and what was done.
6. **Was a stop work needed to fix it?**
7. **Foreman's name** (required).
8. **Have they told their company's safety team?**

The report goes to the **Fortis safety team for that area** and the **reporter's own company safety team** from the STY Safety Contact List (Admin → Company directory). With the relay and Twilio it's texted to all of them automatically. Without it, the worker gets one "Text all" button with every number filled in. Reports are saved for the **Safety reports library**.

## Safety points
- **1 point** each day a worker uses Ask Fortis, **2 points** for an incident, near miss or at-risk observation, **1 point** for a positive observation. Anonymous reports and conduct reports don't earn points. Only the first 5 reports a day earn points.
- The score shows under the floating Ask Fortis hexagon (top of every screen and on the home screen). Tapping it shows their week, month and all-time points and the **top 10 this week** (first name, last initial and company). The top 10 resets every Monday, Pacific time.
- **Admin → 🏆 Points:** this week's top 10, then a spreadsheet of everyone's points **by week** (last 8 weeks), **by month** (last 6 months) or **overall**. Tap a column to sort, search by name or company, and **Download spreadsheet (CSV)** to open it in Excel. **Adjust** takes points off (or adds them) for things like a false or duplicate report, with a reason saved in that person's history.
- Points are kept on the relay, so they follow the person (matched by mobile number) and feed the site-wide top 10. Without the relay, points are kept on each phone only.

## STY picker & multiple SSSPs
- When someone asks their first question in a conversation, a pop-up asks **Which STY are you on?** (STY 10, STY 3, STY 2, Marcus, or Not sure). Their own area is marked. Ask Fortis then answers from that STY's SSSP and highlights that STY's safety lead and superintendent. The STY shows in the conversation header with a **Change** button, and **New chat** asks again. Naming the STY in the question ("STY 2 hot work permit") skips the pop-up.
- STYs without an SSSP loaded yet still get answers from the STY 10 plan, with a note to confirm it applies with that STY's Fortis safety lead.
- **Adding an SSSP:** each plan is its own encrypted file under the same site password, listed in `config.js` → `ASK_FORTIS_PLANS`. Send the PDF to Claude to build its files (search index, knowledge base, program names, forms), then upload them and add the line.
- **Question insights** (⋮ menu, team PIN) show questions by STY, the top SSSP sections and Fortis programs, and the questions the plans didn't answer. You can download everything as a CSV. Company and area are logged, but no names. Entries are kept 90 days on the relay.

## Area contacts
Every contact card shows **Your area** at the top. Workers pick their area once (STY 10, STY 3 and its gCub / 1st floor DC / 2nd floor DC zones, Marcus, STY 2), and the app highlights the **Fortis safety lead for that area** and the **area superintendent**, plus whoever is on duty now (swing shift, after hours, weekends). Naming an area in a question ("who's safety for STY 2?") highlights that area for that answer. The emergency report and the team's alert screen highlight the area where the emergency is.

The SSSP doesn't name superintendents, so add them in `config.js` under `ASK_FORTIS_SUPERS` (every device gets them). Anyone can also add one on their own device with **+ Add superintendent** on the card.

## Emergency report
The red **Emergency** button asks, in order:
1. **Reporting for yourself or another worker?**
2. What happened.
3. Is the person awake and breathing (skipped when reporting for yourself, or when they're unconscious).
4. **Can they get to the STY Medical Clinic safely?** Asked only when the person is awake and breathing. It warns not to move anyone after a fall, a head, neck or back injury, an electrical shock, heavy bleeding, or dizziness.
   - **Yes:** "Head to the STY Medical Clinic. Fortis Safety will meet you there." The alert says to meet them at the clinic.
   - **No** (or not awake/breathing): "Stay where you are. Fortis Safety is on the way. Stay with the injured person until first responders arrive." The alert says to respond to the location.
5. The injured worker's name and **company** (skipped for yourself; your profile is used), whether safety was reached, the STY area and exact spot.

The alert message lists the **company** of the injured worker, who reported it, GPS, and who was notified. Fortis Safety will contact 911 if needed and meet EMS at the main entrance.

**Who is notified automatically** (needs the relay, see `server/README.md`):
- **Ask Fortis emergency alert:** a pop-up on every Fortis Safety Team, S1 medical and security device that turned on alerts (⋮ → Emergency pop-up alerts), with "I'm responding".
- **Twilio texts:** the Fortis Safety Team, the **S1 medical team** (STY Medical Clinic, Glenn Marasigan, and the rest of the medical list in Admin), and the **injured worker's company safety people** from the STY safety contact list (Admin → Company directory). Company safety people covering a different STY are left out; people covering this STY come first, up to 10.
- **WhatsApp** is a third, optional way: the worker can also post the alert in their STY safety WhatsApp chat.
- The screen shows which channels went out (✓ or ✗). If the texts didn't go out, the worker gets a **Text safety team + medic** button with every number above filled in.
- Until Admin publishes the directory on the relay, the relay uses the app's built-in contact list sent with the alert (up to 25 numbers).

## Automatic updates
Once Ask Fortis is installed (or just opened in the browser), it keeps itself up to date. Nobody has to approve anything.
- **App updates from GitHub:** every time you upload a new version, bump `VERSION` in `sw.js` (I do this with each update). Each device checks GitHub when the app opens, when it comes back on screen, and every hour while it's open. Android and desktop Chrome/Edge also check once a day in the background when the app is installed. iPhones don't allow background checks, so they check the moment the app is opened.
- **Installing the update:** the new version downloads in the background and takes over automatically. If the worker is in the middle of an emergency report, a safety or conduct report, Admin, or typing, it waits until they're done (or until the app goes to the background), then reloads and shows "Ask Fortis updated".
- **Contacts, rosters and SSSPs from Cloudflare:** changes published in Admin reach every device when the app opens, when it comes back on screen, and every 5 minutes while it's open. No upload to GitHub is needed for those.
- The ⋮ menu shows the app version and when it last checked for updates.

## Password
Everyone signs in with the site password. "Keep me signed in" saves a key on that device only. To lock a device, tap the ⋮ menu → **Sign out & lock**.

## Updating the plan
When the SSSP is revised, the encrypted data files need to be rebuilt. Replace `sssp.enc.json` and `figures.enc.json`, then change `VERSION` in `sw.js` (for example `ask-fortis-v2`) so installed copies pick up the update.
