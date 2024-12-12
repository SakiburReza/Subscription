<script setup>
import { ref, onMounted } from 'vue'

// Reactive variables for the current date and time
const currentDate = ref('')
const currentTime = ref('')

const isMenuOpen = ref(false)


onMounted(() => {
  const updateTime = () => {
    const now = new Date()
    currentDate.value = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(now) // Format as "8 Dec, 2024"

    currentTime.value = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  // Call the function immediately to show the time
  updateTime()
  setInterval(updateTime, 60000) // Update every minute
})
</script>

<template>
  <nav>
    <div class="flex flex-col items-center justify-center">
      <!-- Logo -->
      <img src="/images/zeuxis-logo.png" class="h-8" alt="Zeuxis Logo" />
    </div>
  </nav>
</template>
