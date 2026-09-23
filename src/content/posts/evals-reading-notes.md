---
title: "Reading notes: evals, or how to know if the thing works"
description: "Notes on Hamel Husain's evals writing — product evals vs. benchmarks, the L1/L2/L3 levels, and the loop that turns failures into a better system."
pubDate: 2026-09-22
tags: ["ai", "evals", "agents", "reading-notes"]
draft: true
---

I've been reading [Hamel Husain's notes on AI product engineering](https://hamel.dev/) — specifically ["Your AI Product Needs Evals"](https://hamel.dev/blog/posts/evals/) and the ["LLM Evals: Everything You Need to Know" FAQ](https://hamel.dev/blog/posts/evals-faq/). Here's what stuck.

## The core idea

AI evals measure whether an AI system works for its users on realistic tasks and data. They're tests that tell you whether the system is doing what you want — they give your team feedback when the product drifts from user needs or business goals. And the failures they catch become data you can use to improve the system. It's a flywheel, not a checklist.

## Two flavors

When people say "evals," they usually mean one of two things:

- **Model benchmarks** — how good is the model in general.
- **Product evals** — does *your specific product* do what you want it to do.

Product evals are the ones that matter for builders. They turn your judgment about what a good product experience looks like into metrics you can track, and they cover every component — the model, prompts, retrieval, tools, application code. They're focused on capturing the failures that matter to users and the business, not the ones that look interesting on a leaderboard.

## The three levels

In order of effort and cost:

1. **L1 — unit tests.** Cheap, deterministic assertions: valid JSON, no PII in the output, the right tool called with the right arguments. Run on every change, in seconds. They catch regressions, not quality.
2. **L2 — human and model evals of traces.** Sample real outputs and grade them against a rubric — by a human, or by an LLM judge you've calibrated against human grades. Slower and periodic. This is the workhorse: it's where you learn what "good" actually means and find the failures that matter.
3. **L3 — A/B tests.** Two variants on real traffic, compared on business metrics. Highest signal, highest cost. Only makes sense once you have users and a mature product.

## The part I'm still internalizing: how to actually use this

The workflow, as I understand it:

1. Ship the thinnest thing that works.
2. Log every trace — input in, output out.
3. **Error analysis first.** Read 20–50 traces by hand and categorize the failure modes before building any infrastructure.
4. Convert what you find: deterministic failures become L1 assertions; judgment-call failures become L2 rubric items.
5. Build the smallest harness that runs L1 on every change and L2 on a schedule. Track pass rates over time — the eval suite *is* the experiment.
6. Change one thing at a time, re-run, compare. That's eval-driven development.

Put in terms I already know: L2 is building a labeled evaluation set and measuring inter-rater reliability between your judge and a human grader — annotator agreement, which is just statistics. L3 is a randomized experiment. The new part isn't the math, it's applying it to stochastic software instead of data.

Next step: pick the first micro-tool, write 15–20 eval tasks before tuning anything, and build the fifty-line harness. The essay after that one writes itself.
