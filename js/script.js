// Trilha de JavaScript Moderno - CoreByte Tech Solutions

document.addEventListener('DOMContentLoaded', () => {
    console.log('CoreByte Tech Solutions: JavaScript carregado com sucesso!');

    // 1. Destaque automático do link ativo com base na página atual
    const menu = document.getElementById('menu');
    if (menu) {
        const currentLocation = window.location.pathname;
        const menuLinks = menu.querySelectorAll('a');

        menuLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentLocation.includes(href)) {
                menuLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }

    // 2. Validação e Interatividade do Formulário de Contato
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita o recarregamento padrão da página

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Validação simples dos campos
            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                alert('Por favor, preencha todos os campos antes de enviar a mensagem.');
                return;
            }

            // Simulação de envio bem-sucedido
            alert(`Obrigado pelo contato, ${nameInput.value}! Sua mensagem foi enviada com sucesso para a equipe da CoreByte.`);
            
            // Limpa o formulário após o envio
            contactForm.reset();
        });
    }
});