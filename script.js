const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');
  const menu = document.getElementById('mobileMenu');

  openBtn.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });
   AOS.init({
    duration: 1000, // animation duration
    once: true      // only animate once
  });
   var mixer = mixitup('#projects-list', {
    selectors: {
      target: '.mix'
    },
    animation: {
      duration: 300
    }
  });

  const filterBtns = document.querySelectorAll('#portfolio-filters li');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
   function unmuteAndPlayVideo() {
    const video = document.getElementById('bgVideo');
    video.muted = false;
    video.play();
  }
function submitToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const text = `Hello, I'm *${name}*.\n\n📧 Email: ${email}\n📝 Subject: ${subject}\n💬 Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/916361285589?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
  }