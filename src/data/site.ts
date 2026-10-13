export const siteConfig = {
  name: 'Anthie',
  description: 'Bienestar funcional donde la naturaleza y la ciencia se unen para acompañar cuerpo y mente. Conocé las líneas de Anthie.',
  whatsappNumber: '+5491100000000', // Reemplazar con el número real
  whatsappMessage: 'Hola Anthie, me gustaría consultar por sus productos.',
  resellerMessage: 'Hola Anthie, me interesa revender sus productos. Quisiera conocer la propuesta comercial.',
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  get resellerWhatsappLink() {
    return `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(this.resellerMessage)}`;
  }
};
