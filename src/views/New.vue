<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{title || 'No Title'}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <router-link :to="{ name: 'Home' }" class="btn btn-warning removeUnderline">
            <v-btn>BACK</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="mx-auto" max-width="600">
              <v-img
              v-bind:lazy-src="urlToImage"
              class="white--text align-end"
              height="200px"
              v-bind:src="urlToImage"
            >
            <v-card-title>{{title || 'No Title'}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">
              <div>{{date || '-'}}</div>
            </v-card-subtitle>
            <v-card-text class="text--primary">
              <div>{{newsDescription || 'Not found'}}</div>
            </v-card-text>
            </v-card>
            <div class="mx-auto ref" max-width="600">Ref : {{url || '-'}}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { get } from 'lodash';

export default {
  props: { id: String },
  data: () => ({
    newsDescription: '-',
    date: '-',
    title: '',
    url: '',
    urlToImage: '',
  }),
  computed: {
    ...mapGetters(['foundNews']),
  },
  methods: {
    ...mapActions(['getNewById']),
  },
  async mounted() {
    const foundNews = await this.getNewById(this.id);
    this.newsDescription = get(foundNews, ['description']);
    this.date = get(foundNews, ['publishedAt']);
    this.title = get(foundNews, ['title']);
    this.url = get(foundNews, ['url']);
    this.urlToImage = get(foundNews, ['urlToImage']);
    if (this.date) {
      const date = new Date(this.date);
      const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
      this.date = `${day}.${month}.${year}`;
    }
  },
};
</script>
<style>
.ref {
  color: #aaa;
  padding: 1rem;
  max-width: 600px;
}
</style>
