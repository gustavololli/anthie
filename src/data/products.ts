export interface Product {
  id: string;
  slug: string;
  lineId: string;
  name: string;
  description: string;
  benefit: string;
  presentation: string;
  image: string;
}

export const products: Product[] = [
  // Tinturas Madre
  {
    id: 't-valeriana',
    slug: 'tintura-madre-valeriana',
    lineId: 'tinturas-madre',
    name: 'Tintura Madre de Valeriana',
    description: 'Un extracto puro enfocado en la calma nocturna. La valeriana es conocida tradicionalmente por sus propiedades relajantes, ideal para acompañar el descanso después de un día agitado.',
    benefit: 'Acompaña tus rutinas de descanso y favorece la serenidad.',
    presentation: 'Frasco gotero de 50ml',
    image: '/images/products/tintura-valeriana.webp'
  },
  {
    id: 't-pasiflora',
    slug: 'tintura-madre-pasiflora',
    lineId: 'tinturas-madre',
    name: 'Tintura Madre de Pasiflora',
    description: 'Extracto natural que invita a bajar las revoluciones. Especialmente pensada para momentos de hiperactividad mental, ayudando a encontrar un anclaje en el momento presente.',
    benefit: 'Aporta claridad y calma en momentos de ritmo acelerado.',
    presentation: 'Frasco gotero de 50ml',
    image: '/images/products/tintura-pasiflora.webp'
  },
  
  // Flores de Bach
  {
    id: 'f-rescate',
    slug: 'formula-rescate-calma',
    lineId: 'flores-de-bach',
    name: 'Fórmula Floral: Rescate & Calma',
    description: 'Un blend botánico suave diseñado para brindar contención en situaciones de estrés puntual. Combina esencias clásicas que reconfortan y ayudan a recuperar el centro.',
    benefit: 'Acompañamiento sutil para volver a tu equilibrio diario.',
    presentation: 'Frasco gotero de 30ml',
    image: '/images/products/formula-rescate.webp'
  },

  // Cápsulas
  {
    id: 'c-ashwagandha',
    slug: 'capsulas-ashwagandha',
    lineId: 'capsulas',
    name: 'Cápsulas de Ashwagandha',
    description: 'Raíz adaptógena en formato práctico. Ayuda al cuerpo a adaptarse y sostenerse frente a las exigencias diarias, promoviendo una vitalidad equilibrada sin estimular en exceso.',
    benefit: 'Acompaña la resistencia natural y el balance energético.',
    presentation: 'Frasco con 60 cápsulas vegetales',
    image: '/images/products/capsulas-ashwagandha.webp'
  },

  // Polvos
  {
    id: 'p-maca',
    slug: 'polvo-maca-andina',
    lineId: 'polvos',
    name: 'Maca Andina en Polvo',
    description: 'Un alimento milenario con un perfil nutricional robusto. Ideal para sumar a tus batidos o desayunos, aportando una base sólida para iniciar el día con presencia.',
    benefit: 'Fomenta la vitalidad de forma natural y sostenida.',
    presentation: 'Doypack de 150g',
    image: '/images/products/polvo-maca.webp'
  },

  // Cremas
  {
    id: 'cr-caléndula',
    slug: 'crema-calendula-manzanilla',
    lineId: 'cremas',
    name: 'Crema Corporal de Caléndula y Manzanilla',
    description: 'Una emulsión suave y reparadora para pieles que buscan calma. La sinergia de caléndula y manzanilla protege y devuelve la hidratación esencial con un aroma reconfortante.',
    benefit: 'Calma, hidrata y protege la barrera natural de tu piel.',
    presentation: 'Envase dosificador de 200ml',
    image: '/images/products/crema-calendula.webp'
  }
];
