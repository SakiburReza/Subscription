<script setup>
import { ref } from 'vue'
import genAiService from '@/services/gen-ai'

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
  <div class="bg-coal-700 text-white py-6 mt-30">
    <div class="container mx-auto px-4">
      <!-- Large Screen Footer -->
      <div class="hidden lg:flex flex-col items-center space-y-10">
        <div class="flex items-center space-x-4">
          <input
            v-model="email"
            placeholder="Your email"
            class="w-80 bg-coal-600 placeholder-coal-400 text-white px-4 py-2 rounded-xl focus:outline-none"
          />
          <button
            class="bg-blue_Z px-4 py-2 rounded-xl text-white hover:bg-blue-700"
            @click="onClick"
          >
            Get Early Access
          </button>
        </div>
        <img src="/images/Zeuxis_logo.png" class="h-3" alt="Zeuxis Logo" />
        <div class="flex space-x-10 text-sm">
          <a href="https://x.com/zeuxisai?s=21&t=Mikls9HLe77mJGkbUeHWgg " class="hover:underline"
            >X</a
          >
          <a
            href="https://www.instagram.com/zeuxis.ai?igsh=b3pndnhvcnoyaGFr "
            class="hover:underline"
            >Instagram</a
          >
          <a href="#" class="hover:underline">LinkedIn</a>
          <a href="https://www.tiktok.com/@zeuxis.ai?_t=8s95OIPuHil&_r=1 " class="hover:underline"
            >TikTok</a
          >
          <a href="#" class="hover:underline">YouTube</a>
        </div>
      </div>

      <!-- Mobile Footer -->
      <div class="flex flex-col items-center space-y-4 lg:hidden">
        <div class="flex items-center space-x-4">
          <input
            v-model="email"
            placeholder="Your email"
            class="bg-lightBg text-black px-4 py-2 rounded-xl focus:outline-none"
          />
          <button
            class="bg-blue_Z px-4 py-2 rounded-xl text-white hover:bg-blue-700"
            @click="onClick"
          >
            Claim Now
          </button>
        </div>

        <div class="flex space-x-6 text-sm">
          <a href="https://x.com/zeuxisai?s=21&t=Mikls9HLe77mJGkbUeHWgg " class="hover:underline">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_310_2838)">
                <path
                  d="M27.7923 3.62494C26.6352 4.44115 25.354 5.06541 23.9982 5.47369C23.2704 4.63694 22.3033 4.04386 21.2275 3.77469C20.1517 3.50551 19.0192 3.57322 17.9832 3.96866C16.9471 4.36409 16.0575 5.06818 15.4347 5.98568C14.8118 6.90319 14.4858 7.98985 14.5007 9.09869V10.307C12.3772 10.3621 10.273 9.89113 8.37562 8.93611C6.47822 7.98108 4.84645 6.57163 3.62565 4.83328C3.62565 4.83328 -1.20768 15.7083 9.66732 20.5416C7.17879 22.2308 4.2143 23.0778 1.20898 22.9583C12.084 28.9999 25.3756 22.9583 25.3756 9.06244C25.3745 8.72587 25.3422 8.39012 25.279 8.05953C26.5122 6.84333 27.3825 5.30781 27.7923 3.62494Z"
                  stroke="#B3B3B3"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_310_2838">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://www.instagram.com/zeuxis.ai?igsh=b3pndnhvcnoyaGFr ">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_310_2787)">
                <path
                  d="M20.4173 7.5835H20.429M8.16732 2.3335H19.834C23.0556 2.3335 25.6673 4.94517 25.6673 8.16683V19.8335C25.6673 23.0552 23.0556 25.6668 19.834 25.6668H8.16732C4.94566 25.6668 2.33398 23.0552 2.33398 19.8335V8.16683C2.33398 4.94517 4.94566 2.3335 8.16732 2.3335ZM18.6673 13.2652C18.8113 14.2361 18.6455 15.2277 18.1934 16.099C17.7413 16.9703 17.026 17.6768 16.1492 18.1181C15.2724 18.5594 14.2788 18.713 13.3097 18.5571C12.3406 18.4011 11.4454 17.9436 10.7513 17.2495C10.0572 16.5554 9.59967 15.6602 9.44373 14.6911C9.28779 13.722 9.44139 12.7284 9.8827 11.8516C10.324 10.9748 11.0305 10.2595 11.9018 9.80744C12.7731 9.35536 13.7647 9.18952 14.7357 9.3335C15.7261 9.48036 16.643 9.94187 17.351 10.6499C18.0589 11.3578 18.5205 12.2748 18.6673 13.2652Z"
                  stroke="#B3B3B3"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_310_2787">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6673 9.3335C20.5238 9.3335 22.3043 10.071 23.6171 11.3837C24.9298 12.6965 25.6673 14.477 25.6673 16.3335V24.5002H21.0007V16.3335C21.0007 15.7147 20.7548 15.1212 20.3172 14.6836C19.8796 14.246 19.2862 14.0002 18.6673 14.0002C18.0485 14.0002 17.455 14.246 17.0174 14.6836C16.5798 15.1212 16.334 15.7147 16.334 16.3335V24.5002H11.6673V16.3335C11.6673 14.477 12.4048 12.6965 13.7176 11.3837C15.0303 10.071 16.8108 9.3335 18.6673 9.3335Z"
              stroke="#B3B3B3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.00065 10.5002H2.33398V24.5002H7.00065V10.5002Z"
              stroke="#B3B3B3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66732 7.00016C5.95598 7.00016 7.00065 5.95549 7.00065 4.66683C7.00065 3.37816 5.95598 2.3335 4.66732 2.3335C3.37865 2.3335 2.33398 3.37816 2.33398 4.66683C2.33398 5.95549 3.37865 7.00016 4.66732 7.00016Z"
              stroke="#B3B3B3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_310_2822)">
              <path
                d="M36.6284 10.4325C36.4354 9.66129 36.0423 8.95468 35.4887 8.38403C34.9352 7.81339 34.2409 7.39893 33.4759 7.1825C30.6809 6.5 19.5009 6.5 19.5009 6.5C19.5009 6.5 8.32093 6.5 5.52593 7.2475C4.76096 7.46393 4.06664 7.87839 3.51312 8.44903C2.95959 9.01968 2.56646 9.72629 2.37343 10.4975C1.8619 13.334 1.61169 16.2115 1.62593 19.0937C1.6077 21.9977 1.85793 24.8971 2.37343 27.755C2.58624 28.5023 2.98818 29.182 3.54041 29.7285C4.09265 30.2751 4.77651 30.6699 5.52593 30.875C8.32093 31.6225 19.5009 31.6225 19.5009 31.6225C19.5009 31.6225 30.6809 31.6225 33.4759 30.875C34.2409 30.6586 34.9352 30.2441 35.4887 29.6735C36.0423 29.1028 36.4354 28.3962 36.6284 27.625C37.136 24.8098 37.3862 21.9543 37.3759 19.0937C37.3942 16.1898 37.1439 13.2904 36.6284 10.4325Z"
                stroke="#B3B3B3"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8447 24.4075L25.1884 19.0937L15.8447 13.78V24.4075Z"
                stroke="#B3B3B3"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_310_2822">
                <rect width="39" height="39" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional custom styles if needed */
</style>
