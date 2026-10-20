# AXA Microsoft 365 Copilot Premium — English Edition

The coordinator-confirmed English edition for the two remaining sessions. The morning covers Copilot Chat, Word, Excel and PowerPoint. The afternoon includes focused email and meeting routes, a choice of seven creative group missions with individual starter packs, a showcase and an instructor-only Agent Builder demo.

[Open the learner site](https://teerasej.github.io/axa-copilot-premium-day-th/th/) · [Preparation](docs/th/before-you-begin.md) · [Practice files](docs/th/files.md)

## Exercises

1. [An evidence-grounded brief](docs/th/exercises/01-ground-the-brief.md)
2. [Excel to a KPI dashboard](docs/th/exercises/02-kpi-to-decision-brief.md)
3. [Outlook and Copilot Chat](docs/th/exercises/03-outlook-email-workflow.md)
4. [Teams to a follow-up brief](docs/th/exercises/04-teams-meeting-to-document.md)
5. [Choose a group challenge](docs/th/exercises/05-group-challenge.md)
6. [Showcase your group work](docs/th/exercises/07-group-showcase.md)
7. [Watch the Agent Builder demo](docs/th/exercises/06-agent-talking-points.md)

Optional: [More Outlook practice](docs/th/resources/outlook-extra-practice.md) · [Executive update](docs/th/exercises/05-executive-update.md)

## Practice navigation and artwork

The local course includes an Exercises dropdown and numbered practice links in the sidebar. The current exercise and challenge open automatically; other groups can be expanded manually. Mobile learners use **Exercises & practices**. Optional Level 2 links reveal their expandable section, and the bottom pager stays in course order.

Maintain exercise, practice and challenge destinations in `docs/.vitepress/navigation.json`; `navigation.ts` derives the dropdown, sidebar and course pager. Preserve existing page URLs and heading anchors when updating labels.

The 39 practice and challenge-level illustrations use `PracticeIllustration` and the public-safe `docs/.vitepress/theme/practice-images.json` mapping. The 78 WebP derivatives live in `docs/public/images/practice-headers/`. Keep generated originals, prompts, hashes and private review records outside this repository. Reuse the complete artwork proportionally and verify every navigation anchor and image on desktop and mobile after changes.

## Maintain and publish

`docs/th/` remains the canonical source. Its legacy folder name and published URLs are retained for link compatibility; the current content is English. This repository is independent of the original first-round English course. Downloads contain synthetic Asteria data. Real email and meeting outputs stay in each learner's private account.

```sh
pnpm install --frozen-lockfile
pnpm run validate
pnpm run docs:build
pnpm run docs:preview
```

Publish `main` through the existing manually dispatched `Deploy Thai learner site to Pages` workflow; its technical name is retained. Publication does not establish tenant access or classroom readiness. Rehearse separately with an ordinary learner account and the instructor's demo account.

## Group challenge packs

Each mission starts in Word, Excel or PowerPoint and uses at least two document apps meaningfully. Learners choose their workflow and Copilot experience. Core practice-file hashes remain in `scripts/practice-files.json`; new documents and seven starter ZIPs are listed separately in `scripts/challenge-packs.json`. Review Desk correction notes stay in the private facilitator workspace.

The main course ZIP includes the twelve unchanged core files, a root start guide and seven self-contained folders under `Group challenges`. Rebuild with `python3 scripts/course-archive.py --build`; validate with `pnpm run validate` (Node.js and Python 3 required). Standalone challenge packs remain unchanged.
