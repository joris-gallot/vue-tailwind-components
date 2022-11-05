<script lang="ts" setup>
import {
  DocumentDuplicateIcon,
  ChevronRightIcon,
} from "@heroicons/vue/20/solid";
import { computed, ref } from "vue";
import { copyToClipboard } from "../utils";

defineProps({
  fileContent: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const code = ref<HTMLElement>();
const seeMore = ref(false);
const height = computed(() => {
  if (code.value) {
    return seeMore.value ? `${code.value.clientHeight}px` : "100px";
  }

  return seeMore.value ? "700px" : "100px";
});
</script>

<template>
  <div class="shadow border border-gray-200 rounded-lg">
    <div
      class="flex justify-between items-center border-b border-gray-200 px-5 p-4 rounded-t-lg"
    >
      <div class="flex items-center space-x-4">
        <button
          @click="seeMore = !seeMore"
          type="button"
          class="inline-flex items-center p-1 border border-transparent rounded-xl shadow-sm text-black bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          <ChevronRightIcon
            class="h-6 w-6 transition-all duration-200 ease"
            :class="{ 'rotate-90': seeMore }"
            aria-hidden="true"
          />
        </button>
        <h3 class="text-xl font-medium leading-6">{{ title }}</h3>
      </div>
      <button
        type="button"
        @click="copyToClipboard(fileContent)"
        class="inline-flex items-center p-1 border border-transparent rounded-xl shadow-sm text-black bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        <DocumentDuplicateIcon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <div
      class="relative rounded-b-lg transition-all duration-200 ease"
      :style="`height: ${height}`"
      :class="seeMore ? 'overflow-auto' : 'overflow-hidden'"
    >
      <div
        v-if="!seeMore"
        class="absolute z-10 bg-black bg-opacity-50 h-full w-full flex items-center justify-center"
      >
        <button
          @click="seeMore = !seeMore"
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          See more
        </button>
      </div>
      <pre ref="code" class="text-xs p-2 bg-black">{{ fileContent }}</pre>
    </div>
  </div>
</template>
