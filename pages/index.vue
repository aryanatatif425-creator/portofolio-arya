<script setup lang="ts">
useHead({ title: 'Arya Nata - Beranda' })
</script>

<template>
  <div class="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6">
    <div class="relative flex-shrink-0 entrance-slide-left">
       <div class="animate-float">
          <img src="/profile.JPG" alt="Arya Nata" class="w-56 md:w-80 h-auto object-contain drop-shadow-2xl" />
       </div>
    </div>

    <div class="text-center md:text-left max-w-xl entrance-slide-right delay-200">
      <h1 class="font-serif italic text-6xl md:text-7xl lg:text-8xl leading-none mb-6 drop-shadow-lg">Hello World</h1>
      <p class="text-gray-300 text-sm md:text-lg font-sans tracking-widest uppercase border-l-0 md:border-l-2 border-white md:pl-6 leading-relaxed">
        I'm Arya Nata Adidjaya <br class="hidden md:block"> From Bandung State Polytechnic
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Animasi Lokal Halaman Ini */
@keyframes slideInLeft { from { opacity: 0; transform: translateX(-100px); } to { opacity: 1; transform: translateX(0); } }
@keyframes slideInRight { from { opacity: 0; transform: translate(100px, 30px); } to { opacity: 1; transform: translate(0, 0); } }

.entrance-slide-left { animation: slideInLeft 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.entrance-slide-right { opacity: 0; animation: slideInRight 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.delay-200 { animation-delay: 0.3s; }
</style>