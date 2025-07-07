document.addEventListener('DOMContentLoaded', () => {
  // Navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
          navMenu.classList.toggle('open');
          const isOpen = navMenu.classList.contains('open');
          navToggle.textContent = isOpen ? '✕ Close' : '☰ Menu';
          navToggle.setAttribute('aria-expanded', isOpen);
      });

      navMenu.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click', (e) => {
              e.preventDefault();
              const targetId = link.getAttribute('href');
              document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
              navMenu.classList.remove('open');
              navToggle.textContent = '☰ Menu';
              navToggle.setAttribute('aria-expanded', 'false');
          });
      });
  } else {
      console.warn('Navigation toggle or menu not found.');
  }

  // Non-navigation smooth scrolling
  document.querySelectorAll('a[href^="#"]:not(.nav-menu a)').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Project cards
  const projects = [
      {
          title: 'Virtual Gyna App',
          image: 'assets/virtuagyna.jpg',
          description: 'A mobile application for virtual gynecological consultations, built with Kotlin and Firebase.',
          link: 'https://github.com/FridasamKarimi/VirtualGynaApp'
      },
      {
          title: 'EliteFemme',
          image: 'assets/elite.jpeg',
          description: 'A web platform for empowering women through community and resources, built with Node.js and PostgreSQL.',
          link: 'https://github.com/FridasamKarimi/elitefemme'
      },
      {
          title: 'Students Registration',
          image: 'assets/students.jpeg',
          description: 'A web-based system for managing student registrations, built with Python and MySQL.',
          link: 'https://github.com/FridasamKarimi/studregsys'
      }
  ];

  function createProjectCards() {
      const projectsWrapper = document.querySelector('.projects-wrapper');
      if (!projectsWrapper) {
          console.warn('Projects wrapper not found.');
          return;
      }

      projectsWrapper.innerHTML = '';
      projects.forEach(project => {
          const projectCard = document.createElement('section');
          projectCard.classList.add('project-card');
          projectCard.innerHTML = `
              <h3>${project.title}</h3>
              ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">` : ''}
              <p>${project.description}</p>
              <a href="${project.link}" target="_blank" class="project-link">View on GitHub</a>
          `;
          projectsWrapper.appendChild(projectCard);
      });
  }

  // Lab challenge cards
  const labChallenges = [
      {
          title: 'AZ-900: Deploy a Web App with Azure App Services',
          problem: 'Deploy a simple web application to Azure App Services and configure basic networking settings.',
          approach: 'Used the Azure Portal to deploy it to Azure App Services. Configured a custom domain and enabled HTTPS. Tested the deployment by accessing the app via the provided URL.',
          tools: 'Azure Portal, Node.js, Azure CLI',
          lessons: 'Learned how Azure App Services simplifies web app deployment and the importance of securing applications with HTTPS.',
          link: 'https://github.com/FridasamKarimi/AZ900-learn'
      },
      {
          title: 'SC-900: Enable Multi-Factor Authentication (MFA) in Azure AD',
          problem: 'Configure MFA for a user account in Azure AD to enhance security for cloud resource access.',
          approach: 'Accessed Azure AD via the Azure Portal, enabled MFA for a test user, and configured authentication methods using the Microsoft Authenticator app. Tested MFA by logging in and verifying the authentication prompt.',
          tools: 'Azure Portal, Microsoft Authenticator App, Azure AD',
          lessons: 'Understood how MFA strengthens security by adding an extra authentication layer and its role in compliance.',
          link: 'https://github.com/FridasamKarimi/SC900-learn'
      }
  ];

  function createLabCards() {
      const labWrapper = document.querySelector('.lab-wrapper');
      if (!labWrapper) {
          console.warn('Lab wrapper not found.');
          return;
      }

      labWrapper.innerHTML = '';
      labChallenges.forEach(lab => {
          const labCard = document.createElement('section');
          labCard.classList.add('lab-card');
          labCard.innerHTML = `
              <h3>${lab.title}</h3>
              <p><strong>Problem Statement:</strong> ${lab.problem}</p>
              <p><strong>Approach:</strong> ${lab.approach}</p>
              <p><strong>Tools Used:</strong> ${lab.tools}</p>
              <p><strong>Key Lessons Learned:</strong> ${lab.lessons}</p>
              <a href="${lab.link}" target="_blank" class="project-link">View Writeup on GitHub</a>
          `;
          labWrapper.appendChild(labCard);
      });
  }

  createProjectCards();
  createLabCards();
});