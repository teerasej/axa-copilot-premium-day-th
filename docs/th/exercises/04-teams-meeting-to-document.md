<span id="exercise-4-จากการประชุมที่ผ่านมา-สู่เอกสารติดตามงาน" class="legacy-anchor" aria-hidden="true"></span>

# Exercise 4 Create a follow-up brief from a past meeting

<span id="ภาพรวม" class="legacy-anchor" aria-hidden="true"></span>

## Overview

Find a recent Teams meeting in Copilot Chat, verify its transcript, then use that same meeting to answer focused questions and create a Word follow-up brief. Use Asteria if no suitable transcript is available. Further questions are optional.

> **License:** This course requires paid Microsoft 365 Copilot access and permission to use meeting content. Questions about what was said after a meeting require an accessible retained transcript. Check policy and learner permissions before starting.

<span id="สิ่งที่ต้องเตรียม" class="legacy-anchor" aria-hidden="true"></span>

## Before you start

- Have Teams, Copilot Chat and Word in your work account.
- Use only internal meetings approved for this private activity. Keep a prepared meeting with a readable transcript as a backup if discovery is unavailable.
- Confirm that organizational policy permits creating a document from the meeting results.
- A recording may help check context, but the transcript is the source for questions about spoken content. Prepare a suitable meeting or the synthetic fallback before class.

**Keep it private:** Turn off screen sharing, retain results in your own account, do not submit them to the instructor or mix them with Asteria, and do not upload real transcripts for practice. Do not change policy to bypass restrictions.

<span id="practice-1-ยืนยันการประชุมที่เตรียมไว้" class="legacy-anchor" aria-hidden="true"></span>

<span id="practice-1-confirm-the-prepared-meeting" class="legacy-anchor" aria-hidden="true"></span>

## Practice 1 Find a recent Teams meeting with a transcript

<PracticeIllustration id="ex04-p1" alt="A person confirms a meeting using its calendar and transcript." />

**Primary target:** Find a recent meeting and verify its transcript before using it.

<span id="ขั้นตอน" class="legacy-anchor" aria-hidden="true"></span>

### Steps

1. Open a private **Copilot Chat → New chat** with approved work-data access. Send:

   ```text
   Find up to three Microsoft Teams meetings from the last 14 days
   that I attended and for which you can access a transcript.
   Show the most recent first.

   For each, give the meeting title, date, time and source link.
   Identify the specific occurrence for recurring meetings.
   Do not assume a recording means a transcript is available.
   If transcript access cannot be confirmed, say so.
   Respond in English.
   ```

2. Choose one suitable result and open its meeting occurrence in **Teams**. Check the title, date and time.
3. Open **Recap** or the transcript and confirm it is readable. Use this same meeting for Practice 2. If none of the results has an accessible, approved transcript, use the [Asteria recap](#asteria-route).

### Quick check

- Identify the selected meeting occurrence and confirm its readable transcript, or identify your source as synthetic.

<span id="practice-2-ถามและตรวจประเด็นสําคัญ" class="legacy-anchor" aria-hidden="true"></span>

## Practice 2 Ask and verify the key points

<PracticeIllustration id="ex04-p2" alt="Colleagues check a discussion point against a meeting transcript." />

**Primary target:** Use the transcript to distinguish the summary, decisions and follow-up work.

<span id="ขั้นตอน-1" class="legacy-anchor" aria-hidden="true"></span>

### Steps

1. Continue with the meeting verified in Practice 1. In its **Teams Recap**, open **Copilot** or use the chat for that same occurrence.
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

<PracticeIllustration id="ex04-p3" alt="A person organizes confirmed actions and open questions into a brief." />

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

<span id="optional-explore-discovery-and-further-questions-later" class="legacy-anchor" aria-hidden="true"></span>

## Optional: Ask further questions

Outside the main timetable, ask further questions about the same verified meeting, one at a time. Check each answer against its transcript. Keep the same data boundaries and access conditions.

<span id="ผลลัพธ์" class="legacy-anchor" aria-hidden="true"></span>

## Outputs

- One meeting with verified access, or clearly identified synthetic material.
- A checked summary and follow-up actions.
- A private or synthetic `Meeting_Follow_Up_Brief.docx`.

<div class="voice-card"><strong>Pon:</strong> A meeting title is like a film poster; the transcript is the story itself. Read the story before concluding who agreed to what.</div>

References: [Find recent meeting information](https://support.microsoft.com/en-us/microsoft-365-copilot/get-instant-answers-with-microsoft-365-copilot-chat) · [Transcript versus meeting-chat grounding](https://support.microsoft.com/en-us/teams/copilot/how-to-use-microsoft-365-copilot-in-teams-chats-and-channels) · [Copilot after meetings and Word export conditions](https://support.microsoft.com/en-us/teams/copilot/catch-up-on-meetings-with-microsoft-365-copilot-in-teams)

[← Exercise 3](./03-outlook-email-workflow) · [Choose a group challenge →](./05-group-challenge)
