export interface Mbti {
  id: number,
  type: string,
  name: string,
  description: string
}

export const mbtiList: Mbti[] = [
  // Analistas
  { id: 1, type: 'INTJ', name: 'O Arquiteto', description: 'Pensadores estratégicos e criativos, com um plano para tudo. São lógicos, independentes e movidos por suas próprias ideias originais sobre como melhorar o mundo.' },
  { id: 2, type: 'INTP', name: 'O Lógico', description: 'Inovadores e inventivos, com uma sede insaciável por conhecimento. Vivem primariamente em seus próprios pensamentos e valorizam a precisão, a lógica e a verdade acima de tudo.' },
  { id: 3, type: 'ENTJ', name: 'O Comandante', description: 'Líderes ousados, criativos e determinados. Encontram ou criam uma maneira de alcançar seus objetivos. São excelentes em identificar ineficiências e criar soluções de longo prazo.' },
  { id: 4, type: 'ENTP', name: 'O Inovador', description: ' Inteligentes, curiosos e perspicazes. Adoram um desafio intelectual e não resistem a um bom debate. São rápidos em entender conceitos complexos e conectar ideias de formas inesperadas.' },
  // Diplomatas
  { id: 5, type: 'INFJ', name: 'O Advogado', description: 'Idealistas quietos e inspiradores, com um forte senso de moralidade. Embora gentis, são determinados e lutam incansavelmente por aquilo em que acreditam, buscando criar um impacto positivo.' },
  { id: 6, type: 'INFP', name: 'O Mediador', description: 'Poéticos, gentis e altruístas. São idealistas que vivem guiados por seus valores internos. Possuem uma chama interior e uma paixão que podem surpreender quem os vê apenas como tímidos.' },
  { id: 7, type: 'ENFJ', name: 'O Protagonista', description: 'Líderes carismáticos e inspiradores, que cativam seus ouvintes. Têm uma habilidade natural de guiar os outros, sentindo uma grande satisfação em ajudar as pessoas a trabalharem juntas para um bem maior.' },
  { id: 8, type: 'ENFP', name: 'O Ativista', description: 'Entusiasmados, criativos e sociáveis. São verdadeiros espíritos livres que encontram uma razão para sorrir em quase tudo. Têm uma energia contagiante e conseguem criar fortes conexões emocionais com os outros.' },
  // Sentinelas
  { id: 9, type: 'ISTJ', name: 'O Logístico', description: 'Indivíduos práticos e focados em fatos, cuja confiabilidade é inquestionável. Têm um grande senso de dever e orgulho em analisar seu ambiente, verificar os fatos e tomar decisões lógicas e práticas.' },
  { id: 10, type: 'ISFJ', name: 'O Defensor', description: 'Protetores muito dedicados e calorosos, sempre prontos para defender quem amam. São extremamente responsáveis, atenciosos e focados nas necessidades práticas dos outros.' },
  { id: 11, type: 'ESTJ', name: 'O Executivo', description: 'Excelentes administradores, incomparáveis em gerenciar coisas ou pessoas. São movidos pela ordem e pela tradição, usando seu entendimento do que é certo e errado para unir famílias e comunidades.' },
  { id: 12, type: 'ESFJ', name: 'O Cônsul', description: 'Extraordinariamente atenciosos, sociáveis e populares, sempre ansiosos por ajudar. São o centro das atenções sociais e se sentem energizados ao interagir e cuidar dos outros, garantindo que todos se sintam incluídos.' },
  // Exploradores
  { id: 13, type: 'ISTP', name: 'O Virtuoso', description: 'Experimentadores ousados e práticos, mestres em todos os tipos de ferramentas. Adoram explorar o mundo com suas mãos e seus olhos, aprendendo conforme avançam e se adaptam.' },
  { id: 14, type: 'ISFP', name: 'O Aventureiro', description: 'Artistas flexíveis e charmosos, sempre prontos para explorar e experimentar algo novo. Vivem em um mundo colorido e sensorial, inspirados por conexões com pessoas e ideias.' },
  { id: 15, type: 'ESTP', name: 'O Empresário', description: 'Inteligentes, enérgicos e muito perspicazes. Gostam de viver no limite e de se jogar de cabeça na ação. São influentes e excelentes em navegar por situações sociais complexas.' },
  { id: 16, type: 'ESFP', name: 'O Animador', description: 'Espontâneos, enérgicos e entusiasmados. A vida nunca é entediante perto deles. Adoram ser o centro das atenções, levando uma energia contagiante e um prazer estético para onde quer que vão.' },
];