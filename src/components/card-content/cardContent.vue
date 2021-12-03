<template>
    <v-card-text :class="{'bg-white': hasImage === true }">
        <router-link
        :to="{ name: 'News', params: { id: id } }"
        class="btn btn-warning removeUnderline"
        >
            <v-card-title
            id="title-content"
            class="limit-line"
            :class="{'white-text': hasImage === false }">
                {{title || 'No Title'}}
            </v-card-title>
         </router-link>
        <div class="text--primary limit-line"
        id="detail-content">{{detail || 'No Detail'}}</div>
    </v-card-text>
</template>
<script>
export default {
  name: 'CardContent',
  props: ['title', 'detail', 'hasImage', 'id'],
};
</script>
<style>
.limit-line {
    font-size: 1rem;
    display: -webkit-box !important;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000;
}
#title-content {
    padding: 16px 16px 0 16px;
    margin-bottom: 10px;
}
.white-text {
    color: #fff;
}
.bg-white {
    background-color:rgb(192,192,192);opacity:0.6;
    width: 100%;
    height: -webkit-fill-available;
    color: #000;
}
</style>
