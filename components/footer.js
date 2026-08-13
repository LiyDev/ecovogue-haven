class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>

            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

                footer {
                    background-color: var(--dark-color, #333);
                    color: var(--light-color, #f5f5f5);
                    padding: 3rem 2rem;
                    text-align: center;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    text-align: left;
                }
                
                .footer-section h3 {
                    color: var(--white, #fff);
                    margin-bottom: 1rem;
                    font-size: 1.2rem;
                }
                
                .footer-section p, 
                .footer-section a {
                    color: var(--gray, #aaa);
                    margin-bottom: 0.5rem;
                    display: block;
                }
                
                .footer-section a:hover {
                    color: var(--white, #fff);
                }
                
                .social-icons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-icons a {
                    color: var(--white, #fff);
                    background-color: rgba(255, 255, 255, 0.1);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background-color 0.3s;
                }
                
                .social-icons a:hover {
                    background-color: var(--primary-color, #2e8b57);
                }
                
                .copyright {
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--gray, #aaa);
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Sobre a EcoVogue Haven</h3>
                        <p>Nós acreditamos em um futuro mais sustentável através de escolhas conscientes no consumo.</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Links Rápidos</h3>
                        <a href="/">Início</a>
                        <a href="#products">Produtos</a>
                        <a href="#about">Sobre</a>
                        <a href="#contact">Contato</a>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Redes Sociais</h3>
                        <div class="social-icons">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} EcoVogue Haven. Todos os direitos reservados.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);