# Qualifying Sprint Workbook

`bridgeapp_qualifying_sprint_20260824_v1.xlsx`

Fourteen days, Mon 24 Aug to Sun 6 Sep 2026. Built in the same idiom as the
BridgeApp Phase 2 Operating Workbook v4 (May 2026), so it drops alongside it.

## What it is for

Establishing the real cost per sale on both growth engines before the full
budget is committed. Nobody currently knows that number, because no click has
ever been tied to a payment.

## Structure

| Sheet | Purpose |
|---|---|
| `00_README` | How the workbook is used, colour legend, sources |
| `01_Owners` | Named owner per sheet, decision authority for the 14 days |
| `02_Baselines` | Real reported figures from Meta, Instagram, Facebook and TikTok |
| `03_Sprint_Drivers` | Every assumption in one place, plus the sensitivity table |
| `04_Sprint_Plan` | The 14 days, day by day, GE tagged |
| `05_Daily_Log` | The only data entry sheet. Everything reads from it |
| `06_GE1_Paid_Media` | Paid engine: spend, clicks, signups, sales, cost per sale |
| `07_GE2_School_Outreach` | School engine, measured on the same basis |
| `08_School_Visits` | Visit schedule and per visit result |
| `09_UTM_Register` | Every tagged link. Column H builds itself |
| `10_KPIs` | Live dashboard by engine, Current pulls from the log |
| `11_Go_No_Go` | The day 14 decision gate |

## Conventions

- Yellow fill is an input. Nothing else should be typed into.
- Blue bold text is a number a person set. Black text is a formula.
- Orange fill marks a dependency on Gradesmatch dev.
- Arial throughout, BridgeApp navy `#0F2A4A` headers, matching v4.

## Verification

All 1 543 formula cells were evaluated with an independent engine: zero
`#NAME?`, `#REF!`, `#DIV/0!` or `#VALUE!`. The full chain was then re-checked
against hand calculations on a simulated fortnight of data, and against an
empty log to confirm the go or no go gate reads `NO DATA` rather than a false
`PASS` before the sprint runs.

Note: LibreOffice cannot load documents in this environment, so
`scripts/recalc.py` was not usable. Verification used the `formulas` package
instead. Formula vocabulary was deliberately kept to `SUM`, `ROUND`, `IF`,
`IFERROR`, `AND`, `OR`, `NOT`, `ISNUMBER`, `COUNT`, `COUNTIF`, `SUBSTITUTE`,
`LOWER` and `TRIM`, all pre 2007, so nothing depends on a newer function.

## The drivers

Both sit in yellow cells on `03_Sprint_Drivers`:

1. **Sprint media cap** (`C13`), set to R26 000. Agreed 21 August at R13 000 a
   week for agility across the fourteen days.
2. **Qualifying sales target** (`C14`), currently 250, split 70/30 across the
   engines in `C15`.

Cost per sale is derived from those two, not assumed. At R26 000 against a GE1
target of 175, that is 7 892 clicks, a required click to sale rate of 2.22%,
and an implied R148.57 a sale.
