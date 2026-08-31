import datetime as dt, json
from openpyxl import load_workbook
from style import *
B="/tmp/claude-0/-home-user-bridgeapp-os/6418b099-52bd-5eb3-aab2-a68e43f06251/scratchpad/build/"
wb=load_workbook(B+"_p3.xlsx")
A=json.load(open(B+"addr.json")); RW=json.load(open(B+"rows.json"))
LOG="'05_Daily_Log'"; F,LD=RW["FIRSTD"],RW["LASTD"]
START=dt.date(2026,8,24); DAYS=[START+dt.timedelta(days=i) for i in range(14)]
def S(col): return "SUM(%s!%s%d:%s%d)"%(LOG,col,F,col,LD)

def metric(ws,r,lab,formula,fmt,src,good=None):
    ws.cell(row=r,column=2,value=lab).font=BODY
    c=ws.cell(row=r,column=3,value=formula); c.number_format=fmt; c.font=BODY_B; c.alignment=RGT; c.fill=F_GREY
    if good is not None:
        t=ws.cell(row=r,column=4,value=good); t.number_format=fmt; t.font=MUTED; t.alignment=RGT
    ws.cell(row=r,column=5,value=src).font=MUTED_I
    return r+1

# ------------------------------------------------------- 06_GE1_Paid_Media
ws=wb.create_sheet("06_GE1_Paid_Media")
widths(ws,{"B":38,"C":16,"D":14,"E":56})
title(ws,"GE1: PAID MEDIA","Owner: Performance Marketer. Every figure reads from 05_Daily_Log. Nothing on this sheet is typed except the channel split below.")
r=5
r=band(ws,r,"Sprint to date",4); r=header(ws,r,["Metric","Actual","Target","Note"])
r=metric(ws,r,"Spend","=%s"%S("D"),CUR,"Sum of the log.","=%s"%A["cap"])
r=metric(ws,r,"Clicks","=%s"%S("E"),NUM,"Sum of the log.")
r=metric(ws,r,"Signups","=%s"%S("F"),NUM,"Sum of the log.")
r=metric(ws,r,"Sales","=%s"%S("G"),NUM,"Sum of the log. Peach reconciled, UTM attributed.","=%s"%A["t1"])
r=metric(ws,r,"Cost per sale","=IFERROR(%s/%s,0)"%(S("D"),S("G")),CUR,"The number this sprint exists to establish.","=%s"%A["cpa"])
r=metric(ws,r,"Cost per signup","=IFERROR(%s/%s,0)"%(S("D"),S("F")),CUR,"v4 GE1 KPI target is R85, current R110.",110)
r=metric(ws,r,"Click to signup rate","=IFERROR(%s/%s,0)"%(S("F"),S("E")),PCT,"Landing page performance.")
r=metric(ws,r,"Signup to sale rate","=IFERROR(%s/%s,0)"%(S("G"),S("F")),PCT,"v4 GE1 KPI target is 4%.",0.04)
r=metric(ws,r,"Spend left in the cap","=%s-%s"%(A["cap"],S("D")),CUR,"Negative means the cap is breached. That needs MD approval.")
r=metric(ws,r,"Share of GE1 target banked","=IFERROR(%s/%s,0)"%(S("G"),A["t1"]),PCT,"Against the GE1 split of the qualifying target.",1)
r+=1
r=band(ws,r,"Channel split. Type into the yellow cells",4)
r=header(ws,r,["Channel","Budget (R)","Spend (R)","Sales / cost per sale"])
CH=[("Meta, paid social",None),("Google, paid search",None),("LinkedIn, paid",None),("Boosted organic posts",None),("Influencer Wave 3, GP creator",50000)]
cf=r
for name,pref in CH:
    ws.cell(row=r,column=2,value=name).font=BODY
    c=ws.cell(row=r,column=3,value=pref); c.fill=F_YELLOW; c.font=INPUT; c.number_format=CUR; c.alignment=RGT
    c=ws.cell(row=r,column=4); c.fill=F_YELLOW; c.font=INPUT; c.number_format=CUR; c.alignment=RGT
    c=ws.cell(row=r,column=5); c.fill=F_YELLOW; c.font=INPUT; c.number_format=NUM; c.alignment=RGT
    r+=1
cl=r-1
ws.cell(row=r,column=2,value="Channel total").font=BODY_B
for col in (3,4,5):
    c=ws.cell(row=r,column=col,value="=SUM(%s%d:%s%d)"%(chr(64+col),cf,chr(64+col),cl))
    c.font=BODY_B; c.number_format=CUR if col<5 else NUM; c.alignment=RGT; c.fill=F_GREY
r+=1
ws.cell(row=r,column=2,value="Column E is sales, not cost per sale. Cost per sale per channel is D divided by E and is read at the Monday call.").font=MUTED_I
r+=2
ws.cell(row=r,column=2,value="Influencer Wave 3 budget R50 000 is the v4 Budget Master line for Aug 2026. Confirm how much of it falls inside these 14 days.").font=MUTED_I

# -------------------------------------------------- 07_GE2_School_Outreach
ws=wb.create_sheet("07_GE2_School_Outreach")
widths(ws,{"B":38,"C":16,"D":14,"E":56})
title(ws,"GE2: SCHOOL OUTREACH","Owner: Schools Coordinator. Reads from 05_Daily_Log and 08_School_Visits. This engine is measured on the same basis as paid media.")
r=5
r=band(ws,r,"Sprint to date",4); r=header(ws,r,["Metric","Actual","Target","Note"])
r=metric(ws,r,"Schools visited","=%s"%S("H"),NUM,"6 per week is the visit target.",12)
r=metric(ws,r,"Calls made","=%s"%S("I"),NUM,"19 per week. Calls plus visits equals the v4 GE2 target of 25 per week.",38)
r=metric(ws,r,"Calls plus visits","=%s+%s"%(S("H"),S("I")),NUM,"v4 GE2 KPI. Trigger is below 15 in a week.",50)
r=metric(ws,r,"Signups captured","=%s"%S("J"),NUM,"Parent sign ups taken at a visit, same day entry.")
r=metric(ws,r,"Sales","=%s"%S("K"),NUM,"Peach reconciled, attributed to a school tagged link.","=%s"%A["t2"])
r=metric(ws,r,"Signups per visit","=IFERROR(%s/%s,0)"%(S("J"),S("H")),'0.0',"The number that tells you whether visits are worth the travel.")
r=metric(ws,r,"Sales per visit","=IFERROR(%s/%s,0)"%(S("K"),S("H")),'0.00',"The school engine equivalent of cost per sale.")
r=metric(ws,r,"Signup to sale rate","=IFERROR(%s/%s,0)"%(S("K"),S("J")),PCT,"Compare against the paid engine on 05.")
r=metric(ws,r,"Share of GE2 target banked","=IFERROR(%s/%s,0)"%(S("K"),A["t2"]),PCT,"Against the GE2 split of the qualifying target.",1)
r+=1
r=band(ws,r,"Sprint cost of this engine. Type into the yellow cells",4)
r=header(ws,r,["Cost line","Sprint cost (R)","","Source"])
gf=r
for name,val,src in [
 ("School activations Wave 2","","v4 Budget Master, R19 000 for all of Aug 2026. Enter only the portion inside these 14 days."),
 ("Information sessions support","","v4 Budget Master, R5 000 across Aug and Sep 2026. Enter the sprint portion."),
 ("Travel and fuel","","Actual, from expense claims."),
 ("Printed material and QR codes","","Actual."),
]:
    ws.cell(row=r,column=2,value=name).font=BODY
    c=ws.cell(row=r,column=3,value=val); c.fill=F_YELLOW; c.font=INPUT; c.number_format=CUR; c.alignment=RGT
    ws.cell(row=r,column=5,value=src).font=MUTED_I
    r+=1
gl=r-1
ws.cell(row=r,column=2,value="Total GE2 sprint cost").font=BODY_B
c=ws.cell(row=r,column=3,value="=SUM(C%d:C%d)"%(gf,gl)); c.font=BODY_B; c.number_format=CUR; c.alignment=RGT; c.fill=F_GREY
GTOT=r; r+=1
ws.cell(row=r,column=2,value="Cost per sale, school engine").font=BODY_B
c=ws.cell(row=r,column=3,value="=IFERROR(C%d/%s,0)"%(GTOT,S("K"))); c.font=BODY_B; c.number_format=CUR; c.alignment=RGT; c.fill=F_GREY
t=ws.cell(row=r,column=4,value="=%s"%A["cpa"]); t.number_format=CUR; t.font=MUTED; t.alignment=RGT
ws.cell(row=r,column=5,value="Directly comparable with the paid media cost per sale on 05. This comparison is the point of the sprint.").font=MUTED_I

wb.save(B+"_p4.xlsx"); print("p4 ok")
