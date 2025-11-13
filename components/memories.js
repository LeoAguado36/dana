class CustomMemories extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="py-20 px-4 bg-gradient-to-t from-rose-50 to-pink-50">
        <h2 class="text-5xl dancing-font text-center text-pink-700 mb-12">Recuerdos que atesoro</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
            <i data-feather="camera" class="w-12 h-12 text-pink-500 mx-auto mb-4"></i>
            <h3 class="text-xl font-bold text-pink-700">Nuestra primera foto</h3>
            <p class="text-pink-600 mt-2">El día que todo comenzó...</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
            <i data-feather="star" class="w-12 h-12 text-pink-500 mx-auto mb-4"></i>
            <h3 class="text-xl font-bold text-pink-700">Tu sonrisa</h3>
            <p class="text-pink-600 mt-2">La que ilumina mis días</p>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
            <i data-feather="heart" class="w-12 h-12 text-pink-500 mx-auto mb-4"></i>
            <h3 class="text-xl font-bold text-pink-700">Cada "te amo"</h3>
            <p class="text-pink-600 mt-2">Los guardo en el corazón</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('custom-memories', CustomMemories);