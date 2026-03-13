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
      <!-- Fundo -->
      <div class="absolute inset-0 bg-awa-dark"></div>

      <!-- Container principal -->
      <div class="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-20 sm:py-24 lg:py-32">

        <!-- Grid: Vídeo + Texto -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <!-- LEFT: Player de Vídeo Cloudflare Stream -->
          <div class="order-1 lg:order-1">
            <div style="position: relative; padding-top: 56.25%; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(198,168,91,0.15);">
              <iframe
                src="https://customer-07n8n1f994miwygv.cloudflarestream.com/96685664d67e3c0f9cda3ce647de3c56/iframe?poster=https%3A%2F%2Fcustomer-07n8n1f994miwygv.cloudflarestream.com%2F96685664d67e3c0f9cda3ce647de3c56%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
                allow="accelerometer; gyroscope; encrypted-media; picture-in-picture; fullscreen;"
                title="AWANAR - Aldeia Timbaúba Experience"
                loading="lazy">
              </iframe>
            </div>
          </div>

          <!-- RIGHT: Texto -->
          <div class="order-2 lg:order-2 space-y-6">

            <!-- Eyebrow -->
            <div class="flex items-center gap-3">
              <span class="w-6 h-px bg-awa-gold/50"></span>
              <span class="text-awa-gold text-xs uppercase tracking-[0.25em] font-medium">
                ${i18n.t('block3.eyebrow')}
              </span>
            </div>

            <!-- Title -->
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-awa-sand leading-tight">
              ${i18n.t('block3.title')}
            </h2>

            <!-- Paragraphs -->
            <div class="space-y-4">
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

      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-awa-gold/10 to-transparent"></div>
    `;
  }
}
