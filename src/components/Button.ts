export default `<script lang="ts" setup>
import { COLOR } from "@/constants/colors";
import { PropType } from "vue";

defineProps({
  color: {
    type: String as PropType<COLOR>,
    default: COLOR.NORMAL,
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset">,
    default: "button",
    validator(value: string) {
      return ["button", "submit", "reset"].includes(value);
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <div class="relative">
    <button
      @click.self="emit('click')"
      :type="type"
      :disabled="loading || disabled"
      class="rounded-md transition-colors ease duration-200 border text-sm font-medium leading-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
      :class="[
        {
          'bg-indigo-600 text-white enabled:hover:bg-indigo-700 focus:ring-indigo-500 border-transparent':
            color === COLOR.PRIMARY,
        },
        {
          'bg-indigo-100 text-indigo-700 enabled:hover:bg-indigo-200 focus:ring-indigo-500 border-transparent':
            color === COLOR.SECONDARY,
        },
        {
          'bg-red-600 enabled:hover:bg-red-700 focus:ring-red-500 border-transparent text-white':
            color === COLOR.DANGER,
        },
        {
          'text-gray-700 enabled:hover:bg-gray-50 border-gray-300 focus:ring-indigo-500':
            color === COLOR.NORMAL,
        },

        { 'cursor-not-allowed opacity-50': loading || disabled },
        iconOnly ? 'p-1' : 'px-3 py-2',
        fullWidth
          ? 'w-full flex items-center justify-center'
          : 'inline-flex items-center',
      ]"
    >
      <slot />
    </button>

    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center rounded-md bg-gray-900 bg-opacity-80"
    >
      <Loader class="-ml-1 mr-3 h-5 w-5 text-white" />
    </div>
  </div>
</template>`;
