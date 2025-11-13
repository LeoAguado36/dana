class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-pink-600 text-white py-4 px-4 fixed w-full top-0 z-30 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-2xl font-bold dancing-font">Para Dana 💖</a>
          <ul class="flex space-x-6">
            
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);