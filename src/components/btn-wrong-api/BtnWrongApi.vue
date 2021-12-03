<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click="callWrongApiError"
    >
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          ERROR {{apiErrorMsg.status}}
        </v-card-title>
        <v-card-text>
        {{apiErrorMsg.message}}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="closeModal"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { isEmpty } from 'lodash';

export default {
  name: 'BtnWrongApi',
  data: () => ({
    descriptionLimit: 60,
    timeoutId: null,
    dialog: false,
  }),
  computed: {
    ...mapGetters(['apiErrorMsg']),
  },
  watch: {
    apiErrorMsg(newApiErrorMsg) {
      if (!isEmpty(newApiErrorMsg.message)) {
        console.log(
          'newApiErrorMsg', newApiErrorMsg,
        );
        this.openModal();
      }
    },
  },
  methods: {
    ...mapActions(['getWrongApi', 'setError']),
    onInputSearch(value) {
      this.search = value;
      if (this.isLoading) return;
      clearTimeout(this.timeoutId);

      this.timeoutId = setTimeout(() => { this.searchNews(value); }, 1000);
    },
    callWrongApiError() {
      this.getWrongApi();
    },
    closeModal() {
      this.dialog = false;
      this.setError();
    },
    openModal() {
      this.dialog = true;
    },
  },
};
</script>
