Here’s the plan to add a Metronome view in your Vue 3 project:

**Steps**

1. Create a new file: src/views/MetronomeView.vue. Use Vue 3 <script setup> and Quasar components for UI (tempo input, start/stop button).
2. Register the new view in src/router/index.js by importing MetronomeView and adding a route: `{ path: '/metronome', name: 'Metronome', component: MetronomeView }`.
3. Add a navigation link to the new view in HomeView.vue.
4. Extract metronome logic into a composable (src/composables/useMetronome.js) or a reusable component.

**Relevant files**

- src/views/MetronomeView.vue — new view
- src/router/index.js — add route
- src/views/HomeView.vue — add link to new view
- src/composables/useMetronome.js — optional, for metronome logic
