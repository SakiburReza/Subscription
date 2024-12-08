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
  <div class=" flex-col h-screen">
    <Navbar />
    <div class="relative flex items-center justify-start h-full px-4 sm:px-10 lg:pl-40 lg:justify-start">
      <!-- Background Image -->
      <img
        class="absolute inset-0 object-cover sm:w-full sm:h-full w-full h-full "
        src="/public/images/image 36.png"
        alt="Background"
      />
      
      <!-- Input Field and Button -->
      <div
        class="relative flex justify-start sm:flex-row p-0 sm:p-0 space-y-1 space-x-1 sm:space-y-0 sm:space-x-2 -mt-180 sm:mt-0"
      >
        <input
          type="email"
          v-model="email"
          placeholder="Enter Your Work Email..."
          class="sm:px-4 sm:py-2 text-gray-700 bg-white rounded-full sm:rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-60 sm:w-80"
        />
        <button
          @click="onClick"
          class="h-10 w-31 px-2 sm:px-4 sm:py-2 text-white bg-black rounded-full sm:rounded-r-full sm:w-auto hover:bg-gray-800"
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
