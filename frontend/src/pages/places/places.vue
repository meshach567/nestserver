<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Places</h2>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else>
        <div v-if="error" class="text-center text-red-500">{{ error.message }}</div>
        <div v-else>
          <div v-for="place in places" :key="place.id" class="mb-6 p-4 border rounded-md">
            <h3 class="text-xl font-bold">
              <NuxtLink :to="{ name: 'place-details', params: { id: place.id } }">{{ place.name }}</NuxtLink>
            </h3>
            <p>{{ place.description }}</p>
            <p><strong>Location:</strong> {{ place.location }}</p>
            <p><strong>Latitude:</strong> {{ place.latitude }}</p>
            <p><strong>Longitude:</strong> {{ place.longitude }}</p>
            <p><strong>Open Hours:</strong> {{ place.openHours }}</p>
            <div>
              <strong>Images:</strong>
              <div class="flex flex-wrap">
                <img v-for="image in place.images" :key="image" :src="image" class="w-24 h-24 object-cover m-2 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useQuery } from '@vue/apollo-composable';
  import { GET_ALL_PLACES_QUERY } from '../graphql/queries';
  
  const places = ref([]);
  const { result, loading, error } = useQuery(GET_ALL_PLACES_QUERY);
  
  onMounted(() => {
    result.value?.then(data => {
      places.value = data.places;
    });
  });
  </script>
  