import { i18n } from '../i18n';

export class FaqSection {
  private container: HTMLElement;
  private openIndex: number = -1;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'faq-section relative py-16 sm:py-20 lg:py-24 overflow-hidden';
    this.container.id = 'faq';
    
    parent.appendChild(this.container);
    this.render();
    
    i18n.onChange(() => this.render());
  }

  private render(): void {
    const faqItems = [
      { q: i18n.t('faq.q1'), a: i18n.t('faq.a1') },
      { q: i18n.t('faq.q2'), a: i18n.t('faq.a2') },
      { q: i18n.t('faq.q3'), a: i18n.t('faq.a3') },
      { q: i18n.t('faq.q4'), a: i18n.t('faq.a4') },
      { q: i18n.t('faq.q5'), a: i18n.t('faq.a5') },
      { q: i18n.t('faq.q6'), a: i18n.t('faq.a6') },
      { q: i18n.t('faq.q7'), a: i18n.t('faq.a7') },
      { q: i18n.t('faq.q8'), a: i18n.t('faq.a8') },
      { q: i18n.t('faq.q9'), a: i18n.t('faq.a9') },
      { q: i18n.t('faq.q10'), a: i18n.t('faq.a10') },
    ];

    this.container.innerHTML = `
      <!-- Fundo preto -->
      <div class="absolute inset-0 bg-[#050505]"></div>
      
      <!-- Vinheta sutil -->
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);"></div>
      
      <!-- Glow dourado sutil atrás do título -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C6A85B]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="relative z-10 max-w-3xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#E8E6E1] mb-4 tracking-tight">
            ${i18n.t('faq.title')}
          </h2>
          <p class="text-[#E8E6E1]/60 font-light text-lg mb-2">
            ${i18n.t('faq.line1')}
          </p>
          <p class="text-[#E8E6E1]/50 font-light text-base">
            ${i18n.t('faq.line2')}
          </p>
        </div>
        
        <!-- Accordion -->
        <div class="space-y-3 mb-12">
          ${faqItems.map((item, index) => `
            <div class="faq-item rounded-xl border-2 border-[#C6A85B]/20 bg-[#0a0a0a]/80 overflow-hidden transition-all duration-300 hover:border-[#C6A85B]/40">
              <button 
                class="faq-trigger w-full flex items-center justify-between p-5 sm:p-6 text-left"
                data-index="${index}"
                aria-expanded="${index === this.openIndex}"
                aria-controls="faq-answer-${index}"
              >
                <span class="text-[#E8E6E1] font-light text-base sm:text-lg pr-4">
                  ${item.q}
                </span>
                <span class="faq-icon flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#C6A85B] transition-transform duration-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>
              </button>
              <div 
                id="faq-answer-${index}"
                class="faq-answer overflow-hidden transition-all duration-300 ${index === this.openIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}"
                aria-hidden="${index !== this.openIndex}"
              >
                <div class="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <div class="h-px bg-[#C6A85B]/10 mb-4"></div>
                  <p class="text-[#E8E6E1]/70 font-light leading-relaxed text-sm sm:text-base">
                    ${item.a}
                  </p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- CTA -->
        <div class="text-center">
          <a 
            href="#pacto" 
            class="group inline-flex items-center gap-3 px-8 py-4 bg-[#C6A85B]/10 border-2 border-[#C6A85B]/30 rounded-full text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#C6A85B]/20 hover:border-[#C6A85B]/50 hover:shadow-[0_0_30px_rgba(198,168,91,0.15)]"
          >
            ${i18n.t('faq.cta')}
            <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <p class="text-[#E8E6E1]/40 text-xs font-light mt-4">
            ${i18n.t('faq.ctaNote')}
          </p>
        </div>
        
      </div>

      <!-- Divisória inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/20 to-transparent"></div>
    `;

    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const triggers = this.container.querySelectorAll('.faq-trigger');
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const index = parseInt((e.currentTarget as HTMLElement).dataset.index || '0');
        this.toggleItem(index);
      });
    });
  }

  private toggleItem(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
    this.render();
  }
}
