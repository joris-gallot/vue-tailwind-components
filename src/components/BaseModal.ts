export default `<script setup lang="ts">
defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  close: {
    type: Function,
    required: true,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed inset-0 z-40 overflow-y-auto"
      @close="close()"
    >
      <div
        class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            :class="{ 'pointer-events-none': !closeOnClickOverlay }"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block transform rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:max-w-5xl sm:align-middle"
          >
            <slot />
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>`;
