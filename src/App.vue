<template>
  <v-app>
    <v-app-bar app color="deep-purple darken-2" dark>
      <v-toolbar-title>
        <RouterLink to="/">
          <v-img
            src="/Black And White Modern Vintage Retro Brand Logo.png"
            alt="Vue Luxe Life Logo"
            contain
          ></v-img>
        </RouterLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-login-variant" to="/login" text class="white--text">Login</v-btn>
      <v-btn prepend-icon="mdi-rss" to="/" text class="white--text">Feed</v-btn>
      <v-btn prepend-icon="mdi-chart-line" to="/financial" text class="white--text">Financial Planning</v-btn>
      <v-btn prepend-icon="mdi-diamond" to="/luxury" text class="white--text">Luxury Discovery</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>LUX LIFE</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script setup>
// Optionally add any logic related to the app bar or navigation
</script>

<style scoped>
/* Add scoped styles here */
</style>
