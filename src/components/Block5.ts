import { i18n } from '../i18n';

export class Block5 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block5-section relative py-20 sm:py-24 lg:py-32 overflow-hidden';
    this.container.id = 'block5';
    
    parent.appendChild(this.container);
    this.render();
    
    // Re-render quando idioma mudar
    i18n.onChange(() => this.render());
  }

  private render(): void {
    this.container.innerHTML = `
      <!-- Fundo sutil -->
      <div class="absolute inset-0 bg-gradient-to-b from-awa-dark via-awa-earth/10 to-awa-dark"></div>
      
      <!-- Container principal -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        
        <!-- Header -->
        <div class="text-center mb-16 sm:mb-20">
          <!-- Eyebrow -->
          <div class="mb-4 flex items-center justify-center gap-3">
            <span class="w-8 h-px bg-awa-gold/40"></span>
            <span class="text-awa-gold text-xs uppercase tracking-[0.25em] font-medium">
              ${i18n.t('block5.eyebrow')}
            </span>
            <span class="w-8 h-px bg-awa-gold/40"></span>
          </div>
          
          <!-- Title -->
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-awa-sand mb-5 max-w-2xl mx-auto">
            ${i18n.t('block5.title')}
          </h2>
          
          <!-- Subtitle -->
          <p class="text-awa-sand/60 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
            ${i18n.t('block5.subtitle')}
          </p>
        </div>
        
        <!-- Grid: Imagem + Timeline -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <!-- LEFT: Imagem -->
          <div class="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden order-2 lg:order-1">
            <!-- Fallback gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-awa-forest via-awa-earth to-awa-dark"></div>
            
            <!-- Imagem -->
            <img 
              src="/images/bloco-05.jpg" 
              alt="${i18n.t('hero.imageAlt')}" 
              class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
              onload="this.style.opacity='1'"
              onerror="this.style.display='none'"
            />
            
            <!-- Overlay sutil -->
            <div class="absolute inset-0 bg-gradient-to-t from-awa-dark/50 to-transparent"></div>
            
            <!-- Vinheta -->
            <div class="absolute inset-0" style="box-shadow: inset 0 0 80px rgba(0,0,0,0.3);"></div>
          </div>
          
          <!-- RIGHT: Timeline -->
          <div class="order-1 lg:order-2">
            
            <!-- Timeline items -->
            <div class="relative space-y-8 sm:space-y-10">
              
              <!-- Linha vertical -->
              <div class="absolute left-4 top-2 bottom-2 w-px bg-awa-gold/20"></div>
              
              <!-- Step 1 -->
              <div class="timeline-item relative pl-12">
                <div class="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                  <span class="w-3 h-3 bg-awa-gold/60 rounded-full"></span>
                </div>
                <div class="text-awa-gold text-sm font-medium mb-1 tracking-wide">
                  ${i18n.t('block5.timeline.step1.date')}
                </div>
                <h3 class="text-awa-sand text-lg font-medium mb-2">
                  ${i18n.t('block5.timeline.step1.title')}
                </h3>
                <p class="text-awa-sand/50 text-sm leading-relaxed">
                  ${i18n.t('block5.timeline.step1.description')}
                </p>
              </div>
              
              <!-- Step 2 -->
              <div class="timeline-item relative pl-12">
                <div class="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                  <span class="w-3 h-3 bg-awa-gold/60 rounded-full"></span>
                </div>
                <div class="text-awa-gold text-sm font-medium mb-1 tracking-wide">
                  ${i18n.t('block5.timeline.step2.date')}
                </div>
                <h3 class="text-awa-sand text-lg font-medium mb-2">
                  ${i18n.t('block5.timeline.step2.title')}
                </h3>
                <p class="text-awa-sand/50 text-sm leading-relaxed">
                  ${i18n.t('block5.timeline.step2.description')}
                </p>
              </div>
              
              <!-- Step 3 -->
              <div class="timeline-item relative pl-12">
                <div class="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                  <span class="w-3 h-3 bg-awa-gold/60 rounded-full"></span>
                </div>
                <div class="text-awa-gold text-sm font-medium mb-1 tracking-wide">
                  ${i18n.t('block5.timeline.step3.date')}
                </div>
                <h3 class="text-awa-sand text-lg font-medium mb-2">
                  ${i18n.t('block5.timeline.step3.title')}
                </h3>
                <p class="text-awa-sand/50 text-sm leading-relaxed">
                  ${i18n.t('block5.timeline.step3.description')}
                </p>
              </div>
              
              <!-- Step 4 -->
              <div class="timeline-item relative pl-12">
                <div class="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                  <span class="w-3 h-3 bg-awa-gold/60 rounded-full"></span>
                </div>
                <div class="text-awa-gold text-sm font-medium mb-1 tracking-wide">
                  ${i18n.t('block5.timeline.step4.date')}
                </div>
                <h3 class="text-awa-sand text-lg font-medium mb-2">
                  ${i18n.t('block5.timeline.step4.title')}
                </h3>
                <p class="text-awa-sand/50 text-sm leading-relaxed">
                  ${i18n.t('block5.timeline.step4.description')}
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
        
        <!-- Highlight quote -->
        <div class="mt-16 sm:mt-20 text-center">
          <blockquote class="inline-block">
            <p class="text-awa-gold/80 text-lg sm:text-xl lg:text-2xl font-light italic mb-8">
              ${i18n.t('block5.highlight')}
            </p>
          </blockquote>
          
          <!-- CTA -->
          <div class="mt-8">
            <button class="btn-primary">
              ${i18n.t('block5.cta')}
            </button>
          </div>
        </div>
        
        <!-- Footer note -->
        <div class="mt-12 sm:mt-16 text-center">
          <p class="text-awa-sand/40 text-xs sm:text-sm font-light">
            ${i18n.t('block5.footer')}
          </p>
        </div>
        
      </div>
      
      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-awa-gold/10 to-transparent"></div>
    `;
  }
}
