import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLinesStore = defineStore('lines', () => {
  const lines = ref([])

  const addLine = (line) => {
    lines.value.push({ ...line })
  }

  const setLines = (newLines) => {
    lines.value = newLines
  }

  const $reset = () => {
    lines.value = []
  }

  return { lines, addLine, setLines, $reset }
})
