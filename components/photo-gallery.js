class CustomPhotoGallery extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
        <h2 class="text-5xl dancing-font text-center text-pink-700 mb-12">Tu Belleza en Imágenes</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="polaroid gallery-image" data-src="img/06dc6c84-8a4a-4317-861b-b73df6a66016.jpeg">
            <img src="img/06dc6c84-8a4a-4317-861b-b73df6a66016.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tu sonrisa radiante</p>
          </div>
          <div class="polaroid gallery-image" data-src="img/376aaeca-b03b-4c92-b5d3-aa1441d35f6d.jpeg">
            <img src="img/376aaeca-b03b-4c92-b5d3-aa1441d35f6d.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tu fuerza interior</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/79612cf6-6d34-4233-aea5-5fe05a389089.jpeg">
            <img src="img/79612cf6-6d34-4233-aea5-5fe05a389089.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tu carita bonita</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/20250607_212427869_iOS.jpg">
            <img src="img/20250607_212427869_iOS.jpg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tu y yo, nos amo juntos</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/a9e049d3-f3d9-4cf3-87a9-c6ca770343c6.jpeg">
            <img src="img/a9e049d3-f3d9-4cf3-87a9-c6ca770343c6.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Lo hermosa que eres</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/ae45df38-6b2d-405f-a6b0-795db85b3d44.jpeg">
            <img src="img/ae45df38-6b2d-405f-a6b0-795db85b3d44.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tu no puedes ser mas perfecta</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/be5176c3-6f8e-490b-aeb0-ec25616afa69.jpeg">
            <img src="img/be5176c3-6f8e-490b-aeb0-ec25616afa69.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tu cuerpo todo bonito</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/c152513e-2a65-4212-a2e4-87bddec131b8.jpeg">
            <img src="img/c152513e-2a65-4212-a2e4-87bddec131b8.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tus ojos hermosos</p>
          </div>


          <div class="polaroid gallery-image" data-src="img/ce57fecb-c287-46d0-95c7-ff2127c20b06.jpeg">
            <img src="img/ce57fecb-c287-46d0-95c7-ff2127c20b06.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Tu eres lo mas bonito del mundo</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/f9cdaed2-2dd5-47dc-bd5c-b07d9cf20673.jpeg">
            <img src="img/f9cdaed2-2dd5-47dc-bd5c-b07d9cf20673.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Los dos muy guapos 💖</p>
          </div>

          <div class="polaroid gallery-image" data-src="img/98a1ef21-007b-4498-93dc-d68540304fd3.jpeg">
            <img src="img/98a1ef21-007b-4498-93dc-d68540304fd3.jpeg" alt="Dana">
            <p class="text-center text-pink-700 mt-2 text-sm">Te amooooooooooooooooooooo 💞💓🩷💖💖💖💕💕💘💖🩷❤️💞❣️</p>
          </div>
    
      

        </div>
      </section>
    `;
    // === MODAL DENTRO DEL COMPONENTE ===
    const images = this.querySelectorAll('.gallery-image');
    images.forEach(img => {
      img.addEventListener('click', () => {
        const src = img.getAttribute('data-src');
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
          <div class="relative max-w-4xl w-full">
            <img src="${src}" class="max-h-screen w-full object-contain rounded-lg shadow-2xl" alt="Ampliado">
            <button class="absolute top-4 right-4 text-white text-5xl font-bold hover:scale-125 transition transform">
              ×
            </button>
          </div>
        `;
        // Cerrar al hacer clic en X
        modal.querySelector('button').onclick = () => modal.remove();
        // Cerrar al hacer clic fuera
        modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.remove();
        });
        document.body.appendChild(modal);
      });
    })
  }
}
customElements.define('custom-photo-gallery', CustomPhotoGallery);