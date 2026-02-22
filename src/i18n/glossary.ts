/**
 * GLOSSÁRIO AWANAR — PT → DE
 * Termos fixos obrigatórios em toda a aplicação
 * Atualizado: conforme site awanar.com/imersao/
 */

export const glossary = {
  // Nomes próprios (não traduzir)
  'Aldeia Timbaúba': 'Aldeia Timbaúba',
  'Rio Gregório': 'Rio Gregório',
  'Acre': 'Acre',
  'Paka Kamanawa': 'Paka Kamanawa',
  'Paka Soi Kamanawa': 'Paka Soi Kamanawa',
  'Patricia': 'Patricia',
  'Cruzeiro do Sul': 'Cruzeiro do Sul',
  'NOKE KOÎ': 'NOKE KOÎ',
  
  // Termos AWANAR (marca)
  'AWANAR': 'AWANAR',
  'Amazonia Retreat': 'Amazonia Retreat',
  'A Travessia': 'Die Reise',
  'O Pacto': 'Das Gespräch',
  'A Ponte': 'Die Brücke',
  
  // Conceitos centrais
  'imersão': 'die Erfahrung',
  'presença': 'die Präsenz',
  'floresta': 'der Wald',
  'natureza': 'die Natur',
  'silêncio': 'die Stille',
  'clareza': 'die Klarheit',
  'respeito': 'der Respekt',
  'escuta': 'das Zuhören',
  'transformação': 'die Veränderung',
  'transparência': 'die Transparenz',
  'ponte': 'die Brücke',
  'guardiã': 'die Begleiterin',
  'anfitriã': 'die Gastgeberin',
  
  // Programa/Atividades
  'pinturas corporais': 'Körperbemalung',
  'banho medicinal': 'Heilbad',
  'rapé': 'Rapé',
  'kambô': 'Kambô',
  'ayahuasca': 'Ayahuasca',
  'samaúma': 'die Samaúma',
  'cantos': 'Gesänge',
  
  // Idiomas
  'Alemão': 'Deutsch',
  'Inglês': 'Englisch',
  'Português': 'Portugiesisch',
  
  // Estrutura da viagem
  'vaga': 'der Platz',
  'vagas limitadas': 'Begrenzte Plätze',
  'acomodação': 'die Unterkunft',
  'rede': 'die Hängematte',
  'cabana': 'die Hütte',
  'refeição': 'die Mahlzeit',
  'alimentação': 'die Verpflegung',
  'traslado': 'der Transfer',
  'embarcação': 'das Boot',
  'ônibus': 'der Bus',
  'estadia': 'der Aufenthalt',
  'chegada': 'die Ankunft',
  'saída': 'die Abreise',
  'logística': 'die Logistik',
  'linha do tempo': 'der Zeitplan',
  'roteiro': 'die Route',
  
  // Incluso/Não incluso
  'incluso': 'im Preis enthalten',
  'não incluso': 'nicht im Preis enthalten',
  'passagens aéreas': 'Flugtickets',
  'hospedagem': 'die Unterkunft',
  'seguro viagem': 'Reiseversicherung',
  'despesas pessoais': 'persönliche Ausgaben',
  'conforto': 'Komfort',
  'cuidado': 'die Fürsorge',
  
  // Comunicação
  'conversa': 'das Gespräch',
  'conversar': 'sprechen',
  'pergunta': 'die Frage',
  'resposta': 'die Antwort',
  'orientação': 'die Orientierung',
  'preparação': 'die Vorbereitung',
  'integração': 'die Integration',
  'acolhimento': 'die Aufnahme',
  
  // Geral
  'experiência': 'die Erfahrung',
  'jornada': 'die Reise',
  'caminho': 'der Weg',
  'tempo': 'die Zeit',
  'ritmo': 'der Rhythmus',
  'comunidade': 'die Gemeinschaft',
  'tradição': 'die Tradition',
  'protocolo': 'das Protokoll',
  'segurança': 'die Sicherheit',
  'paz': 'der Frieden',
  
} as const;

export type GlossaryKeys = keyof typeof glossary;
