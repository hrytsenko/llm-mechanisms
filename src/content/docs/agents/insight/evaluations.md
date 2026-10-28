---
title: "Evaluations"
description: "Evaluation grades an agent's runs against a definition of success, to catch regressions before they ship and quality drift after."
tier: situational
sidebar:
  order: 3
---

Evaluation grades an agent's runs against a definition of success, to catch regressions before they ship and quality drift after.

Evaluation reads two things from a run, and they fail independently: the trajectory — did the agent do the right things in the right order — and the final response — did the agent produce a correct and relevant result.

Grading is done two ways. Deterministic scorers — a linter checking an artifact, or a metric like ROUGE matching a response against a reference — produce a score you grade against a threshold, cheap and fast, so they are preferred wherever a rule can express the check. LLM-as-a-judge is slower and more expensive but covers what rules cannot, such as semantic equivalence, so it is reserved for those non-deterministic cases.

## Consideration

- Grade the trajectory and the response separately — a correct answer through a wrong path is still a bug.
- Always use an independent grader with a fresh context — an agent cannot reliably evaluate its own work.
- Prefer rule-based grading where a rule exists, leaving LLM-as-a-judge for the non-deterministic cases only.

## Specifics

- Anthropic ships no eval framework for regular agents, but for managed agents it provisions an independent grader that scores each artifact against a rubric and iterates until it passes — a reference pattern for implementing evaluation.
- OpenAI recommends Promptfoo as its evaluation engine, offering a wide range of assertions over output, context, and trajectory.
- Google builds evaluation in, with named metrics for tool-trajectory matching and response scoring, run over a dataset (`eval_set`) of cases (`eval_case`).

## Reference

- [Define outcomes | Anthropic](https://platform.claude.com/docs/en/managed-agents/define-outcomes)
- [Model-graded metrics | OpenAI](https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/)
- [Evaluate agents | Google](https://adk.dev/evaluate/)
