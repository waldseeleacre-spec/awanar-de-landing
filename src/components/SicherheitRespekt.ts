import { i18n } from '../i18n';

export class SicherheitRespekt {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'trust-section relative py-16 sm:py-20 lg:py-24 overflow-hidden';
    this.container.id = 'trust';
    
    parent.appendChild(this.container);
    this.render();
    
    i18n.onChange(() => this.render());
  }

  private render(): void {
    const items = i18n.tArray('trust.items');
    
    this.container.innerHTML = `
      <!-- Fundo azul profundo -->
      <div class="absolute inset-0 bg-[#0B0D0C]"></div>
      
      <!-- Grain sutil 2% -->
      <div class="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>

      <div class="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <!-- Overline -->
        <div class="text-center mb-6">
          <span class="text-[#C6A85B] text-xs uppercase tracking-[0.3em] font-medium">
            ${i18n.t('trust.overline')}
          </span>
        </div>
        
        <!-- Título principal -->
        <h2 class="text-center text-3xl sm:text-4xl lg:text-5xl font-light text-[#E8E6E1] mb-4 tracking-tight">
          ${i18n.t('trust.title')}
        </h2>
        
        <!-- Subtítulo em 3 linhas -->
        <div class="text-center text-[#E8E6E1]/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          <p>${i18n.t('trust.subtitle.line1')}</p>
          <p>${i18n.t('trust.subtitle.line2')}</p>
          <p>${i18n.t('trust.subtitle.line3')}</p>
        </div>
        
        <!-- Badge -->
        <div class="flex justify-center mb-8">
          <span class="inline-flex items-center gap-2 px-4 py-2 bg-[#C6A85B]/10 border border-[#C6A85B]/30 rounded-full text-[#C6A85B] text-xs uppercase tracking-[0.2em] font-medium">
            ${i18n.t('trust.badge')}
          </span>
        </div>
        
        <!-- Card central -->
        <div class="relative rounded-2xl border border-[#C6A85B]/20 bg-black/20 backdrop-blur-sm p-8 sm:p-10 lg:p-12 mb-10">
          <!-- Glow sutil -->
          <div class="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(198,168,91,0.08)] pointer-events-none"></div>
          
          <h3 class="text-center text-xl sm:text-2xl font-light text-[#E8E6E1] mb-8">
            ${i18n.t('trust.cardTitle')}
          </h3>
          
          <ul class="space-y-4">
            ${items.map(item => `
              <li class="flex items-start gap-4 text-[#E8E6E1]/80 font-light leading-relaxed">
                <span class="flex-shrink-0 w-6 h-px bg-[#C6A85B]/50 mt-3"></span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <!-- Quote em itálico -->
        <p class="text-center text-[#C6A85B]/80 text-lg sm:text-xl font-light italic mb-10">
          ${i18n.t('trust.quote')}
        </p>
        
        <!-- CTA -->
        <div class="text-center mb-8">
          <button class="group inline-flex items-center gap-3 text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium 
                         border-b border-[#C6A85B]/40 pb-1 transition-all duration-300 
                         hover:border-[#C6A85B] hover:text-[#D4B896]">
            ${i18n.t('trust.cta')}
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>
        
        <!-- Nota final -->
        <div class="text-center text-[#E8E6E1]/40 text-xs font-light">
          <p>${i18n.t('trust.note.line1')}</p>
          <p>${i18n.t('trust.note.line2')}</p>
          <p>${i18n.t('trust.note.line3')}</p>
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
