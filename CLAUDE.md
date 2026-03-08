# CLAUDE.md — AWANAR Amazon Retreat Landing Page

## Visão Geral do Projeto

Landing page para o retiro AWANAR Amazon Retreat, localizado na Aldeia Timbaúba, Rio Gregório, Acre, Brasil. Retiro de 7 dias / 6 noites guiado por Patricia (multilíngue: DE / EN / PT).

## Stack Técnica

- **Framework:** Vanilla TypeScript + Vite
- **Estilos:** Tailwind CSS
- **Internacionalização:** Sistema i18n próprio em `src/i18n/`
- **Estrutura:** Componentes TypeScript em `src/components/`
- **Idioma padrão:** ENGLISH (`en`)

## Arquivos-Chave

```
src/
  i18n/
    de.ts         — Traduções alemão (define o tipo base Translations)
    en.ts         — Traduções inglês (idioma PRINCIPAL / DEFAULT)
    pt.ts         — Traduções português
    index.ts      — Motor i18n: carrega idiomas, expõe i18n.t(), i18n.lang
    glossary.ts   — Glossário (não utilizado ativamente)
  components/
    Hero.ts       — Seção hero + nav com seletor de idioma (EN | DE | PT)
    Block2.ts     — "The Experience" (cards: Connection, Encounter, Transformation)
    Block3.ts     — Location (Aldeia Timbaúba)
    Block4.ts     — Program (5 etapas)
    Block5.ts     — Logistics & Timeline
    Block6.ts     — Inclusions & Transparency
    Block7.ts     — "The Bridge" (Patricia)
    Block8.tsx    — Testimonials (HARDCODED em alemão — ver nota abaixo)
    BlockTimbauba.ts — NOKE KOÎ / Aldeia + lideranças (texto intro HARDCODED)
    SicherheitRespekt.ts — Trust & Clarity
    FaqSection.ts — FAQ (accordion)
    PactoSection.ts — Formulário de contato
  main.ts         — Ponto de entrada
  style.css       — Estilos globais
```

## Prioridade de Idioma

1. **ENGLISH** (principal / default)
2. **DEUTSCH** (secundário)
3. **PORTUGUÊS** (terciário)

Ordem de exibição no seletor: EN → DE → PT

## Notas Técnicas Importantes

### Textos Hardcoded (fora do sistema i18n)

1. **BlockTimbauba.ts** — Os dois parágrafos de introdução da Aldeia (secção NOKE KOÎ – KAMANAWA) estão hardcoded em alemão diretamente no componente. Para torná-los multilíngues, seria necessária alteração estrutural (adicionar i18n calls). Atualmente refletem a copy oficial DE.

2. **Block8.tsx** — Os depoimentos (testimonials) estão hardcoded em alemão (array `testimonials`). A copy oficial fornecida para EN e PT não pôde ser integrada sem alteração estrutural. Atualmente refletem a copy oficial DE encurtada.

3. **Block7.ts** — `block7.paragraph3` não foi fornecido na nova copy oficial (a nova copy consolidou paragraphs 2+3 num único parágrafo). O campo foi mantido preservado nas versões DE e PT. Na versão EN, o campo está vazio (`''`).

### Tipo Translations

O tipo `Translations` é exportado por `de.ts` como `typeof de`. Ao atualizar `de.ts`, o tipo se atualiza automaticamente. Todos os campos existentes devem ser mantidos.

---

## COPY BASELINE LOCK — PT / EN / DE

**Esta é a copy oficial do projeto, estabelecida em 08/03/2026.**

Todo o texto visível ao usuário foi atualizado para corresponder à copy oficial abaixo. Qualquer alteração futura de copy deve ser registrada aqui.

---

### COPY OFICIAL — PORTUGUÊS

**Hero:**
- A Arte do Bom Viver
- Aprenda a viver em harmonia com a natureza.
- Sete dias no coração da Amazônia – guiados, respeitosos e seguros.
- 7 dias / 6 noites • Rio Gregório, Acre • Vagas limitadas

**A Experiência:**
- Conexão: Mergulhe na natureza intocada. Redescubra a linguagem da floresta.
- Encontro: Encontros pessoais com famílias locais. Troca sobre modos de vida tradicionais.
- Transformação: Volte com clareza e novas perspectivas. Menos é mais.

**Local:**
- Aldeia Timbaúba, Rio Gregório
- Isto não é turismo. É presença. (...)
- A floresta não impressiona. Ela revela.

**Programa – Setembro 2026:**
01 – Marca da Terra | 02 – Purificação | 03 – Sopro do Espírito | 04 – Visão Noturna | 05 – Voz da Raiz

**Logística & Cronograma:**
12/09 Chegada | 14/09 Viagem | 14–19/09 Estadia | 20/09 Retorno
"Quando a rota está clara, a mente descansa."

**Inclusões & Transparência:**
"Não vendemos conforto. Oferecemos cuidado."
CTA: Reservar sua vaga

**A Ponte (Patricia):**
"Onde há uma ponte, há paz."
CTA: Conhecer Patricia

**NOKE KOÎ – KAMANAWA:**
Paká Kamanawa: Músico, ativista e chefe da aldeia. Guardião de cantos sagrados e da organização coletiva.
Rurá Varinawá (Povo do Sol): Artista, artesã e guardiã dos cantos – unindo tradição e criação contemporânea.

**Confiança & Clareza:** "Clareza é cuidado."

**FAQ:** CTA: Preencha o Pacto / Inicie sua jornada

---

### COPY OFICIAL — ENGLISH

**Hero:**
- The Art of Good Living
- Learn to live in harmony with nature.
- Seven days at the heart of the Amazon – guided, respectful, and safe.
- 7 days / 6 nights • Rio Gregório, Acre • Limited spaces

**The Experience:**
- Connection: Immerse yourself in untouched nature. Rediscover the language of the forest.
- Encounter: Personal meetings with local families. Exchange about traditional ways of life.
- Transformation: Return with clarity and new perspectives. Less is more.

**Location:**
- Aldeia Timbaúba, Rio Gregório
- This is not tourism. It is presence. (...)
- The forest does not impress. It reveals.

**Program – September 2026:**
01 – Mark of the Earth | 02 – Purification | 03 – Breath of the Spirit | 04 – Night Vision | 05 – Voice of the Root

**Logistics & Timeline:**
09/12 Arrival | 09/14 Journey | 09/14–19 Stay | 09/20 Return
"When the route is clear, the mind rests."

**Inclusions & Transparency:**
"We don't sell comfort. We offer care."
CTA: Reserve your spot

**The Bridge (Patricia):**
"Where there is a bridge, there is peace."
CTA: Meet Patricia

**NOKE KOÎ – KAMANAWA:**
Paká Kamanawa: Musician, activist, village chief. Guardian of sacred songs and collective organization.
Rurá Varinawá (People of the Sun): Artist, craftswoman, guardian of songs – weaving tradition and contemporary creation.

**Trust & Clarity:** "Clarity is care."

**FAQ:** CTA: Fill out Pacto / Begin your journey

---

### COPY OFICIAL — DEUTSCH

**Hero:**
- Die Kunst des guten Lebens
- Lernen Sie, im Einklang mit der Natur zu leben.
- Eine siebentägige Reise zu den Wurzeln des Amazonas – begleitet, respektvoll und sicher.
- 7 Tage / 6 Nächte • Rio Gregório, Acre • Begrenzte Plätze

**Die Erfahrung:**
- Verbindung: Eintauchen in unberührte Natur. Die Sprache des Waldes neu erlernen.
- Begegnung: Persönliche Begegnungen mit Familien vor Ort. Austausch über ursprüngliche Lebensweisen.
- Transformation: Mit Klarheit und neuen Perspektiven zurückkehren. Weniger ist mehr.

**Der Ort:**
- Aldeia Timbaúba, Rio Gregório
- Dies ist kein Tourismus. Es ist Präsenz. (...)
- Der Wald beeindruckt nicht. Er offenbart.

**Das Programm – September 2026:**
01 – Das Zeichen der Erde | 02 – Die Reinigung | 03 – Der Atem des Geistes | 04 – Die nächtliche Vision | 05 – Die Stimme der Wurzel

**Logistik & Zeitlinie:**
12.09 Ankunft | 14.09 Die Reise | 14.–19.09 Aufenthalt | 20.09 Rückkehr
"Wenn die Route klar ist, kommt der Geist zur Ruhe."

**Transparenz:**
"Wir verkaufen keinen Komfort. Wir bieten Fürsorge."
CTA: Ich möchte meinen Platz reservieren

**Die Brücke (Patricia):**
"Wo es eine Brücke gibt, gibt es Frieden."
CTA: Patricia kennenlernen

**NOKE KOÎ – KAMANAWA:**
Paká Kamanawa: Musiker, Aktivist, Dorfchef. Hüter heiliger Gesänge und kollektiver Organisation.
Rurá Varinawá (Volk der Sonne): Künstlerin, Kunsthandwerkerin, Hüterin der Gesänge. Verbindet Tradition und zeitgenössische Kreation.

**Vertrauen & Klarheit:** "Klarheit ist Fürsorge."

**FAQ:** CTA: Pakt ausfüllen / Reise beginnen

---

*COPY LOCK ativado em 08/03/2026. Não alterar copy sem atualizar este arquivo.*
