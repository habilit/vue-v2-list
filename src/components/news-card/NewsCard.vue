<template>
<v-hover>
    <template v-slot:default="{ hover }">
      <v-card
      class="mx-auto" min-height="330px" height="330px">
        <div v-if="!isEditItem">
        <v-img
        min-height="330px"
        height="330px"
        v-if="isDisplayImage"
        v-bind:src="urlToImage || 'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg'">
        <CardContent
        v-if="!isEditItem"
        v-bind:title="title"
        v-bind:id="id"
        v-bind:hasImage="true"
        v-bind:detail="detail" />
        </v-img>
        <CardContent
        v-if="!isDisplayImage && !isEditItem"
        class="blue-bg"
        v-bind:hasImage="false"
        v-bind:title="title"
        v-bind:id="id"
        v-bind:detail="detail" />
        </div>
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
            :opacity="0.95"
          >
            <v-text-field
            v-model="editedTitle"
            :value="title"
            @input="setTitle"></v-text-field>
            <v-btn @click="editTitle(id)">Save</v-btn>
            <br/><br/>
            <router-link :to="{ name: 'News', params: { id: id } }"
          class="btn btn-warning removeUnderline"
          >
          <v-btn>SEE MORE</v-btn>
            </router-link>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import CardContent from '../card-content/cardContent.vue';

export default {
  name: 'NewsCard',
  components: {
    CardContent,
  },
  computed: {
    ...mapGetters(['isLoading', 'currentKeyword']),
  },
  data: () => ({
    overlay: false,
    isEditItem: false,
    dialog: false,
    editedTitle: '',
  }),
  mounted() {
    this.editedTitle = this.title;
  },
  methods: {
    ...mapActions(['updateTitle']),
    editTitle() {
      this.updateTitle({ newsId: this.id, newTitle: this.editedTitle });
    },
    setTitle(val) {
      this.editedTitle = val;
    },
  },
  props: ['title', 'detail', 'isDisplayImage', 'color', 'id', 'urlToImage'],
};
</script>
<style>
.blue-bg {
    background-color: #243458;
    color: #fff;
    min-height:330px;
}
</style>
