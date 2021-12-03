/* eslint-disable no-unused-vars */
import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CardContent from '../../src/components/card-content/cardContent.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CardContent.vue', () => {
  it('CardContent have correct title', () => {
    const wrapper = shallowMount(CardContent, {
      propsData: { title: 'tt', detail: 'xx' },
    });
    expect(wrapper.find('#title-content').text()).to.include('tt');
    expect(wrapper.find('#detail-content').text()).to.include('xx');
  });
});
