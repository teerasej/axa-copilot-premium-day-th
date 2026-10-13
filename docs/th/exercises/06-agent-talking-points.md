# Instructor demo: Claims Document Readiness Agent

ช่วงนี้ผู้สอนสาธิตสร้าง Agent ใน **Agent Builder ของ Microsoft 365 Copilot** ผู้เรียนชมและช่วยตรวจผล ไม่ต้องเปิด Agent Builder หรือสร้าง Agent ตาม

## สิ่งที่จะได้เห็น

1. กำหนด Instructions ว่าผู้ช่วยมีหน้าที่และขอบเขตอย่างไร
2. เพิ่ม fictional checklist เป็น Knowledge
3. ตรวจ claim package สมมติ แยกเอกสารที่ขาด ข้อมูลไม่ครบ และข้อมูลที่อ่านไม่ได้
4. ร่างอีเมลภาษาไทยจากผลที่คนตรวจแล้ว โดยไม่ส่งอีเมล
5. ทดสอบคำขอให้อนุมัติ claim เพื่อดูว่า Agent รักษาขอบเขตหรือไม่

Agent นี้ตรวจเฉพาะความพร้อมของเอกสารตาม checklist สมมติ ไม่ตัดสิน coverage, eligibility, approval, rejection, payment หรือข้อสรุปทางการแพทย์ และไม่ใช่นโยบายขององค์กร

## จุดสังเกตของผู้เรียน

- คำตอบอ้าง checklist ที่กำหนดหรือเดา requirement ขึ้นเอง
- เอกสารที่ไม่ได้รับต่างจากเอกสารที่ได้รับแต่ข้อมูลไม่ครบอย่างไร
- หากอ่านไฟล์ไม่ได้ Agent บอกข้อจำกัดหรือแอบสรุปว่าเอกสารขาด
- Draft รักษาข้อเท็จจริงและยังให้คนตรวจก่อนใช้หรือไม่

> **การเข้าถึง:** สิทธิ์สร้าง Agent และเพิ่ม Knowledge ต้องตรวจในบัญชีผู้สอนก่อนสาธิต การมีเอกสารประกอบหรือการชม demo ไม่ยืนยันสิทธิ์บัญชีผู้เรียน

## เมื่อใช้เส้นทางสำรอง

ผู้สอนอาจเปลี่ยนไปใช้ Agent ที่เตรียมไว้ หากต้องรออัปโหลดหรือสร้างนาน หากแนบไฟล์ไม่ได้ ใช้ข้อความสมมติจากเอกสารโดยแจ้งว่าเป็น text-input route หาก Agent Builder ใช้ไม่ได้ ใช้ภาพขั้นตอนและผลตัวอย่างที่ระบุชัด ไม่ถือว่า live demo ผ่าน

<div class="voice-card"><strong>Pon:</strong> Instructions เหมือนหน้าที่ประจำ ส่วน Knowledge เหมือนคู่มือบนโต๊ะ ผู้ช่วยใช้คู่มือตรวจรายการ แต่คนยังต้องตัดสินใจและรับผิดชอบผลครับ</div>

อ้างอิง: [Build agents in Agent Builder](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents) · [Add knowledge sources](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-knowledge)

[← Group showcase](./07-group-showcase) · [สรุปและนำไปใช้ →](../wrap-up)
