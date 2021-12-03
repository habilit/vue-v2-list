<template>
  <div>
      <v-select
      id="filter-news"
      v-model="select"
      @change="onChange($event)"
      :items="categories"
      label="Please select source" outlined></v-select>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterBar',
  props: ['categories'],
  data() {
    return {
      select: 'ALL',
    };
  },
  methods: {
    ...mapActions(['setFilter']),
    onChange(value) {
      this.setFilter(value);
    },
  },
};
</script>
