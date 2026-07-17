// garder même couleur au scroll (pas de changement)
window.addEventListener('scroll', () => {
  document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 50);
});

// éviter que le contenu passe sous la navbar fixed
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) document.body.style.paddingTop = navbar.offsetHeight + 'px';
});

  // Effet navbar au scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Égaliser les hauteurs
  function equalizeHeights(selector) {
    const elements = document.querySelectorAll(selector);
    let max = 0;
    elements.forEach(el => {
      el.style.height = "auto";
      if (el.offsetHeight > max) max = el.offsetHeight;
    });
    elements.forEach(el => el.style.height = max + "px");
  }

  window.addEventListener('load', () => {
    equalizeHeights('.news-card');
    equalizeHeights('.inscription .card');
  });
  window.addEventListener('resize', () => {
    equalizeHeights('.news-card');
    equalizeHeights('.inscription .card');
  });


document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight;
  document.body.style.paddingTop = navbarHeight + 'px';
});

(function(){
  const search = document.getElementById('progSearch');
  const filter = document.getElementById('progFilter');
  const clearBtn = document.getElementById('clearSearch');
  const items = Array.from(document.querySelectorAll('.program-item'));
  const badge = document.getElementById('countBadge');

  function apply(){
    const q = (search.value || "").toLowerCase().trim();
    const f = filter.value;

    let shown = 0;
    items.forEach(el => {
      const title = (el.dataset.title || "").toLowerCase();
      const status = el.dataset.status;

      const matchQ = !q || title.includes(q);
      const matchF = (f === "all") || (f === status);

      const ok = matchQ && matchF;
      el.style.display = ok ? "" : "none";
      if(ok) shown++;
    });

    badge.textContent = shown + (shown > 1 ? " programmes" : " programme");
  }

  clearBtn.addEventListener('click', () => { search.value=""; apply(); });
  search.addEventListener('input', apply);
  filter.addEventListener('change', apply);

  apply();
})();