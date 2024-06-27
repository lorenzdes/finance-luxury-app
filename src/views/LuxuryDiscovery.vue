<template>
    <v-container>
      <h1>Luxury Discovery</h1>
      <v-row>
        <v-col v-for="experience in luxuryExperiences" :key="experience.id" cols="12" md="4">
          <v-card>
            <v-card-title>{{ experience.name }}</v-card-title>
            <v-card-text>{{ experience.description }}</v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="bookExperience(experience.id)">Book Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const luxuryExperiences = ref([]);
  
  const fetchLuxuryExperiences = async () => {
    try {
      const response = await axios.get('/api/luxury-experiences');
      luxuryExperiences.value = response.data;
    } catch (error) {
      console.error('Error fetching luxury experiences:', error);
    }
  };
  
  const bookExperience = (experienceId) => {
    console.log(`Booking experience with ID ${experienceId}`);
  };
  
  onMounted(() => {
    fetchLuxuryExperiences();
  });
  </script>
  
  <style scoped>
  /* Add scoped styles here */
  </style>
  