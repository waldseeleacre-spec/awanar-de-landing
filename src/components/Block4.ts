import { i18n } from '../i18n';

export class Block4 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block4-section relative py-20 sm:py-24 lg:py-32 overflow-hidden';
    this.container.id = 'block4';
    
    parent.appendChild(this.container);
    this.render();
    
    // Re-render quando idioma mudar
    i18n.onChange(() => this.render());
  }

  private render(): void {
    this.container.innerHTML = `
      <!-- Container principal -->
      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        
        <!-- Header -->
        <div class="text-center mb-16 sm:mb-20">
          <!-- Eyebrow -->
          <div class="mb-4 flex items-center justify-center gap-3">
            <span class="w-8 h-px bg-awa-gold/40"></span>
            <span class="text-awa-gold text-xs uppercase tracking-[0.25em] font-medium">
              ${i18n.t('block4.eyebrow')}
            </span>
            <span class="w-8 h-px bg-awa-gold/40"></span>
          </div>
          
          <!-- Title -->
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-awa-sand mb-5">
            ${i18n.t('block4.title')}
          </h2>
          
          <!-- Subtitle -->
          <p class="text-awa-sand/60 font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            ${i18n.t('block4.subtitle')}
          </p>
        </div>
        
        <!-- Grid: Imagem + Lista -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <!-- LEFT: Imagem -->
          <div class="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden order-2 lg:order-1">
            <!-- Fallback gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-awa-forest via-awa-earth to-awa-dark"></div>
            
            <!-- Imagem -->
            <img 
              src="/images/bloco-04.jpg" 
              alt="${i18n.t('hero.imageAlt')}" 
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
              onload="this.style.opacity='1'"
              onerror="this.style.display='none'"
            />
            
            <!-- Overlay sutil -->
            <div class="absolute inset-0 bg-gradient-to-t from-awa-dark/40 to-transparent"></div>
            
            <!-- Vinheta -->
            <div class="absolute inset-0" style="box-shadow: inset 0 0 80px rgba(0,0,0,0.3);"></div>
          </div>
          
          <!-- RIGHT: Lista de itens -->
          <div class="order-1 lg:order-2 space-y-8 sm:space-y-10">
            
            <!-- Item 1 -->
            <div class="program-item group">
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-medium text-awa-gold/60 border border-awa-gold/20 rounded-full transition-colors duration-300 group-hover:border-awa-gold/40 group-hover:text-awa-gold">
                  01
                </span>
                <div>
                  <h3 class="text-awa-sand text-base sm:text-lg font-medium mb-2 tracking-wide">
                    ${i18n.t('block4.items.mark.title')}
                  </h3>
                  <p class="text-awa-sand/50 text-sm leading-relaxed">
                    ${i18n.t('block4.items.mark.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Item 2 -->
            <div class="program-item group">
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-medium text-awa-gold/60 border border-awa-gold/20 rounded-full transition-colors duration-300 group-hover:border-awa-gold/40 group-hover:text-awa-gold">
                  02
                </span>
                <div>
                  <h3 class="text-awa-sand text-base sm:text-lg font-medium mb-2 tracking-wide">
                    ${i18n.t('block4.items.cleanse.title')}
                  </h3>
                  <p class="text-awa-sand/50 text-sm leading-relaxed">
                    ${i18n.t('block4.items.cleanse.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Item 3 -->
            <div class="program-item group">
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-medium text-awa-gold/60 border border-awa-gold/20 rounded-full transition-colors duration-300 group-hover:border-awa-gold/40 group-hover:text-awa-gold">
                  03
                </span>
                <div>
                  <h3 class="text-awa-sand text-base sm:text-lg font-medium mb-2 tracking-wide">
                    ${i18n.t('block4.items.breath.title')}
                  </h3>
                  <p class="text-awa-sand/50 text-sm leading-relaxed">
                    ${i18n.t('block4.items.breath.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Item 4 -->
            <div class="program-item group">
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-medium text-awa-gold/60 border border-awa-gold/20 rounded-full transition-colors duration-300 group-hover:border-awa-gold/40 group-hover:text-awa-gold">
                  04
                </span>
                <div>
                  <h3 class="text-awa-sand text-base sm:text-lg font-medium mb-2 tracking-wide">
                    ${i18n.t('block4.items.vision.title')}
                  </h3>
                  <p class="text-awa-sand/50 text-sm leading-relaxed">
                    ${i18n.t('block4.items.vision.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Item 5 -->
            <div class="program-item group">
              <div class="flex items-start gap-4">
                <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center text-xs font-medium text-awa-gold/60 border border-awa-gold/20 rounded-full transition-colors duration-300 group-hover:border-awa-gold/40 group-hover:text-awa-gold">
                  05
                </span>
                <div>
                  <h3 class="text-awa-sand text-base sm:text-lg font-medium mb-2 tracking-wide">
                    ${i18n.t('block4.items.voice.title')}
                  </h3>
                  <p class="text-awa-sand/50 text-sm leading-relaxed">
                    ${i18n.t('block4.items.voice.description')}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <!-- Note -->
        <div class="mt-12 sm:mt-16 text-center">
          <p class="text-awa-sand/40 text-xs sm:text-sm font-light">
            ${i18n.t('block4.note')}
          </p>
        </div>
        
        <!-- Closing statement -->
        <div class="mt-16 sm:mt-20 text-center">
          <blockquote class="inline-block">
            <p class="text-awa-gold/80 text-lg sm:text-xl lg:text-2xl font-light italic">
              ${i18n.t('block4.closing')}
            </p>
          </blockquote>
        </div>
        
      </div>
      
      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-awa-gold/10 to-transparent"></div>
    `;
  }
}
