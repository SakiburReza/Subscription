<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import genAiService from '@/services/gen-ai'
import FooterZeuxis from '@/components/FooterZeuxis.vue'

const email = ref('')

const onClick = async () => {
  console.log('Email:', email.value)
  try {
    const { data: response } = await genAiService.temp(email.value)
    console.log('API Response:', response)
    if (response.status) {
      console.log('Success')
    }
  } catch (error) {
    console.error('Error calling API:', error)
  }
}
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <section class="bg-white text-center py-16">
      <div class="container mx-auto px-4">
        <!-- Heading Section -->
        <h1 class="text-4xl font-extrabold text-black mb-4">
          Be The First To <br />
          Experience Zeuxis.
        </h1>
        <p class="text-black text-sm mb-8">
          unlock exclusive 24 early access before the world sees it
        </p>

        <!-- Email Input Section -->
        <div class="flex justify-center items-center space-x-4">
          <input
            v-model="email"
            placeholder="Your email"
            class="bg-gray-100 text-gray-700 placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-80"
          />
          <button
            class="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            @click="onClick"
          >
            Claim Now
          </button>
        </div>
      </div>
    </section>
    <div class="flex items-center justify-center h-auto md:h-screen">
      <div class="flex flex-col items-center justify-center p-5">
        <div
          class="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-5"
        >
          <span class="text-6xl font-bold text-blue_Z hidden md:block"> Images </span>
          <div class="flex flex-col items-center">
            <!-- Different Image for Mobile and Desktop -->
            <img
              src="/images/iphone.png"
              alt="Media Item for Mobile"
              class="object-cover block md:hidden"
            />
            <img
              src="/images/web.png"
              alt="Media Item for Desktop"
              class="object-cover hidden md:block"
            />
            <!-- Mobile Version of Spans -->
            <div class="flex flex-row justify-between w-full md:hidden mt-4">
              <span class="text-4xl font-bold text-blue_Z ml-10">Images</span>
              <span class="text-4xl font-bold text-lightGray mt-10 mr-8">Videos</span>
            </div>
            <div class="flex flex-col items-center space-y-2 mt-4 md:mt-0">
              <span class="text-5xl font-bold text-black">just</span>
              <span class="text-5xl font-bold text-blue_Z">#ZeuxIt</span>
            </div>
          </div>
          <div>
          <span class="text-6xl font-bold text-lightGray hidden md:block mt-40"> Videos </span>
        </div>
        </div>
      </div>
    </div>
    <FooterZeuxis />
  </div>
</template>

<style scoped>
/* Optional Custom Styles */
</style>
