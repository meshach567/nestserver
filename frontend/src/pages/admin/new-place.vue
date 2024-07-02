<template>
    <div class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Create New Place</h2>
      <form v-on:submit="handleCreatePlace">
        <div class="mb-4">
          <label class="block text-gray-700">Name</label>
          <input v-model="name" type="text" class="w-full p-2 border border-gray-300 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Description</label>
          <textarea v-model="description" class="w-full p-2 border border-gray-300 rounded mt-1" required></textarea>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Location</label>
          <input v-model="location" type="text" class="w-full p-2 border border-gray-300 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Latitude</label>
          <input v-model="latitude" type="number" step="0.000001" class="w-full p-2 border border-gray-300 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Longitude</label>
          <input v-model="longitude" type="number" step="0.000001" class="w-full p-2 border border-gray-300 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Open Hours</label>
          <input v-model="openHours" type="text" class="w-full p-2 border border-gray-300 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Dynamic Field</label>
          <div v-for="(field, index) in dynamicFields" :key="index" class="flex mb-2">
            <input v-model="field.value" type="text" class="w-full p-2 border border-gray-300 rounded" />
            <button @click.prevent="removeDynamicField(index)" class="ml-2 bg-red-500 text-white p-2 rounded">Remove</button>
          </div>
          <button @click.prevent="addDynamicField" class="bg-blue-500 text-white p-2 rounded">Add Field</button>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Images</label>
          <input @change="handleImageUpload" type="file" multiple class="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded mt-4">Create Place</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useMutation } from '@vue/apollo-composable';
  import { CREATE_PLACE_MUTATION } from '../../graphql/mutations';
  
  const name = ref('');
  const description = ref('');
  const location = ref('');
  const latitude = ref(0);
  const longitude = ref(0);
  const openHours = ref('');
  const dynamicFields = ref([{ value: '' }]);
  const images = ref([]);
  
  const { mutate: createPlace } = useMutation(CREATE_PLACE_MUTATION);
  
  const handleCreatePlace = async () => {
    try {
      const { data } = await createPlace({
        input: {
          name: name.value,
          description: description.value,
          location: location.value,
          latitude: parseFloat(latitude.value),
          longitude: parseFloat(longitude.value),
          openHours: openHours.value,
          dynamicFields: dynamicFields.value.map(field => field.value),
          images: images.value, // Assuming images are base64 strings or URLs
        },
      });
      console.log('Place created successfully:', data.createPlace);
      // Redirect or provide feedback to the admin
    } catch (error) {
      console.error('Error creating place:', error);
    }
  };
  
  const addDynamicField = () => {
    dynamicFields.value.push({ value: '' });
  };
  
  const removeDynamicField = (index) => {
    dynamicFields.value.splice(index, 1);
  };
  
  const handleImageUpload = (event) => {
    const files = event.target.files;
    images.value = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        images.value.push(e.target.result);
      };
      reader.readAsDataURL(files[i]);
    }
  };
  </script>
  