<template>
  <div class="flex">
    <div class="flex main-area min-h-[calc(100vh-var(--ui-header-height))]">
      <PAI @selected="handleSelected" />
    </div>
    <div class="right-sidebar">
      <img v-if="state.selected" :src="`/images/thumb_${state.selected}.jpg`" :alt="state.selected">
    </div>
  </div>
</template>

<style>
.main-area {
  width: 75%;
}

.right-sidebar {
  width: 25%;
  min-height: 100%;
  border-left: 2.6px solid var(--color-blue);
  margin-block: 30px;
}

.right-sidebar img {
  width: 100%;
}
</style>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  selected: null
})

const handleSelected = (code) => {
  state.selected = code
}
</script>