<script lang="ts" setup>
import Code from "@/components/Code.vue";
import TextInput from "./components/TextInput";
import BaseModal from "./components/BaseModal";
import Loader from "./components/Loader";
import ConfirmModal from "./components/ConfirmModal";
import Notification from "./components/Notification";
import Button from "./components/Button";
</script>

<template>
  <div class="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-10">
    <h1 class="text-5xl font-semibold mb-10">Vue Tailwind Components</h1>
    <div class="space-y-6">
      <Code title="TextInput.vue" :fileContent="TextInput" />
      <Code title="BaseModal.vue" :fileContent="BaseModal" />
      <Code title="ConfirmModal.vue" :fileContent="ConfirmModal" />
      <Code title="Button.vue" :fileContent="Button" />
      <Code title="Loader.vue" :fileContent="Loader" />
      <Code title="Notification.vue" :fileContent="Notification" />
    </div>
  </div>
</template>
