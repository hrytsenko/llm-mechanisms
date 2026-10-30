---
title: "Evaluations"
description: "Evaluation grades an agent's runs against a definition of success, to catch regressions before they ship and quality drift after."
tier: situational
sidebar:
  order: 3
---

Evaluation grades an agent's runs against a definition of success, to catch regressions before they ship and quality drift after.

Evaluation reads two things from a run, and they fail independently: the trajectory — did the agent do the right things in the right order — and the final response — did the agent produce a correct and relevant result. Graders come in two kinds: code-based graders, such as a linter checking an artifact or a metric like ROUGE matching a response against a reference, are cheap and fast and produce a score compared against a threshold; model-based graders are slower and more expensive but cover what code cannot, such as semantic equivalence.

## Considerations

- Grade the trajectory and the response separately — a correct answer through a wrong path is still a bug.
- Always use an independent grader with a fresh context — an agent cannot reliably evaluate its own work.
- Prefer code-based graders where a rule exists, leaving model-based graders for the non-deterministic cases only.

## Specifics

- Anthropic provides model-based graders for managed agents, scoring each result against a rubric so the agent can iterate until it passes.
- OpenAI recommends Promptfoo as its evaluation engine, offering a wide range of code-based and model-based graders over output, context, and trajectory.
- Google builds evaluation in, with named code-based and model-based graders for the tool trajectory and the response, run over a dataset of eval cases.

## References

- [Define outcomes | Anthropic](https://platform.claude.com/docs/en/managed-agents/define-outcomes)
- [Evaluations | OpenAI](https://www.promptfoo.dev/docs/guides/evaluate-openai-agents-python/)
- [Evaluations | Google](https://adk.dev/evaluate/)
