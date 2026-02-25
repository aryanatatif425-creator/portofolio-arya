<template>
  <div class="relative w-full h-full min-h-screen text-white selection:bg-white selection:text-black overflow-hidden">
    
    <div class="ambient-light-bottom"></div>
    <div class="ambient-light-right"></div>

    <nav class="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 entrance-slide-down backdrop-blur-sm">
      <div class="font-serif italic text-2xl">
        <NuxtLink to="/">Arya Nata Adidjaya</NuxtLink>
      </div>

      <ul class="hidden md:flex gap-10 text-gray-400 text-sm font-sans tracking-widest uppercase">
        <li><NuxtLink to="/" class="nav-link hover:text-white transition duration-300">Beranda</NuxtLink></li>
        
        <li><NuxtLink to="/profil" class="nav-link hover:text-white transition duration-300">Profil Diri</NuxtLink></li>
        
        <li><NuxtLink to="/skill" class="nav-link hover:text-white transition duration-300">Skill & Minat</NuxtLink></li>
        
        <li><NuxtLink to="/penugasan" class="nav-link hover:text-white transition duration-300">Penugasan</NuxtLink></li>
        
        <li><NuxtLink to="/portofolio" class="nav-link hover:text-white transition duration-300">Portofolio</NuxtLink></li>
        
        <li><NuxtLink to="/kontak" class="nav-link hover:text-white transition duration-300">Kontak</NuxtLink></li>
      </ul>

      <button class="md:hidden text-white">☰</button>
    </nav>

    <slot />

    <footer class="absolute bottom-4 w-full text-center text-gray-600 text-xs z-50 font-sans entrance-slide-up delay-500">
      <p>&copy; 2026 Arya Nata. All Rights Reserved.</p>
    </footer>

  </div>
</template>

<style>
/* STYLE GLOBAL */
h1, h2, h3, .font-serif { font-family: 'Times New Roman', Times, serif; }
body, .font-sans { font-family: 'Inter', sans-serif; }

body { background-color: #050505; color: white; margin: 0; overflow-x: hidden; }

/* BACKGROUND EFFECTS */
body::before {
  content: ""; position: fixed; width: 600px; height: 600px; top: 50%; left: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(80px); transform: translate(-50%, -50%);
  animation: moveMainLight 12s infinite alternate ease-in-out; z-index: -1; pointer-events: none;
}
body::after {
  content: ""; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.05; pointer-events: none; z-index: 0;
}
.ambient-light-bottom {
  position: fixed; bottom: -30%; left: 50%; width: 150%; height: 500px;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.07) 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(120px); transform: translateX(-50%);
  animation: moveBottomFog 25s infinite alternate ease-in-out; z-index: -2; pointer-events: none;
}
.ambient-light-right {
  position: fixed; top: 30%; right: -20%; width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 70%);
  filter: blur(100px); animation: floatRightLight 18s infinite alternate ease-in-out; z-index: -2; pointer-events: none;
}

/* ANIMATIONS KEYFRAMES */
@keyframes moveMainLight { 0% { transform: translate(-50%, -50%) translate(-200px, -100px) scale(0.9); } 100% { transform: translate(-50%, -50%) translate(200px, 150px) scale(1.1); } }
@keyframes moveBottomFog { 0% { transform: translateX(-50%) translateY(0) scaleX(1); } 100% { transform: translateX(-50%) translateY(-50px) scaleX(1.2); } }
@keyframes floatRightLight { 0% { transform: translateY(0) translateX(0); } 100% { transform: translateY(-200px) translateX(-50px); } }
@keyframes slideInDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
@keyframes slideInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }

.entrance-slide-down { animation: slideInDown 1.5s ease-out forwards; }
.entrance-slide-up { opacity: 0; animation: slideInUp 1.5s ease-out forwards; }
.delay-500 { animation-delay: 0.8s; }

/* NAVBAR HOVER */
.nav-link { position: relative; text-decoration: none; padding-bottom: 5px; }
.nav-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 0; background-color: white; transition: width 0.4s ease-out; }
.nav-link:hover::after { width: 100%; }
.router-link-active::after { width: 100%; }
</style>