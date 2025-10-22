    document.addEventListener('DOMContentLoaded', function() {
        // --- Animación de elementos al hacer scroll ---
        const animatedElements = document.querySelectorAll('.curso-item, .pricing-card, .teacher-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Agrega un retraso escalonado para la animación
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(element => observer.observe(element));

        // --- Lógica para mostrar sección de profesores y hacer scroll ---
        const profesLink = document.querySelector('a[href="#profesores"]');
        const profesSection = document.getElementById('profesores');
        
        if (profesLink && profesSection) {
            profesLink.addEventListener('click', function(e) {
                e.preventDefault();
                profesSection.style.display = 'block';
                // Espera un instante para que el 'display' se aplique antes de calcular el offset
                setTimeout(() => {
                    window.scrollTo({
                        top: profesSection.offsetTop - 70, // Offset para el header fijo
                        behavior: 'smooth'
                    });
                }, 50);
            });
        }

        // --- Smooth scroll para el resto de los enlaces ---
        document.querySelectorAll('a[href^="#"]:not([href="#profesores"])').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // --- Modal de login ---
        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeModalBtn = document.getElementById('closeModal');

        const openModal = () => {
            loginModal.style.display = 'flex';
            setTimeout(() => loginModal.classList.add('active'), 10);
        };

        const closeModal = () => {
            loginModal.classList.remove('active');
            setTimeout(() => loginModal.style.display = 'none', 300);
        };

        loginBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) closeModal();
        });
    });

    document.querySelectorAll('.pricing-card .btn-primary').forEach((btn, i) => {
    btn.addEventListener('click', () => {
        const paquetes = [
            'Paquete 5 Exámenes',
            'Curso 11 Semanas (Admitido)',
            'Paquete 10 Exámenes'
        ];
        const paquete = paquetes[i] || 'Paquete';
        const mensaje = encodeURIComponent(`Hola, me gustaría pedir informes sobre el ${paquete}.`);
        const telefono = '523343254082';
        window.open(`https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`, '_blank');
    });
});

const tel = '523343254082';
const text = encodeURIComponent('Hola, me gustaría pedir informes sobre sus paquetes.');
document.getElementById('waFloat').href = `https://api.whatsapp.com/send?phone=${tel}&text=${text}`;


    