import { router } from './../src/router/index';
import { mount, shallowMount, VueWrapper } from '@vue/test-utils';
import App from '@/App.vue';
import { wrap } from 'module';

describe('App', () => {
  test('should be render correctly with RouterView', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });
});
