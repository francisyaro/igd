<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>IGD — Accueil</title>
  <style>
    :root{
      --pink:#e54b90;          /* barre menu */
      --pink-dark:#c93b79;
      --ink:#151515;           /* footer / blocs sombres */
      --ink-2:#232323;
      --red:#d84c3f;           /* bloc PYPA */
      --text:#ffffff;
      --muted:rgba(255,255,255,.72);
      --container:1120px;
    }

    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: Arial, Helvetica, sans-serif;
      color:#111;
      background:#fff;
    }
    a{color:inherit; text-decoration:none}
    img{max-width:100%; display:block}

    /* Top bar */
    .topbar{
      border-bottom:1px solid #e9e9e9;
      background:#fff;
    }
    .topbar-inner{
      max-width:var(--container);
      margin:0 auto;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:10px 14px;
      gap:16px;
    }
    .brand{
      display:flex; align-items:center; gap:10px;
      min-width:180px;
    }
    .brand img{
      width:100px; height:auto;
    }


    nav{
      flex:1;
      display:flex;
      justify-content:center;
    }
    .menu{
      display:flex;
      gap:0;
      background:var(--pink);
      border-radius:2px;
      overflow:hidden;
      box-shadow:0 1px 0 rgba(0,0,0,.08);
    }
    .menu a{
      display:block;
      padding:12px 14px;
      font-size:12px;
      letter-spacing:.6px;
      text-transform:uppercase;
      color:#fff;
      border-right:1px solid rgba(255,255,255,.25);
      white-space:nowrap;
    }
    .menu a:last-child{border-right:0}
    .menu a:hover{background:var(--pink-dark)}
    .menu a.active{background:rgba(0,0,0,.18)}

    .social{
      display:flex; align-items:center; gap:10px;
      color:#666;
      font-size:14px;
      min-width:120px;
      justify-content:flex-end;
    }
    .social a{
      width:18px; height:18px; display:inline-grid; place-items:center;
      border-radius:2px;
      opacity:.85;
    }
    .social a:hover{opacity:1}

    /* Hero */
    .hero{
      position:relative;
      height:min(560px, 70vh);
      background:#000;
      overflow:hidden;
    }
    .hero img{
      width:100%;
      height:100%;
      object-fit:cover;
      opacity:.92;
      transform:scale(1.02);
    }
    .hero-overlay{
      position:absolute;
      inset:0;
      background:linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.12) 55%, rgba(0,0,0,0));
      pointer-events:none;
    }
    .hero-caption{
      position:absolute;
      left:18px;
      bottom:20px;
      color:#fff;
      max-width:520px;
      text-shadow:0 2px 10px rgba(0,0,0,.55);
    }
    .hero-caption .kicker{
      font-weight:800;
      font-size:18px;
      letter-spacing:.5px;
      margin-bottom:4px;
    }
    .hero-caption .sub{
      font-size:12px;
      opacity:.92;
    }

    /* Program blocks row */
    .programs{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap:0;
    }
    .program{
      padding:26px 22px;
      color:#fff;
      min-height:145px;
      display:flex;
      gap:14px;
      align-items:flex-start;
    }
    .program .icon{
      width:44px; height:44px;
      border:1px solid rgba(255,255,255,.35);
      border-radius:999px;
      display:grid; place-items:center;
      flex:0 0 auto;
      margin-top:2px;
      opacity:.95;
    }
    .program h3{
      margin:0 0 6px 0;
      font-size:16px;
      letter-spacing:.4px;
    }
    .program p{
      margin:0;
      font-size:12px;
      color:var(--muted);
      line-height:1.35;
    }
    .program.red{background:var(--red)}
    .program.dark{background:var(--ink-2)}
    .program.darker{background:var(--ink)}

    /* Thumbnails grid */
    .thumbs{
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap:0;
    }
    .thumb{
      position:relative;
      aspect-ratio: 16 / 9;
      overflow:hidden;
      background:#111;
    }
    .thumb img{
      width:100%;
      height:100%;
      object-fit:cover;
      filter:saturate(1.05);
      transform:scale(1.03);
    }
    .thumb:after{
      content:"";
      position:absolute; inset:0;
      background:linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.1));
    }
    .thumb .label{
      position:absolute;
      left:14px;
      bottom:12px;
      right:14px;
      z-index:2;
      color:#fff;
      font-weight:800;
      font-size:14px;
      letter-spacing:.4px;
      text-transform:uppercase;
      text-shadow:0 2px 10px rgba(0,0,0,.5);
    }

    /* Partners */
    .partners-wrap{
      padding:26px 0 36px;
      background:#fff;
    }
    .partners-inner{
      max-width:var(--container);
      margin:0 auto;
      padding:0 14px;
    }
    .partners-title{
      font-size:12px;
      letter-spacing:.8px;
      text-transform:uppercase;
      font-weight:800;
      color:#111;
      margin:0 0 12px 0;
    }
    .partners-card{
      border:1px solid #e9e9e9;
      border-radius:2px;
      overflow:hidden;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      padding:14px;
    }
    .partners-logos{
      display:flex;
      gap:22px;
      align-items:center;
      overflow:auto;
      scroll-snap-type:x mandatory;
      -webkit-overflow-scrolling:touch;
      flex:1;
    }
    .partners-logos img{
      height:54px;
      width:auto;
      scroll-snap-align:start;
    }
    .partners-controls{
      display:flex; gap:8px;
    }
    .btn{
      border:1px solid #dcdcdc;
      background:#fff;
      width:30px; height:30px;
      border-radius:2px;
      cursor:pointer;
      display:grid; place-items:center;
      color:#444;
    }
    .btn:hover{background:#f6f6f6}

    /* Footer */
    footer{
      background:var(--ink);
      color:#fff;
      border-top:1px solid rgba(255,255,255,.06);
    }
    .footer-inner{
      max-width:var(--container);
      margin:0 auto;
      padding:24px 14px 14px;
    }
    .footer-cols{
      display:grid;
      grid-template-columns: 1.2fr 1fr 1fr;
      gap:22px;
      padding-bottom:18px;
      border-bottom:1px solid rgba(255,255,255,.08);
    }
    .footer-col h4{
      margin:0 0 10px 0;
      font-size:12px;
      letter-spacing:.8px;
      text-transform:uppercase;
      opacity:.9;
      padding-bottom:8px;
      border-bottom:1px solid rgba(255,255,255,.12);
    }
    .footer-col p{
      margin:0;
      font-size:12px;
      line-height:1.5;
      color:rgba(255,255,255,.72);
    }
    .subscribe{
      display:flex; gap:8px;
      margin-top:10px;
    }
    .subscribe input{
      flex:1;
      height:30px;
      border-radius:2px;
      border:1px solid rgba(255,255,255,.18);
      background:rgba(255,255,255,.06);
      color:#fff;
      padding:0 10px;
      outline:none;
      font-size:12px;
    }
    .subscribe button{
      height:30px;
      border-radius:2px;
      border:1px solid rgba(255,255,255,.18);
      background:rgba(255,255,255,.10);
      color:#fff;
      cursor:pointer;
      padding:0 10px;
      font-size:12px;
    }
    .subscribe button:hover{background:rgba(255,255,255,.16)}

    .footer-bottom{
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:12px;
      padding:12px 0 16px;
      color:rgba(255,255,255,.55);
      font-size:11px;
    }
    .footer-bottom a{color:rgba(255,255,255,.65)}
    .footer-bottom a:hover{color:#fff}

    /* Thin accent line like in screenshot */
    .accent-line{
      height:2px;
      background:var(--pink);
      opacity:.75;
    }

    /* Responsive */
    @media (max-width: 980px){
      nav{justify-content:flex-start}
      .menu{flex-wrap:wrap}
      .programs{grid-template-columns:1fr}
      .thumbs{grid-template-columns:1fr 1fr}
      .footer-cols{grid-template-columns:1fr}
    }
    @media (max-width: 640px){
      .thumbs{grid-template-columns:1fr}
      .brand img{width:150px}
      .hero-caption{max-width:85%}
    }
  </style>
</head>

<body>
  <!-- Header -->
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="#">
        <!-- Remplace par ton logo -->
        <img src="images/logo-igd.png" alt="IGD" />
      </a>

      <nav aria-label="Menu principal">
        <div class="menu">
          <a class="active" href="#">Accueil</a>
          <a href="#">L’institut</a>
          <a href="#">Programmes</a>
          <a href="#">Publications</a>
          <a href="#">Photothèque</a>
          <a href="#">Vidéothèque</a>
          <a href="#">Actualité</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <!-- Icônes sociales (simples placeholders) -->
      <div class="social" aria-label="Réseaux sociaux">
        <a href="#" title="Facebook">f</a>
        <a href="#" title="Twitter">t</a>
        <a href="#" title="YouTube">▶</a>
        <a href="#" title="Email">✉</a>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <!-- Remplace par ton image hero -->
    <img src="images/news/alliance-politique-senegal-cote-ivoire.jpg" alt="Photo de couverture" />
    <div class="hero-overlay"></div>
    <div class="hero-caption">
      <div class="kicker">PYPA</div>
      <div class="sub">PYPA 2023 : Graduation de la dixième promotion</div>
    </div>
  </section>

  <!-- Program blocks -->
  <section class="programs" aria-label="Programmes">
    <article class="program red">
      <div class="icon">⚖</div>
      <div>
        <h3>PYPA</h3>
        <p>Program for Young Politicians in Africa</p>
      </div>
    </article>

    <article class="program dark">
      <div class="icon">👥</div>
      <div>
        <h3>EWIP</h3>
        <p>EMPOWERING WOMEN IN POLITICS.</p>
      </div>
    </article>

    <article class="program darker">
      <div class="icon">👤</div>
      <div>
        <h3>PJL</h3>
        <p>Projet Jeunes Leaders.</p>
      </div>
    </article>
  </section>

  <!-- Thumbnails grid -->
  <section class="thumbs" aria-label="À la une">
    <a class="thumb" href="#">
      <img src="thumb1.jpg" alt="">
      <div class="label">ATELIER SENSIBILISATION FEMMES ET MARIS</div>
    </a>
    <a class="thumb" href="#">
      <img src="thumb2.jpg" alt="">
      <div class="label">EWIP FORMATION FEMMES ACTIVES TOGO</div>
    </a>
    <a class="thumb" href="#">
      <img src="thumb3.jpg" alt="">
      <div class="label">FIN DE LA DEUXIÈME SESSION PYPA</div>
    </a>
    <a class="thumb" href="#">
      <img src="thumb4.jpg" alt="">
      <div class="label">JEUNES LEADERS</div>
    </a>
    <a class="thumb" href="#">
      <img src="thumb5.jpg" alt="">
      <div class="label">JOURNÉE D’ÉTUDE SUR LA SÉCURITÉ</div>
    </a>
    <a class="thumb" href="#">
      <img src="thumb6.jpg" alt="">
      <div class="label">PYPA — FORMATION SESSION 2023</div>
    </a>
  </section>

  <!-- Partners -->
  <section class="partners-wrap" aria-label="Partenaires">
    <div class="partners-inner">
      <div class="partners-title">Partenaires</div>

      <div class="partners-card">
        <div class="partners-logos" id="partnersTrack">
          <!-- Remplace par tes logos -->
          <img src="partner1.png" alt="Partenaire 1">
          <img src="partner2.png" alt="Partenaire 2">
          <img src="partner3.png" alt="Partenaire 3">
        </div>

        <div class="partners-controls" aria-label="Contrôles">
          <button class="btn" type="button" id="prevBtn" aria-label="Précédent">‹</button>
          <button class="btn" type="button" id="nextBtn" aria-label="Suivant">›</button>
        </div>
      </div>
    </div>
  </section>

  <div class="accent-line"></div>

  <!-- Footer -->
  <footer>
    <div class="footer-inner">
      <div class="footer-cols">
        <div class="footer-col">
          <h4>L’institut</h4>
          <p>
            L’Institut Général Tiémoko Marc Garango pour la Gouvernance et le Développement (IGD)
            est un organisme non gouvernemental, à vocation régionale, spécialisé dans les domaines
            de la gouvernance, du droit et du développement.
          </p>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <p>
            Pr Abdoul Karim SAIDOU, Agrégé de science politique et maître de conférences (CAMES)<br>
            à l’Université Thomas SANKARA (UTS) au Burkina Faso.<br><br>
            (+226) 25 37 50 82<br>
            (+226) 51 57 58 58<br>
            institutgarango@igd.bf
          </p>
        </div>

        <div class="footer-col">
          <h4>Suivez-nous sur …</h4>
          <div class="subscribe">
            <input type="email" placeholder="" aria-label="Email">
            <button type="button">OK</button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div>© Copyright - IGD</div>
        <div style="display:flex; gap:14px; align-items:center;">
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <span style="opacity:.6">|</span>
          <a href="#" title="Facebook">f</a>
          <a href="#" title="Twitter">t</a>
          <a href="#" title="YouTube">▶</a>
          <a href="#" title="Email">✉</a>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Mini défilement horizontal des partenaires (simple et léger)
    const track = document.getElementById('partnersTrack');
    const prev = document.getElementById('prevBtn');
    const next = document.getElementById('nextBtn');

    function scrollByAmount(px){
      track.scrollBy({ left: px, behavior: 'smooth' });
    }
    prev.addEventListener('click', () => scrollByAmount(-260));
    next.addEventListener('click', () => scrollByAmount(260));
  </script>
</body>
</html>
