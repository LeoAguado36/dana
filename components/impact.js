class CustomImpact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="py-20 px-4 bg-pink-50">
        <h2 class="text-5xl dancing-font text-center text-pink-700 mb-12">Tu Impacto en Mi Vida</h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-2xl shadow-xl text-center">
            <p class="text-pink-600">Desde que entraste en mi mundo, todo es más brillante. Me has enseñado a amar con profundidad y a valorar la auténticidad.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-xl text-center">
            <p class="text-pink-600">Eres el motivo de mis sonrisas diarias y la fuerza que me impulsa. Dana, significas todo para mí.</p>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('custom-impact', CustomImpact);