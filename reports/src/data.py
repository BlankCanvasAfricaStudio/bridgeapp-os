# -*- coding: utf-8 -*-
"""Every figure in the report, with its source. Nothing here is estimated."""

GA = dict(period="1 January to 20 August 2026", prop="gradesmatch_bridge",
          users=169100, new_users=129592, sessions=1057408, events=15851057,
          key_events=0, revenue=0)

CHANNELS = [
    ("Unassigned",      509000, "earned", "GA4 could not attribute these"),
    ("Direct",          443000, "earned", "Typed, saved, or opened in app"),
    ("Organic search",   93000, "earned", "Google and Bing, no spend"),
    ("Referral",         11000, "earned", "Links from other sites"),
    ("Organic social",    1300, "earned", "Facebook and Instagram pages"),
    ("AI assistant",        56, "earned", "Referrals from chat assistants"),
    ("Cross-network",       37, "paid",   "Google cross-network placements"),
    ("Paid social",         14, "paid",   "Meta ads, reported as users"),
    ("Paid search",          1, "paid",   "Google Ads, reported as users"),
    ("LinkedIn paid",        0, "paid",   "15% of the briefed buy, never ran"),
]

MACHINE = [("bridge_client", 247000), ("Full Automation", 219000)]

PAGES = [("Learn", 33927), ("Pricing", 15185), ("Packages", 11839), ("Payment", 7959)]
JOURNEY = [("Session start", 69114), ("View product", 0), ("Add to cart", 0),
           ("Begin checkout", 0), ("Purchase", 0)]

PEACH_SALES = 137

# Meta boosted post, 29 July to 5 August 2026, 8 days
META = dict(spend=1617.57, daily=232.00, views=15979, viewers=11034, clicks=491,
            ctr=0.0307, profile_visits=490, cost_per_profile=3.30, follows=127,
            engagements=6595, reactions=417, comments=1, shares=30, saves=52,
            plays=14730, thruplays=1757, length_s=53, avg_watch_s=7,
            hook=0.380, hold=0.076)
META_GENDER = [("Women", 0.607), ("Men", 0.384), ("Non binary", 0.009)]

# Meta top locations. Gauteng was the longest bar; Meta did not print its figure.
PROVINCES = {
    "GP": dict(name="Gauteng",       v=None, note="Largest, figure not reported"),
    "KZN":dict(name="KwaZulu-Natal", v=1200, note=""),
    "WC": dict(name="Western Cape",  v=863,  note=""),
    "LP": dict(name="Limpopo",       v=572,  note=""),
    "EC": dict(name="Eastern Cape",  v=556,  note=""),
    "MP": dict(name="Mpumalanga",    v=556,  note=""),
    "NW": dict(name="North West",    v=None, note="Not in the reported top six"),
    "NC": dict(name="Northern Cape", v=None, note="Not in the reported top six"),
    "FS": dict(name="Free State",    v=None, note="Not in the reported top six"),
}
# rough geographic arrangement, 4 cols x 4 rows
TILE_GRID = [[None,"NW","LP",None],
             ["NC","GP","MP",None],
             [None,"FS","KZN",None],
             ["WC","EC",None,None]]

ORGANIC_REEL = dict(views=12677, ig=11992, fb=685, followers=1410, non_followers=10977,
                    interactions=69, reactions=55, shares=9, saves=5, follows=17)

TIKTOK = dict(views=38922, viewers=30800, avg_watch=16.9, full=0.0625, likes=5194,
              comments=20, shares=37, saves=159, new_followers=25, returning=0.97,
              non_followers=0.60, sa=0.779)
TIKTOK_AGE = [("18-24",0.54),("25-34",0.33),("35-44",0.08),("45-54",0.03),("55+",0.02)]

# Pretoria school outreach sprint, 17 to 28 August 2026.
# Source: GradesMatch x UniApply School Outreach Report, internal, 29 August 2026.
SCHOOL_SPRINT = dict(start="17 August", end="28 August", weeks=2,
                     contacted=27, voucher=2000, target_grade="Grade 11",
                     weekly_sales_target=20, registrations=0, learners_reached=0)

# The reported outcome table, exactly as published
SCHOOL_OUTCOMES = [
    ("Schools visited or contacted",                 27),
    ("Schools requiring follow-up",                   7),
    ("Schools with active opportunities",             5),
    ("Access denied without an appointment",          3),
    ("Confirmed Grade 11 presentation dates",         2),
    ("Confirmed presentation schools",                1),
    ("Potential event opportunity",                   1),
    ("Learners reached",                              0),
    ("UniApply registrations",                        0),
]

# What is booked in the week after the sprint
SCHOOL_BOOKED = [
    ("31 Aug", "Pretoria Technical High School", "Grade 11 presentation"),
    ("31 Aug", "Pretoria High School for Girls", "Appointment"),
    ("2 Sep",  "Pretoria Technical High School", "Grade 11 presentation"),
    ("3 Sep",  "Pretoria-Wes",                   "Grade 9 career day, requested"),
    ("4 Sep",  "Pretoria-Wes",                   "Grade 11 presentation"),
]

# The conversion journey the outreach report defines
SCHOOL_JOURNEY = ["School visit", "School meeting", "Grade 11 presentation",
                  "Learner engagement", "Lead capture", "Follow-up", "UniApply registration"]

PILOTS = [("Kingsmead","KZN"),("St Albans","EC"),("Dainfern College","GP"),
          ("Umtata International","EC"),("St Jude Private","EC"),
          ("Christ The King International","EC")]

SPRINT = dict(cap=10000, target=61, weeks=2)
CAMPAIGN = dict(target=40000, budget=2000000, weeks_left=15, deadline="30 November 2026")

CPC = META["spend"] / META["clicks"]           # 3.2944...
RATES = [0.005, 0.01, 0.02, 0.04, 0.066]

# Users by device, as reported in the GA4 device report (a subset of all users)
DEVICES = [("Mobile", 58864), ("Desktop", 9278), ("Tablet", 766)]

TIKTOK_GENDER = [("Female", 0.65), ("Male", 0.35)]
