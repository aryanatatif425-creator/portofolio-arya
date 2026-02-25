<script setup lang="ts">
useHead({ title: 'Arya Nata - Kontak' })
</script>

<template>
  <div class="relative z-10 min-h-screen flex flex-col justify-start pt-36 pb-20 px-6 entrance-fade-up">
    
    <div class="flex justify-center mb-10">
      <div class="relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
        <div class="relative w-40 h-40 md:w-48 md:h-48 aspect-square rounded-full p-1 bg-gradient-to-br from-white/50 to-white/10 flex-shrink-0">
          <img 
            src="/profile.JPG" 
            alt="Arya Nata" 
            class="w-full h-full object-cover rounded-full border-4 border-black shadow-2xl"
          />
        </div>
      </div>
    </div>

    <div class="max-w-md mx-auto w-full relative">
      
      <div class="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur opacity-20"></div>

      <div class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        
        <div class="p-8 text-center border-b border-white/10 bg-white/5">
          <h1 class="font-serif italic text-3xl text-white mb-2">Arya Nata Adidjaya</h1>
          <p class="text-gray-400 font-sans tracking-widest text-xs uppercase">INFORMATICS UNDERGRADUATE </p>
        </div>

        <div class="flex flex-col">

          <a 
            href="mailto:arya.nata.tif425@polban.ac.id?subject=Halo%20Arya,%20Saya%20Ingin%20Berkolaborasi" 
            class="group flex items-center justify-between p-5 border-b border-white/5 hover:bg-white/5 transition duration-300"
          >
            <div class="flex items-center gap-4">
              <span class="text-xl w-8 text-center group-hover:scale-110 transition grayscale group-hover:grayscale-0">✉️</span>
              
              <div>
                <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                <p class="text-sm md:text-base text-gray-200 font-sans group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition duration-300">
                  arya.nata.tif425@polban.ac.id
                </p>
              </div>
            </div>
            
            <span class="text-gray-600 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transform group-hover:translate-x-1 transition">&rarr;</span>
          </a>

          <a href="https://www.instagram.com/nata__arya/" target="_blank" class="group flex items-center justify-between p-5 border-b border-white/5 hover:bg-white/5 transition duration-300">
            <div class="flex items-center gap-4">
              <span class="text-xl w-8 text-center group-hover:scale-110 transition grayscale group-hover:grayscale-0">📸</span>
              <div>
                <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Instagram</p>
                <p class="text-sm md:text-base text-gray-200 font-sans group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition duration-300">@nata__arya</p>
              </div>
            </div>
            <span class="text-gray-600 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transform group-hover:translate-x-1 transition">&rarr;</span>
          </a>

          <a href="https://www.linkedin.com/in/arya-nata-adidjdaya-2834a3372/" target="_blank" class="group flex items-center justify-between p-5 hover:bg-white/5 transition duration-300">
            <div class="flex items-center gap-4">
              <span class="text-xl w-8 text-center group-hover:scale-110 transition grayscale group-hover:grayscale-0">💼</span>
              <div>
                <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                <p class="text-sm md:text-base text-gray-200 font-sans group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition duration-300">Arya Nata Adidjaya</p>
              </div>
            </div>
            <span class="text-gray-600 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transform group-hover:translate-x-1 transition">&rarr;</span>
          </a>

        </div>
      </div>

      <div class="mt-8 text-center">
        <p class="text-gray-500 text-xs italic opacity-70">
          Bandung, Jawa Barat, Indonesia
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
@keyframes fadeUp { 
  from { opacity: 0; transform: translateY(30px); } 
  to { opacity: 1; transform: translateY(0); } 
}
.entrance-fade-up { 
  animation: fadeUp 1.5s ease-out forwards; 
}
</style>