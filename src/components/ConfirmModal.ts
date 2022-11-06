export default `<script lang="ts" setup>
import { COLOR } from "@/constants/colors";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
});

const emit = defineEmits(["confirm"]);

const confirm = () => {
  emit("confirm");
  props.close();
};
</script>

<template>
  <BaseModal
    :closeOnClickOverlay="true"
    :withoutPadding="false"
    :open="open"
    :close="close"
  >
    <div
      class="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom transition-all sm:w-full sm:max-w-lg sm:p-6 sm:align-middle"
    >
      <div class="sm:flex sm:items-start">
        <div
          class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 bg-red-100"
        >
          <ExclamationTriangleIcon class="flex-shrink-0 w-5 h-5 text-red-600" />
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <DialogTitle
            as="h3"
            class="text-lg font-medium leading-6 text-gray-900"
          >
            {{ title }}
          </DialogTitle>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-6 sm:flex sm:justify-end sm:space-x-2">
        <Button @click="close()" :color="COLOR.NORMAL"> Cancel </Button>
        <Button @click="confirm" :color="COLOR.DANGER"> Confirm </Button>
      </div>
    </div>
  </BaseModal>
</template>`;
