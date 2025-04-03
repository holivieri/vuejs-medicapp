import {
  defineComponent,
  onActivated,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('setup');

    const counter = ref(0);

    onMounted(() => {
      console.log('onMounted');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onRenderTracked(() => {
      console.log('onRenderTracked');
    });

    onActivated(() => {
      console.log('onActivated');
    });

    return { counter };
  },
});
