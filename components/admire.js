class CustomAdmire extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="py-20 px-4 bg-gradient-to-t from-rose-50 to-pink-50">
        <h2 class="text-5xl dancing-font text-center text-pink-700 mb-12">Lo que Admiro de Ti</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
            <i data-feather="star" class="w-12 h-12 text-pink-500 mx-auto mb-4"></i>
            <h3 class="text-xl font-bold text-pink-700">Tu Inteligencia</h3>
            <p class="text-pink-600 mt-2">Me asombra cómo ves el mundo con tanta claridad.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
            <i data-feather="heart" class="w-12 h-12 text-pink-500 mx-auto mb-4"></i>
            <h3 class="text-xl font-bold text-pink-700">Tu Bondad</h3>
            <p class="text-pink-600 mt-2">Tu corazón es puro y generoso.</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
            <i data-feather="sun" class="w-12 h-12 text-pink-500 mx-auto mb-4"></i>
            <h3 class="text-xl font-bold text-pink-700">Tu Energía</h3>
            <p class="text-pink-600 mt-2">Iluminas todo a tu alrededor.</p>
          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('custom-admire', CustomAdmire);