import { i18n } from '../i18n';

export class PactoSection {
  private container: HTMLElement;
  private submitted: boolean = false;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'pacto-section relative py-16 sm:py-20 lg:py-24 overflow-hidden';
    this.container.id = 'pacto';
    
    parent.appendChild(this.container);
    this.render();
    
    i18n.onChange(() => this.render());
  }

  private render(): void {
    if (this.submitted) {
      this.renderSuccess();
      return;
    }

    this.container.innerHTML = `
      <!-- Fundo preto -->
      <div class="absolute inset-0 bg-[#050505]"></div>
      
      <!-- Vinheta sutil -->
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);"></div>
      
      <!-- Glow dourado sutil atrás do título -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#C6A85B]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="relative z-10 max-w-xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <!-- Header -->
        <div class="text-center mb-10">
          <span class="text-[#C6A85B] text-xs uppercase tracking-[0.3em] font-medium mb-4 block">
            ${i18n.t('pacto.kicker')}
          </span>
          <h2 class="text-4xl sm:text-5xl font-serif text-[#E8E6E1] mb-4 tracking-tight">
            ${i18n.t('pacto.title')}
          </h2>
          <p class="text-[#E8E6E1]/60 font-light text-lg">
            ${i18n.t('pacto.line1')}
          </p>
        </div>
        
        <!-- Form Card -->
        <div class="relative rounded-2xl border-2 border-[#C6A85B]/20 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 sm:p-10">
          <!-- Glow sutil -->
          <div class="absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(198,168,91,0.06)] pointer-events-none"></div>
          
          <form class="relative space-y-6" id="pacto-form">
            
            <!-- Nome -->
            <div class="form-group">
              <label for="pacto-name" class="block text-[#C6A85B]/80 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                ${i18n.t('pacto.name')}
              </label>
              <input 
                type="text" 
                id="pacto-name" 
                name="name"
                required
                autocomplete="name"
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors"
                placeholder=""
              />
            </div>
            
            <!-- Email -->
            <div class="form-group">
              <label for="pacto-email" class="block text-[#C6A85B]/80 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                ${i18n.t('pacto.email')}
              </label>
              <input 
                type="email" 
                id="pacto-email" 
                name="email"
                required
                autocomplete="email"
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors"
                placeholder=""
              />
            </div>
            
            <!-- Telefone -->
            <div class="form-group">
              <label for="pacto-phone" class="block text-[#C6A85B]/80 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                ${i18n.t('pacto.phone')}
              </label>
              <input 
                type="tel" 
                id="pacto-phone" 
                name="phone"
                autocomplete="tel"
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors"
                placeholder=""
              />
            </div>
            
            <!-- País -->
            <div class="form-group">
              <label for="pacto-country" class="block text-[#C6A85B]/80 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                ${i18n.t('pacto.country')}
              </label>
              <input 
                type="text" 
                id="pacto-country" 
                name="country"
                autocomplete="country-name"
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors"
                placeholder=""
              />
            </div>
            
            <!-- Mensagem -->
            <div class="form-group">
              <label for="pacto-message" class="block text-[#C6A85B]/80 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                ${i18n.t('pacto.message')}
              </label>
              <textarea 
                id="pacto-message" 
                name="message"
                rows="4"
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors resize-none"
                placeholder=""
              ></textarea>
            </div>
            
            <!-- Submit Button -->
            <div class="pt-4">
              <button 
                type="submit"
                class="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#C6A85B]/10 border-2 border-[#C6A85B]/30 rounded-full text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#C6A85B]/20 hover:border-[#C6A85B]/50 hover:shadow-[0_0_30px_rgba(198,168,91,0.15)]"
              >
                ${i18n.t('pacto.send')}
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>
            
          </form>
          
          <!-- Nota -->
          <p class="text-center text-[#E8E6E1]/40 text-xs font-light mt-6">
            ${i18n.t('pacto.note')}
          </p>
        </div>
        
      </div>

      <!-- Divisória inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/20 to-transparent"></div>
    `;

    this.attachEventListeners();
  }

  private renderSuccess(): void {
    this.container.innerHTML = `
      <!-- Fundo preto -->
      <div class="absolute inset-0 bg-[#050505]"></div>
      
      <!-- Vinheta sutil -->
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);"></div>

      <div class="relative z-10 max-w-xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-[#C6A85B]/30 flex items-center justify-center">
            <svg class="w-8 h-8 text-[#C6A85B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-2xl sm:text-3xl font-serif text-[#E8E6E1] mb-4">
            ${i18n.t('pacto.title')}
          </h3>
          <p class="text-[#E8E6E1]/70 font-light">
            ${i18n.lang === 'de' ? 'Vielen Dank. Wir melden uns in Kürze bei Ihnen.' : 'Obrigado. Entraremos em contato em breve.'}
          </p>
        </div>
      </div>

      <!-- Divisória inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/20 to-transparent"></div>
    `;
  }

  private attachEventListeners(): void {
    const form = this.container.querySelector('#pacto-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // TODO: Integrate with backend API (e.g., /api/contact or Resend/Worker)
        // For now, show success state
        this.submitted = true;
        this.render();
      });
    }
  }
}
