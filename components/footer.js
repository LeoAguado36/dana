class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-16">
        <div class="text-center px-4">
          <p class="text-3xl dancing-font mb-6">Que este día sea tan especial como tú</p>
        //   <button id="play-music" class="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-100 transition shadow-lg">
        //     Reproducir nuestra canción
        //   </button>
          <p class="mt-8 text-sm opacity-80">Hecho con amor infinito para Ti mi amor</p>
        </div>
      </footer>
    `;


}
    }