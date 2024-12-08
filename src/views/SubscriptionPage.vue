<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import genAiService from '@/services/gen-ai'

const email = ref('')

const onClick = async () => {
  console.log("Email:", email.value)
  try {
    const { data: response } = await genAiService.temp(email.value)
    console.log("API Response:", response)
    if (response.status) {
      console.log("Success")
    }
  } catch (error) {
    console.error("Error calling API:", error)
  }
}
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <div class="relative flex items-center justify-center h-full px-4 sm:px-10 lg:pl-40 lg:justify-start">
      <!-- Background Image -->
      <img
        class="absolute inset-0 object-cover w-full h-full"
        src="/public/images/image 36.png"
        alt="Background"
      />
      
      <!-- Input Field and Button -->
      <div
        class="relative flex flex-col sm:flex-row items-center bg-white rounded-full shadow-md p-4 sm:p-0 space-y-4 sm:space-y-0 sm:space-x-2"
      >
        <input
          type="email"
          v-model="email"
          placeholder="Enter your work email here"
          class="px-4 py-2 text-gray-700 bg-white rounded-full sm:rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
        />
        <button
          @click="onClick"
          class="px-4 py-2 text-white bg-black rounded-full sm:rounded-r-full w-full sm:w-auto hover:bg-gray-800"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional Custom Styles */
</style>
