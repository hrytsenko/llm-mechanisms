---
title: "Approvals"
description: "Approvals route a decision on a model's chosen action to a human."
tier: situational
sidebar:
  order: 2
---

Approvals route a decision on a model's chosen action to a human.

When an action requires approval, the harness pauses and waits for a verdict — approving lets the action proceed, rejecting sends a reason back to the model, which can adapt. Because the approver is often out-of-band — a reviewer may respond hours later — the paused run must be serializable: persisted to storage and resumed later, rather than holding a process open. Without this, a pending approval stalls the run indefinitely.

## Considerations

- Reserve approvals for consequential actions — those that are irreversible or costly.
- Build notification and timeout yourself — harnesses do nothing with a stale request.
- Re-check state on resume — what was valid at pause time may be stale.
- Explain the reason for a denial to guide the model's next attempt.

## Specifics

- Anthropic places approvals at the end of a layered permission pipeline (after hooks, rules, and permission mode), via a runtime callback.
- OpenAI marks tools that pending approvals and serializes the paused run, so approvals can span processes and long waits.
- Google pauses the loop via a tool-confirmation flag until the user responds.

## References

- [Approvals | Anthropic](https://code.claude.com/docs/en/agent-sdk/user-input)
- [Human-in-the-loop | OpenAI](https://openai.github.io/openai-agents-python/human_in_the_loop/)
- [Action confirmation | Google](https://adk.dev/tools-custom/confirmation/)
