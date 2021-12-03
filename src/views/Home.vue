<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Application News</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
          <SearchBar />
          </v-col>
          <v-col cols="12" sm="6">
          <FilterBar v-bind:categories="categories" />
          </v-col>
        </v-row>
        <v-row v-if="isLoading === false">
          <v-col
            v-for="(item, i) in displayedNews"
            v-bind:key="item.id"
            cols="12"
            sm="3"
          >
            <NewsCard
            v-bind:isDisplayImage="(i % 8 === 1 || i % 8 === 3 || i % 8 === 4 || i % 8 === 6)"
            v-bind:title="item.title"
            v-bind:id="item.id"
            v-bind:urlToImage="item.urlToImage"
            v-bind:detail="item.description" />
          </v-col>
        </v-row>
        <v-row v-if="isLoading === true">
          <v-overlay :value="isLoading">
          <v-progress-circular
            indeterminate
            size="64"
          ></v-progress-circular>
        </v-overlay>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NewsCard from '../components/news-card/NewsCard.vue';
import SearchBar from '../components/search-bar/SearchBar.vue';
import FilterBar from '../components/filter/filter.vue';

export default {
  name: 'NewsCardList',
  components: {
    NewsCard,
    SearchBar,
    FilterBar,
  },
  methods: {
    ...mapActions(['fetchNews']),
  },
  computed: {
    ...mapGetters(['newList', 'isLoading', 'displayedNews', 'categories']),
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
