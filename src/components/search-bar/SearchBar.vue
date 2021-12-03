<template>
<div class="search-bar">
  <v-row>
      <v-col cols="12" sm="8">
        <v-text-field
        id="search-text"
        v-model="search"
        @input="onInputSearch"
        label="Search..."></v-text-field>
      </v-col>
      <v-col  cols="12" sm="3">
        <v-btn id="clear" :disabled="!search" color="grey darken-3" @click="clearSearch"> Clear
        <v-icon right>
          mdi-close-circle
        </v-icon>
        </v-btn>
      </v-col>
  </v-row>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data: () => ({
    descriptionLimit: 60,
    model: null,
    search: null,
    timeoutId: null,
  }),
  computed: {
    ...mapGetters(['isLoading', 'currentKeyword']),
  },
  methods: {
    ...mapActions(['searchNews']),
    onInputSearch(value) {
      this.search = value;
      if (this.isLoading) return;
      clearTimeout(this.timeoutId);

      this.timeoutId = setTimeout(() => { this.searchNews(value); }, 1000);
    },
    clearSearch() {
      this.search = null;
      if (this.isLoading) return;
      clearTimeout(this.timeoutId);

      this.timeoutId = setTimeout(() => { this.searchNews(this.search); }, 1000);
    },
  },
};
</script>
