import { i18n } from '../i18n';

// Testemunhos em DE — NÃO ALTERAR (conforme requisito)
const testimonials = [
  {
    name: 'Tom .',
    text: `Wir durften eine wundervolle Woche mit der Ahom Retreat Gruppe in der Aldeia Timbauba verbringen.
Ein besonderes Dankeschön geht an Patricia, die uns den Zugang ermöglicht und sich mit so viel Hingabe um all unsere Anliegen gekümmert hat🫶

Für mich war es eine magische Erfahrung. Das Dorf, seine Bewohner und ihre tiefe Verbundenheit mit der Natur haben mich zutiefst berührt. Die Demut, das Miteinander und Füreinander waren eine unvergleichlich heilende Erfahrung.

Ich lege einen Besuch bei den Noke Koi in der Aldeia jedem ans Herz, der bereits etwas Erfahrung mit Pflanzenmedizin gesammelt hat. 
Ahuuu ✨🌿`,
  },
  {
    name: 'Patrick',
    text: `Ich durfte eine Woche mit Patricia, Elias und Gabriela in der Aldeia Timbaúba bei den Noke Koi verbringen.

„Noke Koi" bedeutet übersetzt „die wirklichen Menschen". Ihre tiefe Verbundenheit mit dem Amazonas, mit ihren Mitmenschen und mit ihren Gefühlen war für mich – selbst ein eher kopflastiger Mensch – deutlich spürbar und hat mich tief bewegt.

Diese Woche war eine unglaublich intensive, herzöffnende und magische Erfahrung, die mich gelehrt hat, wie viel Schönheit, Verbindung und Gefühl im Einfachen liegen kann.

Mein besonderer Dank gilt Patricia, Elias und Gabriela. Sie haben nicht nur diese lebensverändernde Woche möglich gemacht, sondern waren in dieser Zeit auch mit so viel positiver Energie und Hingabe an meiner Seite.`,
  },
  {
    name: 'Angesa',
    text: `Eine Woche bei den Noke Koi in Aldeia Timbaúba zu verbringen, war eines der absoluten Highlights meines Lebens. Die Zeremonien mit Ayahuasca haben mir Türen geöffnet, von denen ich nicht wusste, dass sie existieren, getragen von der Kraft der Natur, den Menschen dort und ihrer Fähigkeit, das Leben als Geschenk zu sehen.
Doch all das wäre ohne Patrizia nicht möglich gewesen. Mit ihrer Liebe, Hingabe und ihrem offenen Herzens hat sie jeden Moment so gestaltet, dass man sich von der ersten Sekunde an sicher, geborgen und willkommen fühlt. Sie ist das Bindeglied zwischen Welten und macht diese Reise zu dem, was sie ist: mehr als nur ein Aufenthalt im Dschungel – ein Geschenk, eine Transformation, ein Heimkommen.
Und für mich ganz persönlich: ich habe in ihr eine Soul Sister fürs Leben gefunden. Diese Erfahrung und dieses Gefühl würde ich gegen nichts auf dieser Erde eintauschen.`,
  },
  {
    name: 'Joern',
    text: `Hi Patricia, hoffe du bist wieder gut in Rio angekommen. Ich wollte einfach mal ein paar Minuten Zeit nehmen und mich bei dir bedanken. Danke fuer die Organization. Danke fuer die gemeinsame Zeit. Und danke fuer die wundervolle Reise, die wir alle zusammen hatten. Es war wirklich eine sehr transformierende Woche mit toller Energie und wunderbaren Menschen!! Bewunderswert was du/ihr auf die Beine gestellt habt und ich glaube fest daran, dass es viele Leben zum positiven veraendern wird. Sending lots of love and good energy to Brazil!! Hoffentlich bis ganz bald!`,
  },
];

export class Block8 {
  private container: HTMLElement;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('section');
    this.container.className = 'block8-section relative py-20 sm:py-24 lg:py-32 overflow-hidden';
    this.container.id = 'block8';
    
    parent.appendChild(this.container);
    this.render();
  }

  private render(): void {
    const eyebrow = i18n.t('block8.eyebrow');
    const title = i18n.t('block8.title');
    
    this.container.innerHTML = `
      <!-- Fundo -->
      <div class="absolute inset-0 bg-[#0B0D0C]"></div>
      
      <!-- Grain textura 3% -->
      <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');">
      </div>
      
      <!-- Container principal -->
      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        
        <!-- Header -->
        <div class="text-center mb-16 sm:mb-20">
          <!-- Eyebrow -->
          <div class="mb-4 flex items-center justify-center gap-3">
            <span class="w-8 h-px bg-[#C6A85B]/40"></span>
            <span class="text-[#C6A85B] text-xs uppercase tracking-[0.25em] font-medium">
              ${eyebrow}
            </span>
            <span class="w-8 h-px bg-[#C6A85B]/40"></span>
          </div>
          
          <!-- Title -->
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-light text-[#E8E6E1] mb-5">
            ${title}
          </h2>
        </div>
        
        <!-- Grid Masonry: Desktop columns, Mobile stack -->
        <div class="columns-1 md:columns-2 gap-8 space-y-8">
          ${testimonials.map((t, index) => `
            <!-- Card ${index + 1} -->
            <div class="break-inside-avoid opacity-0 translate-y-4 animate-fade-in" style="animation-delay: ${index * 80}ms; animation-fill-mode: forwards;">
              <div class="rounded-2xl backdrop-blur-sm bg-black/45 border border-[#C6A85B]/45 p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_rgba(198,168,91,0.22)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(198,168,91,0.28)]">
                
                <!-- Header do card: Nome -->
                <div class="mb-6 pb-4 border-b border-[#C6A85B]/20">
                  <h3 class="text-[#C6A85B] text-sm uppercase tracking-[0.2em] font-medium">
                    ${t.name}
                  </h3>
                </div>
                
                <!-- Texto do testemunho: PRESERVAR QUEBRAS DE LINHA -->
                <p class="text-[#E8E6E1]/80 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line">
                  ${t.text}
                </p>
                
              </div>
            </div>
          `).join('')}
        </div>
        
      </div>
      
      <!-- Divisória sutil inferior -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A85B]/10 to-transparent"></div>
      
      <!-- Estilo da animação -->
      <style>
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in-up 600ms ease-out;
        }
      </style>
    `;
  }
}
