<template>
    <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
      <form @submit.prevent="handleSignup">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" class="w-full p-2 border border-gray-300 rounded mt-1" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input v-model="password" type="password" class="w-full p-2 border border-gray-300 rounded mt-1" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded mt-4">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { SIGNUP_MUTATION } from '../graphql/mutations';
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';

const email = ref('');
const password = ref('');
const router = useRouter();

const { mutate: signup } = useMutation(SIGNUP_MUTATION);

const handleSignup = async () => {
  try {
    const { data } = await signup({
      input: {
        email: email.value,
        password: password.value,
      },
    });
    console.log('Signup successful:', data.signup);
    Cookies.set('token', data.signup.token);
    // Store user in store if necessary
    router.push('/');
  } catch (error) {
    console.error('Error during signup:', error);
  }
};

  </script>
  