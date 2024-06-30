<template>
    <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else>
        <div v-if="error" class="text-center text-red-500">{{ error.message }}</div>
        <div v-else-if="place">
          <h2 class="text-2xl font-bold mb-4">{{ place.name }}</h2>
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
          <BookmarkButton :placeId="place.id" :initialBookmarked="place.isBookmarked" />
        </div>
        <div v-else>
          <p class="text-center">Place not found</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useQuery } from '@vue/apollo-composable';
  import { GET_PLACE_DETAILS_QUERY } from '../../graphql/queries';
  import { useRoute } from 'vue-router';
  import BookmarkButton from '../../components/BookmarkButton.vue';
  
  const route = useRoute();
  const placeId = route.params.id;
  
  const place = ref(null);
  const { result, loading, error } = useQuery(GET_PLACE_DETAILS_QUERY, { id: placeId });
  
  onMounted(() => {
    result.value?.then(data => {
      place.value = data.place;
    });
  });
  </script>
  