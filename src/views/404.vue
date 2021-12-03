<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>404 Page not found</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <router-link :to="{ name: 'Home' }" class="btn btn-warning removeUnderline">
            <v-btn>BACK</v-btn>
            </router-link>
            <div class="page-not-found">404 Page not found</div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>
