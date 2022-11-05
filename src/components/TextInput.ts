export default `<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  type: {
    type: String,
    default: "text",
  },
  modelValue: String,
  label: String,
  name: String,
  placeholder: String,
  prefix: String,
  errors: {
    type: Array as PropType<String[]>,
    default: [],
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="label"
      :class="{ '!text-red-500': errors.length }"
      >{{ label }}<span v-if="required">*</span></label
    >

    <div class="mt-1 flex rounded-md shadow-sm">
      <span
        v-if="prefix"
        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
      >
        {{ prefix }}
      </span>
      <input
        :type="type"
        :name="name"
        :id="name"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :class="[
          { 'rounded-l-md': !prefix },
          errors.length
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
        ]"
        class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md sm:text-sm border-gray-300"
      />
    </div>

    <p class="error-message" v-for="(e, i) in errors" :key="i">
      {{ e }}
    </p>
  </div>
</template>`;
