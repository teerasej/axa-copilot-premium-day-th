# เตรียมตัวก่อนเริ่ม

หลักสูตรนี้ใช้บัญชีงานที่มี **Microsoft 365 Copilot แบบชำระเงิน** และแอปที่องค์กรอนุญาต ฟังก์ชันอาจต่างตามบัญชี client และนโยบาย จึงต้องตรวจด้วยบัญชีผู้เรียนก่อนวันอบรม

## เตรียมไฟล์ฝึก {#prepare-your-files}

ดาวน์โหลดครั้งเดียวได้ครบ **11 ไฟล์**: แหล่งข้อมูลสมมติแปดไฟล์ prepared backups สองไฟล์ และ presentation template หนึ่งไฟล์ เอกสารต้นทางยังเป็นภาษาอังกฤษ คำอธิบายและ prompt บนเว็บไซต์เป็นภาษาไทย

1. [ดาวน์โหลด practice ZIP ทั้งชุด](/files/Asteria_Copilot_Premium_Practice_Files.zip)
2. แตก ZIP ด้วย `Extract All` บน Windows หรือดับเบิลคลิกบน Mac หาโฟลเดอร์:

   ```text
   Asteria Copilot Workshop
   ```

3. เปิด **OneDrive** ใน Edge หรือ Chrome ด้วยบัญชีงาน เลือก **Add new > Folder upload** หรือ **Upload > Folder** ตามหน้าจอ
4. อัปโหลดทั้งโฟลเดอร์ `Asteria Copilot Workshop` รวม `Prepared assets` ไม่อัปโหลด ZIP หรือ wrapper folder เพิ่มเติม เก็บชื่อไฟล์เดิม
5. รอเสร็จแล้วตรวจแปดไฟล์ต้นทางและ `Prepared assets` ซึ่งมี:

   - `Asteria_Grounded_Evidence_Brief.docx`
   - `Asteria_Service_KPI_Reviewed_backup.xlsx`
   - `Asteria_Presentation_Template.pptx`

6. เปิด `Asteria_Operational_Context.docx` ใน **Word for the web** ตรวจว่าแก้ไขและบันทึกได้

ถ้า folder upload ใช้ไม่ได้แต่ file upload ได้ ให้สร้างสองโฟลเดอร์แบบเดียวกันใน OneDrive แล้วอัปโหลดแปดและสามไฟล์ให้ถูกที่ หากการอัปโหลดถูกบล็อกให้ถามผู้สอนก่อนทำต่อ

บันทึกผลงาน Asteria ของตนเองในโฟลเดอร์หลัก เก็บไฟล์ที่เตรียมไว้ใน `Prepared assets` โดยไม่เขียนทับ ส่วนข้อมูลอีเมลและประชุมจริงเก็บในพื้นที่ส่วนตัวแยกต่างหาก

## ตรวจบัญชีและแอป

- ลงชื่อเข้าใช้ด้วยบัญชีงาน
- เปิด Copilot Chat, OneDrive, Word, Excel, PowerPoint, Outlook และ Teams ได้
- ในช่วงเช้า: เลือกไฟล์ใน Chat และเห็น Copilot ใน Word, Excel, PowerPoint
- ในช่วงบ่าย: ตรวจ Outlook summary/drafting/coaching และ Copilot Chat ที่ใช้ข้อมูลอีเมลได้
- ตรวจ Teams meeting transcript และ Copilot หลังประชุม รวมถึงสิทธิ์สร้าง Word จากผล

ไม่ต้องใช้ Agent Builder, Copilot Studio, Researcher, Analyst หรือ custom skills แจ้งผู้สอนเมื่อฟังก์ชันที่ต้องใช้ไม่พร้อม เพื่อเลือกเส้นทางสำรองที่ตรงกิจกรรม

## เตรียมข้อมูลส่วนตัวสำหรับช่วงบ่าย

ใช้ข้อมูลงานเฉพาะเมื่อ **ผู้สอน/ลูกค้าอนุมัติการฝึกและขอบเขตข้อมูลแล้ว** สิทธิ์อ่านข้อมูลเพียงอย่างเดียวไม่ได้อนุญาตให้ใช้ในชั้นเรียน

- เลือก thread อีเมลหนึ่งเรื่องและข้อความเกี่ยวข้องในช่วงวันที่สั้น ๆ
- เลือกการประชุมภายในองค์กรที่ผ่านมา **หนึ่งครั้ง** ที่ transcript ยังเปิดอ่านได้ ถ้ามี recording ใช้ช่วยตรวจบริบทได้
- ไม่เลือกข้อมูลลูกค้า สุขภาพ เคลม การชำระเงิน HR ความปลอดภัย หรือความลับธุรกิจ
- ปิดการแชร์หน้าจอ ใช้แชตส่วนตัว ไม่อัปโหลด transcript จริง ไม่ส่งผลงานจริงให้ผู้สอน และไม่ผสมกับไฟล์ Asteria
- เก็บอีเมลเป็น draft ไม่ส่งข้อความ ไม่เปลี่ยน mailbox หรือปฏิทิน

## ถ้าข้อมูลหรือฟังก์ชันไม่พร้อม

| ปัญหา | เส้นทางที่ใช้ได้ |
|---|---|
| Word generation ไม่พร้อม | เปิด [prepared brief](/files/Asteria_Grounded_Evidence_Brief.docx) และตรวจสองข้อเท็จจริง |
| Excel ทำ workbook ยังไม่ครบ | เปิด [reviewed KPI backup](/files/Asteria_Service_KPI_Reviewed_backup.xlsx) ตรวจหนึ่งค่าและกราฟ |
| ไม่มี Auto rewrite | ถามผู้สอนหรือข้าม ไม่ใช้ typed rewrite แทน |
| Plan/Proceed ไม่มี | ใช้ standard Copilot editing ตาม Exercise 2 |
| PPTX reference/style ไม่พร้อม | ใช้ template-copy/manual fallback หรือข้าม extension |
| Outlook ไม่พร้อม หรือไม่อนุมัติข้อมูลจริง | ใช้ `Asteria_Email_Thread.docx` ใน Chat ตาม Exercise 3 |
| หา meeting ไม่พบ | เลือก occurrence โดยตรงใน Teams Calendar/Recap |
| Transcript ไม่มี/อ่านไม่ได้ | เลือกการประชุมอื่นหรือ `Asteria_Teams_Meeting_Recap.docx` |
| Word export ไม่พร้อมแต่ copy ได้รับอนุญาต | สร้าง Word ด้วยตนเองจากเนื้อหาที่ตรวจแล้ว |
| นโยบายห้าม export/copy | ไม่ข้ามข้อจำกัด ใช้ข้อมูลสมมติทำเอกสารแทน |

Prepared assets เป็นตัวช่วยฝึก ไม่ยืนยันว่า Copilot สร้างไฟล์หรือแก้ Excel สำเร็จ ไม่ต้องกรอก review-status columns หรือทำ source notes ทุกสไลด์

## Ready check

- [ ] เปิดและบันทึกไฟล์ Word ในบัญชีงานได้
- [ ] OneDrive มีไฟล์ต้นทางแปดไฟล์และ prepared assets สามไฟล์ครบ
- [ ] ทราบว่าจะใช้ข้อมูลส่วนตัวที่อนุมัติแล้วหรือเส้นทางสมมติในช่วงบ่าย
- [ ] ตรวจ transcript ของ meeting ที่เลือกได้ หรือเตรียม recap สมมติไว้
- [ ] จะตรวจผลและเก็บข้อมูลส่วนตัวแยกจาก Asteria

[เริ่ม Exercise 1 →](./exercises/01-ground-the-brief)
