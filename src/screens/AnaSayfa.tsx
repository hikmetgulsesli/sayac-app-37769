// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaProps {}

export function AnaSayfa(props: AnaSayfaProps) {
  return (
    <>
      {/*  SideNavBar (Execution from JSON)  */}
      <nav className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 py-8 bg-[#0b1326] border-r border-[#3c4a42]/15 z-50">
      <div className="px-8 mb-12">
      <h1 className="text-2xl font-black text-[#4edea3] font-headline">Kinetik</h1>
      <p className="font-['Space_Grotesk'] tracking-widest uppercase text-[10px] text-[#bbcabf]">Precision Instrument</p>
      </div>
      <div className="flex flex-col space-y-1">
      {/*  Active Tab: Counter (Exact Match Priority)  */}
      <a className="flex items-center py-4 text-[#4edea3] border-r-2 border-[#4edea3] pl-4 bg-[#131b2e] group transition-all duration-200" href="#">
      <span className="material-symbols-outlined mr-4 group-hover:scale-110 transition-transform">numbers</span>
      <span className="font-['Space_Grotesk'] tracking-widest uppercase text-[10px] font-bold">Counter</span>
      </a>
      <a className="flex items-center py-4 text-[#bbcabf] pl-4 hover:bg-[#131b2e] hover:text-white transition-all duration-200 group" href="#">
      <span className="material-symbols-outlined mr-4 group-hover:scale-110 transition-transform">history</span>
      <span className="font-['Space_Grotesk'] tracking-widest uppercase text-[10px]">History</span>
      </a>
      <a className="flex items-center py-4 text-[#bbcabf] pl-4 hover:bg-[#131b2e] hover:text-white transition-all duration-200 group" href="#">
      <span className="material-symbols-outlined mr-4 group-hover:scale-110 transition-transform">monitoring</span>
      <span className="font-['Space_Grotesk'] tracking-widest uppercase text-[10px]">Analytics</span>
      </a>
      <a className="flex items-center py-4 text-[#bbcabf] pl-4 hover:bg-[#131b2e] hover:text-white transition-all duration-200 group" href="#">
      <span className="material-symbols-outlined mr-4 group-hover:scale-110 transition-transform">settings</span>
      <span className="font-['Space_Grotesk'] tracking-widest uppercase text-[10px]">Settings</span>
      </a>
      </div>
      </nav>
      {/*  Main Content Area  */}
      <main className="flex-1 lg:ml-64 relative min-h-screen flex flex-col">
      {/*  TopNavBar (Execution from JSON)  */}
      <header className="w-full top-0 sticky z-40 bg-[#0b1326] flex justify-between items-center px-6 py-4">
      <div className="text-xl font-bold tracking-tighter text-[#4edea3] font-headline lg:hidden">
                      Kinetik Sayaç
                  </div>
      <div className="hidden lg:block text-[#4edea3] font-['Space_Grotesk'] tracking-tighter uppercase text-xs font-bold">
                      Kontrol Paneli
                  </div>
      <div className="flex gap-4">
      <button className="text-[#bbcabf] hover:scale-105 active:scale-95 transition-all cubic-bezier(0.34, 1.56, 0.64, 1)">
      <span className="material-symbols-outlined">history</span>
      </button>
      <button className="text-[#bbcabf] hover:scale-105 active:scale-95 transition-all cubic-bezier(0.34, 1.56, 0.64, 1)">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </header>
      {/*  Kinetic Monolith Content  */}
      <div className="flex-1 flex flex-col px-6 md:px-12 py-8 max-w-7xl mx-auto w-full">
      {/*  Asymmetric Counter Display Section  */}
      <section className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 mt-12 gap-12">
      <div className="w-full lg:w-2/3">
      <span className="font-label text-primary tracking-[0.4em] text-xs font-bold mb-4 block">CANLI VERİ AKIŞI</span>
      <div className="bg-surface-container-lowest p-12 lg:p-24 rounded-3xl relative overflow-hidden group">
      {/*  Subtle Background Glow  */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[120px] rounded-full"></div>
      {/*  The Counter Monolith  */}
      <div className="relative z-10 flex flex-col md:flex-row items-baseline gap-6">
      <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-headline font-bold leading-none tracking-tighter text-on-surface drop-shadow-2xl">42</span>
      <div className="flex flex-col items-start gap-1">
      <span className="bg-surface-bright text-primary text-[10px] font-label font-bold px-2 py-1 rounded-md glow-primary">AKTİF</span>
      <span className="text-on-surface-variant text-sm font-medium">Birim Sayılan</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Bento-style Stats Grid (Internal Positioning)  */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
      <div className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between transition-transform duration-300 hover:translate-x-2">
      <div>
      <p className="text-on-surface-variant font-label text-[10px] tracking-widest uppercase mb-1">Bugünkü Toplam</p>
      <p className="text-2xl font-headline font-bold">1,284</p>
      </div>
      <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
      </div>
      <div className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between transition-transform duration-300 hover:translate-x-2">
      <div>
      <p className="text-on-surface-variant font-label text-[10px] tracking-widest uppercase mb-1">Aktif Seri</p>
      <p className="text-2xl font-headline font-bold">12 Gün</p>
      </div>
      <span className="material-symbols-outlined text-secondary text-3xl">bolt</span>
      </div>
      </div>
      </section>
      {/*  Tactile Controls Section  */}
      <section className="mb-20">
      <div className="flex flex-wrap items-center justify-start gap-6">
      {/*  AZALT (Secondary)  */}
      <button className="group relative flex items-center justify-center gap-3 px-8 py-6 rounded-2xl glass-card text-secondary font-headline font-bold tracking-tight text-xl transition-all duration-200 hover:scale-105 active:scale-95 border border-[#3c4a42]/10 glow-secondary">
      <span className="material-symbols-outlined text-2xl group-hover:rotate-[-15deg] transition-transform">remove_circle</span>
                              AZALT
                          </button>
      {/*  ARTIR (Primary Gradient)  */}
      <button className="group relative flex items-center justify-center gap-4 px-12 py-8 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold tracking-tighter text-3xl transition-all duration-200 hover:scale-105 active:scale-95 glow-primary shadow-2xl">
      <span className="material-symbols-outlined text-4xl group-hover:rotate-[15deg] transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
                              ARTIR
                          </button>
      {/*  SIFIRLA (Tertiary)  */}
      <button className="ml-auto group flex items-center gap-2 text-tertiary font-label text-xs tracking-[0.2em] uppercase transition-all duration-200 hover:text-white">
      <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180 duration-500">restart_alt</span>
      <span className="border-b border-transparent group-hover:border-tertiary transition-all">SIFIRLA</span>
      </button>
      </div>
      </section>
      {/*  Bottom Detail Cards (Organic Layout)  */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
      <span className="material-symbols-outlined text-primary">analytics</span>
      </div>
      <h3 className="font-headline font-bold text-xl mb-2">Hız Analizi</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">Son 1 saatteki sayaç artış hızı standart sapmanın %12 üzerinde seyrediyor.</p>
      </div>
      <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
      <span className="material-symbols-outlined text-secondary">update</span>
      </div>
      <h3 className="font-headline font-bold text-xl mb-2">Son Güncelleme</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">Az önce gerçekleşen işlem ile 42 değerine ulaşıldı. Saat: 14:32:11</p>
      </div>
      <div className="bg-surface-container-low p-8 rounded-3xl lg:col-span-1 md:col-span-2 group hover:bg-surface-container-high transition-colors relative overflow-hidden">
      <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors">
      <span className="material-symbols-outlined text-tertiary">rocket_launch</span>
      </div>
      <h3 className="font-headline font-bold text-xl mb-2">Hızlı Erişim</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">Klavye kısayollarını kullanarak (Enter/Space) sayacı kontrol edebilirsiniz.</p>
      </div>
      <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity">
      <span className="material-symbols-outlined text-[120px]">keyboard</span>
      </div>
      </div>
      </section>
      </div>
      {/*  Footer Visual (Minimalist)  */}
      <footer className="mt-auto py-8 px-6 text-center border-t border-[#3c4a42]/05">
      <p className="text-on-surface-variant font-label text-[10px] tracking-widest opacity-50 uppercase">Kinetik Monolith v2.4.0 • 2024 © Digital Precision</p>
      </footer>
      </main>
      {/*  Mobile Bottom Navigation (Execution from Logic)  */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-low glass-card flex items-center justify-around z-50">
      <a className="text-primary flex flex-col items-center" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>numbers</span>
      </a>
      <a className="text-on-surface-variant flex flex-col items-center" href="#">
      <span className="material-symbols-outlined">history</span>
      </a>
      <div className="w-12 h-12 -mt-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40">
      <span className="material-symbols-outlined text-on-primary">add</span>
      </div>
      <a className="text-on-surface-variant flex flex-col items-center" href="#">
      <span className="material-symbols-outlined">monitoring</span>
      </a>
      <a className="text-on-surface-variant flex flex-col items-center" href="#">
      <span className="material-symbols-outlined">settings</span>
      </a>
      </nav>
    </>
  );
}
