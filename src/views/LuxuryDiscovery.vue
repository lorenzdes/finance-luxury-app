<template>
    <v-container>
      <h1>Luxury Discovery</h1>
      <v-row>
        <v-col v-for="place in luxuryPlaces" :key="place.id" cols="12" md="4">
          <v-card class="place-card">
            <v-card-title>{{ place.name }}</v-card-title>
            <v-card-actions>
              <v-btn color="primary" :href="getBookingUrl(place.name)" target="_blank">Book Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const apiKey = '5ae2e3f221c38a28845f05b695f67f79230a8b2fc8909af30b208fe4';
  const apiUrl = 'http://api.opentripmap.com/0.1/en/places/bbox';
  
  const luxuryPlaces = ref([]);
  
  const fetchLuxuryPlaces = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          lon_min: 6.6272658,
          lat_min: 36.6199873,
          lon_max: 18.7844746,
          lat_max: 47.0917834,
          kinds: 'tourist_facilities', // Adjust kinds as needed
          format: 'geojson',
          apikey: apiKey,
        },
      });
      luxuryPlaces.value = response.data.features.map(feature => ({
        id: feature.properties.xid,
        name: feature.properties.name,
      }));
    } catch (error) {
      console.error('Error fetching luxury places:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    }
  };
  
  const getBookingUrl = (placeName) => {
    // Construct a generic booking URL for demonstration
    return `https://booking.com/searchresults.html?aid=304142&ss=${encodeURIComponent(placeName)}`;
  };
  
  onMounted(() => {
    fetchLuxuryPlaces();
  });
  </script>
  
  <style scoped>
  .place-card {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    background-color: #f5f5f5;
    transition: box-shadow 0.3s ease;
  }
  
  .place-card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .v-card-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .v-card-actions {
    text-align: center;
  }
  
  .v-btn {
    text-transform: none;
  }
  </style>
  