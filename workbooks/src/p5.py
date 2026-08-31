import datetime as dt, json
from openpyxl import load_workbook
from style import *
B="/tmp/claude-0/-home-user-bridgeapp-os/6418b099-52bd-5eb3-aab2-a68e43f06251/scratchpad/build/"
wb=load_workbook(B+"_p4.xlsx"); A=json.load(open(B+"addr.json")); RW=json.load(open(B+"rows.json"))
LOG="'05_Daily_Log'"; G1="'06_GE1_Paid_Media'"; G2="'07_GE2_School_Outreach'"; VIS="'08_School_Visits'"
F,LD=RW["FIRSTD"],RW["LASTD"]
START=dt.date(2026,8,24); DAYS=[START+dt.timedelta(days=i) for i in range(14)]

# ------------------------------------------------------- 08_School_Visits
ws=wb.create_sheet("08_School_Visits")
widths(ws,{"B":6,"C":30,"D":18,"E":14,"F":22,"G":11,"H":15,"I":16,"J":20,"K":14,"L":30})
title(ws,"SCHOOL VISITS","Owner: Schools Coordinator. Logged the same day as the visit. Week 1 is assigned from the six active Phase 2 pilots. Week 2 is assigned at the day 8 stand up.")
r=5
r=band(ws,r,"Week 1: Tue 25, Wed 26, Thu 27 August",10)
r=header(ws,r,["#","School","Region","Date","Owner","Status","Parents reached","Signups captured","UTM content tag","Sales attributed","Notes"])
VF=r
W1=[("Kingsmead","KZN (Durban)",DAYS[1]),("St Albans","EC (Port Elizabeth)",DAYS[1]),
    ("Dainfern College","GP (JHB North)",DAYS[2]),("Umtata International","EC (Mthatha)",DAYS[2]),
    ("St Jude Private","EC",DAYS[3]),("Christ The King International","EC",DAYS[3])]
i=1
for name,reg,d in W1:
    ws.cell(row=r,column=2,value=i).font=BODY_B; ws.cell(row=r,column=2).alignment=CTR
    c=ws.cell(row=r,column=3,value=name); c.font=INPUT; c.fill=F_YELLOW
    ws.cell(row=r,column=4,value=reg).font=MUTED
    c=ws.cell(row=r,column=5,value=d); c.number_format=DAT; c.font=BODY_B
    c=ws.cell(row=r,column=6,value="TBC"); c.font=INPUT; c.fill=F_YELLOW
    c=ws.cell(row=r,column=7,value="PLANNED"); c.font=INPUT; c.fill=F_YELLOW; c.alignment=CTR
    for col in (8,9,11):
        c=ws.cell(row=r,column=col); c.font=INPUT; c.fill=F_YELLOW; c.number_format=NUM; c.alignment=RGT
    c=ws.cell(row=r,column=10,value="school-%s"%name.lower().split()[0]); c.font=INPUT; c.fill=F_YELLOW
    c=ws.cell(row=r,column=12); c.font=INPUT; c.fill=F_YELLOW
    r+=1; i+=1
r+=1
r=band(ws,r,"Week 2: Tue 1, Wed 2, Thu 3 September. Schools assigned at the day 8 stand up",10)
r=header(ws,r,["#","School","Region","Date","Owner","Status","Parents reached","Signups captured","UTM content tag","Sales attributed","Notes"])
for d in [DAYS[8],DAYS[8],DAYS[9],DAYS[9],DAYS[10],DAYS[10]]:
    ws.cell(row=r,column=2,value=i).font=BODY_B; ws.cell(row=r,column=2).alignment=CTR
    for col in (3,4,6,7,8,9,10,11,12):
        c=ws.cell(row=r,column=col); c.font=INPUT; c.fill=F_YELLOW
        if col in (8,9,11): c.number_format=NUM; c.alignment=RGT
    ws.cell(row=r,column=7,value="PLANNED").alignment=CTR
    c=ws.cell(row=r,column=5,value=d); c.number_format=DAT; c.font=BODY_B
    r+=1; i+=1
VL=r-1
r+=1
ws.cell(row=r,column=2,value="Reference: the Phase 2 pool is 6 active pilots (Kingsmead, St Albans, Dainfern College, Umtata International, St Jude Private, Christ The King International) plus 2 backups (Strategic High, Excelsior High). Source: v4 sheet 07_Pilot_Schools.").font=MUTED_I
r+=1
ws.cell(row=r,column=2,value="Every visit carries a QR code whose link is registered in 09_UTM_Register with utm_content set to the tag in column J. A visit with no tag produces sales nobody can attribute to it.").font=MUTED_I
r+=1
ws.cell(row=r,column=2,value="Signups captured here must equal the GE2 signups captured entered in 05_Daily_Log for the same date.").font=MUTED_I

# ------------------------------------------------------- 09_UTM_Register
ws=wb.create_sheet("09_UTM_Register")
widths(ws,{"B":30,"C":16,"D":14,"E":22,"F":22,"G":40,"H":74,"I":8,"J":20,"K":12})
title(ws,"UTM REGISTER","Every link used in the sprint. A link that is not on this sheet cannot be attributed, so the sale it produces counts for nobody.")
r=5
r=band(ws,r,"Type into the yellow cells. Column H builds itself",9)
r=header(ws,r,["Purpose","Source","Medium","Campaign","Content","Landing URL","Tagged URL, copy this one","GE","Owner","Live from"])
UF=r
def cl(x): return 'SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(LOWER(TRIM(%s))," ","-"),"/","-"),"--","-")'%x
ROWS=[
 ("Meta paid, parent audience","meta","paid-social","qualifying-sprint","meta-set-a","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("Meta paid, retargeting July leads","meta","paid-social","qualifying-sprint","meta-retarget","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("Google paid search, brand","google","paid-search","qualifying-sprint","brand","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("LinkedIn paid, school leaders","linkedin","paid-social","qualifying-sprint","school-leaders","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("Boosted organic, best of last week","facebook","boosted","qualifying-sprint","weekly-boost","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("Influencer Wave 3, GP creator","influencer","referral","qualifying-sprint","wave-3-gp","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("Instagram bio link","instagram","organic-social","qualifying-sprint","bio-link","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("WhatsApp concierge broadcast","whatsapp","message","qualifying-sprint","broadcast","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("Nurture emailer","email","email","qualifying-sprint","nurture-1","https://bridgeapp.co.za/uniapply-parents","GE1"),
 ("School visit QR, generic","school-visits","qr","qualifying-sprint","","https://bridgeapp.co.za/uniapply-parents","GE2"),
 ("School visit QR, per school","school-visits","qr","qualifying-sprint","school-kingsmead","https://bridgeapp.co.za/uniapply-parents","GE2"),
 ("Exhibition and conference QR","school-events","qr","qualifying-sprint","sahisa-durban","https://bridgeapp.co.za/uniapply-parents","GE2"),
 ("Parent info session handout","school-visits","print","qualifying-sprint","info-session","https://bridgeapp.co.za/uniapply-parents","GE2"),
]
for purpose,src,med,camp,cont,url,ge in ROWS:
    ws.cell(row=r,column=2,value=purpose).font=BODY
    for col,v in [(3,src),(4,med),(5,camp),(6,cont),(7,url)]:
        c=ws.cell(row=r,column=col,value=v); c.font=INPUT; c.fill=F_YELLOW
    f=('=IF(OR(G{r}="",C{r}="",D{r}=""),"",G{r}&"?utm_source="&{cs}&"&utm_medium="&{cm}'
       '&IF(E{r}="","","&utm_campaign="&{cc})&IF(F{r}="","","&utm_content="&{co}))').format(
        r=r,cs=cl("C%d"%r),cm=cl("D%d"%r),cc=cl("E%d"%r),co=cl("F%d"%r))
    c=ws.cell(row=r,column=8,value=f); c.font=Font(name="Arial",sz=9,color=INK); c.fill=F_GREY
    g=ws.cell(row=r,column=9,value=ge); g.font=BODY_B; g.alignment=CTR
    g.fill=F_BLUE if ge=="GE1" else F_ORANGE
    c=ws.cell(row=r,column=10,value="TBC"); c.font=INPUT; c.fill=F_YELLOW
    c=ws.cell(row=r,column=11); c.font=INPUT; c.fill=F_YELLOW; c.number_format=DAT
    r+=1
UL=r-1
r+=1
for t in ["Landing URL is pre-filled with the parent page path. If the page is not deployed by day 1, change column G to the live destination on every row before any spend starts.",
          "Source and medium are compulsory. Campaign and content are optional and the formula leaves them out when blank.",
          "Everything is forced to lower case with spaces turned into hyphens, because GA4 treats Meta and meta as two different sources."]:
    ws.cell(row=r,column=2,value=t).font=MUTED_I; r+=1
json.dump({"VF":VF,"VL":VL,"UF":UF,"UL":UL},open(B+"rows2.json","w"))
wb.save(B+"_p5.xlsx"); print("p5 ok",VF,VL,UF,UL)
