import Vue from 'vue';
import Vuex from 'vuex';
import { get, isEmpty, find } from 'lodash';
import { getCategories, makeid } from '../shared/index';
import { getHeadlineNews, getWrongApi } from '../services/news-service';

const searchByFilter = (newsList, selectedFilter) => newsList.filter((item) => {
  const sorceName = get(item, ['source', 'name']);
  return sorceName === selectedFilter;
});

const generateId = (newsList) => newsList.map((item, index) => ({
  ...item,
  id: makeid(3) + index,
}));

Vue.use(Vuex);
const allFilterValue = 'ALL';
export default new Vuex.Store({
  state: {
    newList: [],
    displayedNews: [],
    isError: false,
    isLoading: false,
    foundNews: null,
    currentKeyword: '',
    currentFilter: '',
    apiErrorMsg: '',
    categories: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.newList = news;
    },
    SET_DISPLAYED_NEWS(state, news) {
      state.displayedNews = news;
    },
    SET_CATAGORIES(state, catagories) {
      state.categories = catagories;
    },
    SET_FOUND_NEWS(state, foundNews) {
      state.foundNews = foundNews;
    },
    SET_NEWS_ERROR(state) {
      state.isError = true;
    },
    SET_FILTERS(state, currentFilter) {
      state.currentFilter = currentFilter;
    },
    SET_KEYWORD(state, currentKeyword) {
      state.currentKeyword = currentKeyword;
    },
    SET_ISLOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_API_ERROR(state, msg) {
      state.apiErrorMsg = msg;
    },
    UPDATE_DISPLAYED_NEWS(state, { updatedNews, catagories }) {
      state.displayedNews = updatedNews;
      if (!isEmpty(catagories)) {
        state.categories = catagories;
      }
    },
  },
  actions: {
    async fetchNews({ commit }) {
      commit('SET_ISLOADING', true);
      try {
        const res = await getHeadlineNews();
        const data = get(res, ['articles']) || [];
        const catagories = getCategories(data);
        catagories.push(allFilterValue);
        commit('SET_CATAGORIES', catagories);
        const idData = generateId(data);
        commit('SET_NEWS', idData);
        commit('SET_DISPLAYED_NEWS', idData);
        commit('SET_ISLOADING', false);
      } catch (error) {
        commit('SET_ISLOADING', false);
        commit('INSERT_ERROR', error);
      }
    },
    setFilter({ commit, state }, selectedFilter) {
      let filteredNews = get(state, ['newList']);
      if (selectedFilter !== allFilterValue) {
        filteredNews = searchByFilter(filteredNews, selectedFilter);
      }
      commit('SET_DISPLAYED_NEWS', filteredNews);
    },
    setError({ commit }, error) {
      const msg = {
        status: error?.status || '',
        message: error?.message || '',
      };
      commit('SET_API_ERROR', msg);
    },
    updateTitle({ commit, state }, updatedData) {
      const { newsId, newTitle } = updatedData;
      let newsList = get(state, ['newList']);
      let displayedNews = get(state, ['displayedNews']);
      newsList = newsList.map((item) => ({
        ...item,
        ...(item.id === newsId && { title: newTitle }),
      }));
      displayedNews = displayedNews.map((item) => ({
        ...item,
        ...(item.id === newsId && { title: newTitle }),
      }));
      commit('SET_DISPLAYED_NEWS', displayedNews);
      commit('SET_NEWS', newsList);
    },
    async searchNews({ commit, state }, val) {
      commit('SET_KEYWORD', val);
      commit('SET_ISLOADING', true);
      const filterVal = state.currentFilter;
      try {
        const res = await getHeadlineNews(val);
        let data = get(res, ['articles']) || [];
        if (!isEmpty(filterVal)) {
          data = searchByFilter(data, filterVal);
        }
        data = generateId(data);
        commit('SET_DISPLAYED_NEWS', data);
        commit('SET_NEWS', data);
        commit('SET_ISLOADING', false);
      } catch (error) {
        commit('SET_ISLOADING', false);
        commit('INSERT_ERROR', error);
      }
    },
    async getNewById({ commit, state }, id) {
      let currentNews = get(state, ['newList']);
      if (isEmpty(currentNews)) {
        const res = await getHeadlineNews();
        const data = get(res, ['articles']) || [];
        currentNews = data;
      }
      const foundNews = find(currentNews, { id });
      commit('SET_FOUND_NEWS', foundNews);
      return foundNews;
    },
    async getWrongApi({ commit }) {
      let res;
      try {
        res = await getWrongApi();
      } catch (error) {
        if (error.response) {
          const errMsg = get(error, ['response', 'data', 'message']);
          const errCode = get(error, ['response', 'status']);
          commit('SET_API_ERROR', {
            status: errCode,
            message: errMsg,
          });
        }
      }
      return res;
    },
  },
  modules: {
  },
  getters: {
    newList(state) {
      return state.newList;
    },
    categories(state) {
      return state.categories;
    },
    isLoading(state) {
      return state.isLoading;
    },
    displayedNews(state) {
      return state.displayedNews;
    },
    currentKeyword(state) {
      return state.currentKeyword;
    },
    apiErrorMsg(state) {
      return state.apiErrorMsg;
    },
  },
});
