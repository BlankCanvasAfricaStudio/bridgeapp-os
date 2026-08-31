# Workbooks

## Where each thing lives, and why

Capture happens in Google Sheets, because the whole team edits it. The model
lives in the workbook, because one person owns it and it needs real formulas.
Those are different jobs and forcing them into one file is what breaks.

| Surface | Where | Who edits | When |
|---|---|---|---|
| Daily log, GE1 and GE2 numbers | Google Sheet | Performance Marketer, Schools Coordinator | Every morning by 09:00 |
| School outreach tracker | Google Sheet | Kefiloe | Day of each visit |
| Weekly working book v2 | Google Sheet | Campaign Lead | Friday |
| UTM link builder | Google Sheet | Performance Marketer | Before any link goes live |
| Qualifying sprint workbook, 12 tabs | `bridgeapp_qualifying_sprint_20260824_v1.xlsx` | Campaign Lead | Weekly, and at the day 14 gate |

## One UTM register, not two

The live register is the **BridgeApp UTM link builder** Google Sheet. Tab
`09_UTM_Register` in the workbook used to duplicate it, formulas and all. It no
longer builds links: it is now the checklist of the codes this sprint needs,
with a tick column for whether each one exists in the live register.

A workbook file gets emailed and forked. A Sheet does not. Two registers means
links tagged in one and counted from the other.

## Formulas do not survive a CSV upload to Drive

Tested, not assumed: a plain number imports, `=1+1` comes back blank. CSV has
no formula concept, so anything built that way is values only. This is why the
weekly working book v1 had empty calculated columns, and why the Sheets above
are capture surfaces with the arithmetic done at review.

An `.xlsx` is different. Dragging one into Drive converts it to a multi-tab
Sheet with formulas intact. That is the way to get the sprint workbook into
Drive if you want it there.

## Regenerating the workbook

```
cd workbooks/src && for f in p1 p1b p2 p3 p4 p5 p6; do python3 $f.py; done
cp _p6.xlsx ../bridgeapp_qualifying_sprint_20260824_v1.xlsx && rm -f _p*.xlsx
```

`p1` README and owners, `p1b` baselines, `p2` drivers, `p3` plan and daily log,
`p4` the two engine sheets, `p5` school visits and UTM codes, `p6` KPIs and the
go or no go gate.

## The drivers

Both sit in yellow cells on `03_Sprint_Drivers`:

1. **Sprint media cap** (`C13`), R10 000. R5 000 a week across both weeks.
2. **Qualifying sales target** (`C14`), 61, carried entirely by paid media.

R10 000 buys 3 035 clicks at the measured R3.29, so 61 sales needs a **2.01%
click to sale rate** and implies **R163.93 a sale**. Hitting it confirms 2%,
which tells exco R2m buys about 12 100 sales rather than 40 000.

School outreach carries no media spend, so `C16` is zero by design. Its sales
are counted and reported, not targeted, because it is setting its first
baseline. Its own objective, from the outreach report, is 20 UniApply
registrations a week.

## Counting sales is a tech function

Not a manual reconciliation. It needs either the GA4 purchase event or an
automated feed of cleared Peach transactions. Until one of them lands, nothing
in this system can record a sale.

## Verification

1 530 formula cells, zero errors, checked with an independent formula engine
rather than LibreOffice, which cannot load documents in this environment.
