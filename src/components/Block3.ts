import { i18n } from '../i18n';

export class Block3 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block3-section relative overflow-hidden';
    this.container.id = 'block3';
    
    parent.appendChild(this.container);
    this.render();
    
    // Re-render quando idioma mudar
    i18n.onChange(() => this.render());
  }

  private render(): void {
    this.container.innerHTML = `
      <!-- Container principal -->
      <div class="relative z-10 min-h-screen flex flex-col">
        
        <!-- TOP: Imagem (mobile & desktop) -->
        <div class="w-full relative h-[50vh] lg:h-[45vh] lg:absolute lg:inset-0 lg:h-full">
          <!-- Fallback gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-awa-forest via-awa-earth to-awa-dark"></div>
          
          <!-- Imagem -->
          <img 
            src="/images/bloco-03.jpg" 
            alt="${i18n.t('hero.imageAlt')}" 
            class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
            onload="this.style.opacity='1'"
            onerror="this.style.display='none'"
          />
          
          <!-- Overlay sutil -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-awa-dark lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-awa-dark/90"></div>
          
          <!-- Vinheta -->
          <div class="absolute inset-0" style="box-shadow: inset 0 0 120px rgba(0,0,0,0.4);"></div>
        </div>
        
        <!-- BOTTOM: Texto (mobile & desktop overlay) -->
        <div class="w-full lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-end">
          <div class="relative z-20 w-full lg:w-1/2 xl:w-5/12 px-6 sm:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-0 -mt-20 lg:mt-0">
            
            <!-- Card de texto com fundo escuro -->
            <div class="bg-awa-dark/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-lg lg:rounded-none border border-awa-gold/10 lg:border-none">
              
              <!-- Eyebrow -->
              <div class="mb-4 flex items-center gap-3">
                <span class="w-6 h-px bg-awa-gold/50"></span>
                <span class="text-awa-gold text-xs uppercase tracking-[0.25em] font-medium">
                  ${i18n.t('block3.eyebrow')}
                </span>
              </div>
              
              <!-- Title -->
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-awa-sand leading-tight mb-5">
                ${i18n.t('block3.title')}
              </h2>
              
              <!-- Paragraphs -->
              <div class="space-y-4 mb-6">
                <p class="text-awa-sand/70 font-light leading-relaxed text-sm sm:text-base">
                  ${i18n.t('block3.paragraph1')}
                </p>
                <p class="text-awa-sand/70 font-light leading-relaxed text-sm sm:text-base">
                  ${i18n.t('block3.paragraph2')}
                </p>
              </div>
              
              <!-- Highlight -->
              <div class="pl-4 border-l-2 border-awa-gold/40">
                <p class="text-awa-gold/80 italic font-light text-sm sm:text-base">
                  ${i18n.t('block3.highlight')}
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
        
      </div>
      
      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-awa-gold/10 to-transparent"></div>
    `;
  }
}
