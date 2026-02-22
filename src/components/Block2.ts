import { i18n, type Language } from '../i18n';

// Ícones SVG autorais minimalistas (line style)
const icons = {
  nature: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 4v40"/>
    <path d="M24 8c-8 4-14 12-14 20"/>
    <path d="M24 16c-4 2-8 6-8 12"/>
    <path d="M24 8c8 4 14 12 14 20"/>
    <path d="M24 16c4 2 8 6 8 12"/>
    <path d="M20 40h8"/>
  </svg>`,
  
  encounter: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="24" cy="14" r="6"/>
    <path d="M12 40c0-6.6 5.4-12 12-12s12 5.4 12 12"/>
    <path d="M8 32c0-4 3-8 8-8"/>
    <path d="M40 32c0-4-3-8-8-8"/>
  </svg>`,
  
  transformation: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 40c8-8 24-8 32 0"/>
    <path d="M16 32c4-4 12-4 16 0"/>
    <circle cx="24" cy="16" r="6"/>
    <path d="M24 2v4"/>
    <path d="M24 26v4"/>
    <path d="M10 12l3 3"/>
    <path d="M38 12l-3 3"/>
  </svg>`,
};

export class Block2 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block2-section relative py-20 sm:py-24 lg:py-32 bg-awa-dark';
    this.container.id = 'block2';
    
    parent.appendChild(this.container);
    this.render();
    
    // Re-render quando idioma mudar
    i18n.onChange(() => this.render());
  }

  private render(): void {
    this.container.innerHTML = `
      <!-- Container -->
      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        
        <!-- Header -->
        <div class="text-center mb-16 sm:mb-20">
          <!-- Eyebrow -->
          <div class="mb-4 flex items-center justify-center gap-3">
            <span class="w-8 h-px bg-awa-gold/40"></span>
            <span class="text-awa-gold text-xs uppercase tracking-[0.25em] font-medium">
              ${i18n.t('block2.eyebrow')}
            </span>
            <span class="w-8 h-px bg-awa-gold/40"></span>
          </div>
          
          <!-- Title -->
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-awa-sand mb-5">
            ${i18n.t('block2.title')}
          </h2>
          
          <!-- Subtitle -->
          <p class="text-awa-sand/60 font-light max-w-2xl mx-auto leading-relaxed">
            ${i18n.t('block2.subtitle')}
          </p>
        </div>
        
        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          
          <!-- Card 1: Nature -->
          <div class="card group">
            <div class="card-icon text-awa-gold/70 mb-5 w-12 h-12 transition-colors duration-300 group-hover:text-awa-gold">
              ${icons.nature}
            </div>
            <h3 class="text-awa-sand text-lg font-medium mb-3 tracking-wide">
              ${i18n.t('block2.cards.nature.title')}
            </h3>
            <p class="text-awa-sand/50 text-sm leading-relaxed">
              ${i18n.t('block2.cards.nature.description')}
            </p>
          </div>
          
          <!-- Card 2: Encounter -->
          <div class="card group">
            <div class="card-icon text-awa-gold/70 mb-5 w-12 h-12 transition-colors duration-300 group-hover:text-awa-gold">
              ${icons.encounter}
            </div>
            <h3 class="text-awa-sand text-lg font-medium mb-3 tracking-wide">
              ${i18n.t('block2.cards.encounter.title')}
            </h3>
            <p class="text-awa-sand/50 text-sm leading-relaxed">
              ${i18n.t('block2.cards.encounter.description')}
            </p>
          </div>
          
          <!-- Card 3: Transformation -->
          <div class="card group">
            <div class="card-icon text-awa-gold/70 mb-5 w-12 h-12 transition-colors duration-300 group-hover:text-awa-gold">
              ${icons.transformation}
            </div>
            <h3 class="text-awa-sand text-lg font-medium mb-3 tracking-wide">
              ${i18n.t('block2.cards.transformation.title')}
            </h3>
            <p class="text-awa-sand/50 text-sm leading-relaxed">
              ${i18n.t('block2.cards.transformation.description')}
            </p>
          </div>
          
        </div>
        
        <!-- CTA Ghost -->
        <div class="text-center">
          <a href="#pacto" class="cta-ghost inline-flex items-center gap-2 text-awa-sand/60 text-sm tracking-wide 
             border-b border-awa-gold/30 pb-1 transition-all duration-300 
             hover:text-awa-gold hover:border-awa-gold">
            ${i18n.t('block2.cta')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" class="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
        </div>
        
      </div>
      
      <!-- Grafismo ancestral sutil (bottom) -->
      <div class="absolute bottom-0 left-0 right-0 h-24 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 1440 60" class="w-full h-full" preserveAspectRatio="none">
          <g stroke="#c9a962" fill="none" stroke-width="1">
            <path d="M0,30 Q180,10 360,30 T720,30 T1080,30 T1440,30" />
            <path d="M0,45 Q180,25 360,45 T720,45 T1080,45 T1440,45" />
          </g>
        </svg>
      </div>
    `;
  }
}
