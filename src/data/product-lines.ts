export interface ProductLine {
  id: string;
  title: string;
  description: string;
}

export const productLines: ProductLine[] = [
  { id: 'tinturas', title: 'Tinturas Madre', description: 'Extractos botánicos puros y de rápida asimilación. Formulados para integrarse fácilmente a tus momentos de pausa y cuidado.' },
  { id: 'flores', title: 'Flores de Bach', description: 'Gotas de serenidad. Fórmulas sutiles y personalizadas que acompañan tus procesos emocionales con constancia y naturalidad.' },
  { id: 'capsulas', title: 'Cápsulas', description: 'Tu dosis diaria de equilibrio. Soluciones concentradas para cuidar tu bienestar desde adentro, de la forma más práctica y directa.' },
  { id: 'polvos', title: 'Polvos', description: 'Mezclas botánicas versátiles para sumar a tus infusiones o comidas. Un ritual reconfortante para nutrir tu rutina.' },
  { id: 'cremas', title: 'Cremas', description: 'Texturas suaves e ingredientes nobles. Cuidado natural pensado para calmar tu piel, protegerla y devolverle su hidratación esencial.' },
];
