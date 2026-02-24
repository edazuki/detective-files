# detective-files — AI Setup Guide

This repository contains a file-based mystery RPG system operated through AI chat.

## Design Philosophy

This system is designed to run on **any AI that can read and follow text instructions** — GitHub Copilot, Claude, GPT, or others. No specific AI is required. The AI itself acts as the game engine: it reads the scenario files and drives the game according to the rules.

This "AI-agnostic" design is one expression of a broader principle: **minimize dependency on any particular environment**. Avoiding compiled executables is part of the same thinking — the game should be portable, inspectable, and runnable wherever a capable AI and a text interface exist. All game logic lives in plain text files; nothing is locked inside a binary or a specific platform.

As a consequence, the system intentionally accepts some constraints (e.g., relying on the AI's ability to manage files and state) in exchange for this portability.

---

## For AI Assistants

**Start here:** Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) — it contains all instructions for running the game.  
Then read [`system/rules.md`](system/rules.md) for detailed game rules.

In GitHub Copilot (VS Code), these files are loaded automatically. In other AI environments, the user will paste this file as your first context — follow the instructions above to proceed.

## Repository Structure

```
.github/copilot-instructions.md  ← AI instructions (read this first)
system/rules.md                  ← Detailed game rules
scenarios/                       ← Scenario folders
  事件01_.../
    scenario.md                  ← Locations & flags
    characters.md                ← NPC definitions
    clues.md                     ← Evidence conditions
    truth.md                     ← Solution (AI eyes only)
    source-evidence/             ← Evidence file originals
evidence/                        ← Player's investigation desk (gitignored during play)
session/                         ← Session state & logs
templates/scenario-template.md  ← Template for creating new scenarios
```

## Human-Readable Guide

See [`README.html`](README.html) for full setup and play instructions.
