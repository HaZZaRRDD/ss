        // Initialize AOS
        AOS.init({
            duration: 1200,
            once: true
        });

        // Particle Background Configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: 'none', random: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { 
                    onhover: { 
                        enable: true, 
                        mode: 'repulse' 
                    },
                    onclick: { 
                        enable: true, 
                        mode: 'push' 
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
            });
            
            // Smooth Scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Navbar Scroll Effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('navbar-scrolled', 'shadow');
                } else {
                    navbar.classList.remove('navbar-scrolled', 'shadow');
                }
            });
            
            // Service Card Hover Effects
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        scale: 1.05,
                        boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                        duration: 0.3,
                        ease: 'power1.out'
                    });
                });
            
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        scale: 1,
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        duration: 0.3,
                        ease: 'power1.out'
                    });
                });
            });
            
            // Form Submission Handler
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                const name = this.querySelector('input[type="text"]').value;
                const email = this.querySelector('input[type="email"]').value;
                const service = this.querySelector('select').value;
                const message = this.querySelector('textarea').value;
            
                if (!name || !email || !service || !message) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Incomplete Form',
                        text: 'Please fill out all fields.',
                        confirmButtonText: 'OK'
                    });
                    return;
                }
            
                // Simulated form submission
                Swal.fire({
                    icon: 'success',
                    title: 'Consultation Request Submitted!',
                    html: `
                        <p>Thank you, ${name}!</p>
                        <p>We'll contact you at ${email} soon.</p>
                        <p>Selected Service: ${service}</p>
                    `,
                    confirmButtonText: 'Awesome! 🚀'
                });
            
                // Reset form
                this.reset();
            });
            
            // Tech Stack Icon Hover Animation
            const techIcons = document.querySelectorAll('.tech-stack-icon');
            techIcons.forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    gsap.to(icon, {
                        scale: 1.3,
                        rotation: 360,
                        color: '#007bff',
                        duration: 0.5,
                        ease: 'elastic.out(1, 0.3)'
                    });
                });
            
                icon.addEventListener('mouseleave', () => {
                    gsap.to(icon, {
                        scale: 1,
                        rotation: 0,
                        color: '#6c757d',
                        duration: 0.5,
                        ease: 'power1.out'
                    });
                });
            });
            
            window.addEventListener('load', () => {
                const preloaderStyles = [
    {
        gradient: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
        icon: 'fas fa-umbrella-beach',
        accentColor: '#ffffff',
        theme: 'Beach Sunset'
    },
    {
        gradient: 'linear-gradient(to right, #36d1dc, #5b86e5)',
        icon: 'fas fa-cloud',
        accentColor: '#ffffff',
        theme: 'Sky Whisper'
    },
    {
        gradient: 'linear-gradient(to right, #667eea, #764ba2)',
        icon: 'fas fa-space-shuttle',
        accentColor: '#ffffff',
        theme: 'Cosmic Journey'
    },
    {
        gradient: 'linear-gradient(to right, #43e97b, #38f9d7)',
        icon: 'fas fa-leaf',
        accentColor: '#ffffff',
        theme: 'Green Energy'
    },
    {
        gradient: 'linear-gradient(to right, #fa709a, #fee140)',
        icon: 'fas fa-palette',
        accentColor: '#ffffff',
        theme: 'Candy Crush'
    },
    {
        gradient: 'linear-gradient(to right, #ff5f6d, #ffc371)',
        icon: 'fas fa-fire',
        accentColor: '#ffffff',
        theme: 'Flame Fusion'
    },
    {
        gradient: 'linear-gradient(to right, #8360c3, #2ebf91)',
        icon: 'fas fa-globe-americas',
        accentColor: '#ffffff',
        theme: 'World Pulse'
    },
    {
        gradient: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        icon: 'fas fa-mountain',
        accentColor: '#ffffff',
        theme: 'Deep Terrain'
    },
    {
        gradient: 'linear-gradient(to right, #ee9ca7, #ffdde0)',
        icon: 'fas fa-heart',
        accentColor: '#ffffff',
        theme: 'Soft Romance'
    },
    {
        gradient: 'linear-gradient(to right, #654ea3, #eaafc8)',
        icon: 'fas fa-magic',
        accentColor: '#ffffff',
        theme: 'Mystic Aura'
    },
    {
        gradient: 'linear-gradient(to right, #ff6a00, #ee0979)',
        icon: 'fas fa-dragon',
        accentColor: '#ffffff',
        theme: 'Fiery Spirit'
    },
    {
        gradient: 'linear-gradient(to right, #00c6ff, #0072ff)',
        icon: 'fas fa-water',
        accentColor: '#ffffff',
        theme: 'Cool Waters'
    },
    {
        gradient: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        icon: 'fas fa-sun',
        accentColor: '#ffffff',
        theme: 'Pastel Sky'
    },
    {
        gradient: 'linear-gradient(to right, #ff758c, #ff7eb3)',
        icon: 'fas fa-cocktail',
        accentColor: '#ffffff',
        theme: 'Tropical Bliss'
    },
    {
        gradient: 'linear-gradient(to right, #f8cdda, #1d2b64)',
        icon: 'fas fa-star',
        accentColor: '#ffffff',
        theme: 'Starry Night'
    },
    {
        gradient: 'linear-gradient(to right, #ffb347, #ffcc33)',
        icon: 'fas fa-sun',
        accentColor: '#ffffff',
        theme: 'Golden Sunrise'
    },
    {
        gradient: 'linear-gradient(to right, #00d2ff, #928DAB)',
        icon: 'fas fa-snowflake',
        accentColor: '#ffffff',
        theme: 'Winter Wonderland'
    },
    {
        gradient: 'linear-gradient(to right, #00c6ff, #0072ff)',
        icon: 'fas fa-umbrella',
        accentColor: '#ffffff',
        theme: 'Rainy Day'
    },
    {
        gradient: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
        icon: 'fas fa-umbrella-beach',
        accentColor: '#ffffff',
        theme: 'Beach Vibes'
    },
    {
        gradient: 'linear-gradient(to right, #43e97b, #38f9d7)',
        icon: 'fas fa-leaf',
        accentColor: '#ffffff',
        theme: 'Nature Touch'
    },
    {
        gradient: 'linear-gradient(to right, #ff6a00, #ee0979)',
        icon: 'fas fa-fire-alt',
        accentColor: '#ffffff',
        theme: 'Fiery Passion'
    },
    {
        gradient: 'linear-gradient(to right, #f8cdda, #1d2b64)',
        icon: 'fas fa-moon',
        accentColor: '#ffffff',
        theme: 'Midnight Dream'
    },
    {
        gradient: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
        icon: 'fas fa-umbrella-beach',
        accentColor: '#ffffff',
        theme: 'Tropical Escape'
    },
    {
        gradient: 'linear-gradient(to right, #36d1dc, #5b86e5)',
        icon: 'fas fa-cloud-sun',
        accentColor: '#ffffff',
        theme: 'Sunny Clouds'
    },
    {
        gradient: 'linear-gradient(to right, #667eea, #764ba2)',
        icon: 'fas fa-space-shuttle',
        accentColor: '#ffffff',
        theme: 'Galactic Voyage'
    },
    {
        gradient: 'linear-gradient(to right, #43e97b, #38f9d7)',
        icon: 'fas fa-tree',
        accentColor: '#ffffff',
        theme: 'Forest Serenity'
    },
    {
        gradient: 'linear-gradient(to right, #fa709a, #fee140)',
        icon: 'fas fa-paint-brush',
        accentColor: '#ffffff',
        theme: 'Artistic Burst'
    },
    {
        gradient: 'linear-gradient(to right, #ff5f6d, #ffc371)',
        icon: 'fas fa-bolt',
        accentColor: '#ffffff',
        theme: 'Electric Vibes'
    },
    {
        gradient: 'linear-gradient(to right, #8360c3, #2ebf91)',
        icon: 'fas fa-globe',
        accentColor: '#ffffff',
        theme: 'Earthly Connection'
    },
    {
        gradient: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        icon: 'fas fa-mountain',
        accentColor: '#ffffff',
        theme: 'Mountain Majesty'
    },
    {
        gradient: 'linear-gradient(to right, #ee9ca7, #ffdde0)',
        icon: 'fas fa-heart',
        accentColor: '#ffffff',
        theme: 'Love Story'
    },
    {
        gradient: 'linear-gradient(to right, #654ea3, #eaafc8)',
        icon: 'fas fa-magic',
        accentColor: '#ffffff',
        theme: 'Enchanted Evening'
    },
    {
        gradient: 'linear-gradient(to right, #ff6a00, #ee0979)',
        icon: 'fas fa-dragon',
        accentColor: '#ffffff',
        theme: 'Mythical Fire'
    },
    {
        gradient: 'linear-gradient(to right, #00c6ff, #0072ff)',
        icon: 'fas fa-water',
        accentColor: '#ffffff',
        theme: 'Refreshing Waves'
    },
    {
        gradient: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        icon: 'fas fa-sun',
        accentColor: '#ffffff',
        theme: 'Soft Sunrise'
    },
    {
        gradient: 'linear-gradient(to right, #ff758c, #ff7eb3)',
        icon: 'fas fa-cocktail',
        accentColor: '#ffffff',
        theme: 'Party Time'
    },
    {
        gradient: 'linear-gradient(to right, #f8cdda, #1d2b64)',
        icon: 'fas fa-star',
        accentColor: '#ffffff',
        theme: 'Celestial Night'
    },
    {
        gradient: 'linear-gradient(to right, #ffb347, #ffcc33)',
        icon: 'fas fa-sun',
        accentColor: '#ffffff',
        theme: 'Golden Hour'
    },
    {
        gradient: 'linear-gradient(to right, #00d2ff, #928DAB)',
        icon: 'fas fa-snowflake',
        accentColor: '#ffffff',
        theme: 'Chilly Breeze'
    },
    {
        gradient: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
        icon: 'fas fa-umbrella-beach',
        accentColor: '#ffffff',
        theme: 'Serene Beach'
    },
    {
        gradient: 'linear-gradient(to right, #43e97b, #38f9d7)',
        icon: 'fas fa-leaf',
        accentColor: '#ffffff',
        theme: 'Eco Harmony'
    },
    {
        gradient: 'linear-gradient(to right, #8e2de2, #4a00e0)',
        icon: 'fas fa-rocket',
        accentColor: '#ffffff',
        theme: 'Purple Horizon'
    },
    {
        gradient: 'linear-gradient(to right, #ff4b1f, #ff9068)',
        icon: 'fas fa-fire',
        accentColor: '#ffffff',
        theme: 'Burning Sunset'
    },
    {
        gradient: 'linear-gradient(to right, #11998e, #38ef7d)',
        icon: 'fas fa-cannabis',
        accentColor: '#ffffff',
        theme: 'Green Pulse'
    },
    {
        gradient: 'linear-gradient(to right, #ff6a00, #ee0979)',
        icon: 'fas fa-bolt',
        accentColor: '#ffffff',
        theme: 'Electric Storm'
    }
];

// Enhanced Animation Function
function createAdvancedAnimations() {
    return `
        <style>
            @keyframes pulse {
                0% { transform: scale(1); opacity: 0.7; }
                50% { transform: scale(1.05); opacity: 1; }
                100% { transform: scale(1); opacity: 0.7; }
            }
            @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-15px) rotate(10deg); }
                100% { transform: translateY(0px) rotate(0deg); }
            }
            @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
            }
            .loader-content {
                perspective: 1000px;
                transform-style: preserve-3d;
            }
            .loader-icon {
                animation: 
                    float 2.5s ease-in-out infinite,
                    pulse 1.8s infinite;
                transition: all 0.3s ease;
            }
            .loader-text {
                background: linear-gradient(to right, #fff 0%, #fff 50%, #000 75%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-size: 200% auto;
                animation: shimmer 3s linear infinite;
            }
        </style>
    `;
}

                // Randomly select a style
                const selectedStyle = preloaderStyles[Math.floor(Math.random() * preloaderStyles.length)];
            
                // Create preloader container
                const preloader = document.createElement('div');
                preloader.id = 'preloader';
                preloader.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: ${selectedStyle.gradient};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                    transition: opacity 0.5s ease;
                    overflow: hidden;
                `;
            
                // Create animated loader
                const loader = document.createElement('div');
                loader.innerHTML = `
                    <style>
                        @keyframes pulse {
                            0% { transform: scale(1); }
                            50% { transform: scale(1.1); }
                            100% { transform: scale(1); }
                        }
                        @keyframes float {
                            0% { transform: translateY(0px); }
                            50% { transform: translateY(-10px); }
                            100% { transform: translateY(0px); }
                        }
                        .loader-content {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            color: ${selectedStyle.accentColor};
                            text-align: center;
                        }
                        .loader-icon {
                            font-size: 5rem;
                            animation: float 2s ease-in-out infinite;
                            color: ${selectedStyle.accentColor};
                        }
                        .loader-text {
                            font-size: 2rem;
                            margin-top: 15px;
                            animation: pulse 1.5s infinite;
                        }
                        .loader-subtext {
                            font-size: 1rem;
                            margin-top: 10px;
                            opacity: 0.7;
                        }
                    </style>
                    <div class="loader-content">
                        <i class="${selectedStyle.icon} loader-icon"></i>
                        <div class="loader-text">Django Maestro</div>
                        <div class="loader-subtext">${getRandomLoadingMessage()} (${selectedStyle.theme})</div>
                    </div>
                `;
                
                preloader.appendChild(loader);
                document.body.appendChild(preloader);
            
                // Progress simulation
                simulateProgress(preloader, selectedStyle.accentColor);
            });
            
            // Function to get random loading messages
            function getRandomLoadingMessage() {
                const messages = [
                    'Brewing some awesome code...',
                    'Charging quantum servers...',
                    'Summoning digital magic...',
                    'Preparing rocket boosters...',
                    'Aligning cosmic algorithms...',
                    'Warming up the coding engines...',
                    'Unleashing developer superpowers...'
                ];
                return messages[Math.floor(Math.random() * messages.length)];
            }
            
            // Simulate loading progress
            function simulateProgress(preloader, accentColor) {
                const progressBar = document.createElement('div');
                progressBar.style.cssText = `
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0%;
                    height: 4px;
                    background: ${accentColor};
                    opacity: 0.7;
                    transition: width 2s ease;
                `;
                preloader.appendChild(progressBar);
            
                // Simulate loading progress
                setTimeout(() => {
                    progressBar.style.width = '100%';
                }, 100);
            
                // Remove preloader
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(preloader);
                    }, 500);
                }, 2500);
            }
            
            // Optional: Add performance tracking
            window.addEventListener('DOMContentLoaded', () => {
                const loadTime = performance.now();
                console.log(`Page load time: ${loadTime.toFixed(2)} ms`);
            });
            const PRELOADER_CONFIGS = [
    {
        icon: 'fab fa-python',
        theme: 'Django Maestro',
        gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        messages: [
            'Brewing Django Magic...',
            'Crafting Web Solutions...',
            'Powering Up Servers...'
        ]
    },
    {
        icon: 'fas fa-rocket',
        theme: 'Launch Mode',
        gradient: 'linear-gradient(135deg, #ff6a00, #ee0979)',
        messages: [
            'Igniting Engines...',
            'Preparing Liftoff...',
            'Calibrating Systems...'
        ]
    },
    {
        icon: 'fas fa-brain',
        theme: 'AI Neural Network',
        gradient: 'linear-gradient(135deg, #00b4db, #0083b0)',
        messages: [
            'Training Neural Networks...',
            'Processing Deep Learning...',
            'Optimizing Algorithms...'
        ]
    },
    {
        icon: 'fas fa-cloud',
        theme: 'Cloud Architect',
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        messages: [
            'Deploying Cloud Infrastructure...',
            'Scaling Microservices...',
            'Securing Network Nodes...'
        ]
    },
    {
        icon: 'fas fa-database',
        theme: 'Data Forge',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        messages: [
            'Processing Big Data...',
            'Indexing Databases...',
            'Optimizing Query Performance...'
        ]
    },
    {
        icon: 'fas fa-code',
        theme: 'Code Alchemist',
        gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
        messages: [
            'Transforming Code...',
            'Compiling Algorithms...',
            'Refactoring Logic...'
        ]
    },
    {
        icon: 'fas fa-server',
        theme: 'DevOps Nexus',
        gradient: 'linear-gradient(135deg, #ff5f6d, #ffc371)',
        messages: [
            'Orchestrating Containers...',
            'Automating Deployments...',
            'Monitoring Infrastructure...'
        ]
    },
    {
        icon: 'fas fa-globe',
        theme: 'Global Sync',
        gradient: 'linear-gradient(135deg, #8360c3, #2ebf91)',
        messages: [
            'Synchronizing Global Systems...',
            'Connecting Networks...',
            'Routing Data Streams...'
        ]
    },
    {
        icon: 'fas fa-lock',
        theme: 'Cyber Guardian',
        gradient: 'linear-gradient(135deg, #434343, #000000)',
        messages: [
            'Encrypting Channels...',
            'Detecting Anomalies...',
            'Fortifying Security...'
        ]
    },
    {
        icon: 'fas fa-magic',
        theme: 'Tech Wizardry',
        gradient: 'linear-gradient(135deg, #654ea3, #eaafc8)',
        messages: [
            'Conjuring Digital Spells...',
            'Casting Optimization Charms...',
            'Weaving Code Magic...'
        ]
    },
    {
        icon: 'fas fa-cubes',
        theme: 'Blockchain Architect',
        gradient: 'linear-gradient(135deg, #56ab2f, #a8e063)',
        messages: [
            'Mining Blockchain Nodes...',
            'Validating Transactions...',
            'Securing Distributed Ledger...'
        ]
    },
    {
        icon: 'fas fa-microchip',
        theme: 'Silicon Frontier',
        gradient: 'linear-gradient(135deg, #00c6ff, #0072ff)',
        messages: [
            'Initializing Processors...',
            'Calibrating Circuits...',
            'Optimizing Performance...'
        ]
    },
    {
        icon: 'fas fa-robot',
        theme: 'Machine Learning Pulse',
        gradient: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
        messages: [
            'Training Machine Models...',
            'Analyzing Patterns...',
            'Predicting Outcomes...'
        ]
    },
    {
        icon: 'fas fa-satellite',
        theme: 'Space Tech Horizon',
        gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        messages: [
            'Calibrating Satellite Systems...',
            'Tracking Orbital Paths...',
            'Processing Cosmic Data...'
        ]
    },
    {
        icon: 'fas fa-network-wired',
        theme: 'Network Quantum',
        gradient: 'linear-gradient(135deg, #ff6a00, #ee0979)',
        messages: [
            'Establishing Quantum Links...',
            'Synchronizing Nodes...',
            'Routing Quantum Signals...'
        ]
    },
    {
        icon: 'fas fa-chart-line',
        theme: 'Predictive Analytics',
        gradient: 'linear-gradient(135deg, #4ecdc4, #45b7d1)',
        messages: [
            'Analyzing Trends...',
            'Processing Statistical Models...',
            'Generating Insights...'
        ]
    },
    {
        icon: 'fas fa-mobile-alt',
        theme: 'Mobile Fusion',
        gradient: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
        messages: [
            'Optimizing Mobile Experience...',
            'Rendering Responsive UI...',
            'Synchronizing Platforms...'
        ]
    },
    {
        icon: 'fas fa-solar-panel',
        theme: 'Green Tech Evolution',
        gradient: 'linear-gradient(135deg, #00f2fe, #4facfe)',
        messages: [
            'Calculating Sustainable Solutions...',
            'Modeling Eco Algorithms...',
            'Optimizing Energy Efficiency...'
        ]
    },
    {
        icon: 'fas fa-wave-square',
        theme: 'Signal Processing',
        gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
        messages: [
            'Filtering Signal Noise...',
            'Transforming Waveforms...',
            'Enhancing Signal Clarity...'
        ]
    },
    {
        icon: 'fas fa-sitemap',
        theme: 'Architecture Sync',
        gradient: 'linear-gradient(135deg, #2980b9, #6dd5fa)',
        messages: [
            'Mapping System Architecture...',
            'Designing Infrastructure...',
            'Optimizing Component Interactions...'
        ]
    },
    {
        icon: 'fas fa-layer-group',
        theme: 'Microservices Realm',
        gradient: 'linear-gradient(135deg, #ff9966, #ff5e62)',
        messages: [
            'Deploying Microservices...',
            'Orchestrating Containers...',
            'Balancing Load Dynamics...'
        ]
    },
    {
        icon: 'fas fa-project-diagram',
        theme: 'System Integration',
        gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
        messages: [
            'Mapping Integration Flows...',
            'Synchronizing Components...',
            'Optimizing Data Exchange...'
        ]
    },
    {
        icon: 'fas fa-compress-arrows-alt',
        theme: 'Convergence Protocol',
        gradient: 'linear-gradient(135deg, #5f2c82, #49a09d)',
        messages: [
            'Aligning System Vectors...',
            'Converging Data Streams...',
            'Optimizing Interconnectivity...'
        ]
    },
    {
        icon: 'fas fa-fire-alt',
        theme: 'Reactive Forge',
        gradient: 'linear-gradient(135deg, #ff512f, #dd2476)',
        messages: [
            'Igniting Reactive Systems...',
            'Generating Event Streams...',
            'Orchestrating Dynamic Flows...'
        ]
    },
    {
        icon: 'fas fa-atom',
        theme: 'Quantum Realm',
        gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)',
        messages: [
            'Entangling Quantum States...',
            'Processing Probabilistic Models...',
            'Simulating Quantum Mechanics...'
        ]
    },
    {
        icon: 'fas fa-project-diagram',
        theme: 'Distributed Intelligence',
        gradient: 'linear-gradient(135deg, #00b4db, #0083b0)',
        messages: [
            'Distributing Computational Load...',
            'Synchronizing Intelligent Nodes...',
            'Optimizing Parallel Processing...'
        ]
    },
    {
        icon: 'fas fa-bezier-curve',
        theme: 'Design Nexus',
        gradient: 'linear-gradient(135deg, #ff6a00, #ee0979)',
        messages: [
            'Rendering Design Vectors...',
            'Calculating Aesthetic Algorithms...',
            'Optimizing User Experience...'
        ]
    },
    {
        icon: 'fas fa-stream',
        theme: 'Data Flux',
        gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
        messages: [
            'Streaming Real-time Data...',
            'Processing Event Flows...',
            'Synchronizing Data Channels...'
        ]
    },
    {
        icon: 'fas fa-shield-alt',
        theme: 'Cyber Sentinel',
        gradient: 'linear-gradient(135deg, #434343, #000000)',
        messages: [
            'Activating Defense Protocols...',
            'Monitoring Security Layers...',
            'Neutralizing Potential Threats...'
        ]
    },
    {
        icon: 'fas fa-random',
        theme: 'Algorithmic Flux',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        messages: [
            'Generating Probabilistic Models...',
            'Randomizing Computational Paths...',
            'Optimizing Stochastic Algorithms...'
        ]
    },
    {
        icon: 'fas fa-code-branch',
        theme: 'Evolutionary Coding',
        gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
        messages: [
            'Evolving Algorithmic Structures...',
            'Optimizing Code Mutations...',
            'Generating Adaptive Solutions...'
        ]
    },
    {
        icon: 'fas fa-crop-alt',
        theme: 'Precision Engineering',
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        messages: [
            'Calibrating Precision Systems...',
            'Optimizing Micro-Tolerances...',
            'Refining Engineering Models...'
        ]
                },
                // Add more configurations
            ];
    
            // Preloader Logic
            function initializePreloader() {
                const preloader = document.getElementById('preloader');
                const dynamicContent = document.getElementById('preloader-dynamic-content');
    
                // Randomly select a configuration
                const config = PRELOADER_CONFIGS[
                    Math.floor(Math.random() * PRELOADER_CONFIGS.length)
                ];
    
                // Set dynamic background
                preloader.style.background = config.gradient;
    
                // Generate preloader HTML
                dynamicContent.innerHTML = `
                    <i class="${config.icon} preloader-icon"></i>
                    <div class="preloader-text">${config.theme}</div>
                    <div class="preloader-subtext" id="loading-message">
                        ${getRandomMessage(config.messages)}
                    </div>
                    <div class="preloader-progress">
                        <div class="preloader-progress-bar" id="progress-bar"></div>
                    </div>
                `;
    
                // Animate loading message
                animateLoadingMessage();
    
                // Progress bar animation
                setTimeout(() => {
                    const progressBar = document.getElementById('progress-bar');
                    progressBar.style.width = '100%';
                }, 100);
    
                // Remove preloader
                setTimeout(() => {
                    preloader.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(preloader);
                    }, 500);
                }, 3000);
            }
    
            // Helper Functions
            function getRandomMessage(messages) {
                return messages[Math.floor(Math.random() * messages.length)];
            }
    
            function animateLoadingMessage() {
                const messageElement = document.getElementById('loading-message');
                if (messageElement) {
                    messageElement.style.animation = 'pulse 1.5s infinite';
                }
            }
    
            // Initialize on page load
            window.addEventListener('load', initializePreloader);
    
            // Performance Tracking
            window.addEventListener('DOMContentLoaded', () => {
                const loadTime = performance.now();
                console.log(`Page load performance: ${loadTime.toFixed(2)} ms`);
            });
           // TypeWriter Class
class TypeWriter {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.options = {
            typeSpeed: options.typeSpeed || 100,
            deleteSpeed: options.deleteSpeed || 60,
            pauseBetween: options.pauseBetween || 2500,
            loop: options.loop !== undefined ? options.loop : true,
            cursorClass: options.cursorClass || 'cursor',
            typingClass: options.typingClass || 'typing-text'
        };
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.typingElement = this.findOrCreateElement(this.options.typingClass);
        this.cursorElement = this.findOrCreateElement(this.options.cursorClass);
        this.init();
    }

    // Helper method to find or create element
    findOrCreateElement(className) {
        let element = this.element.querySelector(`.${className}`);
        if (!element) {
            element = document.createElement('div');
            element.classList.add(className);
            this.element.appendChild(element);
        }
        return element;
    }

    // Dynamic text class method
    getTextClass(index) {
        const classes = [
            'typing-text command-text',
            'typing-text comment-text',
            'typing-text highlight-text'
        ];
        return classes[index % classes.length];
    }

    // Initialization method
    init() {
        this.type();
    }

    // Core typing mechanism
    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.typingElement.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.typingElement.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        // Dynamic styling
        this.typingElement.className = this.getTextClass(this.textIndex);

        let typeSpeed = this.options.typeSpeed;

        if (this.isDeleting) {
            typeSpeed /= 1.5;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.options.pauseBetween;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Typing Effects Manager
const TypingEffectsManager = {
    // Configuration for different typing scenarios
    configurations: {
        title: {
            selector: '.hero-title',
            texts: [
                '> django_development.maestro()',
                '> web_solutions.architect()',
                '> python_coding.specialist()'
            ],
            options: {
                typeSpeed: 100,
                pauseBetween: 2500
            }
        },
        subtitle: {
            selector: '.hero-subtitle',
            texts: [
                '// Transforming Ideas into Powerful Web Solutions',
                '// Crafting Elegant and Scalable Applications',
                '// Delivering Innovative Digital Experiences'
            ],
            options: {
                typeSpeed: 80,
                pauseBetween: 3000
            }
        },
        skills: {
            selector: '.hero-skills',
            texts: [
                '🚀 Skills: Django | Python | React',
                '🔧 Tools: Docker | Git | AWS',
                '📊 Expertise: Full-Stack Development'
            ],
            options: {
                typeSpeed: 70,
                pauseBetween: 2700
            }
        }
    },

    // Method to initialize typing effects
    initializeEffects() {
        Object.keys(this.configurations).forEach(key => {
            const config = this.configurations[key];
            const container = document.querySelector(config.selector);
            
            if (container) {
                new TypeWriter(container, config.texts, config.options);
            }
        });
    },

    // Method to add new typing effect configuration
    addConfiguration(key, config) {
        this.configurations[key] = config;
    },

    // Method to remove a configuration
    removeConfiguration(key) {
        delete this.configurations[key];
    }
};

// Initialize typing effects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all configured typing effects
    TypingEffectsManager.initializeEffects();

    // Example of dynamically adding a new typing effect
    TypingEffectsManager.addConfiguration('projects', {
        selector: '.hero-projects',
        texts: [
            '🌟 Project: E-commerce Platform',
            '🔍 Project: Machine Learning Dashboard',
            '💻 Project: Real-time Collaboration Tool'
        ],
        options: {
            typeSpeed: 75,
            pauseBetween: 2600
        }
    });

    // Reinitialize to include the new configuration
    TypingEffectsManager.initializeEffects();
});

// Optional: Expose the TypingEffectsManager globally if needed
window.TypingEffectsManager = TypingEffectsManager;
// Dark Mode Manager
const DarkModeManager = {
    // Configuration
    config: {
        darkModeClass: 'dark-mode',
        toggleButtonSelector: '.dark-mode-toggle',
        transitionDuration: 300, // ms
        storageKey: 'django-maestro-dark-mode'
    },

    // Initialize Dark Mode
    init() {
        this.toggleButton = document.querySelector(this.config.toggleButtonSelector);
        this.body = document.body;

        // Add event listener
        if (this.toggleButton) {
            this.toggleButton.addEventListener('click', () => this.toggle());
        }

        // Check for saved preference
        this.checkSavedPreference();

        // Add transition styles
        this.addTransitionStyles();
    },

    // Add smooth transition styles
    addTransitionStyles() {
        const style = document.createElement('style');
        style.textContent = `
            body {
                transition: 
                    background-color ${this.config.transitionDuration}ms ease,
                    color ${this.config.transitionDuration}ms ease;
            }
            * {
                transition: 
                    background-color ${this.config.transitionDuration}ms ease,
                    color ${this.config.transitionDuration}ms ease,
                    box-shadow ${this.config.transitionDuration}ms ease;
            }
        `;
        document.head.appendChild(style);
    },

    // Toggle Dark Mode
    toggle() {
        this.body.classList.toggle(this.config.darkModeClass);
        
        // Save preference
        const isDarkMode = this.body.classList.contains(this.config.darkModeClass);
        this.savePreference(isDarkMode);

        // Optional: Animate toggle button
        this.animateToggleButton(isDarkMode);
    },

    // Check for Saved Preference
    checkSavedPreference() {
        const savedPreference = localStorage.getItem(this.config.storageKey);
        
        if (savedPreference === 'dark') {
            this.body.classList.add(this.config.darkModeClass);
        } else if (savedPreference === 'light') {
            this.body.classList.remove(this.config.darkModeClass);
        } else {
            // Check system preference if no saved preference
            this.checkSystemPreference();
        }
    },

    // Save Dark Mode Preference
    savePreference(isDarkMode) {
        localStorage.setItem(
            this.config.storageKey, 
            isDarkMode ? 'dark' : 'light'
        );
    },

    // Check System Preference
    checkSystemPreference() {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (prefersDarkScheme.matches) {
            this.body.classList.add(this.config.darkModeClass);
        }

        // Listen for changes in system preference
        prefersDarkScheme.addListener((e) => {
            this.body.classList.toggle(
                this.config.darkModeClass, 
                e.matches
            );
        });
    },

    // Animate Toggle Button
    animateToggleButton(isDarkMode) {
        if (!this.toggleButton) return;

        // GSAP or custom animation
        if (window.gsap) {
            window.gsap.to(this.toggleButton, {
                rotation: isDarkMode ? 180 : 0,
                scale: 1.2,
                duration: 0.3,
                onComplete: () => {
                    window.gsap.to(this.toggleButton, {
                        scale: 1,
                        duration: 0.2
                    });
                }
            });
        }
    },

    // Advanced Color Management
    getColorScheme() {
        return {
            light: {
                background: '#ffffff',
                text: '#333333',
                primary: '#007bff',
                secondary: '#6c757d'
            },
            dark: {
                background: '#121212',
                text: '#e0e0e0',
                primary: '#3f9fff',
                secondary: '#a0a0a0'
            }
        };
    },

    // Apply Color Scheme
    applyColorScheme() {
        const scheme = this.getColorScheme();
        const isDarkMode = this.body.classList.contains(this.config.darkModeClass);
        const colors = isDarkMode ? scheme.dark : scheme.light;

        // Apply custom properties
        Object.entries(colors).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}-color`, value);
        });
    }
};

// Initialize Dark Mode on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    DarkModeManager.init();
    // Optional: Apply color scheme
    DarkModeManager.applyColorScheme();
});

// Expose to global scope if needed
window.DarkModeManager = DarkModeManager;