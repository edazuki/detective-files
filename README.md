# detective-files — AI Setup Guide

This repository contains a file-based mystery RPG system operated through AI chat.

## For AI Assistants

**Start here:** Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) — it contains all instructions for running the game.

In some environments (GitHub Copilot in VS Code, etc.) this file is loaded automatically. If not, ask the AI to read it explicitly before starting.

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
