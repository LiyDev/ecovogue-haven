class ProductCard extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute('image') || '';
        const title = this.getAttribute('title') || '';
        const price = this.getAttribute('price') || '';
        const description = this.getAttribute('description') || '';
        const category = this.getAttribute('category') || '';

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    background: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                }
                
                .product-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                }
                
                .product-info {
                    padding: 1.5rem;
                }
                
                .product-title {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: var(--dark-color, #333);
                }
                
                .product-category {
                    display: inline-block;
                    background-color: var(--light-color, #f5f5f5);
                    color: var(--primary-color, #2e8b57);
                    padding: 0.2rem 0.5rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    margin-bottom: 0.8rem;
                }
                
                .product-description {
                    color: var(--gray, #666);
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .product-price {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--primary-color, #2e8b57);
                    margin-bottom: 1rem;
                }
                
                .buy-btn {
                    width: 100%;
                    padding: 0.7rem;
                    background-color: var(--primary-color, #2e8b57);
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                
                .buy-btn:hover {
                    background-color: var(--secondary-color, #3cb371);
                }
            </style>
            
            <div class="product-card">
                <div class="product-image" style="background-image: url('${image}')"></div>
                <div class="product-info">
                    <h3 class="product-title">${title}</h3>
                    <span class="product-category">${category}</span>
                    <p class="product-description">${description}</p>
                    <div class="product-price">R$ ${price}</div>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
        `;

        const buyButton = this.shadowRoot.querySelector('.buy-btn');
        
        buyButton.addEventListener('click', () => {
            const urlPrice = this.getAttribute('price') || '';
            const urlImage = this.getAttribute('image') || '';
            const urlTitle = this.getAttribute('title') || '';
            const urlDescription = this.getAttribute('description') || '';
            
            const params = new URLSearchParams();
            params.append('img', urlImage);
            params.append('title', urlTitle);
            params.append('price', urlPrice);
            params.append('desc', urlDescription); 
            
            window.location.href = `checkout.html?${params.toString()}`; 
        });
    }
}
    
customElements.define('custom-product-card', ProductCard);