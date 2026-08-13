document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = {
        image: urlParams.get('img'),
        title: urlParams.get('title'),
        price: parseFloat(urlParams.get('price')),
        description: urlParams.get('desc')
    };

    if (product.image) {
        document.getElementById('checkout-product-image').style.backgroundImage = `url('${product.image}')`;
    }
    if (product.title) {
        document.getElementById('checkout-product-title').textContent = product.title;
    }
    if (product.price) {
        document.getElementById('checkout-product-price').textContent = `R$ ${product.price.toFixed(2)}`;
    }
    if (product.description) {
        document.getElementById('checkout-product-description').textContent = product.description;
    }

    updateOrderSummary();

    document.getElementById('quantity').addEventListener('change', updateOrderSummary);
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateOrderSummary);
    });

    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.querySelectorAll('.payment-method > div:not(label)').forEach(el => {
                el.style.display = 'none';
            });
            const selectedMethod = document.querySelector(`#${this.id} ~ div`);
            if (selectedMethod) {
                selectedMethod.style.display = 'block';
            }
        });
    });

    document.querySelector('#credit-card ~ div').style.display = 'block';
    document.querySelector('.confirm-btn').addEventListener('click', function() {
        alert('Compra confirmada! Obrigado por escolher a EcoVogue Haven.');
        window.location.href = '/';
    });

    function updateOrderSummary() {
        const quantity = parseInt(document.getElementById('quantity').value);
        const subtotal = product.price * quantity;
        const shipping = document.querySelector('input[name="delivery"]:checked').value === 'standard' ? 15 : 30;
        const total = subtotal + shipping;

        document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = `R$ ${shipping.toFixed(2)}`;
        document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
    }
});