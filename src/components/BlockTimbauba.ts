import { i18n } from '../i18n';

const aldeiaImages = [
  "/images/aldeia -01.jpeg",
  "/images/aaldeia 02 .jpeg",
  "/images/aldeia 03.jpeg",
  "/images/aldeia 04.jpeg"
];

export class BlockTimbauba {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'timbauba-section relative py-6 sm:py-8 lg:py-10 overflow-hidden';
    this.container.id = 'timbauba';
    
    parent.appendChild(this.container);
    this.render();
    
    i18n.onChange(() => this.render());
  }

  private render(): void {
    const eyebrow = i18n.t('timbauba.eyebrow');
    const title = i18n.t('timbauba.title');
    const intro = i18n.t('timbauba.intro');
    const pakaName = i18n.t('timbauba.paka.name');
    const pakaBio = i18n.t('timbauba.paka.bio');
    const ruraName = i18n.t('timbauba.rura.name');
    const ruraBio = i18n.t('timbauba.rura.bio');
    const caption = i18n.t('timbauba.caption');
    const imageAlt = i18n.t('timbauba.imageAlt');

    this.container.innerHTML = `
      <!-- Fundo profundo -->
      <div class="absolute inset-0 bg-[#0A0C0B]"></div>
      
      <!-- Grain sutil 2% -->
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">

        <!-- Texto Aldeia Timbaúba (Alemão Formal) -->
        <div class="max-w-4xl mx-auto text-center mb-12 md:mb-16 opacity-0 translate-y-4 animate-fade-in" style="animation-delay: 80ms; animation-fill-mode: forwards;">
          <p class="text-sm tracking-[0.3em] uppercase text-white/50 mb-4">NOKE KOÎ – KAMANAWA</p>
          <h2 class="text-3xl md:text-5xl font-serif text-white mb-6">Aldeia Timbaúba – Rio Gregório</h2>
          <p class="text-white/70 leading-relaxed text-base md:text-lg">
            Die Aldeia Timbaúba ist ein lebendiges Territorium am Ufer des Rio Gregório im brasilianischen Bundesstaat Acre. 
            Ein Ort, an dem der Wald lehrt, die Gemeinschaft gemeinsam wirkt und der Gesang den Weg weist.
          </p>
          <p class="text-white/70 leading-relaxed text-base md:text-lg mt-4">
            Unter der Führung von Häuptling Paká Kamanawa bewahrt das Dorf seine tief verwurzelten Traditionen und öffnet zugleich respektvolle Lernräume für Menschen, die mit Achtsamkeit und offenem Herzen ankommen.
          </p>
        </div>

        <!-- Grid Fotos Aldeia - 2x2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20 lg:mb-28">
          ${aldeiaImages.map((src, index) => `
            <div class="relative overflow-hidden rounded-2xl border border-white/5 bg-black/20 shadow-[0_0_0_1px_rgba(215,165,95,0.12),0_0_24px_rgba(215,165,95,0.10)] opacity-0 translate-y-4 animate-fade-in" style="animation-delay: ${(index + 1) * 80}ms; animation-fill-mode: forwards;">
              <div class="aspect-[4/3]">
                <img
                  src="${src}"
                  alt="${imageAlt}"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="pt-2 text-[12px] tracking-wide text-white/45">${caption}</div>
            </div>
          `).join('')}
        </div>

        <!-- Grafismo ancestral separador -->
        <div class="flex justify-center mb-20 lg:mb-28 opacity-0 translate-y-4 animate-fade-in" style="animation-delay: 400ms; animation-fill-mode: forwards;">
          <svg width="200" height="24" viewBox="0 0 200 24" fill="none" class="opacity-30">
            <path d="M0 12C40 12 40 2 80 2C120 2 120 22 160 22C180 22 190 12 200 12" stroke="#C6A85B" stroke-width="1" stroke-linecap="round"/>
            <circle cx="100" cy="12" r="2" fill="#C6A85B" opacity="0.6"/>
          </svg>
        </div>

        <!-- Cards Liderança -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <!-- Paká Kamanawa -->
          <article class="relative group opacity-0 translate-y-4 animate-fade-in" style="animation-delay: 480ms; animation-fill-mode: forwards;">
            <div class="relative rounded-2xl overflow-hidden bg-black/30 border border-[#C6A85B]/20 p-8 lg:p-10 transition-all duration-500 hover:border-[#C6A85B]/40 hover:shadow-[0_0_40px_rgba(198,168,91,0.12)]">
              <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <!-- Foto perfil -->
                <div class="relative flex-shrink-0">
                  <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#C6A85B]/30 shadow-[0_0_25px_rgba(198,168,91,0.25)]">
                    <img 
                      src="/images/paka-kamanawa.webp" 
                      alt="Paká Kamanawa – Dorfchef der Aldeia Timbaúba" 
                      class="w-full h-full object-cover"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                  </div>
                  <!-- Linha decorativa -->
                  <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/50 to-transparent"></div>
                </div>
                
                <!-- Conteúdo -->
                <div class="flex-1">
                  <!-- Nome com destaque especial -->
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-1 h-6 bg-[#C6A85B] rounded-full shadow-[0_0_8px_rgba(198,168,91,0.4)]"></div>
                    <h3 class="text-[#C6A85B] text-lg sm:text-xl font-medium tracking-wide" style="text-shadow: 0 0 20px rgba(198,168,91,0.15);">${pakaName}</h3>
                  </div>
                  <p class="text-[#E8E6E1]/70 font-light leading-relaxed text-sm sm:text-base">${pakaBio}</p>
                </div>
              </div>
            </div>
          </article>

          <!-- Rurá Varinawá -->
          <article class="relative group opacity-0 translate-y-4 animate-fade-in" style="animation-delay: 560ms; animation-fill-mode: forwards;">
            <div class="relative rounded-2xl overflow-hidden bg-black/30 border border-[#C6A85B]/15 p-8 lg:p-10 transition-all duration-500 hover:border-[#C6A85B]/30">
              <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                <!-- Foto perfil -->
                <div class="relative flex-shrink-0">
                  <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#C6A85B]/30 shadow-[0_0_25px_rgba(198,168,91,0.25)]">
                    <img 
                      src="/images/rura-varinawa.webp" 
                      alt="Rurá Varinawá – Künstlerin und Hüterin der Gesänge" 
                      class="w-full h-full object-cover"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                  </div>
                </div>
                
                <!-- Conteúdo -->
                <div class="flex-1">
                  <h3 class="text-[#C6A85B]/80 text-lg sm:text-xl font-medium tracking-wide mb-4">${ruraName}</h3>
                  <p class="text-[#E8E6E1]/70 font-light leading-relaxed text-sm sm:text-base">${ruraBio}</p>
                </div>
              </div>
            </div>
          </article>

        </div>

      </div>

      <!-- Divisória inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/10 to-transparent"></div>

      <!-- Estilos animação -->
      <style>
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in-up 600ms ease-out forwards;
        }
      </style>
    `;
  }
}
