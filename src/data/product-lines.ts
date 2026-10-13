export interface ProductLine {
  id: string;
  title: string;
  tagline: string;
  description: string;
  products: string[];
}

export const productLines: ProductLine[] = [
  {
    id: 'tinturas',
    title: 'Tinturas Madre',
    tagline: 'El poder de las plantas en forma concentrada.',
    description: 'Extractos botánicos elaborados para conservar los componentes naturales de cada planta y acompañar distintas necesidades de tu rutina diaria.',
    products: ['Antiparasitaria', 'Digestivo', 'Hepato-Detox', 'Armonizante', 'Energizante', 'Estrogénico', 'Diurético', 'Circulatorio', 'Reductora', 'Defensa'],
  },
  {
    id: 'adaptogenos',
    title: 'Adaptógenos & Hongos Funcionales',
    tagline: 'Naturaleza que acompaña tu capacidad de adaptación.',
    description: 'Una selección de adaptógenos y hongos funcionales pensados para acompañar el equilibrio, la energía y el bienestar cotidiano.',
    products: ['Reishi doble extracto', 'Cola de Pavo doble extracto', 'Melena de León doble extracto', 'Cordyceps doble extracto', 'Shiitake doble extracto', 'Blend Sinergia (Melena de León + Shiitake + Cordyceps)', 'Melena de León cápsulas', 'Ashwagandha 400 mg'],
  },
  {
    id: 'suplementos',
    title: 'Suplementos',
    tagline: 'Nutrientes esenciales para tu bienestar diario.',
    description: 'Vitaminas, minerales y fórmulas funcionales seleccionadas para complementar tu alimentación y acompañar las necesidades de tu organismo.',
    products: ['Citrato de Magnesio cápsulas', 'Glicinato de Magnesio', 'Treonato de Magnesio', 'Magnesio Complex', 'Citrato de Magnesio en polvo', 'Citrato de Potasio', 'Vitamina C en polvo', 'Plata coloidal 10 ppm'],
  },
  {
    id: 'flores',
    title: 'Flores de Bach',
    tagline: 'Bienestar emocional desde una mirada natural.',
    description: 'Preparados florales pensados para acompañar distintos momentos y estados emocionales, integrándose de manera simple a tu rutina.',
    products: ['Rescue Remedy', 'Concentración', 'Ansiedad', 'Sueño', 'Estrés', 'Mascotas'],
  },
  {
    id: 'corporal',
    title: 'Cuidado Corporal',
    tagline: 'El bienestar también empieza en la piel.',
    description: 'Fórmulas de uso externo con ingredientes de origen natural, creadas para acompañar el cuidado diario de tu cuerpo.',
    products: ['Crema de Árnica', 'Crema de Caléndula'],
  },
];
