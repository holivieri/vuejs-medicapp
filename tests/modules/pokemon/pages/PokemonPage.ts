import { mount, RouterLinkStub } from '@vue/test-utils';
import PakemonPage from '@/modules/pokemons/pages/PakemonPage.vue';

describe('Pokemon Page', () => {
  const wrapper = mount(PakemonPage, {
    props: { id: 25 },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  test('should render the component correctly', () => {
    console.log(wrapper.html());
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    );
  });

  test('should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterLinkStub);

    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: 26 } });

    console.log(link.props());
  });
});
