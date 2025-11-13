class CustomLoveLetter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="py-20 px-4 max-w-5xl mx-auto text-center fade-in">
        <h2 class="text-5xl dancing-font text-pink-700 mb-4">Una carta para ti, Dana</h2>
        <p class="text-pink-600 mb-12 text-lg">Admirando tu esencia...</p>

        <div class="relative max-w-xl mx-auto">
          <!-- SOBRE -->
          <div id="envelope" class="envelope cursor-pointer">
            <img src="img/pngtree-closed-white-envelope-png-image_10124421.png" class="w-full drop-shadow-2xl" alt="Sobre">
          </div>

          <!-- CARTA (oculta) -->
          <div id="letter-content" class="hidden mt-8">
            <div class="polaroid mx-auto max-w-xs mb-8">
              <img src="img/f9cdaed2-2dd5-47dc-bd5c-b07d9cf20673.jpeg" alt="Dana">
              <p class="text-pink-700 dancing-font text-lg mt-2">Tu brillo único</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-2xl border-4 border-dashed border-pink-200">
              <p id="love-letter-content" class="text-lg text-pink-900 leading-relaxed text-justify">
                Mi Dana,

Hoy no solo celebro el día en que naciste, sino también el privilegio de poder compartir contigo una parte de mi vida. Tu cumpleaños es mucho más que una fecha; es un recordatorio de lo afortunado que soy por conocerte, por admirarte y por poder llamarte mi motivo favorito para sonreír.

Eres una mujer increíble: fuerte cuando la vida se complica, dulce cuando el mundo parece gris, y brillante incluso cuando no lo intentas. Tu forma de ver la vida me inspira, tu risa me contagia, y tu ternura tiene la magia de calmar cualquier tormenta dentro de mí.

Cada día contigo aprendo algo nuevo: sobre la paciencia, sobre la bondad, sobre el amor verdadero. Tu inteligencia y tu corazón me enseñan a ser mejor persona, y cada palabra tuya me deja pensando en lo afortunado que soy por tenerte. No hay duda de que eres mi musa, mi paz, mi equilibrio.

Cuando pienso en ti, pienso en todo lo que quiero cuidar, proteger y amar. Eres esa presencia que vuelve los días comunes en momentos inolvidables, y las noches solas en pensamientos llenos de ti. Me haces creer que el amor no es solo sentir, sino también admirar, respetar y crecer juntos.

Gracias por existir como eres: sin máscaras, sin fingir, con esa luz que no se apaga y con ese corazón enorme que late con tanta nobleza. Ojalá la vida te devuelva todo lo hermoso que das, multiplicado por mil.

Feliz cumpleaños, mi amor. Que cada deseo que tengas hoy encuentre su camino para hacerse realidad, y que nunca te falte la certeza de cuánto te amo y cuánto te admiro.
              </p>
              <p class="text-right mt-8 text-pink-700 dancing-font text-2xl">— Admirándote siempre, Leo</p>
            </div>
          </div>
        </div>
      </section>
    `;

    // === EVENTO DEL SOBRE (dentro del componente) ===
    const envelope = this.querySelector('#envelope');
    const letterContent = this.querySelector('#letter-content');
    const letterText = this.querySelector('#love-letter-content');

    if (envelope && letterContent && letterText) {
      envelope.addEventListener('click', () => {
        envelope.style.display = 'none';
        letterContent.classList.remove('hidden');
        letterContent.classList.add('fade-in');

        // === MÁQUINA DE ESCRIBIR ===
        const text = letterText.textContent;
        letterText.textContent = '';
        let i = 0;
        const typeWriter = () => {
          if (i < text.length) {
            letterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
          }
        };
        setTimeout(typeWriter, 600);
      });
    }
  }
}

customElements.define('custom-love-letter', CustomLoveLetter);