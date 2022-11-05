<script lang="ts" setup>
import Code from "@/components/Code.vue";
import TextInput from "./components/TextInput";
</script>

<template>
  <div class="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-10">
    <h1 class="text-5xl font-semibold mb-10">Vue Tailwind Components</h1>
    <Code title="TextInput.vue" :fileContent="TextInput" />
  </div>
</template>
