// Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.textContent = navMenu.classList.contains('open') ? '✕ Close' : '☰ Menu';
    });
  
    // Close menu when a link is clicked (for mobile)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.textContent = '☰ Menu';
      });
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamic project cards (example data)
  const projects = [
    {
      title: 'Virtual Gyna App',
      image: 'assets/virtuagyna.jpg',
      description: 'Virtual Gyna App',
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'EliteFemme',
      description: 'Another brief description.',
      link: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Project 3',
      description: 'Yet another cool project.',
      link: 'https://github.com/yourusername/project3'
    }
  ];
  
  // Function to create project cards dynamically
  function createProjectCards() {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    projectsWrapper.innerHTML = ''; // Clear existing content
  
    projects.forEach(project => {
      const projectCard = document.createElement('section');
      projectCard.classList.add('project-card');
  
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image">` : ''}
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="project-link">View on GitHub</a>
      `;
  
      projectsWrapper.appendChild(projectCard);
    });
  }
  
  // Call the function to render projects on page load
  createProjectCards();