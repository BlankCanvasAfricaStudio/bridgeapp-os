# The commercial numbers

Read this before quoting any figure to the client. Several numbers in circulation contradict each other, and the resolutions below are the agreed ones.

## The target

**40 000 commercial sales by 30 November 2026.** This is the signed-off figure, matching the Phase 2 Growth OS.

Two other figures exist in older documents and are superseded:
- 41 000 appears in earlier drafts of the commercialisation plan. Use 40 000.
- 15 000 for 2026, with an R10 blended cost-per-sale guardrail, appears in the design system readme. It predates the current plan.

## The content engine's share

| Stage | Monthly target |
|---|---|
| Reach | 200 000 |
| Leads | 1 200 |
| Consultations | 240 |
| Conversions | 60 |

## What the analytics can and cannot tell us

This is the part that matters for giving honest advice, and it is easy to get wrong in a way that makes the client's position sound far worse than it is.

**The GA4 property is configured for engagement. Monetisation has not been switched on.** Key events read 0 and revenue reads R0.00 because nothing has been installed to send them, not because nobody is buying. The Purchase journey report makes it plain: of 69 114 session starts, GA records 0 view product, 0 add to cart, 0 begin checkout and 0 purchases. A 100% abandonment rate at step one is an uninstrumented funnel, not a failing one.

Sales are counted separately, at the Peach gateway and in the applications ledger: **137 cleared payments** in the period, worth roughly R47 000.

### What is measured

Real, from GA4 acquisition, 1 January to 20 August 2026:

| | |
|---|---|
| Active users | 169 100 |
| Sessions | 1 057 408 |
| Events | 15 851 057 |
| On mobile | 85.4% of session starts |

Sessions by channel: Unassigned 509 000, Direct 443 000, Organic Search 93 000, Referral 11 000, Organic Social 1 300, AI Assistant 56, Cross-network 37.

Page progression, which GA does measure well: packages viewed at 34.9% against a plan of 40%, and checkout started at 67.2% against a plan of 62%. One a little under, one comfortably ahead.

### What is not measured

Everything downstream of the payment page. There is no purchase event, no value and no source attribution, so no conversion rate from checkout to payment exists, and no channel can be credited with a sale.

Do not divide the 137 gateway sales by any GA number. The two come from different systems with no shared identity, and the resulting rate would look like a measurement while being an artefact.

## Three findings that do hold up

**1. Paid media has effectively never run.** Paid Social shows 14 users across eight months, Paid Search shows 1, and the Google Ads report returns no data. The campaign is not underperforming. It has not started. Say this plainly, because it reframes every other number.

**2. Roughly 44% of sessions look like machines.** The manual-source report shows `bridge_client` at 247 000 sessions and `Full Automation` at 219 000. Until internal traffic is filtered, the denominator of every rate is inflated and reach figures should not be quoted.

**3. Unassigned is the single largest channel, at 509 000 sessions.** That is a tagging gap, not an audience. Every campaign link needs UTMs before channel reporting means anything.

## What to advise

The highest-value change available is **not more content and not more spend**. It is:

1. Switch on monetisation in GA4 and fire a purchase event with a value from the Peach callback.
2. Filter internal and automation traffic out of the property.
3. Put UTMs on every campaign link.

Those three turn every modelled number into a measured one. Until they are done, any cost per sale, any channel ranking and any projection to 40 000 is a model. Present it as a model, and resist being pushed into quoting it as performance.
