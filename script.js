// Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 
                         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        // Apply the saved theme
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log({ name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });

        // Animate skill bars on scroll
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
                
                if (isVisible && !bar.style.width) {
                    bar.style.width = bar.getAttribute('data-width') + '%';
                }
            });
        }

        // Initialize animations
        window.addEventListener('scroll', animateSkills);
        window.addEventListener('load', animateSkills);

        // Typing effect for tagline or any element you want
        document.addEventListener("DOMContentLoaded", function() {
            // Typing effect for tagline: cycles through multiple roles
            const roles = [
                "Web Developer",
                "Software Engineer",
                "UI/UX Enthusiast",
                "Tech Explorer"
            ];
            const target = document.querySelector(".tagline .highlight");
            if (!target) return;
            let roleIndex = 0;
            let charIndex = 0;
            let typing = true;

            function typeRole() {
                if (typing) {
                    if (charIndex < roles[roleIndex].length) {
                        target.textContent += roles[roleIndex].charAt(charIndex);
                        charIndex++;
                        setTimeout(typeRole, 80);
                    } else {
                        typing = false;
                        setTimeout(typeRole, 1200); // Pause before deleting
                    }
                } else {
                    if (charIndex > 0) {
                        target.textContent = roles[roleIndex].substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(typeRole, 40);
                    } else {
                        typing = true;
                        roleIndex = (roleIndex + 1) % roles.length;
                        setTimeout(typeRole, 400);
                    }
                }
            }
            target.textContent = "";
            typeRole();
        });

