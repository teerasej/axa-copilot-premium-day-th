# Exercise 2 วิเคราะห์ KPI สู่ Executive dashboard

<ExerciseHeaderImage src="/images/exercise-headers/02-analyze-transparently.png" alt="ตรวจตัวเลขและกราฟใน workbook ก่อนสร้าง dashboard" />

## ภาพรวม

ให้ Copilot ใน Excel หา insight สามข้อ สร้างชีตวิเคราะห์และกราฟ แล้วนำเสนอเป็น dashboard สามสไลด์ ตรวจตัวเลขสำคัญหนึ่งค่าและกราฟก่อนใช้ ไม่ต้องใช้ Python

> **License:** หลักสูตรนี้ใช้ Microsoft 365 Copilot แบบชำระเงินและสิทธิ์ Copilot ใน Excel และ PowerPoint ต้องตรวจสอบกับบัญชีผู้เรียน

## สิ่งที่ต้องเตรียม

- `Asteria_Service_KPI_28days.xlsx` ใน OneDrive
- `Asteria_Operational_Context.docx` และ brief จาก Exercise 1
- Excel for the web และ PowerPoint for the web หรือ desktop ที่รองรับ

ถ้ายังไม่มี brief ให้เปิด [prepared backup](/files/Asteria_Grounded_Evidence_Brief.docx) ตรวจสองข้อเท็จจริงกับช่วงเวลารายงาน โดยไม่ทับงานที่ทำเสร็จแล้ว

## Scenario 1 มองหารูปแบบของบริการ

ผู้นำ Asteria ต้องการเข้าใจระยะเวลาจัดการเคลม ข้อร้องเรียน และ digital conversion

### Practice 1 หา insight สำคัญสามข้อ

**เป้าหมายหลัก:** ให้ Copilot ใน Excel ชี้ insight หลักของ workbook

#### ขั้นตอน

1. เปิด `Asteria_Service_KPI_28days.xlsx` จาก OneDrive ใน **Excel for the web**
2. ใช้ตัวเลือกสร้างสำเนาที่มีในบัญชี บันทึกไฟล์ทำงานชื่อ:

   ```text
   Asteria_Service_KPI_Reviewed.xlsx
   ```

3. เลือกเซลล์ใน `KPI_Data` เปิด **Copilot** แล้วส่ง:

   ```text
   บอก insight และแนวโน้มสำคัญ 3 ข้อใน workbook นี้
   ```

4. หาตัวเลขสำคัญหนึ่งค่าจาก `KPI_Data` ใช้ `Definitions` ถ้าความหมายตัวชี้วัดไม่ชัด สาเหตุที่ Copilot เสนอเป็นประเด็นให้สอบสวนต่อ

#### Quick check

- อธิบาย insight สามข้อและหาตัวเลขที่ตรงกับ workbook ได้หนึ่งค่า

### Practice 2 สร้างการวิเคราะห์สำหรับผู้นำ

**เป้าหมายหลัก:** ปรับแผน Copilot ให้สร้างชีต insight และกราฟ claims/SLA

#### ขั้นตอน

1. ใน **Excel Copilot** แชตเดิม เลือก `Plan` ใน mode selector ถ้ามี แล้วส่ง:

   ```text
   ช่วยเตรียม workbook นี้สำหรับทบทวนบริการของผู้นำ Asteria พิจารณาระยะเวลาจัดการเคลม ข้อร้องเรียน และ digital conversion โดยใช้เฉพาะ KPI_Data และ Definitions
   ```

2. อ่านคำถามหรือคำตอบเริ่มต้นก่อนกด `Proceed` ตอบจากข้อมูลใน workbook แล้วเพิ่มบริบท:

   ```text
   เพิ่มชีตชื่อ Reviewed Insights ที่มีข้อค้นพบที่มีประโยชน์ที่สุด 3 ข้อ ระบุวันที่ ตัวชี้วัด ค่า และการเปรียบเทียบ

   เพิ่ม line chart เปรียบเทียบ Claim TAT Hours กับ Claim SLA Hours ตามวันที่ แกนตั้งใช้หน่วยชั่วโมง รักษาข้อมูลต้นฉบับไว้
   ```

3. อ่านแผนใหม่ ถ้ามีทั้งชีตและกราฟแล้วกด **Proceed**
4. เปิด `Reviewed Insights` ตรวจหนึ่งค่ากับ `KPI_Data` และดูวันที่ หน่วยชั่วโมง และเส้น SLA 48 ชั่วโมงในกราฟ ขอแก้สิ่งที่ผิดชัดเจน หรือใช้ `Undo` ถ้าแก้สิ่งที่ไม่ต้องการ
5. บันทึก workbook หากทำได้เพียงบางส่วน ให้ลองคำขอเล็กลงทีละข้อ โดยตรวจแผนก่อน `Proceed`:

   ```text
   เพิ่ม Reviewed Insights ที่มีสามข้อค้นพบ วันที่ ค่า การเปรียบเทียบ และสูตร Excel ปกติ รักษาข้อมูลต้นฉบับไว้
   ```

   ```text
   เพิ่ม line chart รายวันของ Claim TAT Hours กับ Claim SLA Hours เรียงวันที่และใช้หน่วยชั่วโมงบนแกนตั้ง
   ```

#### ถ้าไม่มี Plan หรือ Proceed

ให้ผู้สอนยืนยันตัวแก้ไขที่มี ใช้ Copilot editing ปกติด้วยคำขอนี้:

```text
ใช้ KPI_Data และ Definitions เพิ่ม Reviewed Insights ที่มีสามข้อค้นพบเกี่ยวกับระยะเวลาจัดการเคลม ข้อร้องเรียน และ digital conversion ระบุวันที่ ค่า การเปรียบเทียบ และใช้สูตร Excel ปกติเมื่อเหมาะสม เพิ่ม line chart รายวันของ claims turnaround/SLA ใช้หน่วยชั่วโมงบนแกนตั้ง รักษาข้อมูลต้นฉบับไว้และไม่เดาสาเหตุ
```

ตรวจ preview ถ้ามี หรือดูผลจริงและใช้ `Undo` เมื่อจำเป็น

#### Quick check

- มีชีต insight และหนึ่งค่าตรงกับ `KPI_Data`
- กราฟเรียงวันที่ ใช้หน่วยชั่วโมง และมีเส้น SLA 48 ชั่วโมง

### Practice 3 ทำข้อร้องเรียนให้สังเกตง่าย

**เป้าหมายหลัก:** ใช้ conditional formatting แสดงระดับ Complaint Count

#### ขั้นตอน

1. กลับ `KPI_Data` แสดงครบ 28 วัน และเลือกเซลล์ข้อมูล `Complaint Count` โดยไม่รวมหัวตาราง
2. ส่ง:

   ```text
   แทนที่ conditional formatting เดิมของ Complaint Count ใน KPI_Data ด้วยสีแดงสามระดับ รักษาคอลัมน์อื่นไว้ตามเดิม
   ```

   สีเข้มหมายถึงจำนวนมากขึ้น ใช้ช่วง 0–10, 11–17 และ 18 ขึ้นไป ถ้า Copilot ขอเกณฑ์เพิ่มเติม สีเป็นตัวช่วยแสดงผล ไม่ใช่ business target
3. ตรวจ 1 September (8) เป็นอ่อน, 14 September (13) เป็นกลาง และ 21 September (24) เป็นเข้ม

#### Quick check

- สามวันที่ตรวจได้ระดับสีที่เหมาะสม ตัวเลขอ่านได้และไม่เปลี่ยน
- บันทึกไฟล์ทำงานใน OneDrive แล้ว

## Scenario 2 นำเสนอรูปแบบบริการ

ใช้ workbook ที่บันทึกไว้เพื่อสร้างภาพรวมสำหรับผู้นำ

### ถ้า workbook ที่ทำยังไม่พร้อม

เปิด `Prepared assets/Asteria_Service_KPI_Reviewed_backup.xlsx` หรือ [ดาวน์โหลด backup](/files/Asteria_Service_KPI_Reviewed_backup.xlsx) แล้วอัปโหลด ตรวจหนึ่งค่าใน `Reviewed Insights` กับ `KPI_Data` และดูวันที่/หน่วยกราฟ ใช้ไฟล์นี้แทน reviewed workbook ในขั้นต่อไปได้ โดยระบุว่าเป็น prepared backup สีเดิมของ backup อาจต่างจากสีแดงที่ฝึกทำ

### Practice 1 สร้าง KPI dashboard สามสไลด์

**เป้าหมายหลัก:** สร้าง dashboard สั้นจากผล Excel ที่ตรวจแล้ว

#### ขั้นตอน

1. เปิด **PowerPoint** สร้าง **Blank presentation** แล้วบันทึกใน OneDrive ชื่อ:

   ```text
   Asteria_KPI_Dashboard.pptx
   ```

2. เปิด **Copilot side panel** ใช้ `Add Content` หรือตัวเลือกที่เทียบเท่าเพื่อเลือก reviewed workbook เป็น work item ตรวจชื่อว่าเป็นสำเนาทำงานหรือ backup ที่ตั้งใจใช้
3. ส่ง:

   ```text
   สร้าง executive KPI dashboard 3 สไลด์สำหรับทบทวนบริการ Asteria โดยใช้ workbook ที่แนบ:
   1. KPI overview: ช่วงเวลารายงานและตัวชี้วัดหลักสามตัว
   2. Service trend: กราฟระยะเวลาจัดการเคลม เส้น SLA และคำอธิบายสั้น เว้นพื้นที่ให้ฉันแทรกกราฟ Excel ถ้าใช้กราฟได้ไม่ตรง
   3. Decision discussion: ข้อค้นพบหลัก คำถามที่ยังไม่ตอบ และหนึ่งเรื่องที่ต้องตัดสินใจ

   ใช้เฉพาะข้อมูล workbook ไม่แต่งสาเหตุหรือผลทางการเงิน
   ```

4. ตอบคำถามถ้ามี แล้วสร้างสไลด์ หากไม่มีกราฟหรือกราฟต่างจาก Excel ให้คัดลอกกราฟไป Slide 2 หรือแทรกภาพกราฟที่อ่านได้
5. ตรวจกราฟและหนึ่งค่ากับ Excel แก้สิ่งที่ผิด เก็บไว้ **สามสไลด์** แล้วบันทึก

#### Quick check

- Dashboard สามสไลด์มีกราฟอ่านได้และหนึ่งค่าตรงกับ Excel
- จบด้วยคำถามตัดสินใจชัดเจน และบันทึกใน OneDrive แล้ว

### Practice 2 เพิ่มสไลด์แบบ Asteria ในสำเนา (เสริม)

**เป้าหมายหลัก:** ทดลองใช้ template กับสามสไลด์ใหม่โดยรักษา dashboard เดิม

#### ขั้นตอน

1. สำเนา dashboard ที่เสร็จแล้ว ใช้ชื่อ:

   ```text
   Asteria_KPI_Dashboard_Template_Comparison.pptx
   ```

   เก็บ `Asteria_KPI_Dashboard.pptx` เดิมไว้ใช้ต่อ
2. เปิด `Prepared assets/Asteria_Presentation_Template.pptx` เพื่อดูสามตัวอย่าง หรือ [ดาวน์โหลด template](/files/Asteria_Presentation_Template.pptx)
3. ใน Copilot side panel ของสำเนา ใช้ `Reference file` หรือตัวเลือกเทียบเท่า เลือก template เป็น design reference และเก็บ reviewed workbook ไว้เป็นแหล่งตัวเลข ส่ง:

   ```text
   เพิ่มสามสไลด์ต่อจากสามสไลด์เดิม ใช้ข้อมูลและคำถามตัดสินใจเดิม ใช้ Asteria_Presentation_Template.pptx เป็น design template ให้สี ฟอนต์ layout และรูปแบบกราฟสอดคล้องกัน

   สร้าง KPI overview, claims turnaround trend และ decision-discussion รักษาสไลด์ 1–3 ไว้ตามเดิม รักษาตัวเลขและข้อมูลที่ยังขาด ใช้ To confirm เมื่อไม่ทราบ ไม่เพิ่มสาเหตุหรือข้ออ้างทางการเงิน
   ```

4. เทียบ slides 1–3 กับต้นฉบับ และ slides 4–6 กับ template ตรวจหนึ่งค่าจาก Excel แล้วบันทึก **หกสไลด์** ใช้รูปแบบเฉพาะสามสไลด์ใหม่

#### ถ้าไม่มีการอ้างอิง PPTX หรือรูปแบบไม่ตาม template

เปิดสำเนา template แก้สามตัวอย่างด้วยข้อค้นพบ แล้วต่อเข้ากับ comparison deck โดยใช้ `Keep Source Formatting` ถ้าไม่มีให้ถามผู้สอนหรือข้าม นี่เป็น manual fallback ไม่ใช่หลักฐานว่า Copilot สร้างรูปแบบสำเร็จ

#### Quick check

- Slides 1–3 ไม่เปลี่ยน และ comparison มีหกสไลด์
- Slides 4–6 ตามรูปแบบ template และรักษาตัวเลข/คำถามตัดสินใจ

## ผลลัพธ์

- `Asteria_Service_KPI_Reviewed.xlsx` พร้อม insight สูตร กราฟ และสีข้อร้องเรียน หรือ prepared backup
- `Asteria_KPI_Dashboard.pptx` สามสไลด์
- เสริม: `Asteria_KPI_Dashboard_Template_Comparison.pptx` หกสไลด์ กิจกรรมต่อไปใช้ dashboard เดิม

## Tips & tricks

ใน PowerPoint ลอง:

```text
ทำชื่อสไลด์ให้อ่านเข้าใจง่ายสำหรับผู้บริหารที่มีเวลาน้อย รักษาตัวเลขและความหมายเดิม
```

<div class="voice-card"><strong>Pon:</strong> กราฟเหมือนป้ายบอกทาง ตรวจว่าชี้ไปทางเดียวกับตัวเลขก่อนพาคนอื่นเดินตามครับ</div>

[← Exercise 1](./01-ground-the-brief) · [Exercise 3 Outlook →](./03-outlook-email-workflow)
