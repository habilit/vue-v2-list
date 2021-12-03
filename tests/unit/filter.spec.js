import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { expect } from 'chai';
import FilterBar from '../../src/components/filter/filter.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('FilterBar.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      clicks: () => 2,
      categories: () => ['input'],
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('Check If Filter display', async () => {
    const wrapper = shallowMount(FilterBar, { store, localVue });
    const { label } = wrapper.find('#filter-news').props();
    expect(label).to.include('Please select source');
  });

  // it('Check If Has Value in Text box', async () => {
  //   const wrapper = shallowMount(FilterBar, { store, localVue });

  //   const textInput = wrapper.find('input[type="text"]');
  //   await textInput.setValue('some value');
  //   expect(wrapper.find('input[type="text"]').element.value).toBe('some value');
  // });

  // it('Renders "store.getters.clicks" in second p tag', () => {
  //   const wrapper = shallowMount(FilterBar, { store, localVue });
  //   const p = wrapper.findAll('p').at(1);
  //   expect(p.text()).toBe(getters.clicks().toString());
  // });
});
