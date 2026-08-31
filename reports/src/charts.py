# -*- coding: utf-8 -*-
"""Inline-SVG chart builders. Marks follow the dataviz mark specs:
bars <=24px, 4px rounded data-end square at baseline, 2px surface gap,
hairline solid gridlines, selective direct labels, text in text tokens."""
from html import escape

BAR = 22          # bar thickness cap
GAP = 10          # gap between bars (>= the 2px surface gap, with air)
R   = 4           # rounded data-end

def fmt(n):
    if n is None: return "n/a"
    if isinstance(n, float) and n < 100: return ("%.2f" % n).rstrip("0").rstrip(".")
    return format(int(round(n)), ",d").replace(",", " ")

def _rounded_bar(x, y, w, h, r=R, horizontal=True):
    """Square at the baseline, rounded at the data end."""
    if w <= 0 or h <= 0: return ""
    if horizontal:
        r = min(r, w, h/2)
        return (f"M{x},{y} H{x+w-r} A{r},{r} 0 0 1 {x+w},{y+r} V{y+h-r} "
                f"A{r},{r} 0 0 1 {x+w-r},{y+h} H{x} Z")
    r = min(r, h, w/2)
    return (f"M{x},{y+h} V{y+r} A{r},{r} 0 0 1 {x+r},{y} H{x+w-r} "
            f"A{r},{r} 0 0 1 {x+w},{y+r} V{y+h} Z")

def hbar(rows, width=560, label_w=132, value_w=76, unit="", emphasis=None,
         scale="linear", note=None, cls_for=None):
    """rows: [(label, value, tooltip)]. emphasis: set of labels to accent."""
    import math
    n = len(rows)
    h = n * (BAR + GAP) + GAP
    plot_w = width - label_w - value_w
    vals = [max(0.0, float(v)) for _, v, _ in rows]
    top = max(vals) or 1.0
    if scale == "log":
        f = lambda v: 0 if v <= 0 else max(2.0, plot_w * math.log10(1 + v) / math.log10(1 + top))
        ticks = [t for t in (1, 10, 100, 1000, 10000, 100000, 1000000) if t <= top]
    else:
        f = lambda v: plot_w * v / top
        step = 10 ** int(math.log10(top))
        ticks = [t for t in (0, step, step*2, step*3, step*4, step*5) if t <= top]
    out = [f'<svg viewBox="0 0 {width} {h+26}" role="img" class="cv" preserveAspectRatio="xMidYMid meet">']
    for t in ticks:
        x = label_w + f(t)
        out.append(f'<line x1="{x:.1f}" y1="{GAP-4}" x2="{x:.1f}" y2="{h-2}" class="grid"/>')
        out.append(f'<text x="{x:.1f}" y="{h+16}" class="tick" text-anchor="middle">{fmt(t)}</text>')
    for i, (lab, v, tip) in enumerate(rows):
        y = GAP + i * (BAR + GAP)
        w = f(max(0.0, float(v)))
        c = (cls_for(lab) if cls_for else None) or ("m-a" if (emphasis and lab in emphasis) else "m-b")
        out.append(f'<text x="{label_w-11}" y="{y+BAR/2+4}" class="cat" text-anchor="end">{escape(lab)}</text>')
        if w > 0.5:
            out.append(f'<path d="{_rounded_bar(label_w, y, w, BAR)}" class="{c}">'
                       f'<title>{escape(tip)}</title></path>')
        else:
            out.append(f'<rect x="{label_w}" y="{y+BAR/2-1}" width="3" height="2" class="{c} zero">'
                       f'<title>{escape(tip)}</title></rect>')
        out.append(f'<text x="{width-value_w+8}" y="{y+BAR/2+4}" class="val">{fmt(v)}{unit}</text>')
    out.append('</svg>')
    if note: out.append(f'<p class="cnote">{note}</p>')
    return "\n".join(out)

def funnel(stages, width=560, dead_after=None, note=None, zero_label="not instrumented", zero_tip="not instrumented, so GA4 records zero"):
    """Ordinal stages, one hue ramp light->dark. dead_after: index where it flatlines."""
    n = len(stages)
    h = n * (BAR + GAP) + GAP
    label_w, value_w = 128, 84
    plot_w = width - label_w - value_w
    top = max(v for _, v in stages) or 1
    out = [f'<svg viewBox="0 0 {width} {h+8}" role="img" class="cv" preserveAspectRatio="xMidYMid meet">']
    for i, (lab, v) in enumerate(stages):
        y = GAP + i * (BAR + GAP)
        w = plot_w * v / top
        step = min(5, int(round(i * 5 / max(1, n - 1))))
        out.append(f'<text x="{label_w-11}" y="{y+BAR/2+4}" class="cat" text-anchor="end">{escape(lab)}</text>')
        if w > 0.5:
            pct = 100.0 * v / top
            out.append(f'<path d="{_rounded_bar(label_w, y, w, BAR)}" class="seq s{step}">'
                       f'<title>{escape(lab)}: {fmt(v)} ({pct:.1f}% of the first stage)</title></path>')
        else:
            out.append(f'<rect x="{label_w}" y="{y}" width="{plot_w}" height="{BAR}" class="voidbar">'
                       f'<title>{escape(lab)}: {escape(zero_tip)}</title></rect>')
            out.append(f'<text x="{label_w+10}" y="{y+BAR/2+4}" class="voidtxt">{escape(zero_label)}</text>')
        out.append(f'<text x="{width-value_w+8}" y="{y+BAR/2+4}" class="val">{fmt(v)}</text>')
    out.append('</svg>')
    if note: out.append(f'<p class="cnote">{note}</p>')
    return "\n".join(out)

def stackbar(segs, width=560, height=46, note=None, dp=0):
    """Part-to-whole with 2px surface gaps. Values are captioned beneath the bar,
    never set inside the fill: an interior segment has no safe text colour across
    both themes, and the caption stays readable at any segment width."""
    total = sum(v for _, v, _ in segs) or 1
    gapw = 2
    inner = width - gapw * (len(segs) - 1)
    out = [f'<svg viewBox="0 0 {width} {height}" role="img" class="cv" preserveAspectRatio="none">']
    x = 0.0
    for lab, v, c in segs:
        w = inner * v / total
        pct = 100.0 * v / total
        out.append(f'<rect x="{x:.1f}" y="0" width="{max(0,w):.1f}" height="{height}" class="{c}" rx="2">'
                   f'<title>{escape(lab)}: {fmt(v)} ({pct:.1f}%)</title></rect>')
        x += w + gapw
    out.append('</svg>')
    cap = "".join(f'<span>{escape(lab)} <b>{100.0*v/total:.{dp}f}%</b></span>' for lab, v, _ in segs)
    out.append(f'<div class="segcap">{cap}</div>')
    if note: out.append(f'<p class="cnote">{note}</p>')
    return "\n".join(out)

def meter(value, target, width=560, height=12, label=""):
    pct = min(1.0, value / target if target else 0)
    out = [f'<svg viewBox="0 0 {width} {height}" role="img" class="cv" preserveAspectRatio="none">',
           f'<rect x="0" y="0" width="{width}" height="{height}" rx="{height/2}" class="track"/>']
    w = max(height, width * pct)
    out.append(f'<rect x="0" y="0" width="{w:.1f}" height="{height}" rx="{height/2}" class="m-a">'
               f'<title>{escape(label)}: {fmt(value)} of {fmt(target)} ({100*pct:.2f}%)</title></rect>')
    out.append('</svg>')
    return "\n".join(out)

def tilemap(grid, provinces, width=336, note=None, marker=None):
    """Schematic province cartogram. Sequential ramp on reported values."""
    cell, pad = 76, 6
    cols = max(len(r) for r in grid)
    rows = len(grid)
    w = cols * (cell + pad)
    h = rows * (cell + pad)
    reported = [p["v"] for p in provinces.values() if p["v"]]
    top = max(reported) if reported else 1
    out = [f'<svg viewBox="0 0 {w} {h}" role="img" class="cv tmap" preserveAspectRatio="xMidYMid meet">']
    for r, row in enumerate(grid):
        for c, key in enumerate(row):
            if not key: continue
            p = provinces[key]
            x, y = c * (cell + pad), r * (cell + pad)
            if p["v"]:
                step = min(5, max(1, int(round(5 * p["v"] / top))))
                klass = f"seq s{step}"
                inside = f"on-s{step}"
                val = fmt(p["v"])
                tip = f'{p["name"]}: {val} reached'
            elif key == "GP":
                klass, inside, val = "seq s5", "on-s5", "largest"
                tip = f'{p["name"]}: {p["note"]}'
            else:
                klass, inside, val = "nodata", "in-muted", "not in top 6"
                tip = f'{p["name"]}: {p["note"]}'
            out.append(f'<rect x="{x}" y="{y}" width="{cell}" height="{cell}" rx="7" class="{klass}">'
                       f'<title>{escape(tip)}</title></rect>')
            out.append(f'<text x="{x+cell/2}" y="{y+cell/2-4}" class="tkey {inside}" text-anchor="middle">{key}</text>')
            out.append(f'<text x="{x+cell/2}" y="{y+cell/2+14}" class="tval {inside}" text-anchor="middle">{escape(val)}</text>')
            if marker and key == marker[0]:
                out.append(f'<circle cx="{x+cell-13}" cy="{y+13}" r="10" class="pin"/>')
                out.append(f'<text x="{x+cell-13}" y="{y+17}" class="pintxt" text-anchor="middle">{marker[1]}</text>')
    out.append('</svg>')
    if note: out.append(f'<p class="cnote">{note}</p>')
    return "\n".join(out)

def table(headers, rows, caption="Table view"):
    th = "".join(f"<th>{escape(str(x))}</th>" for x in headers)
    tr = "".join("<tr>" + "".join(
        f'<td class="n">{escape(str(c))}</td>' if i else f"<td>{escape(str(c))}</td>"
        for i, c in enumerate(r)) + "</tr>" for r in rows)
    return (f'<details class="tv"><summary>{escape(caption)}</summary>'
            f'<div class="tw"><table><thead><tr>{th}</tr></thead><tbody>{tr}</tbody></table></div></details>')
