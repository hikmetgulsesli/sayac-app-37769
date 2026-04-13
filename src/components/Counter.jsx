import { useState, useEffect, useCallback } from 'react'
import useCounter from '../hooks/useCounter.js'

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0)
  const [statusText, setStatusText] = useState('Hareketsiz')

  useEffect(() => {
    if (count === 0) {
      setStatusText('Hareketsiz')
    } else if (count > 0) {
      setStatusText('Aktif')
    }
  }, [count])

  const handleIncrement = useCallback(() => {
    increment()
  }, [increment])

  const handleDecrement = useCallback(() => {
    decrement()
  }, [decrement])

  const handleReset = useCallback(() => {
    reset()
  }, [reset])

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* SideNavBar (Desktop) */}
      <nav className="hidden lg:flex flex-col w-64 h-screen fixed left-0 top-0 py-8 bg-surface border-r border-outline-variant/15">
        <div className="px-8 mb-12">
          <h1 className="text-2xl font-black text-primary font-headline tracking-tighter">Kinetik</h1>
          <p className="font-label tracking-widest uppercase text-[10px] text-on-surface-variant mt-1">Precision Instrument</p>
        </div>
        <div className="flex-1 space-y-2">
          <a className="flex items-center gap-4 py-3 text-primary border-r-2 border-primary pl-8 transition-all duration-200 font-headline font-medium" href="/">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>numbers</span>
            <span className="font-label tracking-widest uppercase text-[10px]">Sayaç</span>
          </a>
          <a className="flex items-center gap-4 py-3 text-on-surface-variant pl-8 hover:bg-surface-container-low hover:text-white transition-colors group" href="/gecmis">
            <span className="material-symbols-outlined">history</span>
            <span className="font-label tracking-widest uppercase text-[10px]">Geçmiş</span>
          </a>
          <a className="flex items-center gap-4 py-3 text-on-surface-variant pl-8 hover:bg-surface-container-low hover:text-white transition-colors group" href="/analiz">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label tracking-widest uppercase text-[10px]">Analiz</span>
          </a>
          <a className="flex items-center gap-4 py-3 text-on-surface-variant pl-8 hover:bg-surface-container-low hover:text-white transition-colors group" href="/ayarlar">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label tracking-widest uppercase text-[10px]">Ayarlar</span>
          </a>
        </div>
      </nav>

      {/* TopNavBar (Mobile & Tablet) */}
      <header className="w-full top-0 sticky z-50 lg:hidden bg-surface">
        <div className="flex justify-between items-center px-6 py-4 w-full bg-surface-container-low">
          <div className="text-xl font-bold tracking-tighter text-primary font-headline uppercase">Kinetik Sayaç</div>
          <div className="flex gap-4">
            <button aria-label="Geçmiş" className="text-on-surface-variant hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined">history</span>
            </button>
            <button aria-label="Ayarlar" className="text-on-surface-variant hover:scale-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="lg:ml-64 p-6 md:p-12 min-h-screen flex flex-col pb-24 md:pb-12">
        {/* Header Section with Asymmetry */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-on-surface-variant font-label tracking-widest uppercase text-[0.6875rem] mb-2">Canlı Durum</h2>
            <h3 className="text-3xl font-headline font-bold">Genel Görünüm</h3>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[0.6875rem] font-headline tracking-widest text-on-surface-variant uppercase">Sistem Aktif</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1">
          {/* Left Column: The Counter Monolith (Bento Main) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Main Counter Display Card */}
            <div className="bg-surface-container-lowest rounded-[1.5rem] p-12 flex flex-col items-center justify-center relative overflow-hidden flex-1 min-h-[400px]">
              {/* Background Grain/Texture Mimicry */}
              <div className="absolute inset-0 opacity-5 pointer-events-none emerald-gradient"></div>
              {/* Haptic Chip (Threshold Message) */}
              <div className="absolute top-12 left-12">
                <div className="bg-surface-bright border border-primary/20 px-4 py-1.5 rounded-full primary-glow flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-primary">info</span>
                  <span className="text-on-surface font-label tracking-widest text-[0.6875rem] uppercase font-medium">{statusText}</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div data-testid="counter-value" className="text-[10rem] md:text-[14rem] font-headline font-black text-on-surface tracking-tighter leading-none mb-4 select-none opacity-90 transition-all duration-200">
                  {count}
                </div>
                <p className="text-on-surface-variant font-body max-w-xs text-lg font-light leading-relaxed">
                  {count === 0
                    ? 'Henüz bir hareket yok. Başlamak için aşağıdaki butonlara dokunun.'
                    : 'Sayaç aktif. Devam etmek için butonları kullanabilirsiniz.'}
                </p>
              </div>
              {/* Interactive Controls (Asymmetric Placement) */}
              <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                <button
                  onClick={handleReset}
                  className="order-2 md:order-1 text-tertiary font-label tracking-widest uppercase text-[0.75rem] hover:underline decoration-tertiary/50 underline-offset-8 transition-all active:scale-95"
                >
                  Sıfırla
                </button>
                <div className="order-1 md:order-2 flex items-center gap-4">
                  <button
                    onClick={handleDecrement}
                    aria-label="Azalt"
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-secondary-container/20 text-secondary border border-secondary/10 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-secondary/50"
                  >
                    <span className="material-symbols-outlined text-3xl">remove</span>
                  </button>
                  <button
                    onClick={handleIncrement}
                    className="h-24 px-12 rounded-[1.5rem] emerald-gradient text-on-primary font-headline font-bold tracking-widest uppercase flex items-center gap-4 primary-glow hover:scale-105 active:scale-95 transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">add</span>
                    Artır
                  </button>
                </div>
                <div className="hidden md:block order-3 w-12 h-px bg-outline-variant/30"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Contextual Sidebar (Bento Secondary) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Hızlı İpucu Card */}
            <div className="bg-surface-container-low rounded-[1.5rem] p-8 border border-outline-variant/10 relative overflow-hidden flex-1">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary">lightbulb</span>
                </div>
                <h4 className="text-xl font-headline font-bold mb-4">Hızlı İpucu</h4>
                <div className="space-y-4">
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                    Kinetik ile sayım yapmak çok basit. <strong>ARTIR</strong> butonuna basarak ilk değerinizi oluşturun.
                  </p>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed">
                    Değerlerinizi geçmiş sekmesinden takip edebilir veya günlük hedefler belirleyebilirsiniz.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Destek Uzmanı"
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRDH0D7YYL_hb4lJEbyd1qxmVNHc6w2J6O-pFmkzWsuU2GNNw4rDdnDoJLpQ8nZIUOayHvVuOc0JIf9rZo3GPGfqYU5P1FCVkl8_SjCyQ3QuBPK2lyJR0w5Lyyqg9F_oKHt3DI-HZ3_OhTWAwlK9HIZdNU76fj-alCuyifqEuujXNX1FQMPEV54THREbNt_1dQ5j38DWuZroDG_Vgq78XAJsNcNyYvvosEClybVtjbnQ0wBBZWK_4Z6dQRfDM5dNC2seHu0-iIcXOv"
                    />
                    <div>
                      <p className="text-[0.6875rem] font-headline font-bold tracking-widest text-on-surface uppercase">Destek</p>
                      <p className="text-[0.6875rem] font-body text-on-surface-variant">Rehber için tıklayın</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Mini-Metric */}
            <div className="glass-panel rounded-[1.5rem] p-8 border border-outline-variant/5">
              <div className="flex justify-between items-start mb-6">
                <span className="text-on-surface-variant font-label tracking-widest text-[0.6875rem] uppercase">Son Aktivite</span>
                <span className="text-primary text-[0.6875rem] font-label uppercase">Yeni</span>
              </div>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-3xl font-headline font-bold">{count > 0 ? `+${count}` : '0'}</span>
                <span className="text-on-surface-variant text-[0.6875rem] mb-1 uppercase tracking-widest">Değişim</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${Math.min(Math.max(count * 5, 0), 100)}%` }}
                ></div>
              </div>
              <p className="mt-4 text-[0.6875rem] font-body text-on-surface-variant">
                {count === 0 ? 'Henüz istatistik verisi toplanmadı.' : `Toplam ${count} birim sayıldı.`}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-surface px-6 py-4 flex justify-between items-center bg-surface-container-low">
          <a className="flex flex-col items-center gap-1 text-primary" href="/">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>numbers</span>
            <span className="font-label tracking-widest uppercase text-[8px] font-bold">Sayaç</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="/gecmis">
            <span className="material-symbols-outlined">history</span>
            <span className="font-label tracking-widest uppercase text-[8px] font-bold">Geçmiş</span>
          </a>
          <button
            onClick={handleIncrement}
            aria-label="Artır"
            className="w-12 h-12 -mt-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-105 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-on-primary">add</span>
          </button>
          <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="/analiz">
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label tracking-widest uppercase text-[8px] font-bold">Analiz</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="/ayarlar">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label tracking-widest uppercase text-[8px] font-bold">Ayarlar</span>
          </a>
        </div>
      </div>
    </div>
  )
}
