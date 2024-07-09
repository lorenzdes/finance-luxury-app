<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <RouterLink to="/">
          Vue Luxe Life
        </RouterLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/financial" text>Financial Planning</v-btn>
      <v-btn to="/luxury" text>Luxury Discovery</v-btn>
      <v-btn to="/login" text>Login</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// Optionally add any logic related to the app bar or navigation
</script>

<style scoped>
/* Add scoped styles here */
</style>