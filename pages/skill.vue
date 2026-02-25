<script setup lang="ts">
useHead({ title: 'Arya Nata - Skill & Minat' })
</script>

<template>
  <div class="relative z-10 min-h-screen flex flex-col justify-start pt-36 pb-32 px-6 md:px-20 entrance-fade-up">
    
    <div class="text-center mb-16">
      <h2 class="font-serif italic text-5xl md:text-6xl mb-4 drop-shadow-lg">Skill</h2>
      <div class="h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full mb-32"> <div class="relative group h-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 flex flex-col">
          <div class="text-4xl mb-4 text-cyan-400 opacity-80 text-center">🌐</div>
          <h3 class="font-serif italic text-3xl mb-6 text-center text-cyan-100">Cisco Network</h3>
          <ul class="space-y-4 font-sans text-gray-300 text-sm md:text-base tracking-wide flex-grow">
            <li class="flex items-center gap-3 border-b border-white/5 pb-2"><span class="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></span> Konfigurasi Router & Switch</li>
            <li class="flex items-center gap-3 pt-2"><span class="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_cyan]"></span> Packet Tracer Simulation</li>
          </ul>
        </div>
      </div>

      <div class="relative group h-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div class="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 flex flex-col">
          <div class="text-4xl mb-4 text-purple-400 opacity-80 text-center">🐈‍⬛</div>
          <h3 class="font-serif italic text-3xl mb-6 text-center text-purple-100">Git & GitHub</h3>
          <ul class="space-y-4 font-sans text-gray-300 text-sm md:text-base tracking-wide flex-grow">
            <li class="flex items-center gap-3 border-b border-white/5 pb-2"><span class="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple]"></span> Git Init & Config</li>
            <li class="flex items-center gap-3 border-b border-white/5 pb-2"><span class="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple]"></span> Add, Commit, Push</li>
            <li class="flex items-center gap-3 border-b border-white/5 pb-2"><span class="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple]"></span> Repo Management</li>
            <li class="flex items-center gap-3 border-b border-white/5 pb-2"><span class="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple]"></span> Branching Basics</li>
            <li class="flex items-center gap-3 pt-2"><span class="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple]"></span> Pull Request Basics</li>
          </ul>
        </div>
      </div>

    </div>

    <div class="text-center mb-16">
      <h2 class="font-serif italic text-5xl md:text-6xl mb-4 drop-shadow-lg">Minat</h2>
      <div class="h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto w-full">

      <div class="relative group h-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div class="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 flex flex-col">
          <div class="text-4xl mb-4 text-emerald-400 opacity-80 text-center">🧠</div>
          
          <h3 class="font-serif italic text-3xl mb-6 text-center text-emerald-100">Problem Solve Programming</h3>
          
          <ul class="space-y-4 font-sans text-gray-300 text-sm md:text-base tracking-wide flex-grow">
            <li class="flex items-center gap-3 border-b border-white/5 pb-2">
              <span class="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span> 
              <span>Solve Programming task in moddle</span>
            </li>
            <li class="flex items-center gap-3 border-b border-white/5 pb-2">
              <span class="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_emerald]"></span> 
              <span>Solve some problem in Project Euler</span>
            </li>
            
          </ul>
        </div>
      </div>

      <div class="relative group h-full">
        <div class="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div class="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500 flex flex-col">
          <div class="text-4xl mb-4 text-orange-400 opacity-80 text-center">🎨</div>

          <h3 class="font-serif italic text-3xl mb-6 text-center text-orange-100">Graphic Design</h3>
          
          <ul class="space-y-4 font-sans text-gray-300 text-sm md:text-base tracking-wide flex-grow">
            <li class="flex items-center gap-3 border-b border-white/5 pb-2">
              <span class="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_orange]"></span> 
              <span>UI/UX Design Principles</span>
            </li>
            <li class="flex items-center gap-3 border-b border-white/5 pb-2">
              <span class="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_orange]"></span> 
              <span>Color Theory & Typography</span>
            </li>
            <li class="flex items-center gap-3 border-b border-white/5 pb-2">
              <span class="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_orange]"></span> 
              <span>Layouting & Wireframing</span>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
/* Animasi Masuk (Fade Up) */
@keyframes fadeUp { 
  from { opacity: 0; transform: translateY(30px); } 
  to { opacity: 1; transform: translateY(0); } 
}
.entrance-fade-up { 
  animation: fadeUp 1.5s ease-out forwards; 
}
</style>