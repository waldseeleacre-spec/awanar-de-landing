import { i18n } from '../i18n';

export class Block7 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block7-section relative py-12 sm:py-16 lg:py-20 overflow-hidden';
    this.container.id = 'block7';
    
    parent.appendChild(this.container);
    this.render();
    
    // Re-render quando idioma mudar
    i18n.onChange(() => this.render());
  }

  private render(): void {
    // Obter bullets das traduções usando tArray
    const bullets = i18n.tArray('block7.bullets');
    
    // Obter outros textos
    const eyebrow = i18n.t('block7.eyebrow');
    const title = i18n.t('block7.title');
    const paragraph1 = i18n.t('block7.paragraph1');
    const paragraph2 = i18n.t('block7.paragraph2');
    const paragraph3 = i18n.t('block7.paragraph3');
    const quote = i18n.t('block7.quote');
    const cta = i18n.t('block7.cta');
    const footer = i18n.t('block7.footer');
    const imageAlt = i18n.t('hero.imageAlt');
    
    this.container.innerHTML = `
      <!-- Fundo -->
      <div class="absolute inset-0 bg-[#0B0D0C]"></div>
      
      <!-- Grain textura 3% -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>
      
      <!-- Container principal -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-10">
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
        
        <!-- Grid: Imagem + Conteúdo -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <!-- LEFT: Imagem Patricia -->
          <div class="order-2 lg:order-1">
            <!-- Container externo com glow sutil -->
            <div class="rounded-2xl p-[1px] bg-gradient-to-br from-[#C6A85B]/30 to-transparent shadow-[0_0_35px_rgba(198,168,91,0.12)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,168,91,0.18)]">
              <!-- Container interno -->
              <div class="rounded-2xl overflow-hidden bg-black">
                <img 
                  src="/images/patricia-retrato-01.jpeg" 
                  alt="${imageAlt}" 
                  class="w-full h-full object-cover aspect-[4/5] hover:scale-[1.02] transition duration-700 ease-out"
                />
              </div>
            </div>
          </div>
          
          <!-- RIGHT: Texto -->
          <div class="order-1 lg:order-2 space-y-6">
            
            <!-- Parágrafos -->
            <p class="text-[#E8E6E1]/80 text-base sm:text-lg font-light leading-relaxed">
              ${paragraph1}
            </p>
            
            <p class="text-[#E8E6E1]/80 text-base sm:text-lg font-light leading-relaxed">
              ${paragraph2}
            </p>
            
            <p class="text-[#E8E6E1]/80 text-base sm:text-lg font-light leading-relaxed">
              ${paragraph3}
            </p>
            
            <!-- Quote -->
            <blockquote class="border-l-2 border-[#C6A85B]/30 pl-6 my-8">
              <p class="text-[#C6A85B]/80 text-lg sm:text-xl font-light italic">
                "${quote}"
              </p>
            </blockquote>
            
            <!-- Bullets -->
            <ul class="space-y-3">
              ${bullets.map(item => `
                <li class="flex items-start gap-3 text-[#E8E6E1]/70 text-sm sm:text-base font-light">
                  <span class="flex-shrink-0 w-1.5 h-1.5 bg-[#C6A85B]/60 rounded-full mt-2"></span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
            
            <!-- CTA -->
            <div class="pt-6">
              <button class="px-8 py-4 bg-[#C6A85B]/10 text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium rounded-full border border-[#C6A85B]/30 transition-all duration-300 hover:bg-[#C6A85B]/20 hover:border-[#C6A85B]/50 hover:shadow-[0_0_20px_rgba(198,168,91,0.15)]">
                ${cta}
              </button>
            </div>
            
            <!-- Footer -->
            <p class="text-[#E8E6E1]/40 text-xs sm:text-sm font-light pt-4">
              ${footer}
            </p>
            
          </div>
        </div>
        
      </div>
      
      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/10 to-transparent"></div>
    `;
  }
}
