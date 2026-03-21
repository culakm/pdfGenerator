# CLAUDE.md

<!--
CLAUDE.md moze byt viac, v kazdom podadresari a tie su potom nacitavane ked claude pracuje v nich

We build this app described in @SPEC.MD. Read that file for general architectural tasks or to double check the exact database structure, tech stack or application architecture.

Keep your replies extremly concise and focus on conveying the key information. No unnecessary fluff, no long code snippets. -->

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server with hot reload
- `npm run build` — production build
- `npm run preview` — preview production build locally

No test runner or linter is configured.

## Architecture

Vue 3 SPA (Composition API with `<script setup>`) using Vite, Vue Router, and Pinia.

- `src/main.js` — app entry, registers Pinia and Vue Router
- `src/App.vue` — minimal shell, renders `<RouterView />`
- `src/router/index.js` — route definitions
- `src/stores/` — Pinia stores (shared state). `lines.js` holds the main `lines` data array used across views.
- `src/views/` — page-level components mapped to routes
- `@` alias resolves to `src/`

## Conventions

- Use `<template>` first, then `<script setup>` in Vue SFCs
- Use arrow functions (`const fn = () => {}`) instead of function declarations
