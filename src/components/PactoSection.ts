import { i18n } from '../i18n';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export class PactoSection {
  private container: HTMLElement;
  private submitStatus: SubmitStatus = 'idle';
  private errorMessage: string = '';

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'pacto-section relative py-16 sm:py-20 lg:py-24 overflow-hidden';
    this.container.id = 'pacto';
    
    parent.appendChild(this.container);
    this.render();
    
    i18n.onChange(() => this.render());
  }

  private render(): void {
    if (this.submitStatus === 'success') {
      this.renderSuccess();
      return;
    }

    const isSubmitting = this.submitStatus === 'submitting';
    const isError = this.submitStatus === 'error';

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
                ${isSubmitting ? 'disabled' : ''}
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors disabled:opacity-50"
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
                ${isSubmitting ? 'disabled' : ''}
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors disabled:opacity-50"
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
                ${isSubmitting ? 'disabled' : ''}
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors disabled:opacity-50"
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
                ${isSubmitting ? 'disabled' : ''}
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors disabled:opacity-50"
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
                ${isSubmitting ? 'disabled' : ''}
                class="w-full bg-transparent border-b-2 border-[#C6A85B]/30 py-3 text-[#E8E6E1] font-light placeholder-[#E8E6E1]/30 focus:outline-none focus:border-[#C6A85B]/60 transition-colors resize-none disabled:opacity-50"
                placeholder=""
              ></textarea>
            </div>
            
            <!-- Submit Button -->
            <div class="pt-4">
              <button 
                type="submit"
                ${isSubmitting ? 'disabled' : ''}
                class="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#C6A85B]/10 border-2 border-[#C6A85B]/30 rounded-full text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#C6A85B]/20 hover:border-[#C6A85B]/50 hover:shadow-[0_0_30px_rgba(198,168,91,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ${isSubmitting 
                  ? (i18n.lang === 'de' ? 'Wird gesendet...' : 'Enviando...')
                  : i18n.t('pacto.send')
                }
                ${!isSubmitting ? `
                <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
                ` : ''}
              </button>
            </div>

            <!-- Mensagem de erro -->
            ${isError ? `
            <div class="text-center">
              <p class="text-red-400/80 text-sm font-light">
                ${this.errorMessage || (i18n.lang === 'de' ? 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' : 'Ocorreu um erro. Por favor, tente novamente.')}
              </p>
            </div>
            ` : ''}
            
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
    const successMessage = i18n.lang === 'de' 
      ? 'Deine Nachricht ist bei uns angekommen 🌿 Wir melden uns in den nächsten Tagen persönlich.'
      : 'Mensagem enviada 🌿 Em breve entraremos em contato.';

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
          <p class="text-[#E8E6E1]/80 font-light text-lg leading-relaxed">
            ${successMessage}
          </p>
        </div>
      </div>

      <!-- Divisória inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/20 to-transparent"></div>
    `;
  }

  private attachEventListeners(): void {
    const form = this.container.querySelector('#pacto-form') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await this.handleSubmit(form);
      });
    }
  }

  private async handleSubmit(form: HTMLFormElement): Promise<void> {
    this.submitStatus = 'submitting';
    this.errorMessage = '';
    this.render();

    try {
      const formData = new FormData(form);
      const payload = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        country: formData.get('country') as string || undefined,
        interests: ['Immersion'], // Valor padrão conforme esperado pelo Worker
        message: formData.get('message') as string || undefined,
      };

      const response = await fetch('https://calm-paper-40f2.seliassousa.workers.dev/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.ok) {
          this.submitStatus = 'success';
          form.reset();
        } else {
          throw new Error('Server returned error');
        }
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.submitStatus = 'error';
      this.errorMessage = '';
    }

    this.render();
  }
}
