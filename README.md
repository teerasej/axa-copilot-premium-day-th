# AXA Microsoft 365 Copilot Premium — English Edition

The coordinator-confirmed English edition for the two remaining sessions. The morning covers Copilot Chat, Word, Excel and PowerPoint. The afternoon includes focused email and meeting routes, a choice of group challenge, a showcase and an instructor-only Agent Builder demo.

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

## Maintain and publish

`docs/th/` remains the canonical source. Its legacy folder name and published URLs are retained for link compatibility; the current content is English. This repository is independent of the original first-round English course. Downloads contain synthetic Asteria data. Real email and meeting outputs stay in each learner's private account.

```sh
pnpm install --frozen-lockfile
pnpm run validate
pnpm run docs:build
pnpm run docs:preview
```

Publish `main` through the existing manually dispatched `Deploy Thai learner site to Pages` workflow; its technical name is retained. Publication does not establish tenant access or classroom readiness. Rehearse separately with an ordinary learner account and the instructor's demo account.
