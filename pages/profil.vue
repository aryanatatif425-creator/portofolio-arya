<script setup lang="ts">
useHead({ title: 'Arya Nata - Profil Diri' })
</script>

<template>
  <div class="relative z-10 min-h-screen flex flex-col justify-start pt-32 pb-20 px-6 md:px-20 entrance-fade-up">
    
    <div class="mb-12 md:mb-16 text-center md:text-left">
      <h2 class="font-serif italic text-5xl md:text-6xl mb-4">Profil Diri</h2>
      
      <div class="h-1 w-24 bg-white/20 mx-auto md:mx-0 rounded-full mb-8"></div>

      <img 
        src="/PotoPolban.JPG" 
        alt="Foto Profil Kecil" 
        class="w-40 md:w-56 h-auto object-cover rounded-2xl shadow-lg mx-auto md:mx-0 hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      
      <div class="space-y-6 text-gray-300 font-sans leading-loose text-lg text-justify">
        <p>
          Halo! Saya <strong class="text-white">Arya Nata Adidjaya</strong>,  saya berasal dari Karawang dan menempuh pendidikan sebelumnya di SMK Rosma Karawang dengan jurusan TKJ. 
          Saya memiliki minat besar dalam bidang teknik rekayasa perangkat lunak dan ilmu komputasi.
        </p>
        <p>
           Bergabung dengan Himakom adalah kesempatan bagi saya untuk belajar bersama, berkontribusi, dan membangun relasi dengan teman-teman sejurusan dan kampus secara keseluruhan. Saya percaya kolaborasi di himpunan akan memperkaya pengalaman akademik maupun organisasi.
        </p>
        <p>
         Di luar kegiatan akademik, saya senang mengulik soal-soal pemrograman dan membaca novel, manga atau buku.
        </p>
        <p> 
            Harapan saya, melalui Himakom saya bisa memperbanyak relasi, meningkatkan kemampuan berorganisasi dan akademik serta bisa bermanfaat untuk orang lain.
        </p>
      </div>

      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <div class="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-500">
          <h3 class="font-serif italic text-3xl mb-6">Detail Status</h3>
          
          <ul class="space-y-4 font-sans text-sm md:text-base tracking-wide">
            <li class="flex justify-between border-b border-white/10 pb-2">
              <span class="text-gray-400">Nama</span>
              <span class="text-white font-semibold">Arya Nata Adidjaya</span>
            </li>
            <li class="flex justify-between border-b border-white/10 pb-2">
              <span class="text-gray-400">Institusi</span>
              <span class="text-white text-right">Politeknik Negeri Bandung</span>
            </li>
            <li class="flex justify-between border-b border-white/10 pb-2">
              <span class="text-gray-400">Domisili</span>
              <span class="text-white">Bandung, Indonesia</span>
            </li>
            <li class="flex justify-between border-b border-white/10 pb-2">
              <span class="text-gray-400">Status</span>
              <span class="text-emerald-400 font-bold animate-pulse">Mahasiswa Aktif</span>
            </li>
           
          </ul>
        </div>
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