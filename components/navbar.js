class CustomNavbar extends HTMLElement {
    connectedCallback() {

        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

            <style>
                nav {
                    background-color: white;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary-color, #2e8b57);
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                }

                .logo i {
                    margin-right: 0.5rem;
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-link {
                    position: relative;
                    color: var(--dark-color, #333);
                    font-weight: 500;
                    transition: 0.3s ease;
                    text-decoration: none;
                    display: block; 
                    padding: 0.5rem 0; 
                }

                .nav-link i {
                    margin-right: 8px;
    
                }

                .nav-link:hover {
                    color: var(--primary-color, #2e8b57);
                }

                .nav-link::after {
                    content: "";
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    height: 2px;
                    background: var(--primary-color, #2e8b57);
                    width: 0%;
                    transition: 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    font-size: 1.7rem;
                    cursor: pointer;
                    color: var(--dark-color, #333);
                }

                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    gap: 0.5rem; 
                    padding: 0 2rem 1rem 2rem; 
                    background-color: white;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                    animation: fadeDown 0.3s ease;
                }

                .mobile-menu.active {
                    display: flex;
                }

                @keyframes fadeDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 1024px) {
                    .nav-links {
                        display: none;
                    }
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>

            <nav>
                <div class="nav-container">
                    <a href="./index.html" class="logo">
                        <i class="fas fa-leaf"></i> EcoVogue Haven
                    </a>

                    <div class="nav-links">
                        <a href="./index.html" class="nav-link"><i class="fas fa-home"></i>Início</a>
                        <a href="#products" class="nav-link"><i class="fas fa-box"></i>Produtos</a>
                        <a href="#about" class="nav-link"><i class="fas fa-hand-holding-heart"></i>Sobre</a>
                        <a href="#contact" class="nav-link"><i class="fas fa-envelope"></i>Contato</a>
                    </div>

                    <button class="mobile-menu-button" aria-label="Menu Mobile">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>

                <div class="mobile-menu">
                    <a href="./index.html" class="nav-link mobile-link">Início</a>
                    <a href="#products" class="nav-link mobile-link">Produtos</a>
                    <a href="#about" class="nav-link mobile-link">Sobre</a>
                    <a href="#contact" class="nav-link mobile-link">Contato</a>
                </div>
            </nav>
        `;

        const menuBtn = this.shadowRoot.querySelector(".mobile-menu-button");
        const mobileMenu = this.shadowRoot.querySelector(".mobile-menu");
        const mobileLinks = this.shadowRoot.querySelectorAll(".mobile-link"); 
        
        const closeMenu = () => {
             mobileMenu.classList.remove("active");
             const icon = menuBtn.querySelector("i");
             if (icon) icon.classList.replace("fa-xmark", "fa-bars");
        };

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");

            const icon = menuBtn.querySelector("i");
            if (mobileMenu.classList.contains("active")) {
                icon.classList.replace("fa-bars", "fa-xmark");
            } else {
                icon.classList.replace("fa-xmark", "fa-bars");
            }
        });
        
        const desktopLinks = this.shadowRoot.querySelectorAll(".nav-link"); 
        const allLinks = [...mobileLinks, ...desktopLinks]; // Junta todos os links

        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                
                const targetId = link.getAttribute('href'); 
                closeMenu(); 

                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault(); 
                    targetElement.scrollIntoView({
                        behavior: 'smooth' 
                    });
                    
                } else if (targetId && targetId !== '#') {
                    e.preventDefault();
                    window.location.href = `index.html${targetId}`; 

                } else if (targetId === '#') {
                    e.preventDefault();
                    window.location.href = 'index.html'; 
                }
            });
        });

    }
}

customElements.define("custom-navbar", CustomNavbar);