# Growth Office Report

`growth-office-report.html` — the visual client report. Generated, not hand written.

## Regenerating

```
cd reports/src && python3 build.py
```

`data.py` holds every figure with its source. `charts.py` builds the inline SVG.
`style.py` holds the tokens. Change a number in `data.py` and every chart,
caption and derived figure follows.

## Charts

All charts are inline SVG with no external libraries, because the artifact CSP
blocks every host except Google Fonts. Each has a `<title>` for hover and a
table-view twin, so no value is reachable only by pointing at a mark.

## Colour

The brand hues fail as a chart palette: yellow `#FBBF24` sits above the
lightness band and navy `#0F2A4A` falls below the chroma floor, so it reads as
grey. The palette was snapped to passing steps from the same ramps and
validated with the dataviz validator:

| Job | Light | Dark |
|---|---|---|
| Categorical, 2 slots | `#2F6EB5` `#E06617` | `#4A90D9` `#E06617` |
| Sequential, 6 steps | `#7CB0E3` → `#153A63` | `#2A5E96` → `#B8D7F3` |

Both categorical pairs pass all six checks in their mode. Both ramps are
monotonic in OKLab lightness with the pale end clearing 2:1 on its surface.

## Verification

- 0 WCAG AA text failures at 1280 and 390, light and dark, measured against
  composited backgrounds.
- 0 label collisions or overflow inside any chart.
- 23 SVG text-on-fill pairs all clear 4.5:1 in both themes.

That last check exists because an ordinary DOM contrast pass cannot see SVG.
It reads CSS `background-color`; chart labels sit on `fill`. Running it caught
the map's Gauteng tile at **1.49:1 in dark mode** — white on pale blue — because
the step-to-text rule was written for the light ramp and does not survive the
ramp inverting. Text colour is now paired to each ramp step per theme
(`--on-q0` … `--on-q5`).
