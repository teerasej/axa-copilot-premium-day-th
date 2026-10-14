<span id="exercise-2-วิเคราะห์-kpi-สู่-executive-dashboard" class="legacy-anchor" aria-hidden="true"></span>

# Exercise 2 Analyze KPIs and create an executive dashboard

<ExerciseHeaderImage src="/images/exercise-headers/02-analyze-transparently.png" alt="Check workbook values and charts before creating a dashboard" />

<span id="ภาพรวม" class="legacy-anchor" aria-hidden="true"></span>

## Overview

Ask Copilot in Excel for three insights, create an analysis sheet and chart, then present the results in a three-slide dashboard. Check one important value and the chart before using them. Python is not required.

> **License:** This course requires a paid Microsoft 365 Copilot license and access to Copilot in Excel and PowerPoint. Confirm availability in the learner account.

<span id="สิ่งที่ต้องเตรียม" class="legacy-anchor" aria-hidden="true"></span>

## Before you start

- Keep `Asteria_Service_KPI_28days.xlsx` in OneDrive.
- Have `Asteria_Operational_Context.docx` and your Exercise 1 brief available.
- Use Excel for the web and a supported PowerPoint web or desktop app.

If you have no brief yet, open the [prepared backup](/files/Asteria_Grounded_Evidence_Brief.docx). Check two facts and the reporting period. Do not overwrite completed work.

<span id="scenario-1-มองหารูปแบบของบริการ" class="legacy-anchor" aria-hidden="true"></span>

## Scenario 1 Find service patterns

Asteria leaders want to understand claims turnaround, complaints and digital conversion.

<span id="practice-1-หา-insight-สําคัญสามข้อ" class="legacy-anchor" aria-hidden="true"></span>

### Practice 1 Identify three important insights

**Primary target:** Use Copilot in Excel to identify the workbook's main insights.

<span id="ขั้นตอน" class="legacy-anchor" aria-hidden="true"></span>

#### Steps

1. Open `Asteria_Service_KPI_28days.xlsx` from OneDrive in **Excel for the web**.
2. Use the available copy command to save your working file as:

   ```text
   Asteria_Service_KPI_Reviewed.xlsx
   ```

3. Select a cell in `KPI_Data`, open **Copilot**, and send:

   ```text
   Identify three important insights and trends in this workbook. Write in English.
   ```

4. Locate one important value in `KPI_Data`. Read `Definitions` if a metric is unclear. Treat any suggested cause as something to investigate, not an established fact.

#### Quick check

- Explain three insights and locate one matching value in the workbook.

<span id="practice-2-สร้างการวิเคราะห์สําหรับผู้นํา" class="legacy-anchor" aria-hidden="true"></span>

### Practice 2 Prepare analysis for the leadership review

**Primary target:** Refine a Copilot plan to create an insight sheet and claims/SLA chart.

<span id="ขั้นตอน-1" class="legacy-anchor" aria-hidden="true"></span>

#### Steps

1. In the same **Excel Copilot** conversation, choose `Plan` in the mode selector if available. Send:

   ```text
   Help prepare this workbook for the Asteria leadership service review. Consider claims turnaround, complaints and digital conversion using only KPI_Data and Definitions. Write in English.
   ```

2. Read the initial questions or response before selecting `Proceed`. Answer from the workbook, then add:

   ```text
   Add a sheet named Reviewed Insights with the three most useful findings. Include dates, metrics, values and comparisons.

   Add a line chart comparing Claim TAT Hours with Claim SLA Hours by date. Use hours on the vertical axis. Preserve the original data.
   ```

3. Read the revised plan. Select **Proceed** when it includes both the sheet and chart.
4. Open `Reviewed Insights`. Check one value against `KPI_Data`, and inspect the dates, hours and 48-hour SLA line in the chart. Request corrections or use `Undo` for unwanted changes.
5. Save the workbook. If the result is incomplete, try smaller requests one at a time, reviewing the plan before `Proceed`:

   ```text
   Add Reviewed Insights with three findings, dates, values, comparisons and standard Excel formulas. Preserve the original data.
   ```

   ```text
   Add a daily line chart of Claim TAT Hours and Claim SLA Hours. Sort dates and use hours on the vertical axis.
   ```

<span id="ถ้าไม่มี-plan-หรือ-proceed" class="legacy-anchor" aria-hidden="true"></span>

#### If Plan or Proceed is unavailable

Ask the instructor to confirm the available editing route. In standard Copilot editing, use:

```text
Using KPI_Data and Definitions, add Reviewed Insights with three findings about claims turnaround, complaints and digital conversion. Include dates, values, comparisons and standard Excel formulas where appropriate. Add a daily claims turnaround/SLA line chart with hours on the vertical axis. Preserve the original data and do not infer causes. Write in English.
```

Review a preview if available, or inspect the actual result and use `Undo` when needed.

#### Quick check

- The insight sheet exists and one value matches `KPI_Data`.
- The chart sorts dates, uses hours and includes the 48-hour SLA line.

<span id="practice-3-ทําข้อร้องเรียนให้สังเกตง่าย" class="legacy-anchor" aria-hidden="true"></span>

### Practice 3 Make complaint levels easier to see

**Primary target:** Apply conditional formatting to show Complaint Count levels.

<span id="ขั้นตอน-2" class="legacy-anchor" aria-hidden="true"></span>

#### Steps

1. Return to `KPI_Data`, show all 28 days and select the `Complaint Count` data cells without the header.
2. Send:

   ```text
   Replace the existing conditional formatting for Complaint Count in KPI_Data with three levels of red. Keep every other column unchanged.
   ```

   Darker shades should indicate higher counts. If Copilot asks for thresholds, use 0–10, 11–17 and 18 or more. These are display bands, not business targets.
3. Check that 1 September (8) is light, 14 September (13) is medium and 21 September (24) is dark.

#### Quick check

- The three sample dates have appropriate shades; numbers remain readable and unchanged.
- The working workbook is saved in OneDrive.

<span id="scenario-2-นําเสนอรูปแบบบริการ" class="legacy-anchor" aria-hidden="true"></span>

## Scenario 2 Present the service patterns

Use the saved workbook to create a concise leadership overview.

<span id="ถ้า-workbook-ที่ทํายังไม่พร้อม" class="legacy-anchor" aria-hidden="true"></span>

### If your reviewed workbook is not ready

Open `Prepared assets/Asteria_Service_KPI_Reviewed_backup.xlsx`, or [download the backup](/files/Asteria_Service_KPI_Reviewed_backup.xlsx) and upload it. Check one `Reviewed Insights` value against `KPI_Data` and inspect chart dates and units. Identify it as a prepared backup when using it in the next steps. Its existing colors may differ from the red formatting you practiced.

<span id="practice-1-สร้าง-kpi-dashboard-สามสไลด์" class="legacy-anchor" aria-hidden="true"></span>

### Practice 1 Create a three-slide KPI dashboard

**Primary target:** Create a concise dashboard from checked Excel results.

<span id="ขั้นตอน-3" class="legacy-anchor" aria-hidden="true"></span>

#### Steps

1. Open **PowerPoint**, create a **Blank presentation**, and save it in OneDrive as:

   ```text
   Asteria_KPI_Dashboard.pptx
   ```

2. Open the **Copilot side panel**. Use `Add Content` or the equivalent available control to select the reviewed workbook as a work item. Confirm that the filename is your intended working copy or backup.
3. Send:

   ```text
   Create a three-slide executive KPI dashboard in English for the Asteria service review using the attached workbook:
   1. KPI overview: reporting period and the three main metrics.
   2. Service trend: claims turnaround chart, SLA line and a short explanation. Leave space for me to insert the Excel chart if you cannot reproduce it accurately.
   3. Decision discussion: key findings, unanswered questions and one issue requiring a decision.

   Use only workbook evidence. Do not invent causes or financial impacts.
   ```

4. Answer any clarification questions and generate the slides. If the chart is missing or differs from Excel, copy the Excel chart to Slide 2 or insert a readable image of it.
5. Check the chart and one value against Excel. Correct errors, keep **three slides**, and save.

#### Quick check

- The three-slide dashboard contains a readable chart and one value that matches Excel.
- It ends with a clear decision question and is saved in OneDrive.

<span id="practice-2-เพิ่มสไลด์แบบ-asteria-ในสําเนา-เสริม" class="legacy-anchor" aria-hidden="true"></span>

### Practice 2 Add Asteria-styled slides in a copy (optional)

**Primary target:** Try a template on three new slides while preserving the original dashboard.

<span id="ขั้นตอน-4" class="legacy-anchor" aria-hidden="true"></span>

#### Steps

1. Duplicate the completed dashboard and name the copy:

   ```text
   Asteria_KPI_Dashboard_Template_Comparison.pptx
   ```

   Keep the original `Asteria_KPI_Dashboard.pptx` for later activities.
2. Open `Prepared assets/Asteria_Presentation_Template.pptx` to inspect its three examples, or [download the template](/files/Asteria_Presentation_Template.pptx).
3. In the copy's Copilot side panel, use `Reference file` or the equivalent control to select the template as the design reference. Keep the reviewed workbook as the numerical source. Send:

   ```text
   Append three slides after the existing three. Use the same evidence and decision question. Use Asteria_Presentation_Template.pptx as the design template, keeping colors, fonts, layouts and chart styling consistent.

   Create a KPI overview, claims turnaround trend and decision-discussion slide. Keep slides 1–3 unchanged. Preserve numbers and missing information, using To confirm for unknowns. Do not add causes or financial claims. Write in English.
   ```

4. Compare slides 1–3 with the original and slides 4–6 with the template. Check one value against Excel and save **six slides**. Apply the new styling only to the three appended slides.

<span id="ถ้าไม่มีการอ้างอิง-pptx-หรือรูปแบบไม่ตาม-template" class="legacy-anchor" aria-hidden="true"></span>

#### If PPTX referencing or template styling is unavailable

Open a copy of the template, replace its three examples with your findings, and append them to the comparison deck using `Keep Source Formatting`. Ask the instructor or skip the extension if that route is unavailable. This is a manual fallback, not proof that Copilot applied the design successfully.

#### Quick check

- Slides 1–3 are unchanged, and the comparison deck contains six slides.
- Slides 4–6 follow the template while preserving the numbers and decision question.

<span id="ผลลัพธ์" class="legacy-anchor" aria-hidden="true"></span>

## Outputs

- `Asteria_Service_KPI_Reviewed.xlsx` with insights, formulas, a chart and complaint formatting, or the prepared backup.
- A three-slide `Asteria_KPI_Dashboard.pptx`.
- Optional: the six-slide `Asteria_KPI_Dashboard_Template_Comparison.pptx`. Later activities use the original dashboard.

## Tips & tricks

In PowerPoint, try:

```text
Make the slide titles easy for a busy executive to understand. Preserve all numbers and the original meaning.
```

<div class="voice-card"><strong>Pon:</strong> A chart is like a signpost. Check that it points in the same direction as the numbers before asking others to follow it.</div>

[← Exercise 1](./01-ground-the-brief) · [Exercise 3: Outlook →](./03-outlook-email-workflow)
