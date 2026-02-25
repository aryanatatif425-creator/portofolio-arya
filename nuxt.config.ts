// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Daftar Modul
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  // === TAMBAHAN PENTING DI SINI ===

  // 1. Mendaftarkan File CSS Utama
  // Tanpa ini, efek background 'Glow' & 'Noise' yang kita buat di main.css TIDAK AKAN MUNCUL.
  css: ['~/assets/css/main.css'],

  // 2. Konfigurasi Google Fonts
  // Kita suruh Nuxt download font 'Inter' secara otomatis.
  googleFonts: {
    families: {
      Inter: [300, 400, 600, 700], // Ambil font Inter
    },
    display: 'swap', 
    preload: true
  },


app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }

  
})