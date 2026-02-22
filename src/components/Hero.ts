import { i18n, type Language } from '../i18n';

export class Hero {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'hero-section relative min-h-screen flex flex-col overflow-hidden';
    this.container.id = 'hero';
    
    parent.appendChild(this.container);
    this.render();
    
    // Re-render quando idioma mudar
    i18n.onChange(() => this.render());
  }

  private render(): void {
    const lang = i18n.lang;
    
    this.container.innerHTML = `
      <!-- Background Image -->
      <div class="hero-bg absolute inset-0">
        <img 
          src="/images/bloco-01.jpg" 
          alt="${i18n.t('hero.imageAlt')}" 
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      <!-- Overlay escuro + gradiente (corpo) -->
      <div class="hero-overlay absolute inset-0 bg-gradient-to-t from-awa-dark via-awa-dark/70 to-transparent"></div>
      
      <!-- Header Band: Overlay escuro apenas no topo para legibilidade do logo -->
      <div class="header-band absolute top-0 left-0 right-0 h-40 pointer-events-none"
           style="background: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);">
      </div>
      
      <!-- Vinheta suave -->
      <div class="hero-vignette absolute inset-0" style="box-shadow: inset 0 0 200px rgba(0,0,0,0.6);"></div>
      
      <!-- Grain sutil -->
      <div class="hero-grain absolute inset-0 opacity-[0.02] pointer-events-none" 
           style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>
      
      <!-- Grafismo ancestral sutil -->
      <div class="absolute bottom-0 left-0 right-0 h-48 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 1440 120" class="w-full h-full" preserveAspectRatio="none">
          <g stroke="#c9a962" fill="none" stroke-width="1">
            <path d="M0,60 Q180,40 360,60 T720,60 T1080,60 T1440,60" />
            <path d="M0,80 Q180,60 360,80 T720,80 T1080,80 T1440,80" />
            <path d="M0,100 Q180,80 360,100 T720,100 T1080,100 T1440,100" />
          </g>
          <g fill="#c9a962">
            <circle cx="120" cy="60" r="2" />
            <circle cx="480" cy="60" r="2" />
            <circle cx="840" cy="60" r="2" />
            <circle cx="1200" cy="60" r="2" />
          </g>
        </svg>
      </div>

      <!-- Header / Nav -->
      <header class="relative z-20 w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-6 flex justify-between items-start">
        <!-- Logo -->
        <div class="flex flex-col">
          <div class="text-awa-gold font-medium text-xl tracking-[0.2em] uppercase">
            AWANAR
          </div>
          <div class="text-awa-sand/80 text-[0.65rem] uppercase tracking-[0.3em] mt-0.5">
            Amazonia Retreat
          </div>
        </div>
        
        <!-- Language Toggle -->
        <div class="flex items-center gap-2" role="group" aria-label="${i18n.t('nav.language')}">
          <button 
            class="lang-toggle ${lang === 'de' ? 'active' : ''}" 
            data-lang="de"
            aria-pressed="${lang === 'de'}"
          >
            DE
          </button>
          <button 
            class="lang-toggle ${lang === 'pt' ? 'active' : ''}" 
            data-lang="pt"
            aria-pressed="${lang === 'pt'}"
          >
            PT
          </button>
        </div>
      </header>

      <!-- Main Content -->
      <main class="relative z-10 flex-1 flex flex-col justify-end px-6 sm:px-12 lg:px-16 xl:px-24 pb-16 sm:pb-20 lg:pb-24">
        <div class="max-w-3xl">
          
          <!-- Eyebrow -->
          <div class="mb-4 flex items-center gap-3">
            <span class="w-6 h-px bg-awa-gold/60"></span>
            <span class="text-awa-gold text-xs uppercase tracking-[0.25em] font-medium">
              ${i18n.t('hero.tagline')}
            </span>
          </div>
          
          <!-- H1 -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-awa-sand leading-[1.1] mb-5">
            ${i18n.t('hero.headline')}
          </h1>
          
          <!-- Subheadline -->
          <p class="text-base sm:text-lg lg:text-xl text-awa-sand/80 font-light mb-8 leading-relaxed max-w-2xl">
            ${i18n.t('hero.subheadline')}
          </p>
          
          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 mb-6">
            <button class="btn-primary">
              ${i18n.t('hero.ctaPrimary')}
            </button>
            <button class="btn-secondary">
              ${i18n.t('hero.ctaSecondary')}
            </button>
          </div>
          
          <!-- Linha de Confiança -->
          <div class="flex items-center gap-3 text-awa-sand/50 text-sm">
            <span class="w-4 h-px bg-awa-gold/40"></span>
            <span class="tracking-wide">${i18n.t('hero.trustline')}</span>
          </div>
        </div>
      </main>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const buttons = this.container.querySelectorAll('[data-lang]');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = (e.currentTarget as HTMLElement).dataset.lang as Language;
        i18n.lang = lang;
      });
    });
  }
}
