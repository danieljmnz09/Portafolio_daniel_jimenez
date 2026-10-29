document.addEventListener('DOMContentLoaded', () => {

 
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  
  const progressFills = document.querySelectorAll('.progress-fill');
  let animated = false;

  const animateSkills = () => {
    const skillsSection = document.querySelector('.skills-wrapper');
    if (!skillsSection) return;

    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos && !animated) {
      progressFills.forEach(fill => {
        const progress = fill.getAttribute('data-progress');
        fill.style.width = `${progress}%`;
      });
      animated = true;
    }
  };

  window.addEventListener('scroll', animateSkills);
  animateSkills(); // Ejecución inicial en caso de estar visible al cargar

  
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remover clase activa de todos los botones
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalTags = document.getElementById('modalTags');
  const modalDescription = document.getElementById('modalDescription');
  const modalGithub = document.getElementById('modalGithub');

  const projectsData = {
    'bookhub': {
      title: 'BookHub',
      tags: 'HTML · CSS · MySQL · PYTHON',
      desc: 'Plataforma interactiva diseñada para amantes de la lectura. Permite explorar un catálogo dinámico de libros, consultar resúmenes detallados y filtrar por género utilizando consumo de APIs externas.',
      github: 'https://github.com/danieljmnz09/Skillnest_fullstack_phyton/tree/main/python/Core/simulacion_certificacion_bookhub'
    },
    'juego-destino': {
      title: 'Juego del Destino',
      tags: 'HTML · PYTHON · CSS',
      desc: 'Un juego interactivo de decisiones múltiples en tiempo real. Utiliza eventos de teclado/ratón, animaciones dinámicas mediante manipulaciones del DOM y lógica algorítmica en JavaScript.',
      github: 'https://github.com/danieljmnz09/Skillnest_fullstack_phyton/tree/main/python/Core/juego_destino_(CORE)_jimenez_daniel'
    },
    'tasktrack': {
      title: 'TaskTrack',
      tags: 'MySQL · HTML · CSS · PYTHON',
      desc: 'Aplicación de productividad para la organización personal. Incluye estado reactivo, filtrado de tareas completadas/pendientes y almacenamiento local para mantener tus datos guardados.',
      github: 'https://github.com/danieljmnz09/Skillnest_fullstack_phyton/tree/main/python/Core/Simulaci%C3%B3n2_TaskTrack/proyecto_tasktrack'
    },
    'posturelab': {
      title: 'PostureLab',
      tags: 'RENDER · Web APIs · CSS · HTML',
      desc: 'Herramienta interactiva para la salud digital que calcula pausas activas y envía notificaciones en pantalla para mejorar la postura y evitar el sedentarismo durante el trabajo remoto.',
      github: 'https://github.com/Cami-ng23/PostureLab_Proyecto2'
    }
  };

  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectsData[projectId];

      if (data && projectModal) {
        modalTitle.textContent = data.title;
        modalTags.textContent = data.tags;
        modalDescription.textContent = data.desc;
        modalGithub.href = data.github;

        projectModal.classList.add('active');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      projectModal.classList.remove('active');
    });
  }

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
    }
  });

  
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulación de envío de formulario
      showToast('¡Mensaje enviado con éxito! Gracias por contactarme.');
      contactForm.reset();
    });
  }

});