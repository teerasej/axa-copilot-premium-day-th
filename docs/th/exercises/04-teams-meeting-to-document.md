<span id="exercise-4-จากการประชุมที่ผ่านมา-สู่เอกสารติดตามงาน" class="legacy-anchor" aria-hidden="true"></span>

# Exercise 4 Create a follow-up brief from a past meeting

<span id="ภาพรวม" class="legacy-anchor" aria-hidden="true"></span>

## Overview

Use one meeting selected in advance with a checked transcript. Ask focused questions and create a Word follow-up brief before the group challenge. Switch to Asteria immediately if the source is unavailable. Finding a new meeting and asking extra questions are optional activities.

> **License:** This course requires paid Microsoft 365 Copilot access and permission to use meeting content. Questions about what was said after a meeting require an accessible retained transcript. Check policy and learner permissions before starting.

<span id="สิ่งที่ต้องเตรียม" class="legacy-anchor" aria-hidden="true"></span>

## Before you start

- Have Teams, Copilot Chat and Word in your work account.
- Prepare one internal meeting with a readable transcript and permission to use it in this private activity.
- Confirm that organizational policy permits creating a document from the meeting results.
- A recording may help check context, but the transcript is the source for questions about spoken content. Prepare a suitable meeting or the synthetic fallback before class.

**Keep it private:** Turn off screen sharing, retain results in your own account, do not submit them to the instructor or mix them with Asteria, and do not upload real transcripts for practice. Do not change policy to bypass restrictions.

<span id="practice-1-ยืนยันการประชุมที่เตรียมไว้" class="legacy-anchor" aria-hidden="true"></span>

## Practice 1 Confirm the prepared meeting

**Primary target:** Confirm one meeting occurrence with a readable transcript.

<span id="ขั้นตอน" class="legacy-anchor" aria-hidden="true"></span>

### Steps

1. Open the prepared **Teams Calendar** entry or meeting chat. Check its title, date, time and occurrence if it is a recurring meeting.
2. Open **Recap** or the transcript as available. Confirm that you can read what was said. A title or attendee list is insufficient.
3. If the source is unavailable, use the [Asteria recap](#asteria-route) immediately. Do not search for a different meeting during the main route.

### Quick check

- Confirm the correct occurrence and readable transcript, or identify your source as synthetic.

<span id="practice-2-ถามและตรวจประเด็นสําคัญ" class="legacy-anchor" aria-hidden="true"></span>

## Practice 2 Ask and verify the key points

**Primary target:** Use the transcript to distinguish the summary, decisions and follow-up work.

<span id="ขั้นตอน-1" class="legacy-anchor" aria-hidden="true"></span>

### Steps

1. In the selected meeting's **Teams Recap**, open **Copilot** or use the chat for that same occurrence.
2. Send one request at a time in the same conversation. Read each answer before continuing:

   **Summary and confirmed decisions**

   ```text
   Use this meeting occurrence's transcript. Summarize in English in no more than three points, separating confirmed decisions from proposals. Include up to two open questions with source citations. Say clearly if you cannot read the transcript.
   ```

   **Follow-up work**

   ```text
   Create an Action / Owner / Due date table using only information stated in the transcript. Use To confirm for missing information. Prefix proposed actions with Proposed:. Do not invent approvals or delivery dates.
   ```

3. Open the citations. Check one decision and one action/owner/date against the transcript. An answer based only on meeting chat or calendar information is not evidence of what was spoken.

<span id="ถ้า-teams-copilot-ใช้ไม่ได้-แต่การอ้างอิง-meeting-ใน-chat-ใช้ได้" class="legacy-anchor" aria-hidden="true"></span>

### If Teams Copilot is unavailable but Chat can reference meetings

Start a private Copilot Chat. Use `/` → `Meetings` or the available equivalent, select the confirmed occurrence and check its title before sending the same prompts. If Chat cannot read the transcript, stop this route and use synthetic material. Do not upload a real transcript.

### Quick check

- One decision and one follow-up action match the transcript.
- Proposals and missing information retain Proposed / To confirm labels.

<span id="practice-3-สร้าง-meeting-follow-up-brief" class="legacy-anchor" aria-hidden="true"></span>

## Practice 3 Create a meeting follow-up brief

**Primary target:** Turn verified meeting results into a Word follow-up document.

<span id="ขั้นตอน-2" class="legacy-anchor" aria-hidden="true"></span>

### Steps

1. In the conversation that accessed the transcript and produced checked results, send:

   ```text
   Organize the content we verified into an English Meeting follow-up brief for this meeting occurrence only.

   Use these headings:
   1. Meeting summary — meeting title, date and a short summary.
   2. Confirmed decisions — only what was agreed.
   3. Action plan — an Action / Owner / Due date table.
   4. Open questions — items still needing confirmation.

   Preserve the original conditions. Use Proposed: for suggested actions and To confirm for missing information. Do not add approvals or commitments.
   ```

2. Check the four headings and use **Open in Word** if available. If working in Copilot Chat, request:

   ```text
   Create a Word file named Meeting_Follow_Up_Brief.docx from the brief you just wrote. Preserve its content and all four headings.
   ```

3. If export or file creation is unavailable **but copying is permitted**, open a new Word document, copy the brief and save it in your private OneDrive as:

   ```text
   Meeting_Follow_Up_Brief.docx
   ```

4. If policy or a sensitivity label blocks export/copy, **do not bypass that restriction**. Keep the result in the chat and create the document using the synthetic route below.
5. Open the file and inspect one action-table row and all four headings. Keep the private file separate from the Asteria folder.

### Quick check

- Word opens with a summary, decisions, action table and open questions.
- One row matches the transcript, and Proposed / To confirm labels remain.

## Fallback: The synthetic Asteria meeting {#asteria-route}

Start **Copilot Chat → New chat**, separate from real data. Attach `Asteria_Teams_Meeting_Recap.docx`, substitute this file for “transcript” in the prompts and complete Practices 2–3. Check details against the file. For clarification, open `Asteria_Meeting_Chat.docx` or the `.vtt` file yourself; do not attach VTT to Copilot.

```text
For this exercise, use only the attached Asteria_Teams_Meeting_Recap.docx in place of a transcript. Respond in English and do not claim access to a real meeting.
```

You may save the synthetic brief in the Asteria folder. Never mix in real-work outputs. This practices analysis and document creation; it does not establish meeting discovery or Teams transcript grounding.

<span id="optional-ฝึกค้นและถามเพิ่มภายหลัง" class="legacy-anchor" aria-hidden="true"></span>

## Optional: Explore discovery and further questions later

Outside the main timetable, try finding a meeting in Copilot Chat by topic and date range. Open the actual occurrence, check its transcript and ask further questions one at a time. Keep the same data boundaries and access conditions.

<span id="ผลลัพธ์" class="legacy-anchor" aria-hidden="true"></span>

## Outputs

- One meeting with verified access, or clearly identified synthetic material.
- A checked summary and follow-up actions.
- A private or synthetic `Meeting_Follow_Up_Brief.docx`.

<div class="voice-card"><strong>Pon:</strong> A meeting title is like a film poster; the transcript is the story itself. Read the story before concluding who agreed to what.</div>

Reference: [Copilot after meetings and Word export conditions](https://support.microsoft.com/en-us/teams/copilot/catch-up-on-meetings-with-microsoft-365-copilot-in-teams)

[← Exercise 3](./03-outlook-email-workflow) · [Choose a group challenge →](./05-group-challenge)
