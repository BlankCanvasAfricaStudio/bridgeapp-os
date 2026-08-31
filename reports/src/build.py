# -*- coding: utf-8 -*-
import data as D
from charts import hbar, funnel, stackbar, meter, tilemap, table, fmt
from style import CSS

CPC = D.CPC
clicks = D.SPRINT["cap"] / CPC
machine = sum(v for _, v in D.MACHINE)
human = D.GA["sessions"] - machine
paid_total = sum(v for _, v, g, _ in D.CHANNELS if g == "paid")
schools = sum(x[2] for x in D.SCHOOL_DAYS)
dev_total = sum(v for _, v in D.DEVICES)
km = sum(x[3] for x in D.SCHOOL_DAYS)
fuel = sum(x[4] for x in D.SCHOOL_DAYS)
R50 = D.CAMPAIGN["budget"] / D.CAMPAIGN["target"]

def sp(n):
    return format(int(round(n)), ",d").replace(",", " ")

P = []
def w(s): P.append(s)

def card(title, sub, body, tv=""):
    return (f'<div class="card"><h3>{title}</h3><p class="sub">{sub}</p>{body}{tv}</div>')

def finding(kind, sym, head, text):
    return f'<div class="find {kind}"><span class="ic">{sym}</span><div class="t"><b>{head}</b>{text}</div></div>'

# ------------------------------------------------------------------ header
w(f'''<header><div class="wrap">
<div class="eyebrow">Blank Canvas &middot; BridgeApp by Gradesmatch &middot; Commercial Growth Office</div>
<h1>Where the growth actually is</h1>
<p class="lede">Everything the numbers say as at 20 August 2026, split by growth engine, with what is working, what is not, and what Gradesmatch has to switch on before any of it can be measured properly.</p>
<div class="kpi">
  <div class="c"><div class="l">Sessions</div><div class="v">{fmt(D.GA["sessions"])}</div><div class="s">{D.GA["period"]}</div></div>
  <div class="c"><div class="l">Users</div><div class="v">{fmt(D.GA["users"])}</div><div class="s">{fmt(D.GA["new_users"])} of them new</div></div>
  <div class="c"><div class="l">Paid sales banked</div><div class="v y">{D.PEACH_SALES}</div><div class="s">Peach, reconciled to the ledger</div></div>
  <div class="c"><div class="l">Revenue in GA4</div><div class="v">R0</div><div class="s">Monetisation is not installed</div></div>
  <div class="c"><div class="l">Target</div><div class="v">{fmt(D.CAMPAIGN["target"])}</div><div class="s">by {D.CAMPAIGN["deadline"]}</div></div>
  <div class="c"><div class="l">Weekly pace needed</div><div class="v">{fmt(D.CAMPAIGN["target"]/D.CAMPAIGN["weeks_left"])}</div><div class="s">{D.CAMPAIGN["weeks_left"]} weeks remain</div></div>
</div><div class="hsp"></div></div></header>''')

# ------------------------------------------------------------------ overview
pace_pct = 100.0 * D.PEACH_SALES / D.CAMPAIGN["target"]
w(f'''<section><div class="wrap">
<div class="sh"><div class="eyebrow">Overview</div>
<h2>Traffic is not the problem. Measurement is.</h2>
<p>Over almost eight months the property recorded {fmt(D.GA["sessions"])} sessions and {fmt(D.GA["events"])} events. It recorded <b>zero key events and zero revenue</b>, because the purchase event has never been installed. Every sale the business has made was counted by hand out of Peach.</p></div>
<div class="g-2-1">
{card("Progress to 40 000", "Banked against target. The bar is not a rendering error.",
  meter(D.PEACH_SALES, D.CAMPAIGN["target"], label="Sales banked") +
  f'<div style="margin-top:14px"><div class="hero">{pace_pct:.2f}%</div>'
  f'<p class="herolab">{D.PEACH_SALES} sales banked of {fmt(D.CAMPAIGN["target"])}. '
  f'Holding the deadline needs {fmt(D.CAMPAIGN["target"]/D.CAMPAIGN["weeks_left"])} a week for {D.CAMPAIGN["weeks_left"]} weeks.</p></div>')}
{card("What one sale has to cost", "The plan's own economics, never yet tested.",
  f'<div class="hero o">R{R50:.0f}</div><p class="herolab">R{fmt(D.CAMPAIGN["budget"])} divided by {fmt(D.CAMPAIGN["target"])} sales. '
  f'At the measured R{CPC:.2f} a click that needs <b>{100*CPC/R50:.1f}% of everyone who clicks to buy</b>.</p>')}
</div></div></section>''')

# ------------------------------------------------------------------ traffic
ch_rows = [(lab, v, f"{lab}: {fmt(v)} {'users' if lab in ('Paid social','Paid search') else 'sessions'}. {note}")
           for lab, v, grp, note in D.CHANNELS]
paid_labels = {lab for lab, _, g, _ in D.CHANNELS if g == "paid"}
w(f'''<section><div class="wrap">
<div class="sh"><div class="eyebrow">Where the traffic comes from</div>
<h2>Paid media has never actually run</h2>
<p>Across eight months every paid channel combined returned <b>{paid_total} people</b>. The audience the business has was earned, not bought, which means none of it can be scaled by spending more of the same.</p></div>
<div class="g-2-1">
{card("Traffic by channel", "Log scale, because the range runs from 509 000 down to 1. Orange marks the paid channels.",
  '<div class="legend"><span class="lg"><i class="c1"></i>Earned</span><span class="lg"><i class="c2"></i>Paid</span></div>'
  + hbar(ch_rows, width=580, label_w=124, value_w=72, scale="log", emphasis=paid_labels,
         note="Paid social and paid search are reported by GA4 as users, not sessions. Both figures are shown as reported."),
  table(["Channel","Value","Group"], [(l, fmt(v), g.title()) for l,v,g,_ in D.CHANNELS]))}
{card("Who the traffic actually is", "Machine traffic against human traffic, all sessions.",
  stackbar([("Human sessions", human, "m-b"), ("bridge_client", D.MACHINE[0][1], "m-g"),
            ("Full Automation", D.MACHINE[1][1], "m-a")], width=520,
           note=f"{fmt(machine)} of {fmt(D.GA['sessions'])} sessions, {100*machine/D.GA['sessions']:.0f}%, are automation. Until they are filtered out every rate the property reports is diluted.")
  + '<div class="legend"><span class="lg"><i class="c1"></i>Human</span><span class="lg"><i class="cg"></i>bridge_client</span><span class="lg"><i class="c2"></i>Full Automation</span></div>'
  + f'<h3 style="margin-top:22px">And what they are holding</h3><p class="sub">Users by device, as reported.</p>'
  + hbar([(l, v, f"{l}: {fmt(v)} users, {100*v/dev_total:.1f}% of the reported device split") for l, v in D.DEVICES],
         width=520, label_w=76, value_w=68,
         note=f"{100*D.DEVICES[0][1]/dev_total:.0f}% of these users are on a phone. Creative, the landing page and the readiness tracker are all judged on a small screen first."),
  table(["Segment","Sessions"], [("Human", fmt(human)), ("bridge_client", fmt(D.MACHINE[0][1])), ("Full Automation", fmt(D.MACHINE[1][1])), ("Total sessions", fmt(D.GA["sessions"]))]
      + [(l + " users", fmt(v)) for l, v in D.DEVICES]))}
</div></div></section>''')

# ------------------------------------------------------------------ funnel
w(f'''<section><div class="wrap">
<div class="sh"><div class="eyebrow">The measurement gap</div>
<h2>The funnel is not broken. It was never wired up.</h2>
<p>People move through the pages exactly as you would hope. The commerce events underneath them do not exist, so GA4 reports a purchase journey of zero from {fmt(D.JOURNEY[0][1])} session starts. Those zeros are missing instrumentation, not missing customers.</p></div>
<div class="grid2">
{card("Page progression, which is measured", "Sessions reaching each page. GA4, {}.".format(D.GA["period"]),
  funnel(D.PAGES, width=520,
    note=f"{100*D.PAGES[-1][1]/D.PAGES[0][1]:.0f}% of everyone who reaches Learn reaches Payment. That is a working funnel."),
  table(["Stage","Sessions"], [(l, fmt(v)) for l, v in D.PAGES]))}
{card("Purchase journey, which is not", "The same property, same period, commerce events.",
  funnel(D.JOURNEY, width=520,
    note="Four stages report zero because no ecommerce event fires. This is the single highest value fix on the list."),
  table(["Stage","Events"], [(l, fmt(v)) for l, v in D.JOURNEY]))}
</div></div></section>''')
open("_part1.html","w").write("\n".join(P))
print("part1 ok", len("\n".join(P)))

P2 = []
def w2(s): P2.append(s)

# ------------------------------------------------------------------ GE1
sens_rows = [(f"{100*r:.1f}%", round((D.SPRINT["cap"]/CPC)*r),
              f"At {100*r:.1f}% click to sale: R{sp(CPC/r)} a sale, {sp((D.SPRINT['cap']/CPC)*r)} sales from R10 000, "
              f"and R2m buys {sp(D.CAMPAIGN['budget']/(CPC/r))}") for r in D.RATES]
tik_rows = [(lab, pct*100, f"TikTok viewers aged {lab}: {pct*100:.0f}%") for lab, pct in D.TIKTOK_AGE]

w2(f'''<section><div class="wrap">
<div class="eng-h"><span class="eng-b b"></span><div class="eyebrow">Growth Engine 1</div></div>
<div class="sh"><h2>Commercial Sales</h2>
<p>Buying attention from people who can pay. One real buy has ever run: a boosted post from 29 July that spent R{sp(int(D.META["spend"]))}.{int(round((D.META["spend"]%1)*100)):02d} and returned {D.META["clicks"]} link clicks. Everything known about paid performance comes from those eight days.</p></div>

<div class="grid2">
{card("Current state", "What the one real buy established.",
  f'<div class="hero">R{CPC:.2f}</div><p class="herolab">Cost per link click, measured. Click through rate {100*D.META["ctr"]:.1f}% on {fmt(D.META["views"])} views. '
  f'This is the only true cost figure the campaign holds.</p>'
  + '<div style="margin-top:16px">'
  + finding("w","+","Meta reaches the buyer",
      f'{100*D.META_GENDER[0][1]:.1f}% women, and 35 to 44 was the largest age band. That is the parent who holds the card.')
  + finding("w","+","Organic works without spend",
      f'One reel reached {fmt(D.ORGANIC_REEL["views"])} views, {100*D.ORGANIC_REEL["non_followers"]/D.ORGANIC_REEL["views"]:.0f}% of them non followers. Organic search brings {fmt(93000)} sessions a year for nothing.')
  + '</div>')}
{card("What is not working", "Each of these is measured, not inferred.",
  finding("n","!","Paid has never run at scale",
      f'{paid_total} people across eight months, from every paid channel combined. There is no performance history to optimise against.')
  + finding("n","!","The video is too long for its audience",
      f'{D.META["length_s"]} seconds of video against {D.META["avg_watch_s"]} seconds of average watch. Hook rate is healthy at {100*D.META["hook"]:.0f}%, hold rate is {100*D.META["hold"]:.1f}%. We are paying to deliver {D.META["length_s"]-D.META["avg_watch_s"]} seconds nobody sees.')
  + finding("n","!","Nearly half of all traffic is unattributed",
      f'Unassigned is the single largest channel at {fmt(509000)} sessions. GA4 cannot say where it came from, so it cannot be repeated or defended.')
  + finding("c","~","TikTok reaches the student, not the buyer",
      f'{fmt(D.TIKTOK["views"])} views and {fmt(D.TIKTOK["likes"])} likes, but {100*D.TIKTOK_AGE[0][1]:.0f}% aged 18 to 24 and {100*D.TIKTOK["returning"]:.0f}% returning viewers. Treat it as demand creation, never as a sales channel.'))}
</div>

<div class="grid2" style="margin-top:20px">
{card("Where the paid audience actually is", "Meta reach by province, boosted post, 29 July to 5 August.",
  tilemap(D.TILE_GRID, D.PROVINCES, note="Schematic map, provinces in approximate position. Meta reports its top six only, so North West, Northern Cape and Free State are not shown as zero, they are unreported.", marker=("GP", str(schools)))
  + '<div class="legend"><span class="lg"><i class="q1"></i>Fewer reached</span><span class="lg"><i class="q5"></i>More reached</span><span class="lg"><i class="nd"></i>Not in top six</span><span class="lg"><i class="c2"></i>School visits this sprint</span></div>',
  table(["Province","Reached","Note"], [(p["name"], fmt(p["v"]) if p["v"] else "not reported", p["note"] or "") for p in D.PROVINCES.values()]))}
{card("Two audiences, two platforms", "TikTok viewers by age band. Ordered scale, so one hue, darker is more.",
  hbar(tik_rows, width=520, label_w=76, value_w=60, unit="%",
       cls_for=lambda lab: "seq s" + str({"18-24":5,"25-34":4,"35-44":3,"45-54":2,"55+":1}[lab]),
       note="Meta's largest band was 35 to 44. TikTok's is 18 to 24. Both skew female, so gender is not what separates them. Age is, and only one of those ages holds a card.")
  + '<h3 style="margin-top:20px">Gender, both platforms</h3><p class="sub">Reported shares of the audience each platform delivered.</p>'
  + '<p class="cat" style="font-size:12px;color:var(--ink-3);margin-bottom:5px">Meta, boosted post</p>'
  + stackbar([(l, p*100, c) for (l, p), c in zip(D.META_GENDER, ["m-b","m-a","m-g"])], width=420, height=30)
  + '<p class="cat" style="font-size:12px;color:var(--ink-3);margin:12px 0 5px">TikTok, single video</p>'
  + stackbar([(l, p*100, c) for (l, p), c in zip(D.TIKTOK_GENDER, ["m-b","m-a"])], width=420, height=30)
  + '<div class="legend"><span class="lg"><i class="c1"></i>Women</span><span class="lg"><i class="c2"></i>Men</span><span class="lg"><i class="cg"></i>Non binary</span></div>',
  table(["Measure","Meta","TikTok"],
        [("Largest age band","35 to 44","18 to 24"),
         ("Women", f"{100*D.META_GENDER[0][1]:.1f}%", f"{100*D.TIKTOK_GENDER[0][1]:.0f}%"),
         ("Men", f"{100*D.META_GENDER[1][1]:.1f}%", f"{100*D.TIKTOK_GENDER[1][1]:.0f}%")]
      + [(f"Age {l}", "not reported", f"{100*p:.0f}%") for l, p in D.TIKTOK_AGE]))}
</div>

<div class="card" style="margin-top:20px">
<h3>What the sprint has to establish</h3>
<p class="sub">Sales that R10 000 returns at each possible click to sale rate. The 2% row is the working hypothesis; the 6.6% row is what the R2m plan silently assumes.</p>
<div class="legend"><span class="lg"><i class="c1"></i>Sales from R10 000</span><span class="lg"><i class="c2"></i>The rate R2m needs</span></div>
{hbar(sens_rows, width=760, label_w=92, value_w=64, emphasis={"6.6%"},
      note=f"Cost per sale is the click divided by the conversion. At 2% a sale costs R{sp(CPC/0.02)} and R2m buys about {sp(D.CAMPAIGN['budget']/(CPC/0.02))} sales rather than {fmt(D.CAMPAIGN['target'])}.")}
{table(["Click to sale","Cost per sale","Sales from R10 000","R2m would buy"],
       [(f"{100*r:.1f}%", f"R{sp(CPC/r)}", sp((D.SPRINT['cap']/CPC)*r), sp(D.CAMPAIGN['budget']/(CPC/r))) for r in D.RATES])}
</div>
</div></section>''')

# ------------------------------------------------------------------ GE2
sch_rows = [(f"{d} {area}", n, f"{d}: {area}, {n} schools, {k} km, R{f} fuel")
            for d, area, n, k, f in D.SCHOOL_DAYS]
km_rows = [(f"{d}", k, f"{d}: {k} km, R{f} fuel") for d, area, n, k, f in D.SCHOOL_DAYS]

w2(f'''<section><div class="wrap">
<div class="eng-h"><span class="eng-b o"></span><div class="eyebrow">Growth Engine 2</div></div>
<div class="sh"><h2>School Outreach</h2>
<p>Reaching learners and the parents behind them in person. {schools} schools across five days, {km} km, R{fmt(fuel)} of fuel against R{fmt(D.SCHOOL_FUEL_APPROVED)} approved. This engine has never been measured, so this sprint sets its first baseline rather than hitting a target.</p></div>

<div class="grid2">
{card("The week, school by school", "Visits per day, 24 to 28 August.",
  hbar(sch_rows, width=520, label_w=168, value_w=44,
       note=f"{schools} schools in five days. Three stalled relationships are being re opened: Iona Convent, Loreto Convent and Pretoria High for Girls."),
  table(["Day","Area","Schools","Km","Fuel"], [(d, area, n, k, f"R{f}") for d, area, n, k, f in D.SCHOOL_DAYS]))}
{card("What access costs", "Fuel per day against distance.",
  hbar(km_rows, width=520, label_w=52, value_w=60, unit=" km",
       cls_for=lambda lab: "m-a",
       note=f"R{fmt(fuel)} of fuel for {schools} schools is about R{fuel/schools:.0f} a school. Against paid media at R{CPC:.2f} a click, that buys roughly {fuel/schools/CPC:.0f} clicks worth of access per school. Whether it converts better is exactly what has never been tested."),
  table(["Day","Km","Fuel"], [(d, k, f"R{f}") for d, area, n, k, f in D.SCHOOL_DAYS]))}
</div>

<div class="grid2" style="margin-top:20px">
{card("What is working", "Grounded in the visit plan and the Phase 2 workbook.",
  finding("w","+","Access is cheap",
      f'R{fuel/schools:.0f} a school in fuel to stand in front of a Grade 12 cohort. Nothing in paid media reaches a room full of qualified buyers for that.')
  + finding("w","+","The route is real and costed",
      f'{km} km planned day by day, R{fmt(fuel)} estimated against R{fmt(D.SCHOOL_FUEL_APPROVED)} approved. The money is already unlocked.')
  + finding("w","+","Re-engagement is built in",
      'Three schools already spoken to are being re opened rather than starting cold.'))}
{card("What is not working", "These are gaps, not failures. None has been measured before.",
  finding("n","!","No sign up rate per visit exists",
      'Nobody can say what a school visit is worth, because it has never been counted. Until it is, the engine cannot be compared against paid media or funded against it.')
  + finding("n","!","No tagging in place yet",
      f'Without a QR code unique to each school, a sale that starts in a school hall arrives as Unassigned, which is already the largest channel at {fmt(509000)} sessions.')
  + finding("c","~","The effort and the audience are in different places",
      f'All {schools} visits are in Gauteng. The paid audience is national, with KwaZulu-Natal at {fmt(1200)} and Western Cape at {fmt(863)}. Four of the six Phase 2 pilot schools are in the Eastern Cape and none is on this route.'))}
</div>
</div></section>''')
open("_part2.html","w").write("\n".join(P2))
print("part2 ok", len("\n".join(P2)))

P3 = []
NEEDS = [
 ("Fire a <b>purchase</b> event in GA4, with the transaction value and id",
  f'Nothing else on this list matters until this exists. Today the property holds {fmt(D.GA["events"])} events, {D.GA["key_events"]} key events and R0 of revenue, so no click has ever been tied to a payment. Send it from the Peach callback, dedupe on transaction_id.',
  "Blocks everything", "blk"),
 ("Give the Growth Office an automated feed of cleared transactions",
  "Counting sales is now a tech function. The daily manual reconciliation out of Peach is not resourced, so without this or the purchase event above there is no way to record a single sale. It also does not scale: hand counting works for 137 sales and not for 40 000.",
  "Blocks everything", "blk"),
 ("Deploy the parent landing page on bridgeapp.co.za",
  "Paid traffic currently has no dedicated destination. Every tagged link in the register has to be repointed before spend starts, and the conversion rate we measure is the rate of whatever page they land on instead.",
  "Blocks the sprint", "blk"),
 ("Expose a lead endpoint for the readiness tracker",
  "Without it, sign ups are not captured, so click to sign up stays dark and only the end to end click to sale rate can be read. That halves what the sprint can learn.",
  "Blocks the sprint", "blk"),
 ("Filter automation traffic out of the property",
  f'{fmt(machine)} of {fmt(D.GA["sessions"])} sessions, {100*machine/D.GA["sessions"]:.0f}%, are bridge_client and Full Automation. Every rate in the property is diluted by them. Filters are not retroactive, so the sooner this is set the sooner the baseline is clean.',
  "Degrades every number", "deg"),
 ("Tag every outbound link, and keep tagging them",
  f'Unassigned is the largest single channel at {fmt(509000)} sessions. Each untagged link adds to it, and traffic in that bucket cannot be repeated, defended or funded.',
  "Degrades attribution", "deg"),
]
rows = "".join(
 f'<div class="need"><span class="i">{i+1:02d}</span><div class="t"><b>{head}</b>{body}</div>'
 f'<span class="pill {cls}">{tag}</span></div>' for i, (head, body, tag, cls) in enumerate(NEEDS))

P3.append(f'''<section><div class="wrap">
<div class="sh"><div class="eyebrow">Enablement</div>
<h2>What Gradesmatch has to switch on</h2>
<p>The Growth Office can buy attention, book schools and write content today. What it cannot do today is prove any of it paid off. These six items are what turn this report from a description into a control panel, in priority order.</p></div>
<div class="card">{rows}</div>
<p class="cnote" style="margin-top:14px">Counting a sale needs either item 01 or item 06. Neither exists yet and the manual reconciliation that used to cover the gap is no longer resourced, so as things stand the sprint that started on 24 August cannot record a single sale. Items 02 and 03 do not stop it, they narrow what it can learn.</p>
</div></section>

<footer><div class="wrap">
<p><b>Sources.</b> Sessions, users, events, channels, page progression, purchase journey and automation segments from Google Analytics 4, property {D.GA["prop"]}, {D.GA["period"]}, pulled 20 August 2026. Cost per click, click through rate, audience and video performance from Meta Ad insights for the boosted post of 29 July 2026. Organic reach from Reel insights and TikTok Studio, both pulled 20 August 2026. School route, distances and fuel from the School Visit Proposal for 24 to 28 August 2026. Pilot schools, budget and pacing from the BridgeApp Phase 2 Operating Workbook v4, May 2026. Sales banked from the Peach transaction export reconciled to the sales ledger, a count that is moving to an automated tech feed.</p>
<p style="margin-top:11px"><b>On the numbers.</b> Every figure here is either reported by a platform or derived arithmetically from one on this page. Nothing is estimated or modelled. Where a platform did not publish a figure, the gap is shown as unreported rather than filled in. Chart colours were validated for colour vision deficiency and for contrast against both the light and dark surfaces.</p>
<p style="margin-top:11px"><b>Prepared by Blank Canvas</b> for BridgeApp by Gradesmatch, 21 August 2026.</p>
</div></footer>''')

HTML = f'''<title>BridgeApp Growth Office Report</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap">
<style>{CSS}</style>
{open("_part1.html").read()}
{open("_part2.html").read()}
{"".join(P3)}
'''
open("/tmp/claude-0/-home-user-bridgeapp-os/6418b099-52bd-5eb3-aab2-a68e43f06251/scratchpad/growth-office-report.html","w").write(HTML)
print("FULL PAGE:", len(HTML), "bytes")
