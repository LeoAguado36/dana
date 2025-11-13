class CustomInspire extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="py-20 px-4 bg-white">
        <h2 class="text-5xl dancing-font text-center text-pink-700 mb-12">Cómo Me Inspiras</h2>
        <div class="max-w-4xl mx-auto text-center text-lg text-pink-900 leading-relaxed">
          <p class="mb-6 fade-in">Dana, tu determinación me motiva a ser mejor cada día. Ver cómo enfrentas desafíos con gracia me enseña resiliencia. Tu pasión por la vida me recuerda apreciar las pequeñas cosas. Eres mi inspiración constante.</p>
          <div class="animate-pulse text-pink-600 text-2xl mt-8">Gracias por ser tú.</div>
        </div>
      </section>
    `;
  }
}
customElements.define('custom-inspire', CustomInspire);