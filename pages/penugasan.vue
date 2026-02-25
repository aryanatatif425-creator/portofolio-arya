<script setup lang="ts">
useHead({ title: 'Arya Nata - Penugasan' })
</script>

<template>
  <div class="relative z-10 min-h-screen flex flex-col justify-start pt-36 pb-32 px-6 md:px-20 entrance-fade-up">
    
    <div class="text-center mb-32">
      <h1 class="font-serif italic text-5xl md:text-6xl mb-4 drop-shadow-lg">Penugasan</h1>
      <div class="h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
      <p class="mt-6 text-gray-400 font-sans tracking-widest text-sm uppercase">
        Open Recruitment Himpunan Mahasiswa Komputer 2025
      </p>
    </div>

    <div class="max-w-5xl mx-auto w-full space-y-40">

      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition duration-500">
          
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h2 class="font-serif italic text-3xl md:text-4xl text-pink-100">1. Website Portofolio</h2>
              <p class="text-gray-400 text-sm mt-2">Personal Branding & Technical Skill</p>
            </div>
            <a href="https://github.com/username/repo-kamu" target="_blank" class="px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-full text-white text-sm font-sans tracking-wide transition-all shadow-lg hover:shadow-pink-500/50">
              Buka Repository GitHub &rarr;
            </a>
          </div>

          <p class="text-gray-300 leading-relaxed mb-6">
            Website ini sendiri adalah hasil dari penugasan pertama. Dibangun menggunakan teknologi modern sesuai rekomendasi panduan.
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-pink-300">Nuxt 3</span>
            <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-pink-300">Tailwind CSS</span>
            <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-pink-300">TypeScript</span>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition duration-500">
          
          <h2 class="font-serif italic text-3xl md:text-4xl text-blue-100 mb-4">2. Persuratan Kegiatan (TOR)</h2>
          <p class="text-gray-300 leading-relaxed mb-8">
            Perancangan <em>Term of Reference</em> (TOR) untuk kegiatan <strong>LKMM – TH</strong> dengan inovasi konsep baru untuk mengatasi efektivitas pelatihan, sesuai studi kasus angkatan 2026.
          </p>

          <div class="w-full h-[600px] md:h-[900px] bg-black/50 rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <iframe 
              src="/tugas/TOR Himpunan (1)  (1) (1).pdf"
              class="w-full h-full"
              title="Preview TOR"
            >
              <p class="text-white p-10 text-center">Browser Anda tidak mendukung preview PDF. <a href="/tugas/tor.pdf" class="text-blue-400 underline">Download PDF</a></p>
            </iframe>
          </div>

          <div class="mt-4 flex justify-end">
            <a href="/tugas/tor.pdf" download class="text-sm text-blue-300 hover:text-white transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Dokumen TOR
            </a>
          </div>

        </div>
      </div>

      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition duration-500">
          
          <h2 class="font-serif italic text-3xl md:text-4xl text-emerald-100 mb-4">3. Infografis Informatif</h2>
          <p class="text-gray-300 leading-relaxed mb-8">
            Visualisasi data dan informasi mengangkat tema <strong>Pendidikan/Teknologi</strong> dengan menyajikan data statistik yang kredibel dan analisis mendalam.
          </p>

          <div class="w-full bg-black/50 rounded-xl border border-white/10 overflow-hidden group/img relative shadow-2xl">
            <img 
              src="/tugas/tugas_3 (1).jpg" 
              alt="Infografis Tugas" 
              class="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
            />
            <div class="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-2 text-center text-xs text-gray-400 opacity-0 group-hover/img:opacity-100 transition-opacity">
              Ukuran Asli: A3
            </div>
          </div>

        </div>
      </div>

      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition duration-500">
          
          <h2 class="font-serif italic text-3xl md:text-4xl text-amber-100 mb-4">4. Video Kreatif</h2>
          <p class="text-gray-300 leading-relaxed mb-8">
            Pemaparan solusi studi kasus mengenai <strong>Himakom Competition Weeks (HCW)</strong>, strategi kolaborasi dengan UKM, serta inovasi kegiatan fun rutin.
          </p>

          <div class="w-full rounded-xl border border-white/10 overflow-hidden bg-black shadow-2xl">
            <video controls class="w-full h-auto aspect-video">
              <source src="/tugas/tugas_4.mp4" type="video/mp4">
              Browser Anda tidak mendukung tag video.
            </video>
          </div>

          <div class="mt-6 flex flex-wrap gap-4 text-sm text-gray-400 font-sans">
             <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-amber-500 rounded-full"></span> Self Introduction
             </div>
             <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-amber-500 rounded-full"></span> Problem Solving (HCW)
             </div>
             <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-amber-500 rounded-full"></span> Minat & Bakat
             </div>
          </div>

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