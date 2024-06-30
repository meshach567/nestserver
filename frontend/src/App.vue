<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between">
          <div>
            <RouterLink to="/" class="text-white">Home</RouterLink>
          </div>
          <div>
            <RouterLink to="/places" class="text-white">Places</RouterLink>
            <RouterLink to="/bookmarks" class="text-white ml-4">Bookmarks</RouterLink>
          </div>
        </div>
      </nav>
      <Nuxt />
    </div>

  <RouterView />
</template>

