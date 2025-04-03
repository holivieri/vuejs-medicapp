import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';
import router from '@/router';
import { shallowMount } from '@vue/test-utils';

describe('LandingLayout', () => {
  test('should be render correctly', () => {
    const wrapper = shallowMount(LandingLayout, { global: { plugins: [router] } });

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.find('footer').html()).toContain(
      `${new Date().getFullYear()} Pampa IT Services`,
    );
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
  });
});
