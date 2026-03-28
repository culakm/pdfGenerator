<template>
  <main>
    <h1>Line Form</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Order</label>
        <input v-model.number="form.order" type="number" required />
      </div>
      <div>
        <label>Lat</label>
        <input v-model="form.lat" type="text" />
      </div>
      <div>
        <label>Lng</label>
        <input v-model="form.lng" type="text" />
      </div>
      <div>
        <label>Note</label>
        <input v-model="form.note" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>

    <h2>Import / Export</h2>
    <button @click="exportToClipboard">Export to clipboard</button>
    <div>
      <textarea v-model="importJson" rows="6" cols="50" placeholder="Paste JSON here..."></textarea>
    </div>
    <button @click="importFromJson">Import (replace)</button>
    <button @click="appendFromJson">Import (append)</button>

    <h2>Lines ({{ lines.length }})</h2>
    <ul>
      <li v-for="(line, i) in lines" :key="i">
        #{{ line.order }} — {{ line.lat }}, {{ line.lng }} — {{ line.note }}
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLinesStore } from '@/stores/lines'

const store = useLinesStore()
const { lines } = storeToRefs(store)
const { addLine, setLines } = store
const importJson = ref('')

const defaultForm = () => ({ order: null, lat: '', lng: '', note: '' })
const form = ref(defaultForm())

const exportToClipboard = () => {
  navigator.clipboard.writeText(JSON.stringify(lines.value, null, 2))
}

const importFromJson = () => {
  const parsed = JSON.parse(importJson.value)
  setLines(parsed)
  importJson.value = ''
}

const appendFromJson = () => {
  const parsed = JSON.parse(importJson.value)
  parsed.forEach((line) => addLine(line))
  importJson.value = ''
}

const onSubmit = () => {
  addLine({ ...form.value })
  form.value = defaultForm()
}
</script>
