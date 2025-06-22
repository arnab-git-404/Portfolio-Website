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
      id: "DegreeNFT",
      name: "DegreeNFT",
      image: "/assets/images/projects/DegreeNFT/image.png",
      date: "2025-03-14",
      categories: ["blockchain", "MERN"],
      description:
        "DegreeNFT is a platform that turns academic certificates into NFTs on the Solana blockchain making them secure, On Chain verifiable",
      detailedDescription:
        "DegreeNFT is a decentralized application that enables institutions to issue academic certificates as NFTs on the Solana blockchain. It uses the Metaplex Token Metadata standard and IPFS for decentralized storage, ensuring each certificate is tamper-proof and publicly verifiable. The platform features an automated NFT minting pipeline with Umi SDK integration and metadata account linkage. Built with React, TailwindCSS, and a Node.js backend, it offers real-time wallet connectivity and a seamless minting experience.",
      detailedTechnologies: [
        "Node.js",
        "Express.js",
        "Metaplex Umi",
        "IPFS",
        "MongoDB",
        "Solana Blockchain",
        "React",
        "Tailwind CSS",
      ],
      features: [
        "Real Time Wallet connectivity (e.g., Phantom Wallet, Metamask Wallet)",
        "Metaplex Umi NFT Minting",
        "Decentralized NFT Metadata",
        "On-Chain Certificates Validation",
        "Tamper Proof Certificates",
        "Complete Responsive Design",
      ],
      challenges: [
        "<strong> Designing a Scalable System </strong> : Designing a scalable system architecture was challenging. Implemented database indexing and pagination for optimal performance even with large datasets.",
        "<strong> Automated NFT Minting Pipeline </strong> : Implemented an automated pipeline for minting NFTs using the Metaplex Umi SDK, ensuring efficient and error-free certificate issuance.",
        "<strong> Ensuring Decentralization </strong> : Ensuring the decentralization of certificate metadata and storage was crucial. Used IPFS for storing metadata and images, ensuring that certificates remain accessible even if the original server goes down.",
        "<strong> Handling Bulk Data Efficiently </strong> : Uploading student records one by one proved inefficient. To solve this, I developed a batch upload system that supports uploading up to 200 student entries at once. I also created a downloadable annexure template for colleges to prepare their data in a compatible format, reducing errors and setup time.",
        "<strong> Building a Sustainable Earning Model </strong> : Another key challenge was integrating a built-in revenue model. To address this, I designed a transaction-based fee system where students pay a small fee during the minting process. This fee is automatically routed to the official DegreeNFT Solana wallet, removing the need for separate payments and streamlining the user experience. This model supports long-term sustainability if adopted by official bodies.",
      ],

      images: [
        "/assets/images/projects/DegreeNFT/image1.png",
        "/assets/images/projects/DegreeNFT/image2.png",
      ],
      liveLink: "https://degree-nft.vercel.app/",
      codeLink: "https://github.com/arnab-git-404/DegreeNFT",
    },
    {
      id: "PassVault",
      name: "PassVault",
      image: "/assets/images/projects/PassVault/image.png",
      date: "2024-02-15",
      categories: ["react", "full-stack"],
      description:
        "PassVault is a zero-knowledge password manager that keeps your credentials encrypted and fully private.",
      technologies: ["React"],
      detailedDescription:
        "PassVault is a secure, zero-knowledge password management system built with React, TailwindCSS, FastAPI, and MongoDB. It uses AES-GCM encryption and PBKDF2-based key derivation to ensure that all sensitive data is encrypted client-side—meaning no passwords or master keys are ever stored or transmitted in plain form. Redis is used to manage session-bound workflows, enhancing both performance and security. With its clean UI and strong cryptographic foundations, PassVault gives users complete control over their credentials without compromising privacy.",
      detailedTechnologies: [
        "React",
        "MongoDB",
        "Redis",
        "AES-GCM Encryption",
        "FastApi",
        "MongoDB",
        "JWT Authentication",
        "Tailwind Css",
      ],
      features: [
        "Zero-knowledge encryption for all credentials",
        "Client-side encryption using AES-GCM",
        "PBKDF2-based key derivation for master password",
        "Session management with Redis",
        "User-friendly interface with TailwindCSS",
        "Instant auto-lock on page refresh or tab close",
      ],
      challenges: [
        "<strong>Achieving True Zero-Knowledge Security</strong> : The core challenge was building a system where even the server couldn't access or decrypt user data. I tackled this by implementing AES-GCM encryption entirely on the client side, combined with PBKDF2-based key derivation to generate encryption keys from user passwords. This ensured that no sensitive data—neither credentials nor master keys—ever touched the backend in an unencrypted state.",
        '<strong>Encrypting only passwords wasn’t enough—if the platform names (like "Facebook" or "Gmail") were stored in plain text, a database breach could still expose sensitive user activity and patterns.</strong> : To prevent this, I encrypted both the password and the associated metadata (like platform names) on the client side. So even if the database is compromised, attackers see only encrypted data with no clue about what service it belongs to—ensuring full zero-knowledge privacy.',
        "<strong>Maintaining security during unexpected events-like power failures or page refreshes—was critical. Any such event could risk leaving sensitive data temporarily exposed.</strong> : I implemented an instant auto-lock mechanism that clears all decrypted data and active sessions immediately if the page refreshes, the tab is closed, or a power failure occurs. This ensures that passwords are never left exposed in memory or the browser, maintaining strict zero-knowledge guarantees at all times.",
      ],
      images: [
        "/assets/images/projects/PassVault/image1.png",
        "/assets/images/projects/PassVault/image2.png",
      ],
      liveLink: "https://pass-vault-frontend.vercel.app/",
      codeLink: "https://github.com/arnab-git-404/PassVault",
    },
    {
      id: "WhisperWave",
      name: "WhisperWave",
      image: "/assets/images/projects/WhisperWave/image.png",
      date: "2024-03-01",
      categories: ["MERN", "Full-Stack"],
      description:
        "Anonymous messaging platform for users to send messages securely.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      detailedDescription:
        "A full-stack messaging solution implementing secure anonymous communication.",
      detailedTechnologies: [
        "React",
       "Gemini API",
        "MongoDB",
        "Next.js",
        "Zod",
        "Bcrypt",
        "Express.js",
        "JWT Authentication",
        "Tailwind CSS",
      ],
      features: [
        "Zod Schema Validation for secure data handling",
        "JWT Authentication for user security",
        "Gemini API for AI-powered message generation",
        "Bcrypt for password hashing",
        "Next.js for server-side rendering and performance",
        "MongoDB for scalable data storage",
      ],
      challenges:
        [
          "Implementing secure authentication and data validation was challenging. Used Zod for schema validation and Bcrypt for password hashing to ensure data integrity and security.",
          "Gemini API for AI-powered message generation required careful handling of API responses and error management. Implemented robust error handling to ensure a smooth user experience.",

        ],
      images: [
        "/assets/images/projects/WhisperWave/image1.png",
        "/assets/images/projects/WhisperWave/image2.png",
      ],
      liveLink: "https://whisperwave.vercel.app/",
      codeLink: "https://github.com/arnab-git-404/Whisperwave",
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
      detailedTechnologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Current weather conditions and 7-day forecast",
        "Historical weather data with interactive charts",
        "Location-based weather using geolocation",
        "Interactive weather maps",
        "Save favorite locations",
        "Weather alerts and notifications",
      ],
      challenges:
      ["",],
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
      id: "SPL_Token_Creator",
      name: "SPL Token Creator",
      image: "/assets/images/projects/SPL_Token_Creator/image.png",
      date: "2025-03-14",
      categories: ["blockchain", "MERN"],
      description:
        "SPL Token Creator is a fully frontend-based tool that allows users to create, mint, transfer, and burn SPL tokens directly on the Solana blockchain with real-time wallet connectivity and built-in authority checks.",
      detailedDescription:
        "SPL Token Creator is a decentralized, client-side web application built on the Solana blockchain using the SPL Token Program. It enables users to create new SPL tokens, mint additional tokens (restricted to the original creator via authority validation), transfer tokens between wallets, and burn tokens — all without any backend infrastructure. Built with React and TailwindCSS, the app leverages real-time wallet connectivity (e.g., Phantom) to interact directly with the Solana network, ensuring fast, secure, and trustless operations. The interface is clean, responsive, and designed to offer a smooth on-chain token management experience.",
      detailedTechnologies: [
        "React.js",
        "Solana Blockchain",
        "SPL Token Program",
        "Tailwind CSS",
        "Solana Wallet Adapter",
      ],
      features: [
        "Real-time Wallet Connectivity (Phantom, Solflare, etc.)",
        "SPL Token Creation via Token Program",
        "Minting with Authority Validation (Only creator can mint)",
        "Token Transfer Between Wallets",
        "Token Burn Functionality",
        "Client-Side Only – No Backend Required",
        "Responsive UI with TailwindCSS",
      ],
      challenges: [
        "<strong>Real-Time Wallet Interaction</strong> : Handling live wallet connectivity, transaction signing, and updates in real time using the Solana Wallet Adapter made the app dynamic but introduced edge-case handling for rejected or dropped transactions.",
        "<strong>Authority-Restricted Minting</strong> : Implementing mint authority checks purely on-chain and enforcing that only the creator can mint more tokens was a key security feature. This ensured trustless control over token issuance.",
        "<strong>Token Lifecycle Management</strong> : Enabling token creation, minting, transferring, and burning all in one frontend interface involved complex coordination with the SPL Token Program and precise wallet transaction handling.",
      ],

      images: [
        "/assets/images/projects/SPL_Token_Creator/image1.png",
        "/assets/images/projects/SPL_Token_Creator/image2.png",
      ],
      liveLink: "https://spl-token-creator-one.vercel.app/",
      codeLink: "https://github.com/arnab-git-404/SPL-Token-Creator",
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
  ],
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
        <a href="#work" id="prev-page" class="page-btn ${
          currentPage === 0 ? "disabled" : ""
        }"><i class="fas fa-chevron-left"></i></a>
        <div id="pagination-numbers"></div>
        <a href="#work" id="next-page" class="page-btn ${
          currentPage === totalPages - 1 ? "disabled" : ""
        }"><i class="fas fa-chevron-right"></i></a>
      `;

      // Append pagination after the box container
      const workSection = document.querySelector("#work");
      const boxContainer = document.querySelector("#work .box-container");
      workSection.insertBefore(paginationContainer, boxContainer.nextSibling);
    }

    // Generate page numbers
    generatePaginationNumbers();

    // Add event listeners for prev/next buttons
    document
      .getElementById("prev-page")
      .addEventListener("click", function (e) {
        e.preventDefault();
        if (currentPage > 0) {
          navigateToPage(currentPage - 1);
        }
      });

    document
      .getElementById("next-page")
      .addEventListener("click", function (e) {
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
      pageNumber.addEventListener("click", function (e) {
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
    $(document).on("click", ".details-btn", function () {
      const projectId = $(this).data("project");

      // Find the project in all pages of projectsData
      let foundProject = null;
      for (let page = 0; page < projectsData.length; page++) {
        foundProject = projectsData[page].find((p) => p.id === projectId);
        if (foundProject) break;
      }

      if (foundProject) {
        openProjectModal(foundProject);
      }
    });

    // Close modal
    if (closeBtn) {
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };
    }

    // Close modal when clicking outside
    window.onclick = function (event) {
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
    const descriptionElement = document.getElementById(
      "modal-project-description"
    );
    if (descriptionElement)
      descriptionElement.textContent = project.detailedDescription;

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

    const challengesList = document.getElementById("modal-project-challenges");
    if (challengesList) {
      challengesList.innerHTML = "";
      project.challenges.forEach((challenge) => {
        const li = document.createElement("li");
        li.innerHTML = challenge;
        challengesList.appendChild(li);
      });
    }

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
