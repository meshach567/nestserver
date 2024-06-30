<template>
    <button @click="toggleBookmark" :class="buttonClass">
      <span v-if="isBookmarked">Remove Bookmark</span>
      <span v-else>Add Bookmark</span>
    </button>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useMutation } from '@vue/apollo-composable';
  import { ADD_BOOKMARK_MUTATION, REMOVE_BOOKMARK_MUTATION } from '../graphql/mutations';
  
  const props = defineProps({
    placeId: {
      type: String,
      required: true
    },
    initialBookmarked: {
      type: Boolean,
      required: true
    }
  });
  
  const isBookmarked = ref(props.initialBookmarked);
  const { mutate: addBookmark } = useMutation(ADD_BOOKMARK_MUTATION);
  const { mutate: removeBookmark } = useMutation(REMOVE_BOOKMARK_MUTATION);
  
  const toggleBookmark = async () => {
    if (isBookmarked.value) {
      await removeBookmark({ placeId: props.placeId });
    } else {
      await addBookmark({ placeId: props.placeId });
    }
    isBookmarked.value = !isBookmarked.value;
  };
  
  const buttonClass = computed(() => {
    return isBookmarked.value ? 'bg-red-500 text-white' : 'bg-blue-500 text-white';
  });
  </script>
  
  <style scoped>
  button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
  }
  </style>
  