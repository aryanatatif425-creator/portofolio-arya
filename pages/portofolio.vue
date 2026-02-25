<script setup lang="ts">
useHead({ title: 'Arya Nata - Portofolio' })
</script>

<template>
  <div class="relative z-10 min-h-screen flex flex-col justify-start pt-36 pb-32 px-6 md:px-20 entrance-fade-up">
    
    <div class="text-center mb-40">
      <h1 class="font-serif italic text-5xl md:text-6xl mb-4 drop-shadow-lg">Portofolio</h1>
      <div class="h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
      <p class="mt-6 text-gray-400 font-sans tracking-widest text-sm uppercase">Kumpulan Karya, Proyek dan Pengalaman</p>
    </div>

    <div class="max-w-4xl mx-auto w-full space-y-32">

      <div class="relative group">
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition duration-500">
          
          <h2 class="font-serif italic text-4xl md:text-5xl mb-8 text-blue-100 border-l-4 border-blue-500 pl-6">
            PKL - IT Technician
          </h2>
<img 
  src="/pkl.jpg" 
  alt="Foto Kegiatan PKL" 
  class="w-full h-64 md:h-80 object-cover rounded-xl border border-white/10 mb-8 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
/>

          <div class="font-sans text-gray-300 leading-loose text-lg text-justify space-y-4">
            <p>
              Selama masa Praktik Kerja Lapangan (PKL) sebagai teknisi di PT Pindo Deli Pulp and Paper Mills II selama enam bulan, saya ditugaskan beberapa pekerjaan dengan benang merah semuanya berkaitan dengan pemeliharaan dan perbaikan.
            </p>
            <p>
              Tugas saya meliputi <em>troubleshooting</em> switch dan perangkat jaringan, instalasi sistem operasi windows dan linux, 
              instalasi dan konfigurasi jaringan LAN kantor, dan melakukan <em>troubleshooting</em> pada komputer karyawan yang mengalami kendala teknis. 
              Pengalaman ini melatih kemampuan <em>problem solving</em> saya secara langsung di lingkungan kerja profesional.
            </p>
 
           

            <div class="pt-4 flex flex-wrap gap-3">
              <span class="px-4 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-sm text-blue-200">Hardware Maintenance</span>
              <span class="px-4 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-sm text-blue-200">Networking</span>
              <span class="px-4 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-sm text-blue-200">Troubleshooting</span>
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