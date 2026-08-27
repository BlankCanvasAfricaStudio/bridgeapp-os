# BridgeApp × Future Club — Phase 2 Operating System

> South Africa's most aspirational youth excellence brand.
> One operating system. Nine deliverables. May – December 2026.

**Built by [Blank Canvas Agency](mailto:info@blankcanvasafrica.co.za)** · OS v2.0 · Last updated May 2026

---

## 🌐 Live Site

**👉 [https://blankcanvasafricastudio.github.io/bridgeapp-os/]**


---

## What This Repo Is

This is the live, hosted version of the BridgeApp × Future Club Phase 2 Growth OS — the single source of truth for the agency team and client through the May–December 2026 phase.

Every file here ladders to one of three outcomes:
- 🎓 **Student sign-up**
- 👨‍👩‍👧 **Parent subscription**
- 🏫 **School contract**

---

## 📂 What's In the Repo

### Top-level files

| File | What it is | Owner | Update |
|------|-----------|-------|--------|
| **`index.html`** | Master OS dashboard — 12 navigable sections covering all 4 engines | DD | Weekly |
| **`BridgeApp_OS_Directory.html`** | The map of the entire system — files, owners, cadence | DD | When files added |
| **`BridgeApp_DemoReviewCard.html`** | Single-page sign-off visual for client review (20 May 2026) | DD | Per phase |
| **`BridgeApp_SA_RegionalSalesMap.html`** | Live SA provincial sales dashboard — pipeline by region, school priorities | Kefiloe | Weekly |
| **`BridgeApp_FCLaunch_SocialPoster.html`** | Brand-aligned Instagram-ratio Future Club launch poster | Sememi | Per campaign |
| **`BridgeApp_SchoolCompetition_Emailer.html`** | School competition launch email — outreach to 250+ schools | Kefiloe | Per wave |
| **`04_Team_Workbooks/index.html`** | **Team Workbooks** — content board + sign-off, schools tracker, events & leads tracker. Feeds the OS roll-up live | Whole team · sign-off DD | Daily |
| **`04_Team_Workbooks/apps_script/Code.gs`** | The Apps Script that turns a Google Sheet into the shared store behind the workbooks | DD | Once |
| **`04_Team_Workbooks/os_snapshot.json`** | Fallback data so the dashboard is never blank for someone not connected to the Sheet | Auto | Per publish |

### Team workbooks

`04_Team_Workbooks/index.html` — one page, three workbooks, one shared store.

| Tab | Who works in it | What goes in |
|-----|----------------|--------------|
| **Needs you** | DD | Everything waiting on a sign-off, every follow-up that has gone past its date, and the list of what is cleared to post this week |
| **Content board** | Sememi | The week's posts — graphic or video link, channel, format, caption, hashtags, CTA. DD approves; only then does a post read **Cleared to post** |
| **Schools** | Kefiloe | Every school visited — who we saw, how they responded, where it sits in the pipeline, what the follow-up is and when it is due |
| **Events & leads** | Sales team | Every exhibition and conference — turnout, who we spoke to, what it cost — and every lead it produced, with its owner, due date and outcome |

Direct links for the team: `#content` · `#schools` · `#events` · `#approvals`

**The sign-off rule.** Nobody posts anything that does not read *Cleared to post*. Only DD can clear it, and a post with no asset link cannot be cleared. If anyone edits the caption, asset, channel or date **after** sign-off, the approval is automatically withdrawn and the post goes back to DD — so what gets posted is always what was approved.

**How it reaches the OS.** Every save updates the roll-up at the top of the workbook and the **Live from the team workbooks** panel on the master dashboard — cleared to post, waiting on sign-off, follow-ups past due, schools signed, leads captured. No copying numbers across by hand.

**Where the data sits.** The workbook looks for its data in three places, in this order:

1. **The team Sheet** — a Google Sheet of your own, reached through a small Apps Script. This is the one to use: everybody edits the same board, changes cross between people within about ten seconds, and the OS dashboard reads the same numbers. Setup below.
2. **This browser** — if no Sheet is connected. Private to that person and that device.
3. **`os_snapshot.json`** — the committed fallback, so a fresh visitor still sees the real pipeline instead of an empty board.

### Connecting the team Sheet — once, about five minutes

1. Make a new Google Sheet. Call it **Gradesmatch Team Workbooks**.
2. In it: **Extensions → Apps Script**.
3. Delete what's in the editor. Paste in all of [`04_Team_Workbooks/apps_script/Code.gs`](04_Team_Workbooks/apps_script/Code.gs). Save.
4. **Deploy → New deployment → ⚙ → Web app.** Execute as **Me**, Who has access **Anyone**. Deploy, then authorise it.
5. Copy the **Web app URL** (it ends in `/exec`).
6. Open the workbook, press **Team Sheet**, paste the URL.
7. Send the team this link and they're connected in one click, nothing to paste:
   `…/04_Team_Workbooks/?api=PASTE_THE_URL_HERE`

The first person to connect pushes the imported book into the Sheet, so the team starts on the real pipeline.

**Treat that URL like a key.** Anyone who has it can write to the Sheet, so it goes in WhatsApp or email — never into this repo, which is public. That's why the workbook keeps it in each person's browser rather than in the page. If it ever leaks: Apps Script → **Deploy → Manage deployments → Archive**, then deploy again for a fresh URL.

**Reading the Sheet directly.** Each workbook gets its own tab, in plain readable columns, so the Sheet is worth opening for reporting or a quick filter. Edit in the workbook though, not in the Sheet — the app round-trips through the hidden `_json` column, so typing into a readable cell won't take.

**If the Sheet is unreachable**, the workbook says so and drops back to that browser rather than locking anyone out. Nothing is lost; reconnect when it's back.

**Getting data out.** Every workbook exports CSV for Drive or Sheets, and **Copy approved list** puts the week's cleared posts on the clipboard, formatted for the team WhatsApp.

### Brand outputs folder

#### `03_Brand_Outputs/btl_pod/`
| File | What it is |
|------|-----------|
| **`index.html`** | Pod operations landing — fabrication, install, MOU, schedule |
| **`pod_fabrication_brief.html`** | Master spec for pod fabrication — dimensions, zones, materials |
| **`school_mou_template.html`** | MOU between BridgeApp and host school |

#### `03_Brand_Outputs/brand_lib/`
| File | What it is |
|------|-----------|
| **`index.html`** | Brand library landing page |
| **`email_signature.html`** | Team email signature template (Gmail-ready HTML) |

---

## 🔗 Quick Access Links

### For the team
- **Team Workbooks** — `/04_Team_Workbooks/` ← the week's content, schools and events
- **Master OS dashboard** — `/`
- **OS Directory** — `/BridgeApp_OS_Directory.html`
- **Sales Map (Kefiloe)** — `/BridgeApp_SA_RegionalSalesMap.html`
- **Pod Operations** — `/03_Brand_Outputs/btl_pod/`
- **Brand Library** — `/03_Brand_Outputs/brand_lib/`

### For the client
- **Demo Review Card** — `/BridgeApp_DemoReviewCard.html`

### For school outreach
- **Schools tracker (Kefiloe)** — `/04_Team_Workbooks/#schools`
- **Sales Map** — `/BridgeApp_SA_RegionalSalesMap.html`
- **School Competition Emailer** — `/BridgeApp_SchoolCompetition_Emailer.html`
- **MOU Template** — `/03_Brand_Outputs/btl_pod/school_mou_template.html`

### For social
- **Content board & sign-off** — `/04_Team_Workbooks/#content`
- **FC Launch Poster** — `/BridgeApp_FCLaunch_SocialPoster.html`

### For events & exhibitions
- **Events & leads tracker** — `/04_Team_Workbooks/#events`

---

## 👥 Team & Ownership

| Owner | Role | Responsible for |
|-------|------|----------------|
| **Ditshego Ditshego (DD)** | Agency Lead · Director | Master OS · **content sign-off in the Team Workbooks** · Demo Review Card · Client Report · weekly retros · brand QA · Friday data review |
| **Social — vacant** | *Needs an owner* | Content board entries · FC Live Tracker (Friday update) · social posts · daily community management · weekly analytics · WhatsApp drops · trending audio |
| **Kefiloe Mametse** | School Outreach & Sales | **Schools tracker + events & leads tracker** · School pipeline · sales map · school emailer waves · pod MOUs · conference leads · golf clinic invites · CRM logs |
| **Sememi Mosupye** | Junior Brand & Creative | Content board entries · Social posters · Reel title cards · email templates · brand library · CapCut edits · Canva masters |

---

## 🎨 Brand Identity

| | |
|---|---|
| **Colours** | Blue `#4A90D9` · Yellow `#F0B429` · Orange `#E8601C` · Navy `#0F2340` |
| **Typography** | Barlow + Barlow Condensed (Black H1, Bold H2, Regular body) |
| **Voice** | Confident · Declarative · Aspirational · South African culturally rooted |
| **We are** | Bold · Status-driven · Clear · Youth-native |
| **We are not** | Corporate · Generic · Academic · Passive |

**Key brand phrases**
> "The Future Club is for the ones Bridging their path"
> "Built Different"
> "Bridging Our Path To Excellence"
> "The Future Is Watching"
> "Don't guess your future"

---

## 🚀 Phase 2 Goals (May – December 2026)

| # | Objective | KPI | Deadline |
|---|-----------|-----|----------|
| 01 | Market repositioning — Excellence Partner identity | ≥70% survey alignment | 31 May 2026 |
| 02 | User growth — Future Club community | 50,000+ verified members | 31 Dec 2026 |
| 03 | Revenue conversion — first paid cohort + schools | 20–30 schools signed | 31 Dec 2026 |
| 04 | Systems + data infrastructure | CRM + dashboard live | 30 Sep 2026 |

---

## 🛠 The 4 Growth Engines

| # | Engine | Headline Target |
|---|--------|----------------|
| **01** | Sales Product Campaigns (Pathfinder + UniApply + Parents) | 1,000+ paid student subs · 500+ parent subs |
| **02** | The Future Club (Competition + Interschools + Podcast) | 5,000–10,000 entries · R500K–R1M sponsor commitments |
| **03** | School Sales Projects (Direct outreach + Conferences + Pods) | 20–30 signed school contracts (R60K/yr avg) |
| **04** | Systems & Data (CRM + Analytics + Dashboards) | CRM live Jun · Full dashboard Sep |

---

## 📝 How to Update This Repo

1. Open the **Claude Project** — `BridgeApp × Future Club — Phase 2`
2. Tell Claude what changed (e.g. *"Add new school to pipeline"*, *"Update budget Engine 03"*)
3. Claude returns the updated HTML file
4. Replace the file in this repo via **Add file → Upload files**
5. Commit changes → URL updates automatically (no DNS, no rebuild needed)

The team workflow stays the same — Drive for organised storage, GitHub for live access.

**The Team Workbooks are the exception.** Nobody needs Claude to update those — the team types straight into `04_Team_Workbooks/` and, with the team Sheet connected, everyone else and the master OS dashboard see it within seconds. No uploads, no copying numbers across.

---

## 🔒 Access

This is a **public repo** so GitHub Pages can serve it for free.
The content here is operational — not commercially sensitive.
Client and team can access via the live URLs above.
Source files for editing live in the shared **Google Drive** folder `BridgeApp_Phase2_OS`.

---

## 📞 Contact

**Blank Canvas Agency**
📧 [info@blankcanvasafrica.co.za](mailto:info@blankcanvasafrica.co.za)
🏢 Reg. 2025/210463/07

---

<sub>**Built Different.** · Phase 2 OS v2.0 · © Blank Canvas Agency 2026</sub>
