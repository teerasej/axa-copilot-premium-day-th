# AXA Microsoft 365 Copilot Premium — ภาษาไทย

แบบฝึกหัดภาษาไทยสำหรับเวิร์กช็อปหนึ่งวัน ฝึก Copilot Chat, Word, Excel และ PowerPoint ในช่วงเช้า จากนั้นใช้ Outlook และ Copilot Chat กับอีเมล และใช้ Teams กับการประชุมที่ผ่านมาเพื่อสร้างเอกสารติดตามงาน

[เปิดเว็บไซต์ผู้เรียน](https://teerasej.github.io/axa-copilot-premium-day-th/th/) · [เตรียมตัว](docs/th/before-you-begin.md) · [ไฟล์ฝึก](docs/th/files.md)

## แบบฝึกหัด

1. [สรุปจากหลักฐาน](docs/th/exercises/01-ground-the-brief.md)
2. [Excel สู่ KPI dashboard](docs/th/exercises/02-kpi-to-decision-brief.md)
3. [จัดการอีเมลด้วย Outlook และ Copilot Chat](docs/th/exercises/03-outlook-email-workflow.md)
4. [ประชุมที่ผ่านมา สู่เอกสารติดตามงาน](docs/th/exercises/04-teams-meeting-to-document.md)
5. [เลือก Group challenge](docs/th/exercises/05-group-challenge.md)
6. [นำเสนอผลงานกลุ่ม](docs/th/exercises/07-group-showcase.md)
7. [ชม Agent Builder demo](docs/th/exercises/06-agent-talking-points.md)

Optional: [Outlook เพิ่มเติม](docs/th/resources/outlook-extra-practice.md) · [Executive update](docs/th/exercises/05-executive-update.md)

## ดูแลและเผยแพร่

เอกสารใน `docs/th/` เป็นแหล่งหลักของเว็บไซต์นี้ แก้ไขได้อิสระจากหลักสูตรภาษาอังกฤษ ใช้ข้อมูลสมมติ Asteria ในไฟล์ดาวน์โหลด ส่วนข้อมูลอีเมลและการประชุมจริงอยู่ในบัญชีส่วนตัวของผู้เรียนเท่านั้น

```sh
pnpm install --frozen-lockfile
pnpm run validate
pnpm run docs:build
pnpm run docs:preview
```

เผยแพร่จาก `main` ผ่าน workflow `Deploy Thai learner site to Pages` ที่ต้องสั่งรันเอง การเผยแพร่สำเร็จไม่ได้ยืนยันว่า Copilot ทุกฟังก์ชันใช้งานได้ใน tenant ผู้เรียน ต้องซ้อมด้วยบัญชีที่มีสิทธิ์เทียบเท่าผู้เรียนแยกต่างหาก
