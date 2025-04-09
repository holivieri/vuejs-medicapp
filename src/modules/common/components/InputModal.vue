<template>
  <!-- Open the modal using ID.showModal() method -->
  <button class="btn" onclick="my_modal_1.showModal()">open modal</button>
  <dialog id="my_modal_1" class="modal" :open="open">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action flex flex-col">
        <form method="dialog" @submit.prevent="submitValue">
          <input
            type="text"
            ref="inputRef"
            placeholder="Nombre del proyecto"
            class="input input-bordered input-primary w-full flex-1"
            v-model="inputValue"
          />
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex justify-end mt-5">
            <button class="btn mr-4">Close</button>
            <button type="submit" class="btn btn-primary">Aceptar</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
  <div class="modal-backdrop fix top-0 left-0 z-10 bg-black opacity-50 w-screen h-screen"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import InputModal from '@/modules/common/components/InputModal.vue';

interface Props {
  open: boolean;
}

defineProps<Props>();

const emits = defineEmits<{
  close: [void];
  value: [text: string];
}>();

const inputValue = ref('');
const inputRef = ref<HTMLElement | null>(null);

const submitValue = () => {
  console.log({ value: inputValue.value });
  if (!inputValue.value) {
    inputRef.value?.focus();
    return;
  }
  emits('value', inputValue.value.trim());
  emits('close');
  inputValue.value = '';
};
</script>
