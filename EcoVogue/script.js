document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
            });
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const formStatus = document.getElementById('form-status');
            
            let isValid = true;
   
            if (nameInput.value.trim() === '') {
                nameInput.nextElementSibling.textContent = 'Por favor, insira seu nome';
                isValid = false;
            }
         
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value.trim() === '') {
                emailInput.nextElementSibling.textContent = 'Por favor, insira seu e-mail';
                isValid = false;
            } else if (!emailRegex.test(emailInput.value)) {
                emailInput.nextElementSibling.textContent = 'Por favor, insira um e-mail válido';
                isValid = false;
            }
         
            if (isValid) {
                formStatus.textContent = 'Mensagem enviada com sucesso!';
                formStatus.style.color = 'var(--primary-color)';
                formStatus.style.backgroundColor = '#e8f5e9';
                contactForm.reset();
               
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.style.backgroundColor = 'transparent';
                }, 5000);
            }
            
        });
    }
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('custom-product-card').forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('buy-btn')) {
        e.preventDefault();
        alert('Produto adicionado ao carrinho!');
    }
});