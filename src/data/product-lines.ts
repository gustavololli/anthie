export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductLine {
  id: string;
  title: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  longDescription: string[];
  faqs: FAQ[];
}

export const productLines: ProductLine[] = [
  { 
    id: 'tinturas-madre', 
    title: 'Tinturas Madre', 
    description: 'Extractos botánicos puros y de rápida asimilación. Formulados para integrarse fácilmente a tus momentos de pausa y cuidado.',
    seoTitle: 'Tinturas Madre | Extractos Botánicos Puros | Anthie',
    metaDescription: 'Descubrí nuestras Tinturas Madre. Extractos naturales y de rápida asimilación para acompañar tu equilibrio y bienestar diario con el poder de la naturaleza.',
    longDescription: [
      'Las Tinturas Madre de Anthie son extractos botánicos puros, formulados con respeto por los tiempos de la naturaleza para conservar intactas las propiedades de cada planta.',
      'Su formato líquido permite una rápida asimilación, convirtiéndolas en aliadas prácticas para sumar a tu día a día, ya sea en un vaso de agua o en tu infusión preferida.',
      'Te invitamos a explorar nuestras variedades y encontrar la fórmula que mejor resuene con tu necesidad de equilibrio y cuidado cotidiano, de manera simple y natural.'
    ],
    faqs: [
      {
        question: '¿Cómo se consumen las Tinturas Madre?',
        answer: 'Se recomienda diluir la dosis indicada (generalmente entre 15 y 30 gotas) en medio vaso de agua, jugo o una infusión tibia, preferentemente alejado de las comidas principales para una mejor asimilación.'
      },
      {
        question: '¿Cuánto tiempo lleva notar el acompañamiento?',
        answer: 'El bienestar natural es un proceso progresivo. Si bien algunas personas sienten mayor calma en los primeros días, sugerimos mantener la constancia durante al menos dos o tres semanas para integrar los beneficios.'
      }
    ]
  },
  { 
    id: 'flores-de-bach', 
    title: 'Flores de Bach', 
    description: 'Gotas de serenidad. Fórmulas sutiles y personalizadas que acompañan tus procesos emocionales con constancia y naturalidad.',
    seoTitle: 'Flores de Bach | Fórmulas Emocionales Naturales | Anthie',
    metaDescription: 'Acompañá tus emociones con nuestras Flores de Bach. Fórmulas botánicas personalizadas para brindar calma, equilibrio y serenidad a tu día.',
    longDescription: [
      'Las Flores de Bach son un sistema botánico suave que trabaja sobre la armonía emocional. En Anthie, preparamos fórmulas que buscan acompañarte en tus procesos internos con sutileza y cuidado.',
      'No se trata de silenciar lo que sentís, sino de brindarte un anclaje de serenidad para que puedas transitar cada etapa con mayor claridad y equilibrio.',
      'Ofrecemos tanto fórmulas preparadas para necesidades generales (como calma y descanso) como la posibilidad de armar un blend personalizado a través de una consulta empática.'
    ],
    faqs: [
      {
        question: '¿Tienen contraindicaciones?',
        answer: 'Las Flores de Bach son una terapia complementaria muy suave y natural. No interactúan negativamente con otros hábitos de cuidado, siendo seguras para integrar a tu rutina diaria.'
      },
      {
        question: '¿Puedo armar una fórmula personalizada?',
        answer: 'Sí. A través de nuestro WhatsApp podemos asesorarte para crear una combinación de flores que se adapte exactamente a tu momento personal y emocional.'
      }
    ]
  },
  { 
    id: 'capsulas', 
    title: 'Cápsulas', 
    description: 'Tu dosis diaria de equilibrio. Soluciones concentradas para cuidar tu bienestar desde adentro, de la forma más práctica y directa.',
    seoTitle: 'Cápsulas Botánicas | Bienestar Natural y Práctico | Anthie',
    metaDescription: 'Conocé nuestras Cápsulas botánicas. Soluciones concentradas y prácticas para integrar el cuidado natural a tu rutina diaria y acompañar tu bienestar.',
    longDescription: [
      'Para quienes buscan practicidad sin resignar calidad, nuestras Cápsulas ofrecen soluciones botánicas concentradas listas para tomar en cualquier momento del día.',
      'Cada fórmula está cuidadosamente elaborada para aportar nutrientes y compuestos activos vegetales que acompañan el bienestar integral, desde la vitalidad hasta el descanso.',
      'Es la manera más directa de incorporar el poder de la naturaleza cuando el tiempo apremia, manteniendo tu equilibrio con un solo gesto.'
    ],
    faqs: [
      {
        question: '¿Cuándo es el mejor momento para tomarlas?',
        answer: 'Depende de la variedad. Algunas formulaciones enfocadas en la vitalidad se sugieren por la mañana, mientras que las orientadas a la calma son ideales por la tarde o noche. Te guiaremos según tu elección.'
      },
      {
        question: '¿Son aptas para veganos?',
        answer: 'Sí, todas nuestras cápsulas utilizan recubrimientos de origen vegetal, libres de gelatina animal, alineadas con nuestro compromiso de cuidado natural.'
      }
    ]
  },
  { 
    id: 'polvos', 
    title: 'Polvos', 
    description: 'Mezclas botánicas versátiles para sumar a tus infusiones o comidas. Un ritual reconfortante para nutrir tu rutina.',
    seoTitle: 'Polvos Botánicos y Superalimentos | Nutrición Natural | Anthie',
    metaDescription: 'Enriquecé tus comidas e infusiones con nuestros Polvos botánicos. Mezclas versátiles para nutrir tu rutina y fomentar un bienestar equilibrado.',
    longDescription: [
      'Nuestros Polvos botánicos son la invitación perfecta para sumar bienestar a tus rituales culinarios. Desde batidos matutinos hasta infusiones reconfortantes por la noche.',
      'Combinamos ingredientes funcionales y plantas adaptógenas que acompañan la capacidad natural del cuerpo para encontrar su balance frente al ritmo cotidiano.',
      'Descubrí formas creativas y deliciosas de integrar la naturaleza a tu mesa, haciendo del cuidado personal una experiencia para disfrutar.'
    ],
    faqs: [
      {
        question: '¿Cómo puedo incorporarlos a mi dieta?',
        answer: 'Son sumamente versátiles. Puedes mezclarlos en agua tibia, leches vegetales, smoothies, yogures o incluso incorporarlos en recetas de repostería saludable.'
      },
      {
        question: '¿Alteran el sabor de las comidas?',
        answer: 'Cada polvo tiene su perfil aromático natural. Algunos tienen notas especiadas o terrosas que enriquecen el sabor, por lo que sugerimos combinarlos con alimentos que complementen sus características.'
      }
    ]
  },
  { 
    id: 'cremas', 
    title: 'Cremas', 
    description: 'Texturas suaves e ingredientes nobles. Cuidado natural pensado para calmar tu piel, protegerla y devolverle su hidratación esencial.',
    seoTitle: 'Cremas y Cuidado Corporal Botánico | Anthie',
    metaDescription: 'Cremas formuladas con ingredientes nobles y botánicos. Protegé y calmá tu piel con nuestro cuidado natural para una hidratación profunda y equilibrada.',
    longDescription: [
      'La piel es nuestro límite y nuestro contacto con el mundo. Por eso, en Anthie formulamos cremas con ingredientes nobles, aceites puros y extractos botánicos que respetan su barrera natural.',
      'Buscamos devolverle a tu piel su hidratación esencial, ofreciendo texturas suaves que se absorben con facilidad sin dejar sensación de pesadez.',
      'Más que un paso de belleza, nuestras cremas proponen un momento de mimo y calma, acompañando la salud integral de tu cuerpo desde afuera hacia adentro.'
    ],
    faqs: [
      {
        question: '¿Son aptas para pieles sensibles?',
        answer: 'Nuestras formulaciones priorizan ingredientes suaves y naturales, evitando fragancias sintéticas agresivas. Son ideales para acompañar pieles que buscan calma, aunque siempre sugerimos probar una pequeña cantidad primero.'
      },
      {
        question: '¿Se pueden usar en el rostro?',
        answer: 'Contamos con líneas específicas tanto corporales como faciales. Las cremas corporales son más untuosas, mientras que las formuladas para el rostro tienen una textura más ligera adaptada a sus necesidades.'
      }
    ]
  }
];
