 <script>
  function setDarkMode(isDark) {
    const body = document.body;
    const button = document.querySelector('.dark-toggle');
    if (isDark) {
      body.classList.add("dark-mode");
      button.innerHTML = '<i class="fas fa-sun rotate"></i> Light Mode';
    } else {
      body.classList.remove("dark-mode");
      button.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
    localStorage.setItem('darkMode', isDark);
  }

  function toggleDarkMode() {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
  }

  window.onload = () => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  };

  function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("hamburgerIcon");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("show");
    icon.classList.toggle("active");
    overlay.classList.toggle("show");

    if (!menu.classList.contains("show")) {
      document.getElementById("searchInput").classList.remove("show");
    }
  }

  function toggleSearch() {
    const search = document.getElementById("searchInput");
    search.classList.toggle("show");
  }
   //logo
   type="application/ld+json">
  {
  "@context": "https://schema.org",
  "@type": "Organization",
  "url": "https://ayoublafriki.com",
  "logo": "https://ayoublafriki.com/favicon.png"
  }

  
  // Search functionality
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#searchInput input");

    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Stars animation
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        d: Math.random() * 0.5 + 0.2
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    for (let s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      s.y += s.d;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
    }
  }

  function animateStars() {
    drawStars();
    requestAnimationFrame(animateStars);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    initStars();
  });

  resizeCanvas();
  initStars();
  animateStars();

  // Scroll animation
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
</script>
