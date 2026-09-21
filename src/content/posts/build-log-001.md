---
title: "Build log #1: This website is the project"
description: "Why I'm hand-building this site, why Astro won, and how one website serves three goals at once."
pubDate: 2026-09-21
tags: ["meta", "astro", "learn-in-public"]
---

I have three goals: learn AI, build and ship with AI, and learn marketing. For a while they sat in my notes as three separate ambitions, which meant none of them had a vehicle. This website is the vehicle — one loop that does all three.

The loop is simple. Each week I learn something real, build it into this site, publish the writeup, and cut the writeup into social posts. Learn, build, market — same artifact, three outcomes. If a week produces no artifact, the week didn't happen.

## Why hand-build it

The lazy option was a site builder. The fashionable option was Next.js. I picked neither, for reasons that are really about what I'm optimizing for.

A site builder would have been done in an afternoon and taught me nothing. The whole point of this project is the learning — I want to actually understand HTML, CSS, and how the web fits together, not rent that understanding from a template.

Next.js was tempting because it's where the jobs are. But this is a content-first site: essays, notes, small experiments. Next.js would have me learning framework plumbing instead of web fundamentals, and shipping a lot of JavaScript to readers who just want to read. Wrong tool, wrong lessons.

Astro won because it matches the shape of the thing. Markdown-first content, zero JavaScript by default, real HTML/CSS/JS when I want it — and the day I need a database-backed app or an interactive island, I can add it without rebuilding the site. It's the boring choice that stays correct the longest.

## The stack, concretely

Astro on Cloudflare Pages. Content lives in Markdown files under `src/content/posts/`, which is also an Obsidian vault folder — I write notes in Obsidian, and a git commit is the entire publishing pipeline. No CMS, no sync service, no ceremony. Total cost: the domain, about ten bucks a year.

## What "done" looks like

Version one is deliberately small: home, writing, projects, experiments, about, RSS. The experiments page is the interesting one long-term — that's where I'll learn web animation properly, starting with CSS scroll-driven effects and working up to GSAP. Each experiment ships as a real interactive piece, not a demo reel.

The first real test of the loop comes next week: pick an agent framework question, build the smallest experiment that answers it, publish the writeup here. If the loop survives contact with a day job, the system works.

This post is artifact one. Onward.
