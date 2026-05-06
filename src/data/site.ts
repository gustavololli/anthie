export const siteConfig = {
  name: 'Anthie',
  description: 'Bienestar natural, claro y confiable. Soluciones botánicas para el equilibrio diario.',
  whatsappNumber: '+5491100000000', // Reemplazar con el número real
  whatsappMessage: 'Hola Anthie, me gustaría consultar por sus productos.',
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(this.whatsappMessage)}`;
  }
};
