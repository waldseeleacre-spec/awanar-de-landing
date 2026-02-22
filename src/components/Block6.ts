import { i18n } from '../i18n';

export class Block6 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block6-section relative overflow-hidden';
    this.container.id = 'block6';
    
    parent.appendChild(this.container);
    this.render();
    
    // Re-render quando idioma mudar
    i18n.onChange(() => this.render());
  }

  private render(): void {
    // Obter itens das traduções usando tArray para arrays
    const includedItems = i18n.tArray('block6.included.items');
    const notIncludedItems = i18n.tArray('block6.notIncluded.items');
    
    // Obter outros textos
    const eyebrow = i18n.t('block6.eyebrow');
    const title = i18n.t('block6.title');
    const subtitle = i18n.t('block6.subtitle');
    const includedTitle = i18n.t('block6.included.title');
    const notIncludedTitle = i18n.t('block6.notIncluded.title');
    const quote = i18n.t('block6.quote');
    const cta = i18n.t('block6.cta');
    
    this.container.innerHTML = `
      <!-- Fundo -->
      <div class="absolute inset-0 bg-[#0B0D0C]"></div>
      
      <!-- Grain textura 3% -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>
      
      <!-- Container principal -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-20 sm:py-24 lg:py-32">
        
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
          
          <!-- Subtitle -->
          <p class="text-[#E8E6E1]/60 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            ${subtitle}
          </p>
        </div>
        
        <!-- Grid: 2 Cards -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          
          <!-- CARD ESQUERDA: ESTÁ INCLUSO -->
          <div class="relative rounded-2xl backdrop-blur-sm bg-black/40 border border-[#C6A85B]/30 p-6 sm:p-8 lg:p-10 shadow-[0_0_25px_rgba(198,168,91,0.15)]">
            <!-- Título -->
            <h3 class="text-[#C6A85B] text-sm uppercase tracking-[0.3em] font-medium mb-8 pb-4 border-b border-[#C6A85B]/20">
              ${includedTitle}
            </h3>
            
            <!-- Lista -->
            <ul class="space-y-[18px]">
              ${includedItems.map(item => `
                <li class="flex items-start gap-4 text-[#E8E6E1]/80 text-sm sm:text-base font-light leading-relaxed">
                  <span class="flex-shrink-0 w-1.5 h-1.5 bg-[#C6A85B] rounded-full mt-2"></span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          
          <!-- CARD DIREITA: NÃO ESTÁ INCLUSO -->
          <div class="relative rounded-2xl backdrop-blur-sm bg-black/40 border border-[#C6A85B]/20 p-6 sm:p-8 lg:p-10">
            <!-- Título -->
            <h3 class="text-[#E8E6E1]/50 text-sm uppercase tracking-[0.3em] font-medium mb-8 pb-4 border-b border-[#C6A85B]/10">
              ${notIncludedTitle}
            </h3>
            
            <!-- Lista -->
            <ul class="space-y-[18px]">
              ${notIncludedItems.map(item => `
                <li class="flex items-start gap-4 text-[#E8E6E1]/50 text-sm sm:text-base font-light leading-relaxed">
                  <span class="flex-shrink-0 w-1.5 h-1.5 bg-[#E8E6E1]/30 rounded-full mt-2"></span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          
        </div>
        
        <!-- Quote -->
        <div class="text-center mb-12">
          <blockquote class="inline-block">
            <p class="text-[#C6A85B]/70 text-lg sm:text-xl lg:text-2xl font-light italic tracking-wide">
              "${quote}"
            </p>
          </blockquote>
        </div>
        
        <!-- CTA -->
        <div class="text-center">
          <button class="px-8 py-4 bg-[#C6A85B]/10 text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium rounded-full border border-[#C6A85B]/30 transition-all duration-300 hover:bg-[#C6A85B]/20 hover:border-[#C6A85B]/50">
            ${cta}
          </button>
        </div>
        
      </div>
      
      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/10 to-transparent"></div>
    `;
  }
}
