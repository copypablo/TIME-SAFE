document.addEventListener('DOMContentLoaded', function () {
    // Adicionar cards de jogadores dinamicamente
    const jogadoresGrid = document.querySelector('.jogadores-grid');

    // Dados dos jogadores
    const jogadores = [
        { nome: 'PABLO', posicao: 'ZAGUEIRO', numero: 4, velocidade: 10, forca: 95, tecnica: 1 },
        { nome: 'JOÃO', posicao: 'INDEFINIDO', numero: 2, velocidade: 83, forca: 50, tecnica: 20 },
        { nome: 'FEFITO', posicao: 'ATACANTE', numero: 3, velocidade: 20, forca: 87, tecnica: 62 },
        { nome: 'RODRIGO', posicao: 'GOLEIRO', numero: 4, velocidade: 50, forca: 69, tecnica: 85 },
        { nome: 'LUCAS', posicao: 'RESERVA', numero: 5, velocidade: 79, forca: 86, tecnica: 81 },
        { nome: 'Marcos Pereira', posicao: 'Meio-campo', numero: 6, velocidade: 85, forca: 78, tecnica: 87 },
        { nome: 'Felipe Alves', posicao: 'Meio-campo', numero: 7, velocidade: 87, forca: 75, tecnica: 89 },
        { nome: 'Gabriel Martins', posicao: 'Meio-campo', numero: 8, velocidade: 86, forca: 76, tecnica: 88 },
        { nome: 'Rodrigo Lima', posicao: 'Meio-campo', numero: 10, velocidade: 88, forca: 74, tecnica: 92 },
        { nome: 'André Ferreira', posicao: 'Atacante', numero: 9, velocidade: 92, forca: 80, tecnica: 87 },
        { nome: 'Diego Souza', posicao: 'Atacante', numero: 11, velocidade: 91, forca: 81, tecnica: 86 },
        { nome: 'Henrique Gomes', posicao: 'Goleiro', numero: 12, velocidade: 73, forca: 83, tecnica: 85 },
        { nome: 'Leandro Vieira', posicao: 'Defensor', numero: 13, velocidade: 81, forca: 85, tecnica: 77 },
        { nome: 'Paulo Ribeiro', posicao: 'Meio-campo', numero: 14, velocidade: 84, forca: 77, tecnica: 86 },
        { nome: 'Ricardo Nunes', posicao: 'Meio-campo', numero: 15, velocidade: 85, forca: 76, tecnica: 85 },
        { nome: 'novo jogador', posicao: 'Atacante', numero: 16, velocidade: 90, forca: 79, tecnica: 85 },
        { nome: 'Gustavo Rocha', posicao: 'Atacante', numero: 17, velocidade: 89, forca: 78, tecnica: 84 },
        { nome: 'Eduardo Moreira', posicao: 'Atacante', numero: 18, velocidade: 88, forca: 80, tecnica: 83 }
    ];

    // Criar cards para cada jogador
    jogadores.forEach((jogador, index) => {
        const card = document.createElement('div');
        card.className = 'jogador-card';
        card.innerHTML = `
            <div class="jogador-numero">${jogador.numero}</div>
            <div class="jogador-image">
                <img src="images/jogadores/jogador${index + 1}.${(index < 20 ? 'jpeg' : "png")}" alt="${jogador.nome}">
            </div>
            <div class="jogador-info">
                <h3>${jogador.nome}</h3>
                <span class="posicao">${jogador.posicao}</span>
                <div class="jogador-stats">
                    <div class="jogador-stat">
                        <span class="valor">${jogador.velocidade}</span>
                        <span class="atributo">VEL</span>
                    </div>
                    <div class="jogador-stat">
                        <span class="valor">${jogador.forca}</span>
                        <span class="atributo">FOR</span>
                    </div>
                    <div class="jogador-stat">
                        <span class="valor">${jogador.tecnica}</span>
                        <span class="atributo">TEC</span>
                    </div>
                </div>
            </div>
        `;
        jogadoresGrid.appendChild(card);
    });

    // Efeitos de animação ao scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.jogador-card, .timeline-item, .patrocinador').forEach(item => {
        observer.observe(item);
        item.classList.add('fade-in');
    });

    // Efeito de parallax no background
    window.addEventListener('scroll', function () {
        const scrollPosition = window.pageYOffset;
        document.body.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Formulários de contato e inscrição
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formElements = form.elements;
            let isValid = true;

            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && !formElements[i].value) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else {
                    formElements[i].classList.remove('error');
                }
            }

            if (isValid) {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviado com sucesso!';
                submitBtn.classList.add('success');

                setTimeout(() => {
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.classList.remove('success');
                }, 3000);
            }
        });
    });

    // Menu de navegação responsivo
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }

        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });
});
