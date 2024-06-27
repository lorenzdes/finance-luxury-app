<template>
    <v-container>
      <h1 v-if="user">Welcome, {{ user.name }}!</h1>
      <v-row v-if="user">
        <v-col v-for="interest in user.preferences" :key="interest" cols="12">
          <v-card>
            <v-card-title>{{ interest }} Feed</v-card-title>
            <v-card-text>
              <div v-if="feeds[interest] && feeds[interest].length > 0">
                <div v-for="(article, index) in feeds[interest]" :key="index">
                  <p><strong>{{ article.title }}</strong></p>
                  <p>{{ article.description }}</p>
                  <p>Published on: {{ new Date(article.publishedAt).toLocaleDateString() }}</p>
                  <p><a :href="article.url" target="_blank">Read full article</a></p>
                  <p>Source: {{ article.source.name }}</p>
                </div>
              </div>
              <div v-else>
                Loading content for {{ interest }}...
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import axios from 'axios';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const user = computed(() => store.state.user);
  const feeds = ref({});
  
  const apiKey = 'e6740d6a806940228bd23dc760fae6a0';
  const apiEndpoint = 'https://newsapi.org/v2/everything';
  
  const fetchCuratedContent = async (interest) => {
    const params = {
      q: interest,
      language: 'it', // Language (optional)
      pageSize: 5, // Number of articles to fetch
      apiKey: apiKey,
    };
  
    try {
      const response = await axios.get(apiEndpoint, { params });
      feeds.value[interest] = response.data.articles;
    } catch (error) {
      console.error(`Error fetching curated content for ${interest}:`, error);
    }
  };
  
  onMounted(() => {
    if (user.value && user.value.preferences) {
      user.value.preferences.forEach((interest) => {
        fetchCuratedContent(interest);
      });
    }
  });
  </script>
  
  <style scoped>
  /* Add scoped styles here */
  </style>
  