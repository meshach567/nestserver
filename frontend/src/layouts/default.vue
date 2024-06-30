<template>
    <div>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between">
          <div>
            <NuxtLink to="/" class="text-white">Home</NuxtLink>
          </div>
          <div>
            <NuxtLink to="/places" class="text-white">Places</NuxtLink>
            <NuxtLink to="/bookmarks" class="text-white ml-4">Bookmarks</NuxtLink>
          </div>
        </div>
      </nav>
      <Nuxt />
    </div>
  </template>
  