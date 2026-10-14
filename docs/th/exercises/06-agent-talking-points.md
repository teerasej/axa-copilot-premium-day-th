# Instructor demo: Claims Document Readiness Agent

The instructor demonstrates creating an agent in **Agent Builder in Microsoft 365 Copilot**. Learners observe and help check the results. You do not need to open Agent Builder or build an agent yourself.

<span id="สิ่งที่จะได้เห็น" class="legacy-anchor" aria-hidden="true"></span>

## What you will see

1. Define the agent's role and boundaries in Instructions.
2. Add a fictional checklist as Knowledge.
3. Review a synthetic claim package, distinguishing missing documents, incomplete information and unreadable information.
4. Draft an English email from findings checked by a person, without sending it.
5. Test a request to approve a claim and inspect whether the agent maintains its boundary.

This agent checks document readiness against a fictional checklist. It does not decide coverage, eligibility, approval, rejection, payment or medical conclusions. The checklist is not organizational policy.

<span id="จุดสังเกตของผู้เรียน" class="legacy-anchor" aria-hidden="true"></span>

## What to watch for

- Does the answer use the specified checklist or invent requirements?
- Does it distinguish a document not received from a received document with incomplete information?
- If a file cannot be read, does it state that limitation rather than claiming the document is missing?
- Does the draft preserve the facts and require human review before use?

> **Access:** The instructor must verify permissions to create agents and add Knowledge before the demonstration. Having these materials or observing a demo does not establish learner-account access.

<span id="เมื่อใช้เส้นทางสํารอง" class="legacy-anchor" aria-hidden="true"></span>

## When a fallback is used

The instructor may switch to a prepared agent if creation or upload takes too long. If attachments are unavailable, synthetic text may be used with the limitation clearly stated. If Agent Builder is unavailable, the instructor will show labelled reference screens and illustrative output. This does not count as a successful live demo.

<div class="voice-card"><strong>Pon:</strong> Instructions are like a job description; Knowledge is the handbook on the desk. The assistant uses the handbook to check the list, while a person remains responsible for decisions.</div>

References: [Build agents in Agent Builder](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents) · [Add knowledge sources](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-knowledge)

[← Group showcase](./07-group-showcase) · [Reflect and apply →](../wrap-up)
