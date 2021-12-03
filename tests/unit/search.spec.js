import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { expect } from 'chai';
import SearchBar from '../../src/components/search-bar/SearchBar.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('SearchBar.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      isLoading: () => false,
      currentKeyword: () => '',
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('Check If SearchBar display', async () => {
    const wrapper = shallowMount(SearchBar, { store, localVue });
    const { label } = wrapper.find('#search-text').props();
    expect(label).to.include('Search...');
  });

  it('Check If Correct Initial Valu', async () => {
    const wrapper = shallowMount(SearchBar, {
      store,
      localVue,
      data() {
        return {
          search: 'short',
        };
      },
    });

    expect(wrapper.vm.search).to.include('short');
  });

  it('Check If Correct Initial Valu NULL', async () => {
    const wrapper = shallowMount(SearchBar, {
      store,
      localVue,
      data() {
        return {
          search: 'short',
        };
      },
    });

    wrapper.vm.onInputSearch('');
    expect(wrapper.vm.search).to.include('');
  });
});
