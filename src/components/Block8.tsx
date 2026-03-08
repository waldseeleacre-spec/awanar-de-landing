import { i18n } from '../i18n';

// Testemunhos em DE — copy oficial (atualizado em 08/03/2026)
const testimonials = [
  {
    name: 'Tom .',
    text: `Wunderbare Woche mit Ahom Retreat. Patricia hat alles mit Hingabe begleitet. Magische Erfahrung – tief verbunden mit Dorf und Natur.`,
  },
  {
    name: 'Patrick',
    text: `„Noke Koî" – die wirklichen Menschen. Intensive, herzöffnende und magische Erfahrung. Patricia, Elias und Gabriela haben diese Woche möglich gemacht.`,
  },
  {
    name: 'Angesa',
    text: `Ayahuasca-Zeremonien öffneten Türen in mir. Patricia war die Brücke zwischen Welten. Heimkehr, Transformation, Seelenschwester fürs Leben.`,
  },
  {
    name: 'Joern',
    text: `Danke für die Organisation und die wunderbare gemeinsame Zeit. Transformierende Woche mit schöner Energie und großartigen Menschen.`,
  },
];

export class Block8 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block8-section relative py-20 sm:py-24 lg:py-32 overflow-hidden';
    this.container.id = 'block8';
    
    parent.appendChild(this.container);
    this.render();
  }

  private render(): void {
    const eyebrow = i18n.t('block8.eyebrow');
    const title = i18n.t('block8.title');
    
    this.container.innerHTML = `
      <!-- Fundo -->
      <div class="absolute inset-0 bg-[#0B0D0C]"></div>
      
      <!-- Grain textura 3% -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>
      
      <!-- Container principal -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        
        <!-- Header -->
        <div class="text-center mb-16 sm:mb-20">
          <!-- Eyebrow -->
          <div class="mb-4 flex items-center justify-center gap-3">
            <span class="w-8 h-px bg-[#C6A85B]/40"></span>
            <span class="text-[#C6A85B] text-xs uppercase tracking-[0.25em] font-medium">
              ${eyebrow}
            </span>
            <span class="w-8 h-px bg-[#C6A85B]/40"></span>
          </div>
          
          <!-- Title -->
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-[#E8E6E1] mb-5">
            ${title}
          </h2>
        </div>
        
        <!-- Grid Masonry: Desktop columns, Mobile stack -->
        <div class="columns-1 md:columns-2 gap-8 space-y-8">
          ${testimonials.map((t, index) => `
            <!-- Card ${index + 1} -->
            <div class="break-inside-avoid opacity-0 translate-y-4 animate-fade-in" style="animation-delay: ${index * 80}ms; animation-fill-mode: forwards;">
              <div class="rounded-2xl backdrop-blur-sm bg-black/45 border border-[#C6A85B]/45 p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_rgba(198,168,91,0.22)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(198,168,91,0.28)]">
                
                <!-- Header do card: Nome -->
                <div class="mb-6 pb-4 border-b border-[#C6A85B]/20">
                  <h3 class="text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium">
                    ${t.name}
                  </h3>
                </div>
                
                <!-- Texto do testemunho: PRESERVAR QUEBRAS DE LINHA -->
                <p class="text-[#E8E6E1]/80 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                  ${t.text}
                </p>
                
              </div>
            </div>
          `).join('')}
        </div>
        
      </div>
      
      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/10 to-transparent"></div>
      
      <!-- Estilo da animação -->
      <style>
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in-up 600ms ease-out;
        }
      </style>
    `;
  }
}
