// script.js - Script corrigé pour le portfolio

// Définition des compétences en dehors des fonctions
const skillsData = [
    // Frontend
    { 
        name: "HTML5", 
        category: "frontend", 
        percentage: 95, 
        icon: '<i class="fab fa-html5 text-orange-500"></i>' 
    },
    { 
        name: "CSS3", 
        category: "frontend", 
        percentage: 90, 
        icon: '<i class="fab fa-css3-alt text-blue-500"></i>' 
    },
    { 
        name: "JavaScript", 
        category: "frontend", 
        percentage: 92, 
        icon: '<i class="fab fa-js-square text-yellow-400"></i>' 
    },
    { 
        name: "React", 
        category: "frontend", 
        percentage: 88, 
        icon: '<i class="fab fa-react text-blue-400"></i>' 
    },
    { 
        name: "Vue.js", 
        category: "frontend", 
        percentage: 85, 
        icon: '<i class="fab fa-vuejs text-green-500"></i>' 
    },
    { 
        name: "Angular", 
        category: "frontend", 
        percentage: 80, 
        icon: '<i class="fab fa-angular text-red-600"></i>' 
    },
    { 
        name: "Tailwind CSS", 
        category: "frontend", 
        percentage: 90, 
        icon: '<i class="fab fa-css3 text-blue-400"></i>' 
    },
    
    // Backend
    { 
        name: "Node.js", 
        category: "backend", 
        percentage: 88, 
        icon: '<i class="fab fa-node-js text-green-500"></i>' 
    },
    { 
        name: "PHP", 
        category: "backend", 
        percentage: 85, 
        icon: '<i class="fab fa-php text-purple-500"></i>' 
    },
    { 
        name: "Python", 
        category: "backend", 
        percentage: 82, 
        icon: '<i class="fab fa-python text-yellow-300"></i>' 
    },
    { 
        name: "MySQL", 
        category: "backend", 
        percentage: 87, 
        icon: '<i class="fas fa-database text-blue-300"></i>' 
    },
    { 
        name: "MongoDB", 
        category: "backend", 
        percentage: 85, 
        icon: '<i class="fas fa-leaf text-green-500"></i>' 
    },
    { 
        name: "Firebase", 
        category: "backend", 
        percentage: 90, 
        icon: '<i class="fas fa-fire text-yellow-500"></i>' 
    },
    { 
        name: "RESTful API", 
        category: "backend", 
        percentage: 92, 
        icon: '<i class="fas fa-exchange-alt text-blue-400"></i>' 
    },
    
    // Mobile
    { 
        name: "React Native", 
        category: "mobile", 
        percentage: 88, 
        icon: '<i class="fab fa-react text-blue-500"></i>' 
    },
    { 
        name: "Flutter", 
        category: "mobile", 
        percentage: 85, 
        icon: '<i class="fas fa-mobile-alt text-blue-400"></i>' 
    },
    { 
        name: "Swift", 
        category: "mobile", 
        percentage: 78, 
        icon: '<i class="fab fa-swift text-orange-500"></i>' 
    },
    { 
        name: "Kotlin", 
        category: "mobile", 
        percentage: 75, 
        icon: '<i class="fab fa-android text-green-500"></i>' 
    },
    
    // Design
    { 
        name: "Figma", 
        category: "design", 
        percentage: 85, 
        icon: '<i class="fab fa-figma text-purple-500"></i>' 
    },
    { 
        name: "UI/UX Design", 
        category: "design", 
        percentage: 88, 
        icon: '<i class="fas fa-pencil-ruler text-yellow-500"></i>' 
    }
];

// Fonction d'initialisation des compétences
function initSkills() {
    // Charger toutes les compétences au démarrage
    displaySkills('all');
    
    // Configurer les filtres
    setupSkillTabs();
}

// Fonction pour afficher les compétences filtrées
function displaySkills(category = 'all') {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    // Vider la grille
    skillsGrid.innerHTML = '';
    
    // Filtrer les compétences selon la catégorie
    const filteredSkills = category === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === category);
    
    // Afficher les compétences
    filteredSkills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-card bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-700 hover:border-blue-600/30';
        skillElement.setAttribute('data-aos', 'fade-up');
        skillElement.setAttribute('data-aos-delay', (index % 8) * 100);
        
        skillElement.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="text-2xl">${skill.icon}</div>
                <div class="text-xl font-bold text-blue-400">${skill.percentage}%</div>
            </div>
            <div class="mb-2">
                <h3 class="text-lg font-semibold text-white">${skill.name}</h3>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5">
                <div class="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full skill-progress" style="width: 0%;" data-percent="${skill.percentage}"></div>
            </div>
        `;
        
        skillsGrid.appendChild(skillElement);
        
        // Animation des barres de progression
        setTimeout(() => {
            const progressBar = skillElement.querySelector('.skill-progress');
            progressBar.style.width = `${skill.percentage}%`;
        }, 300);
    });
}

// Configuration des onglets de compétences
function setupSkillTabs() {
    const tabs = document.querySelectorAll('.skill-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Réinitialiser tous les onglets
            tabs.forEach(t => {
                t.classList.remove('active', 'bg-blue-600/20', 'text-blue-400', 'border-blue-600/30');
                t.classList.add('bg-transparent', 'text-gray-400', 'border-gray-700');
            });
            
            // Activer l'onglet cliqué
            this.classList.add('active', 'bg-blue-600/20', 'text-blue-400', 'border-blue-600/30');
            this.classList.remove('bg-transparent', 'text-gray-400', 'border-gray-700');
            
            // Afficher les compétences de la catégorie sélectionnée
            const category = this.getAttribute('data-category');
            displaySkills(category);
        });
    });
}

// Observateur pour animer les barres de progression
function initSkillsObserver() {
    if (!('IntersectionObserver' in window)) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    setTimeout(() => {
                        const percentage = bar.getAttribute('data-percent');
                        bar.style.width = `${percentage}%`;
                    }, 300);
                });
            }
        });
    }, { threshold: 0.1 });
    
    // Observer la section des compétences
    const competencesSection = document.getElementById('competences');
    if (competencesSection) {
        observer.observe(competencesSection);
    }
}


// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    initSkills();
    initSkillsObserver();
    // Initialisation d'AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Gestion du header au défilement
    initHeaderScroll();
    
    // Gestion du menu mobile
    initMobileMenu();
    
    // Gestion des liens de navigation
    initSmoothScroll();
    
    // Gestion de l'indicateur de navigation
    initNavIndicator();
    
    // Chargement des compétences
    loadSkills();
    
    // Chargement des projets
    loadProjects();
    
    // Gestion du formulaire de contact
    initContactForm();
    
    // Gestion du bouton retour en haut
    initBackToTop();
    
    // Animations GSAP
    initGSAPAnimations();
    
    // Thème sombre/clair
    initThemeToggle();
});

// Gestion du header lors du défilement
function initHeaderScroll() {
    const header = document.querySelector('header');
    const scrollThreshold = 50;
    
    function updateHeaderStyle() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeaderStyle);
    updateHeaderStyle(); // État initial
}

// Gestion du menu mobile
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('open');
            if (hamburger) hamburger.classList.toggle('active');
        });
    }
}

// Gestion du défilement fluide pour les liens
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                const mobileMenu = document.getElementById('mobile-menu');
                const hamburger = document.querySelector('.hamburger');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (hamburger) hamburger.classList.remove('active');
                }
            }
        });
    });
}

// Gestion de l'indicateur de navigation active
function initNavIndicator() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.getElementById('nav-indicator');
    const sections = document.querySelectorAll('section[id]');
    
    function updateNavIndicator() {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink && navIndicator) {
            navIndicator.style.width = `${activeLink.offsetWidth}px`;
            navIndicator.style.left = `${activeLink.offsetLeft}px`;
        }
    }
    
    // Mise à jour de l'indicateur lors du clic
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            updateNavIndicator();
        });
    });
    
    // Mise à jour de l'indicateur lors du défilement
    function updateActiveNavOnScroll() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
                updateNavIndicator();
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavOnScroll);
    window.addEventListener('resize', updateNavIndicator);
    
    // Initialisation
    updateNavIndicator();
}

// Chargement des compétences
function loadSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    skillsData.forEach((skill, index) => {
        const skillElement = createSkillElement(skill, index);
        container.appendChild(skillElement);
    });
}

// Création d'un élément de compétence
function createSkillElement(skill, index) {
    const [title, percentage, techSkills, icon] = skill;
    const skillElement = document.createElement('div');
    skillElement.className = 'card p-6 transform hover:scale-105 transition duration-300 ease-in-out';
    skillElement.setAttribute('data-aos', 'fade-up');
    skillElement.setAttribute('data-aos-delay', index * 100);

    skillElement.innerHTML = `
        <div class="flex items-center mb-4">
            <i class="${icon} text-3xl text-primary-color mr-4"></i>
            <h3 class="text-2xl font-semibold">${title}</h3>
        </div>
        <div class="relative pt-1">
            <div class="flex mb-2 items-center justify-between">
                <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-color bg-primary-color bg-opacity-20">
                        Compétence
                    </span>
                </div>
                <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-primary-color">
                        ${percentage}%
                    </span>
                </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-color bg-opacity-20">
                <div style="width:${percentage}%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-color animate-pulse"></div>
            </div>
        </div>
        <div class="flex flex-wrap gap-2 mt-4">
            ${techSkills.map(tech => `<span class="px-2 py-1 bg-gray-700 text-sm rounded-full text-gray-300">${tech}</span>`).join('')}
        </div>
    `;

    return skillElement;
}

// Chargement des projets
function loadProjects() {
    fetch('projets.json')
        .then(response => response.json())
        .then(projects => {
            // Ajouter une catégorie à chaque projet si nécessaire
            projects = projects.map(project => {
                if (!project.category) {
                    let category = 'web'; // Par défaut
                    const techs = project.technologies.toLowerCase();
                    
                    if (techs.includes('react native') || techs.includes('flutter') || techs.includes('mobile')) {
                        category = 'mobile';
                    } else if (techs.includes('figma') || techs.includes('design') || techs.includes('ui/ux')) {
                        category = 'design';
                    }
                    return { ...project, category };
                }
                return project;
            });
            
            displayProjects(projects);
            setupFilters(projects);
        })
        .catch(error => {
            console.error('Erreur lors du chargement des projets:', error);
            const projectsGrid = document.getElementById('projects-grid');
            if (projectsGrid) {
                projectsGrid.innerHTML = `
                    <div class="col-span-full text-center p-8">
                        <p class="text-red-400">Impossible de charger les projets. Veuillez réessayer plus tard.</p>
                    </div>
                `;
            }
        });
}

// Affichage des projets
function displayProjects(projects, filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    // Filtrer les projets si nécessaire
    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);
    
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="col-span-full text-center p-8">
                <p class="text-gray-400">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
        `;
        return;
    }
    
    // Afficher chaque projet
    filteredProjects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card group';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', (index % 3) * 100);
        
        // Générer les badges de technologies
        const techBadges = project.technologies.split(',').map(tech => {
            return `<span class="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">${tech.trim()}</span>`;
        }).join('');
        
        projectCard.innerHTML = `
            <div class="relative overflow-hidden rounded-xl shadow-lg bg-gray-800 border border-gray-700 h-full transform hover:scale-[1.03] hover:border-blue-600/40 transition-all duration-300">
                <div class="relative overflow-hidden h-56">
                    <img src="${project.image}" alt="${project.titre}" class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 w-full p-4">
                        <div class="flex items-center mb-2">
                            <span class="bg-blue-600 bg-opacity-30 text-blue-300 text-xs px-3 py-1 rounded-full backdrop-blur-sm">${project.category}</span>
                            <span class="ml-auto text-gray-300 text-sm">${project.date}</span>
                        </div>
                        <h3 class="text-xl font-bold text-white">${project.titre}</h3>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-gray-300 mb-4 line-clamp-3">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${techBadges}
                    </div>
                    <div class="flex justify-between items-center">
                        <a href="${project.lien}" target="_blank" class="text-blue-400 hover:text-blue-300 inline-flex items-center">
                            Explorer
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                        <button class="modal-trigger p-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-colors" data-project='${JSON.stringify(project)}'>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    setupModalTriggers();
}

// Configuration des filtres de projets
function setupFilters(projects) {
    const filters = document.querySelectorAll('.project-filter');
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            filters.forEach(f => {
                f.classList.remove('active', 'bg-blue-600/20', 'text-blue-400', 'border-blue-600/30');
                f.classList.add('bg-transparent', 'text-gray-400', 'border-gray-700');
            });
            
            this.classList.add('active', 'bg-blue-600/20', 'text-blue-400', 'border-blue-600/30');
            this.classList.remove('bg-transparent', 'text-gray-400', 'border-gray-700');
            
            const filterValue = this.getAttribute('data-filter');
            displayProjects(projects, filterValue);
        });
    });
}

// Configuration des déclencheurs de modale
function setupModalTriggers() {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            try {
                const projectData = JSON.parse(this.getAttribute('data-project'));
                showProjectModal(projectData);
            } catch (e) {
                console.error('Erreur lors du parsing des données du projet', e);
            }
        });
    });
}

// Affichage de la modale de projet
function showProjectModal(project) {
    let modal = document.getElementById('project-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
    
    modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm';
    
    const techBadges = project.technologies.split(',').map(tech => {
        return `<span class="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full">${tech.trim()}</span>`;
    }).join('');
    
    modal.innerHTML = `
        <div class="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-95 opacity-0 transition-all duration-300" id="modal-content">
            <div class="relative">
                <div class="h-64 md:h-80 overflow-hidden">
                    <img src="${project.image}" alt="${project.titre}" class="w-full h-full object-cover object-center">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                </div>
                <button id="close-modal" class="absolute top-4 right-4 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-opacity-70 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="p-6 md:p-8">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">${project.titre}</h2>
                <div class="flex items-center mb-6">
                    <span class="bg-blue-600 bg-opacity-30 text-blue-300 text-sm px-3 py-1 rounded-full">${project.category}</span>
                    <span class="ml-4 text-gray-400">${project.date}</span>
                </div>
                <div class="mb-6">
                    <h3 class="text-xl font-semibold text-blue-400 mb-2">À propos du projet</h3>
                    <p class="text-gray-300 mb-4">${project.description}</p>
                </div>
                <div class="mb-6">
                    <h3 class="text-xl font-semibold text-blue-400 mb-2">Technologies utilisées</h3>
                    <div class="flex flex-wrap gap-2">
                        ${techBadges}
                    </div>
                </div>
                <div class="flex justify-center mt-8">
                    <a href="${project.lien}" target="_blank" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                        Voir le projet
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        const modalContent = document.getElementById('modal-content');
        if (modalContent) {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }
    }, 10);
    
    document.getElementById('close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    document.body.style.overflow = 'hidden';
    
    function closeModal() {
        const modalContent = document.getElementById('modal-content');
        if (modalContent) {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
}

// Gestion du formulaire de contact
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const buttonText = document.getElementById('button-text');
    const buttonLoader = document.getElementById('button-loader');
    
    if (form && formMessage) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (buttonText) buttonText.classList.add('hidden');
            if (buttonLoader) buttonLoader.classList.remove('hidden');
            
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) submitButton.disabled = true;
            
            const formData = new FormData(form);
            const contactData = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                sujet: formData.get('sujet') || '',
                message: formData.get('message'),
                date: new Date().toISOString()
            };
            
            try {
                if (typeof db !== 'undefined' && typeof collection !== 'undefined' && typeof addDoc !== 'undefined') {
                    await addDoc(collection(db, "messages"), contactData);
                } else {
                    console.log('Message envoyé:', contactData);
                    await new Promise(resolve => setTimeout(resolve, 1500));
                }
                
                formMessage.textContent = "Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.";
                formMessage.className = "mt-6 px-4 py-3 rounded-lg text-center bg-green-600/20 text-green-400 border border-green-600/30";
                
                form.reset();
            } catch (error) {
                console.error("Erreur lors de l'envoi du message:", error);
                
                formMessage.textContent = "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer ultérieurement.";
                formMessage.className = "mt-6 px-4 py-3 rounded-lg text-center bg-red-600/20 text-red-400 border border-red-600/30";
            } finally {
                if (buttonText) buttonText.classList.remove('hidden');
                if (buttonLoader) buttonLoader.classList.add('hidden');
                if (submitButton) submitButton.disabled = false;
                
                formMessage.classList.remove('hidden');
                
                setTimeout(function() {
                    formMessage.classList.add('hidden');
                }, 6000);
                
                if (typeof formMessage.scrollIntoView === 'function') {
                    formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }
}

// Gestion du bouton retour en haut
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Animations GSAP
function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    
    const navbar = document.getElementById('navbar');
    if (navbar) {
        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            toggleClass: { className: 'backdrop-blur-md', targets: navbar }
        });
    }
    
    gsap.utils.toArray('section').forEach((section) => {
        const heading = section.querySelector('h2');
        const content = section.querySelector('div');
        
        if (heading) {
            gsap.fromTo(heading, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
        
        if (content) {
            gsap.fromTo(content, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }
    });
    
    gsap.utils.toArray('.skill-progress').forEach((bar) => {
        gsap.fromTo(bar, 
            { width: '0%' },
            {
                width: bar.style.width || '0%',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 90%'
                }
            }
        );
    });
    
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: i * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%'
                }
            }
        );
    });
}

// Gestion du thème sombre/clair
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            const icon = this.querySelector('svg');
            if (icon) {
                if (document.body.classList.contains('dark-mode')) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
                } else {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
                }
            }
        });
    }
}