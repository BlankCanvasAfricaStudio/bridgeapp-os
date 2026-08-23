CSS = r"""
:root{
  /* brand */
  --navy:#0F2A4A; --yellow:#FBBF24; --yellow-600:#F59E0B; --yellow-950:#92400E; --yellow-50:#FFFDE7;
  --ground:#F8F4EF; --warm:#F5F0E8; --surface:#FFFFFF;
  --ink:#0F2A4A; --ink-2:rgba(15,42,74,.80); --ink-3:rgba(15,42,74,.70); --ink-4:rgba(15,42,74,.52);
  --line:rgba(15,42,74,.13); --line-2:rgba(15,42,74,.24);
  /* chart categorical, validated light: #2F6EB5 / #E06617 */
  --c1:#2F6EB5; --c2:#E06617; --cgray:#9AA6B4;
  /* chart sequential blue, validated light, pale end 2.29:1 on white */
  --q0:#7CB0E3; --q1:#5A9AD8; --q2:#3878C0; --q3:#2F6EB5; --q4:#1F508A; --q5:#153A63;
  --on-q0:#0B2038; --on-q1:#0B2038; --on-q2:#FFFFFF; --on-q3:#FFFFFF; --on-q4:#FFFFFF; --on-q5:#FFFFFF;
  --on-muted:#415063; --nodata-fill:#E4E7EC;
  /* status: reserved, always with icon + label */
  --good:#136B33; --good-bg:rgba(19,107,51,.10);
  --warn:#95400A; --warn-bg:rgba(149,64,10,.10);
  --crit:#A81E1E; --crit-bg:rgba(168,30,30,.09);
  --chart-surface:#FFFFFF;
  --f:'Roboto',"Helvetica Neue",Arial,sans-serif;
  --m:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --ground:#060810; --warm:#0B1424; --surface:#0F2A4A;
  --ink:#FFFFFF; --ink-2:rgba(255,255,255,.84); --ink-3:rgba(255,255,255,.74); --ink-4:rgba(255,255,255,.56);
  --line:rgba(255,255,255,.15); --line-2:rgba(255,255,255,.27);
  --c1:#4A90D9; --c2:#E06617; --cgray:#6C7C8E;
  --q0:#2A5E96; --q1:#3579B8; --q2:#4A90D9; --q3:#6BA7E2; --q4:#93C1EC; --q5:#B8D7F3;
  --on-q0:#FFFFFF; --on-q1:#FFFFFF; --on-q2:#0B2038; --on-q3:#0B2038; --on-q4:#0B2038; --on-q5:#0B2038;
  --on-muted:#AFBCCB; --nodata-fill:#22314A;
  --good:#4ADE80; --good-bg:rgba(74,222,128,.14);
  --warn:#FBA36F; --warn-bg:rgba(251,163,111,.14);
  --crit:#FCA5A5; --crit-bg:rgba(252,165,165,.13);
  --yellow-950:#FCD34D; --yellow-50:#2b2410;
  --chart-surface:#0F2A4A;
}}
:root[data-theme="dark"]{
  --ground:#060810; --warm:#0B1424; --surface:#0F2A4A;
  --ink:#FFFFFF; --ink-2:rgba(255,255,255,.84); --ink-3:rgba(255,255,255,.74); --ink-4:rgba(255,255,255,.56);
  --line:rgba(255,255,255,.15); --line-2:rgba(255,255,255,.27);
  --c1:#4A90D9; --c2:#E06617; --cgray:#6C7C8E;
  --q0:#2A5E96; --q1:#3579B8; --q2:#4A90D9; --q3:#6BA7E2; --q4:#93C1EC; --q5:#B8D7F3;
  --on-q0:#FFFFFF; --on-q1:#FFFFFF; --on-q2:#0B2038; --on-q3:#0B2038; --on-q4:#0B2038; --on-q5:#0B2038;
  --on-muted:#AFBCCB; --nodata-fill:#22314A;
  --good:#4ADE80; --good-bg:rgba(74,222,128,.14);
  --warn:#FBA36F; --warn-bg:rgba(251,163,111,.14);
  --crit:#FCA5A5; --crit-bg:rgba(252,165,165,.13);
  --yellow-950:#FCD34D; --yellow-50:#2b2410;
  --chart-surface:#0F2A4A;
}
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:var(--ground);color:var(--ink);font-family:var(--f);font-size:15.5px;line-height:1.6;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4{margin:0;font-weight:900;letter-spacing:-.024em;line-height:1.1;text-wrap:balance}
p{margin:0}
:focus-visible{outline:3px solid var(--c1);outline-offset:3px;border-radius:4px}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
.wrap{max-width:1080px;margin:0 auto;padding:0 clamp(18px,4vw,40px)}
.eyebrow{font-family:var(--m);font-size:9.5px;font-weight:700;letter-spacing:.19em;text-transform:uppercase;color:var(--ink-3)}

header{background:var(--navy);color:#fff;border-bottom:4px solid var(--yellow);padding:clamp(28px,4vw,46px) 0 0}
header .eyebrow{color:rgba(255,255,255,.80)}
header h1{font-size:clamp(30px,4.6vw,46px);color:#fff;margin:9px 0 10px}
header .lede{font-size:clamp(14.5px,1.6vw,17px);color:rgba(255,255,255,.90);max-width:70ch}
.kpi{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1px;background:rgba(255,255,255,.17);
  border:1px solid rgba(255,255,255,.17);border-radius:11px;overflow:hidden;margin:clamp(20px,3vw,28px) 0 0}
.kpi .c{background:var(--navy);padding:12px 14px 13px}
.kpi .l{font-family:var(--m);font-size:8.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.76)}
.kpi .v{font-size:25px;font-weight:900;color:#fff;margin-top:4px;line-height:1;letter-spacing:-.02em}
.kpi .v.y{color:var(--yellow)}
.kpi .s{font-size:11px;color:rgba(255,255,255,.76);margin-top:4px;line-height:1.35}
.hsp{height:clamp(22px,3vw,32px)}

section{padding:clamp(30px,4vw,48px) 0;border-bottom:1px solid var(--line)}
.sh{margin-bottom:clamp(16px,2.2vw,24px);max-width:74ch}
.sh h2{font-size:clamp(22px,2.9vw,31px);margin:7px 0 9px}
.sh p{color:var(--ink-2);font-size:15.5px}
.eng-h{display:flex;align-items:center;gap:12px;margin-bottom:9px}
.eng-b{width:13px;height:13px;border-radius:3px;flex:0 0 auto}
.eng-b.b{background:var(--c1)} .eng-b.o{background:var(--c2)}

.card{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:clamp(15px,2vw,22px)}
.card h3{font-size:16.5px;margin-bottom:5px}
.card .sub{color:var(--ink-3);font-size:12.8px;margin-bottom:13px;line-height:1.45}
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:clamp(14px,2vw,20px)}
.grid2>*{min-width:0}
.g-2-1{display:grid;grid-template-columns:1.35fr 1fr;gap:clamp(14px,2vw,20px)}
.g-2-1>*{min-width:0}
@media (max-width:820px){.g-2-1{grid-template-columns:1fr}}
.stack{display:flex;flex-direction:column;gap:clamp(14px,2vw,20px)}

/* charts */
.cv{width:100%;height:auto;display:block;overflow:visible}
.grid{stroke:var(--line);stroke-width:1}
.tick{font-family:var(--m);font-size:9px;fill:var(--ink-4);font-variant-numeric:tabular-nums}
.cat{font-size:11.5px;fill:var(--ink-2)}
.val{font-family:var(--m);font-size:11px;font-weight:700;fill:var(--ink);font-variant-numeric:tabular-nums}
.m-a{fill:var(--c2)} .m-b{fill:var(--c1)} .m-g{fill:var(--cgray)}
.zero{fill:var(--ink-4)}
.seq.s0{fill:var(--q0)}.seq.s1{fill:var(--q1)}.seq.s2{fill:var(--q2)}
.seq.s3{fill:var(--q3)}.seq.s4{fill:var(--q4)}.seq.s5{fill:var(--q5)}
.voidbar{fill:none;stroke:var(--line-2);stroke-width:1}
.voidtxt{font-size:10.5px;fill:var(--ink-4);font-style:italic}
.track{fill:var(--line)}
.segcap{font-size:12px;color:var(--ink-2);margin-top:8px;display:flex;flex-wrap:wrap;gap:4px 16px}
.segcap b{color:var(--ink);font-family:var(--m);font-size:11.5px;font-variant-numeric:tabular-nums}
.nodata{fill:var(--nodata-fill)}
.tkey{font-family:var(--m);font-size:13px;font-weight:700}
.tval{font-family:var(--m);font-size:9.5px;font-weight:700;font-variant-numeric:tabular-nums}
.on-s0{fill:var(--on-q0)}.on-s1{fill:var(--on-q1)}.on-s2{fill:var(--on-q2)}
.on-s3{fill:var(--on-q3)}.on-s4{fill:var(--on-q4)}.on-s5{fill:var(--on-q5)}
.in-muted{fill:var(--on-muted)}
.pin{fill:var(--c2)}
.pintxt{font-family:var(--m);font-size:9.5px;font-weight:700;fill:#0B2038}
.cnote{font-size:11.5px;color:var(--ink-3);margin-top:9px;line-height:1.45}
.legend{display:flex;flex-wrap:wrap;gap:14px;margin:10px 0 2px}
.lg{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--ink-2)}
.lg i{width:11px;height:11px;border-radius:3px;flex:0 0 auto;display:block}
.lg i.c1{background:var(--c1)}.lg i.c2{background:var(--c2)}.lg i.cg{background:var(--cgray)}
.lg i.q1{background:var(--q1)}.lg i.q5{background:var(--q5)}.lg i.nd{background:var(--nodata-fill)}

.tv{margin-top:11px;border-top:1px solid var(--line);padding-top:9px}
.tv summary{font-family:var(--m);font-size:9.5px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:var(--ink-3);cursor:pointer}
.tv summary:hover{color:var(--ink)}
.tw{overflow-x:auto;margin-top:9px}
table{border-collapse:collapse;width:100%;font-size:12.8px}
th{text-align:left;font-family:var(--m);font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
   color:var(--ink-3);padding:6px 9px;border-bottom:1px solid var(--line-2);white-space:nowrap}
td{padding:6px 9px;border-bottom:1px solid var(--line);color:var(--ink-2)}
td.n{text-align:right;font-family:var(--m);font-weight:700;color:var(--ink);font-variant-numeric:tabular-nums;white-space:nowrap}
tr:last-child td{border-bottom:0}

/* findings */
.find{display:grid;grid-template-columns:auto 1fr;gap:11px;padding:10px 0;border-top:1px solid var(--line);align-items:start}
.find:first-of-type{border-top:0;padding-top:2px}
.find .ic{width:19px;height:19px;border-radius:5px;display:grid;place-items:center;font-size:11px;font-weight:900;margin-top:2px;flex:0 0 auto}
.find.w .ic{background:var(--good-bg);color:var(--good)}
.find.n .ic{background:var(--crit-bg);color:var(--crit)}
.find.c .ic{background:var(--warn-bg);color:var(--warn)}
.find .t{font-size:14px;color:var(--ink-2)}
.find .t b{color:var(--ink);display:block;margin-bottom:1px}
.need{display:grid;grid-template-columns:26px 1fr auto;gap:12px;padding:11px 0;border-top:1px solid var(--line);align-items:start}
.need:first-of-type{border-top:0}
.need .i{font-family:var(--m);font-size:11px;font-weight:700;color:var(--ink-3);margin-top:3px}
.need .t{font-size:14.2px;color:var(--ink-2)}
.need .t b{color:var(--ink);display:block}
.pill{font-family:var(--m);font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
  padding:3px 9px;border-radius:99px;white-space:nowrap;height:fit-content;margin-top:2px}
.pill.blk{background:var(--crit-bg);color:var(--crit)}
.pill.deg{background:var(--warn-bg);color:var(--warn)}
.hero{font-size:clamp(34px,5vw,50px);font-weight:900;line-height:1;letter-spacing:-.03em;color:var(--ink)}
.hero.o{color:var(--c2)}
.herolab{font-size:12.5px;color:var(--ink-3);margin-top:7px;line-height:1.45}
footer{padding:clamp(26px,3.4vw,40px) 0 clamp(40px,5vw,58px);color:var(--ink-3);font-size:12.5px;line-height:1.55}
footer b{color:var(--ink-2)}
"""
