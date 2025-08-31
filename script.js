        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                this.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });

            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Counter animation
            function animateCounter(element, target, duration = 2000) {
                const start = 0;
                const increment = target / (duration / 16);
                let current = start;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    element.textContent = Math.floor(current);
                }, 16);
            }

            animateCounter(document.getElementById('tickets-count'), 42);
            animateCounter(document.getElementById('games-count'), 18);

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                });
            });

            // Game card hover effect enhancement
            const gameCards = document.querySelectorAll('.game-card');
            gameCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.querySelector('.game-btn').style.backgroundColor = 'var(--primary-dark)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.querySelector('.game-btn').style.backgroundColor = 'var(--primary)';
                });
            });
        });
