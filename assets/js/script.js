$(document).ready(function () {
  // Menu toggle functionality
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  // Reset navbar on scroll/load
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // Scroll top button visibility
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // Scroll spy for navigation
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // Smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // Contact form submission
  $("#contact-form").submit(function (event) {
    event.preventDefault();

    // Log form data
    console.log("Form Data:", $(this).serialize());

    emailjs.init("IQm4lnqI3FLd7NUQP");

    emailjs
      .sendForm("service_9qbuvfa", "template_nsqhbdr", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Form Submission Failed! Try Again");
        }
      );
  });
});

// Tab title change when page not visible
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Arnab Mukherjee";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
});

// Typed.js effect
let typed = new Typed(".typing-text", {
  strings: [
    "frontend development",
    "backend development",
    "web designing",
    "android development",
    "web development",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// Fetch data from JSON files
async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

// Display skills in the skills section
function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}


const projectsData = [
  [
    {
      id: "WhisperWave",
      name: "WhisperWave",
      image: "/assets/images/projects/WhisperWave/image.png",
      date: "2024-03-01",
      categories: ["mern", "featured"],
      description:
        "Anonymous messaging platform for users to send messages securely.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      detailedDescription:
        "A full-stack messaging solution implementing secure anonymous communication.",
      detailedTechnologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "NextJS",
        "Zod",
        "Bcrypt",
        "JWT Authentication",
      ],
      features: [
        "User authentication and profile management",
        "Product catalog with categories and search",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order history and tracking",
        "Admin dashboard for product and order management",
      ],
      challenges:
        "The biggest challenge was implementing a secure payment system while ensuring optimal performance. Used Redis for caching frequently accessed product data and implemented rate limiting to prevent API abuse.",
      images: [
        "/assets/images/projects/WhisperWave/image1.png",
        "/assets/images/projects/WhisperWave/image2.png",
      ],
      liveLink: "https://whisperwave.vercel.app/",
      codeLink: "https://github.com/arnab-git-404/Whisperwave",
    },
    {
      id: "PassVault",
      name: "PassVault",
      image: "/assets/images/projects/PassVault/image.png",
      date: "2024-02-15",
      categories: ["react"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "Redis",
        "FastApi",
        "MongoDB",
        "JWT Authentication",
        "Tailwind Css"
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "/assets/images/projects/PassVault/image1.png",
        "/assets/images/projects/PassVault/image2.png",
      ],
      liveLink: "https://pass-vault-frontend.vercel.app/",
      codeLink: "https://github.com/arnab-git-404/PassVault",
    },
    {
      id: "DegreeNFT",
      name: "DegreeNFT",
      image: "/assets/images/projects/DegreeNFT/image.png",
      date: "2025-03-14",
      categories: ["blockchain"],
      description:
        "Dummay : RESTful API for task management with authentication, task CRUD operations, and notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      detailedDescription:
        "Dummy DATA : A RESTful API for task management applications with user authentication, task creation, assignment, updates, and notifications. Includes comprehensive documentation and testing.",
      detailedTechnologies: [
        "Solana Blockchain",
        "Metaplex",
        "Phantom Wallet",
        "React",
        "Tailwind Css",

      ],
      features: [
        "Under Development",        
      ],
      challenges:
        "Dummy: Designing a scalable system architecture was challenging. Implemented database indexing and pagination for optimal performance even with large datasets.",
      images: [
        "/assets/images/projects/DegreeNFT/image1.png",
        "/assets/images/projects/DegreeNFT/image2.png",
      ],
      liveLink: "https://degree-nft.vercel.app/",
      codeLink: "https://github.com/arnab-git-404/DegreeNFT",
    },
    
    {
      id: "PowerPay",
      name: "PowerPay",
      image: "/assets/images/projects/PowerPay/image.png",
      date: "2024-01-10",
      categories: ["node"],
      description:
        "RESTful API for task management with authentication, task CRUD operations, and notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      detailedDescription:
        "A RESTful API for task management applications with user authentication, task creation, assignment, updates, and notifications. Includes comprehensive documentation and testing.",
      detailedTechnologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "FastApi",
        "Tailwind Css",

      ],
      features: [
        "User authentication and authorization",
        "Task CRUD operations",
        "Task assignment and status tracking",
        "Due date notifications",
        "User role management",
        "API documentation with Swagger",
        "Comprehensive test coverage",
      ],
      challenges:
        "Designing a scalable system architecture was challenging. Implemented database indexing and pagination for optimal performance even with large datasets.",
      images: [
        "/assets/images/projects/PowerPay/image1.jpg",
        "/assets/images/projects/PowerPay/image2.jpg",
      ],
      liveLink: "#",
      codeLink: "https://github.com/arnab-git-404/PowerPay",
    },
    {
      id: "Portfolio",
      name: "Portfolio",
      image: "/assets/images/projects/Portfolio/image.png",
      date: "2024-02-15",
      categories: ["basicweb"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "HTML",
        "CSS",
        "JavaScript",

      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "/assets/images/projects/Portfolio/image1.png",
        "/assets/images/projects/Portfolio/image2.png",
      ],
      liveLink: "https://arnab-git-404.netlify.app/",
      codeLink: "https://github.com/arnab-git-404/Portfolio-Website",
    },
  ],
  [
    {
      id: "WeatherApp",
      name: "Weather App",
      image: "/assets/images/projects/WeatherApp/image.png",
      date: "2024-02-15",
      categories: ["react"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "Mapbox API",
        "Geolocation API",
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "/assets/images/projects/WeatherApp/image1.jpg",
        "/assets/images/projects/WeatherApp/image2.jpg",
      ],
      liveLink: "https://arnab-git-404.github.io/Weather-App/",
      codeLink: "https://github.com/arnab-git-404/Weather-App",
    },
    {
      id: "weather",
      name: "Weather Dashboard",
      image: "/assets/images/projects/android.png",
      date: "2024-02-15",
      categories: ["react"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "Mapbox API",
        "Geolocation API",
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "assets/images/projects/weather1.jpg",
        "assets/images/projects/weather2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: "taskapi",
      name: "Razorpay Payment Gateway Clone",
      image: "/assets/images/projects/android.png",
      date: "2024-01-10",
      categories: ["node"],
      description:
        "RESTful API for task management with authentication, task CRUD operations, and notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      detailedDescription:
        "A RESTful API for task management applications with user authentication, task creation, assignment, updates, and notifications. Includes comprehensive documentation and testing.",
      detailedTechnologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Swagger",
        "Jest",
      ],
      features: [
        "User authentication and authorization",
        "Task CRUD operations",
        "Task assignment and status tracking",
        "Due date notifications",
        "User role management",
        "API documentation with Swagger",
        "Comprehensive test coverage",
      ],
      challenges:
        "Designing a scalable system architecture was challenging. Implemented database indexing and pagination for optimal performance even with large datasets.",
      images: [
        "assets/images/projects/taskapi1.jpg",
        "assets/images/projects/taskapi2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: "weather",
      name: "Weather Dashboard",
      image: "/assets/images/projects/android.png",
      date: "2024-02-15",
      categories: ["react"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "Mapbox API",
        "Geolocation API",
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "assets/images/projects/weather1.jpg",
        "assets/images/projects/weather2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: "weather",
      name: "Weather Dashboard",
      image: "/assets/images/projects/android.png",
      date: "2024-02-15",
      categories: ["basicweb"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "Mapbox API",
        "Geolocation API",
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "assets/images/projects/weather1.jpg",
        "assets/images/projects/weather2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
  ],
  [
    {
      id: "ecommerce",
      name: "E-Commerce Platform",
      image: "/assets/images/projects/android.png",
      date: "2024-03-01",
      categories: ["mern", "featured"],
      description:
        "Full-stack e-commerce platform with product management, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      detailedDescription:
        "A full-stack e-commerce solution with product catalog, user authentication, shopping cart, order management, and payment processing. Features responsive design and admin dashboard for inventory management.",
      detailedTechnologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe API",
        "JWT Authentication",
      ],
      features: [
        "User authentication and profile management",
        "Product catalog with categories and search",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Order history and tracking",
        "Admin dashboard for product and order management",
      ],
      challenges:
        "The biggest challenge was implementing a secure payment system while ensuring optimal performance. Used Redis for caching frequently accessed product data and implemented rate limiting to prevent API abuse.",
      images: [
        "assets/images/projects/ecommerce1.jpg",
        "assets/images/projects/ecommerce2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: "weather",
      name: "Weather Dashboard",
      image: "/assets/images/projects/android.png",
      date: "2024-02-15",
      categories: ["react"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "Mapbox API",
        "Geolocation API",
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "assets/images/projects/weather1.jpg",
        "assets/images/projects/weather2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: "taskapi",
      name: "Razorpay Payment Gateway Clone",
      image: "/assets/images/projects/android.png",
      date: "2024-01-10",
      categories: ["node"],
      description:
        "RESTful API for task management with authentication, task CRUD operations, and notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      detailedDescription:
        "A RESTful API for task management applications with user authentication, task creation, assignment, updates, and notifications. Includes comprehensive documentation and testing.",
      detailedTechnologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Swagger",
        "Jest",
      ],
      features: [
        "User authentication and authorization",
        "Task CRUD operations",
        "Task assignment and status tracking",
        "Due date notifications",
        "User role management",
        "API documentation with Swagger",
        "Comprehensive test coverage",
      ],
      challenges:
        "Designing a scalable system architecture was challenging. Implemented database indexing and pagination for optimal performance even with large datasets.",
      images: [
        "assets/images/projects/taskapi1.jpg",
        "assets/images/projects/taskapi2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: "weather",
      name: "Weather Dashboard",
      image: "/assets/images/projects/android.png",
      date: "2024-02-15",
      categories: ["react"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "Mapbox API",
        "Geolocation API",
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "assets/images/projects/weather1.jpg",
        "assets/images/projects/weather2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: "weather",
      name: "Weather Dashboard",
      image: "/assets/images/projects/android.png",
      date: "2024-02-15",
      categories: ["basicweb"],
      description:
        "Interactive weather app showing forecasts, historical data, and weather maps using external APIs.",
      technologies: ["React", "Weather API", "Chart.js"],
      detailedDescription:
        "An interactive weather application that provides current conditions, forecasts, and historical weather data for any location worldwide. Features interactive maps and data visualization.",
      detailedTechnologies: [
        "React",
        "OpenWeather API",
        "Chart.js",
        "Mapbox API",
        "Geolocation API",
      ],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
        "Working with multiple APIs and handling rate limits was challenging. Implemented a caching strategy to minimize API calls and improve performance.",
      images: [
        "assets/images/projects/weather1.jpg",
        "assets/images/projects/weather2.jpg",
      ],
      liveLink: "#",
      codeLink: "#",
    },
  ]
];




// Project pagination and display system
document.addEventListener("DOMContentLoaded", function () {
  // Initialize variables
  let currentPage = 0;
  let totalPages = projectsData.length;

  // Initial display
  displayProjects(currentPage);
  initPagination();

  // Function to display projects for a specific page
  function displayProjects(page) {
    const projectContainer = document.querySelector("#work .box-container");
    projectContainer.innerHTML = "";
    
    if (projectsData[page]) {
      projectsData[page].forEach((project) => {
        const projectBox = document.createElement("div");
        projectBox.className = "box tilt";
        projectBox.innerHTML = `
          <img draggable="false" src="${project.image}" alt="${project.name}" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.description}</p>
              <div class="btns">
                <a href="${project.liveLink}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                <button class="btn details-btn" data-project="${project.id}"><i class="fas fa-info-circle"></i> Details</button>
              </div>
            </div>
          </div>
        `;
        projectContainer.appendChild(projectBox);
      });
    }

    // Apply scroll reveal animation to newly added projects
    srtop.reveal("#work .box", { interval: 200 });
  }

  // Initialize pagination controls
  function initPagination() {
    // Create pagination container if it doesn't exist
    if (!document.querySelector(".pagination")) {
      const paginationContainer = document.createElement("div");
      paginationContainer.className = "pagination";
      paginationContainer.innerHTML = `
        <a href="#work" id="prev-page" class="page-btn ${currentPage === 0 ? 'disabled' : ''}"><i class="fas fa-chevron-left"></i></a>
        <div id="pagination-numbers"></div>
        <a href="#work" id="next-page" class="page-btn ${currentPage === totalPages - 1 ? 'disabled' : ''}"><i class="fas fa-chevron-right"></i></a>
      `;
      
      // Append pagination after the box container
      const workSection = document.querySelector("#work");
      const boxContainer = document.querySelector("#work .box-container");
      workSection.insertBefore(paginationContainer, boxContainer.nextSibling);
    }
    
    // Generate page numbers
    generatePaginationNumbers();
    
    // Add event listeners for prev/next buttons
    document.getElementById("prev-page").addEventListener("click", function(e) {
      e.preventDefault();
      if (currentPage > 0) {
        navigateToPage(currentPage - 1);
      }
    });
    
    document.getElementById("next-page").addEventListener("click", function(e) {
      e.preventDefault();
      if (currentPage < totalPages - 1) {
        navigateToPage(currentPage + 1);
      }
    });
  }

  // Generate pagination number buttons
  function generatePaginationNumbers() {
    const paginationNumbers = document.getElementById("pagination-numbers");
    paginationNumbers.innerHTML = "";
    
    for (let i = 0; i < totalPages; i++) {
      const pageNumber = document.createElement("a");
      pageNumber.href = "#work";
      pageNumber.className = `page-number ${i === currentPage ? "active" : ""}`;
      pageNumber.textContent = i + 1;
      pageNumber.setAttribute("data-page", i);
      pageNumber.addEventListener("click", function(e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute("data-page"));
        navigateToPage(page);
      });
      paginationNumbers.appendChild(pageNumber);
    }
  }

  // Navigate to a specific page
  function navigateToPage(page) {
    currentPage = page;
    displayProjects(currentPage);
    updateActivePage();
    updatePaginationButtons();
  }

  // Update active page in pagination
  function updateActivePage() {
    const pageNumbers = document.querySelectorAll(".page-number");
    pageNumbers.forEach((num) => {
      const page = parseInt(num.getAttribute("data-page"));
      if (page === currentPage) {
        num.classList.add("active");
      } else {
        num.classList.remove("active");
      }
    });
  }

  // Update prev/next buttons state
  function updatePaginationButtons() {
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");

    if (currentPage === 0) {
      prevPageBtn.classList.add("disabled");
    } else {
      prevPageBtn.classList.remove("disabled");
    }

    if (currentPage === totalPages - 1) {
      nextPageBtn.classList.add("disabled");
    } else {
      nextPageBtn.classList.remove("disabled");
    }
  }

  // Modal functionality for project details
  const modal = document.getElementById("project-modal");
  if (modal) {
    const closeBtn = document.querySelector(".close-modal");

    // Event delegation for modal buttons
    $(document).on("click", ".details-btn", function() {
      const projectId = $(this).data("project");
      
      // Find the project in all pages of projectsData
      let foundProject = null;
      for (let page = 0; page < projectsData.length; page++) {
        foundProject = projectsData[page].find(p => p.id === projectId);
        if (foundProject) break;
      }
      
      if (foundProject) {
        openProjectModal(foundProject);
      }
    });

    // Close modal
    if (closeBtn) {
      closeBtn.onclick = function() {
        modal.style.display = "none";
      };
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  // Function to open project modal with details
  function openProjectModal(project) {
    const modal = document.getElementById("project-modal");
    if (!modal) return;

    // Set modal title
    const titleElement = document.getElementById("modal-project-title");
    if (titleElement) titleElement.textContent = project.name;

    // Set project description
    const descriptionElement = document.getElementById("modal-project-description");
    if (descriptionElement) descriptionElement.textContent = project.detailedDescription;

    // Add technologies
    const techContainer = document.getElementById("modal-project-tech");
    if (techContainer) {
      techContainer.innerHTML = "";
      project.detailedTechnologies.forEach((tech) => {
        const span = document.createElement("span");
        span.textContent = tech;
        techContainer.appendChild(span);
      });
    }

    // Add features
    const featuresList = document.getElementById("modal-project-features");
    if (featuresList) {
      featuresList.innerHTML = "";
      project.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        featuresList.appendChild(li);
      });
    }

    // Add challenges
    const challengesElement = document.getElementById("modal-project-challenges");
    if (challengesElement) challengesElement.textContent = project.challenges;

    // Add images to gallery
    const gallery = document.querySelector(".project-gallery");
    if (gallery) {
      gallery.innerHTML = "";
      project.images.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.src = img;
        imgEl.alt = project.name;
        gallery.appendChild(imgEl);
      });
    }

    // Set links
    const liveLink = document.getElementById("modal-live-link");
    if (liveLink) liveLink.href = project.liveLink;
    
    const codeLink = document.getElementById("modal-code-link");
    if (codeLink) codeLink.href = project.codeLink;

    // Show modal
    modal.style.display = "block";
  }
});

// Load data when page loads
fetchData().then((data) => {
  showSkills(data);
});


// ScrollReveal Animations
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

// Home section animations
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });
srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

// About section animations
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });

// Skills section animations
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });

// Education section animations
srtop.reveal(".education .box", { interval: 200 });

// Projects section animations
srtop.reveal(".work .box", { interval: 200 });

// Experience section animations
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

// Contact section animations
srtop.reveal(".contact .container", { delay: 400 });
srtop.reveal(".contact .container .form-group", { delay: 400 });
