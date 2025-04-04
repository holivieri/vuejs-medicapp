import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';

describe('Router', () => {
  const wrapper = mount(App, { global: { plugins: [router] } });

  test('render HomePage when visiting /', async () => {
    await router.replace('/');
    await router.isReady();

    expect(wrapper.html()).toContain('Bienvenido a nuestro sitio web');
  });

  test('render FeaturesPage when visiting /Features', async () => {
    await router.replace('/features');
    await router.isReady();

    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });
});
