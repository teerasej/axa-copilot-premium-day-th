# ฝึกต่อยอด: Executive update สามสไลด์

> **Optional:** เก็บไว้ฝึกต่อหลังคลาส ไม่ใช่กิจกรรมเพิ่มเติมในตารางหลัก สำหรับงานกลุ่มให้เริ่มที่ [เลือก Group challenge](./05-group-challenge)

<ExerciseHeaderImage src="/images/exercise-headers/04-build-executive-update.png" alt="สร้าง executive update แบบสั้นจากข้อมูลและกราฟที่ตรวจแล้ว" />

## ภาพรวม

ใช้ **recap สมมติ Asteria** และ dashboard ช่วงเช้า สร้าง executive update สามสไลด์ เก็บ Meeting follow-up brief ของการประชุมจริงไว้ส่วนตัว ไม่ใช้เป็นแหล่งของสไลด์สมมตินี้

> **License:** ใช้ Copilot ใน PowerPoint ของบัญชีงาน การอ้างอิงไฟล์และแก้สไลด์ต้องตรวจตาม tenant มี manual fallback ให้

## สิ่งที่ต้องเตรียม

- `Asteria_Teams_Meeting_Recap.docx`
- `Asteria_KPI_Dashboard.pptx` และ reviewed workbook หรือ prepared backup

## Practice 1 สรุปสารหลักเป็น executive update

**เป้าหมายหลัก:** สร้างสามสไลด์ที่สื่อสถานการณ์ หลักฐาน และสิ่งที่จะทำต่อ

### ขั้นตอน

1. เปิด **PowerPoint** สร้าง **Blank presentation** บันทึกชื่อ:

   ```text
   Asteria_Executive_Update.pptx
   ```

2. เปิด Copilot side panel เลือก `Asteria_Teams_Meeting_Recap.docx` ผ่าน `Add Content` หรือตัวเลือกเทียบเท่า ตรวจชื่อก่อนส่ง:

   ```text
   สร้าง executive update ภาษาไทย 3 สไลด์จาก recap สมมติที่แนบ:
   1. สถานการณ์และสิ่งที่ตกลงแล้ว
   2. KPI snapshot — เว้นพื้นที่สำหรับกราฟและหนึ่ง insight ที่ฉันจะนำมาจาก dashboard ที่ตรวจแล้ว ไม่เดาตัวเลขจาก recap
   3. งานติดตามและคำถามที่ยังต้องตัดสินใจ

   รักษา owner และ due date จาก recap แยก Proposed: และใช้ To confirm สำหรับข้อมูลที่ขาด ไม่แต่งสาเหตุหรือผลทางการเงิน
   ```

3. คัดลอกกราฟที่ตรวจแล้วจาก `Asteria_KPI_Dashboard.pptx` หรือ Excel ไป Slide 2 เพิ่มหนึ่ง insight จาก workbook หากใช้ภาพกราฟให้ภาพอ่านได้และเก็บกราฟต้นฉบับใน Excel
4. ตรวจหนึ่งค่ากับ reviewed workbook และหนึ่ง action กับ recap เก็บ **สามสไลด์** แล้วบันทึก

### ถ้า Copilot สร้างสไลด์หรือเลือกไฟล์ไม่ได้

เปิด recap อ่านแล้วสร้างสามสไลด์ด้วยตนเองตามหัวข้อเดิม คัดลอกกราฟจาก dashboard เหมือนกัน ระบุว่าเป็น manual fallback

### Quick check

- มีสามสไลด์ กราฟอ่านได้ และหนึ่งค่าตรงกับ Excel
- Action ยังตรงกับ recap สมมติ และไม่ปนข้อมูลประชุมจริง

## ผลลัพธ์

`Asteria_Executive_Update.pptx` สามสไลด์ กิจกรรมนี้เป็นการต่อยอดสั้น ๆ ไม่ใช่เงื่อนไขผ่านแบบฝึกหัด Outlook/Teams

[← Exercise 4](./04-teams-meeting-to-document) · [รู้จัก Agents →](./06-agent-talking-points)
