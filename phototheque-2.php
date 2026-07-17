<?php
$page_title = "Photothèque | IGD";
$meta_description = "Photothèque IGD : albums, événements, formations et programmes en images.";
$active = "phototheque";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";

/**
 * Démo statique (inspirée Facebook) : à alimenter via CMS/DB plus tard
 * cover = image de couverture album
 * items = nb photos
 */
$albums = [
  ["cover"=>"images/phototheque/wyde-1.jpg", "title"=>"Formation WYDE – Abidjan", "date"=>"Avril 2025", "items"=>36, "cat"=>"Programmes", "tag"=>"WYDE", "place"=>"Abidjan"],
  ["cover"=>"images/phototheque/pjl-1.jpg",  "title"=>"Ateliers – Projet Jeunes Leaders", "date"=>"Mars 2025", "items"=>54, "cat"=>"Programmes", "tag"=>"PJL", "place"=>"Ouagadougou"],
  ["cover"=>"images/phototheque/ewip-1.jpg", "title"=>"Leadership & communication – EWIP", "date"=>"2024", "items"=>28, "cat"=>"Programmes", "tag"=>"EWIP", "place"=>"Ouagadougou"],
  ["cover"=>"images/phototheque/pypa-1.jpg", "title"=>"Rencontre Alumni – PYPA", "date"=>"2024", "items"=>42, "cat"=>"Programmes", "tag"=>"PYPA", "place"=>"Abidjan"],
  ["cover"=>"images/phototheque/event-1.jpg","title"=>"Conférence / Restitution d’étude", "date"=>"2024", "items"=>22, "cat"=>"Événements", "tag"=>"Recherche", "place"=>"Ouagadougou"],
  ["cover"=>"images/phototheque/team-1.jpg", "title"=>"Coulisses & équipe IGD", "date"=>"2025", "items"=>18, "cat"=>"Institution", "tag"=>"IGD", "place"=>"Ouagadougou"],
];
?>

<style>
  /* --- À déplacer dans ton CSS central ensuite --- */
  .page-hero { padding: 35px 0 25px; background:#fff; border-bottom:1px solid #eee; }
  .page-title { font-weight: 800; color: var(--igd-green); letter-spacing:-0.3px; }
  .breadcrumb-link{ color: var(--igd-red); text-decoration:none; }
  .breadcrumb-link:hover{ text-decoration:underline; }

  .gallery-toolbar{
    background:#fff;
    border:1px solid #eee;
    border-radius:14px;
    padding:14px;
  }
  .chip{
    display:inline-flex; align-items:center; gap:.45rem;
    padding:.35rem .75rem; border-radius:999px;
    border:1px solid #e9e9e9; background:#fff;
    font-size:.9rem; cursor:pointer; user-select:none;
    transition:.2s; white-space:nowrap;
  }
  .chip.active{
    border-color: var(--igd-green);
    color: var(--igd-green);
    box-shadow:0 0 0 3px rgba(124,194,66,.18);
  }

  /* Masonry simple (CSS columns) */
  .masonry{ column-count: 3; column-gap: 18px; }
  @media (max-width: 992px){ .masonry{ column-count:2; } }
  @media (max-width: 576px){ .masonry{ column-count:1; } }

  .album{
    break-inside: avoid;
    margin: 0 0 18px;
    border:1px solid #e9e9e9;
    border-radius:16px;
    overflow:hidden;
    background:#fff;
    transition:.25s;
  }
  .album:hover{ transform: translateY(-3px); box-shadow:0 12px 26px rgba(0,0,0,.08); }

  .album-cover{ position:relative; background:#f3f3f3; }
  .album-cover img{ width:100%; height:220px; object-fit:cover; display:block; }
  .album-cover::after{
    content:""; position:absolute; inset:0;
    background: linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,0) 60%);
  }
  .album-badges{
    position:absolute; left:14px; right:14px; bottom:12px;
    display:flex; justify-content:space-between; gap:10px; z-index:2;
  }
  .pill{
    background: rgba(255,255,255,.92);
    border:1px solid rgba(0,0,0,.06);
    border-radius:999px;
    padding:.22rem .55rem;
    font-size:.82rem;
    display:inline-flex; align-items:center; gap:.4rem;
    backdrop-filter: blur(6px);
    white-space:nowrap;
  }

  .album-body{ padding:16px 16px 18px; }
  .album-title{ font-weight:800; font-size:1.05rem; margin-bottom:6px; }
  .album-meta{ color:#6c757d; font-size:.92rem; display:flex; flex-wrap:wrap; gap:10px; }
  .tag{
    display:inline-flex; align-items:center;
    border:1px solid #eee; border-radius:999px;
    padding:.18rem .55rem; font-size:.8rem;
    background:#fff;
  }

  .btn-igd-green{ background: var(--igd-green); color:#fff; border:none; }
  .btn-igd-green:hover{ filter: brightness(.95); color:#fff; }

  .lightbox-img{ width:100%; height:auto; border-radius:14px; background:#f6f6f6; }
</style>

<!-- HERO -->
<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Photothèque</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item active" aria-current="page">Photothèque</li>
          </ol>
        </nav>
      </div>
      <div class="d-flex gap-2">
        <a href="contact.php" class="btn btn-outline-secondary">
          <i class="bi bi-camera me-1"></i> Proposer des photos
        </a>
        <a target="_blank" rel="noopener" href="https://web.facebook.com/IGDOfficiel" class="btn btn-igd-green">
          <i class="bi bi-facebook me-1"></i> Suivre sur Facebook
        </a>
      </div>
    </div>
  </div>
</section>

<section class="container py-5">

  <!-- TOOLBAR -->
  <div class="gallery-toolbar mb-4">
    <div class="row g-3 align-items-center">
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
          <input id="q" type="text" class="form-control" placeholder="Rechercher : WYDE, PJL, Abidjan, conférence…">
        </div>
      </div>

      <div class="col-lg-6 d-flex flex-wrap gap-2 justify-content-lg-end">
        <span class="chip active" data-filter="all"><i class="bi bi-grid"></i> Tout</span>
        <span class="chip" data-filter="programmes"><i class="bi bi-diagram-3"></i> Programmes</span>
        <span class="chip" data-filter="evenements"><i class="bi bi-calendar-event"></i> Événements</span>
        <span class="chip" data-filter="institution"><i class="bi bi-building"></i> Institution</span>
      </div>
    </div>

    <div class="row g-3 mt-1">
      <div class="col-md-4">
        <select id="year" class="form-select">
          <option value="">Année (toutes)</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div class="col-md-4">
        <select id="place" class="form-select">
          <option value="">Lieu (tous)</option>
          <option value="Ouagadougou">Ouagadougou</option>
          <option value="Abidjan">Abidjan</option>
        </select>
      </div>
      <div class="col-md-4">
        <select id="tag" class="form-select">
          <option value="">Programme / tag (tous)</option>
          <option value="WYDE">WYDE</option>
          <option value="PJL">PJL</option>
          <option value="EWIP">EWIP</option>
          <option value="PYPA">PYPA</option>
          <option value="Recherche">Recherche</option>
          <option value="IGD">IGD</option>
        </select>
      </div>
    </div>
  </div>

  <!-- SECTION “À LA UNE” (style Facebook : albums mis en avant) -->
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h2 class="section-title mb-0">Albums à la une</h2>
    <a href="#tous" class="btn btn-sm btn-outline-secondary"><i class="bi bi-images me-1"></i> Voir tous</a>
  </div>

  <div class="row g-4 mb-5">
    <?php for($i=0; $i<3; $i++): $a = $albums[$i]; ?>
      <div class="col-lg-4 d-flex">
        <div class="album w-100">
          <div class="album-cover">
            <img src="<?= htmlspecialchars($a["cover"]) ?>" alt="<?= htmlspecialchars($a["title"]) ?>" loading="lazy">
            <div class="album-badges">
              <span class="pill"><i class="bi bi-camera"></i> <?= (int)$a["items"] ?> photos</span>
              <span class="pill"><i class="bi bi-calendar3"></i> <?= htmlspecialchars($a["date"]) ?></span>
            </div>
          </div>
          <div class="album-body">
            <div class="album-title"><?= htmlspecialchars($a["title"]) ?></div>
            <div class="album-meta">
              <span><i class="bi bi-tag"></i> <?= htmlspecialchars($a["tag"]) ?></span>
              <span><i class="bi bi-geo-alt"></i> <?= htmlspecialchars($a["place"]) ?></span>
              <span class="tag"><?= htmlspecialchars($a["cat"]) ?></span>
            </div>

            <div class="mt-3">
              <button
                class="btn btn-igd-green btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#lightbox"
                data-title="<?= htmlspecialchars($a["title"]) ?>"
                data-src="<?= htmlspecialchars($a["cover"]) ?>"
              >
                <i class="bi bi-eye me-1"></i> Ouvrir l’album
              </button>
              <a href="contact.php" class="btn btn-outline-secondary btn-sm ms-2">
                <i class="bi bi-download me-1"></i> Demander les photos
              </a>
            </div>
          </div>
        </div>
      </div>
    <?php endfor; ?>
  </div>

  <!-- TOUS LES ALBUMS (masonry) -->
  <h2 class="section-title" id="tous">Tous les albums</h2>

  <div class="masonry" id="grid">
    <?php foreach($albums as $a):
      $year = preg_match('/\b(20\d{2})\b/', $a["date"], $m) ? $m[1] : "";
      $filter = strtolower($a["cat"]);
    ?>
      <div class="album album-item"
           data-filter="<?= htmlspecialchars($filter) ?>"
           data-title="<?= htmlspecialchars(strtolower($a["title"]." ".$a["tag"]." ".$a["place"])) ?>"
           data-year="<?= htmlspecialchars($year) ?>"
           data-place="<?= htmlspecialchars($a["place"]) ?>"
           data-tag="<?= htmlspecialchars($a["tag"]) ?>">
        <div class="album-cover">
          <img src="<?= htmlspecialchars($a["cover"]) ?>" alt="<?= htmlspecialchars($a["title"]) ?>" loading="lazy">
          <div class="album-badges">
            <span class="pill"><i class="bi bi-camera"></i> <?= (int)$a["items"] ?> photos</span>
            <span class="pill"><i class="bi bi-calendar3"></i> <?= htmlspecialchars($a["date"]) ?></span>
          </div>
        </div>
        <div class="album-body">
          <div class="album-title"><?= htmlspecialchars($a["title"]) ?></div>
          <div class="album-meta">
            <span><i class="bi bi-tag"></i> <?= htmlspecialchars($a["tag"]) ?></span>
            <span><i class="bi bi-geo-alt"></i> <?= htmlspecialchars($a["place"]) ?></span>
            <span class="tag"><?= htmlspecialchars($a["cat"]) ?></span>
          </div>

          <div class="mt-3">
            <button
              class="btn btn-igd-green btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#lightbox"
              data-title="<?= htmlspecialchars($a["title"]) ?>"
              data-src="<?= htmlspecialchars($a["cover"]) ?>"
            >
              <i class="bi bi-eye me-1"></i> Voir
            </button>
            <a href="contact.php" class="btn btn-outline-secondary btn-sm ms-2">
              <i class="bi bi-share me-1"></i> Partager
            </a>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

</section>

<!-- LIGHTBOX -->
<div class="modal fade" id="lightbox" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" style="border-radius:16px;">
      <div class="modal-header">
        <h5 class="modal-title" id="lbTitle">Album</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
      </div>
      <div class="modal-body">
        <img id="lbImg" src="" alt="" class="lightbox-img">
        <p class="text-muted mt-3 mb-0">
          Astuce : tu peux créer une page “album.php?id=…” pour afficher toutes les photos d’un album,
          comme sur Facebook (grille + scroll infini).
        </p>
      </div>
      <div class="modal-footer">
        <a href="https://web.facebook.com/IGDOfficiel" target="_blank" rel="noopener" class="btn btn-outline-secondary">
          <i class="bi bi-facebook me-1"></i> Voir sur Facebook
        </a>
        <button class="btn btn-igd-green" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>

<script>
(function(){
  const q = document.getElementById('q');
  const year = document.getElementById('year');
  const place = document.getElementById('place');
  const tag = document.getElementById('tag');
  const chips = document.querySelectorAll('.chip');
  const items = document.querySelectorAll('.album-item');

  let activeFilter = 'all';

  function apply(){
    const query = (q.value || '').toLowerCase().trim();
    const y = year.value || '';
    const p = place.value || '';
    const t = tag.value || '';

    items.forEach(el => {
      const title = el.dataset.title || '';
      const f = el.dataset.filter || 'all';
      const ey = el.dataset.year || '';
      const ep = el.dataset.place || '';
      const et = el.dataset.tag || '';

      const okText = !query || title.includes(query);
      const okFilter = (activeFilter === 'all') || (f === activeFilter);
      const okYear = !y || ey === y;
      const okPlace = !p || ep === p;
      const okTag = !t || et === t;

      el.style.display = (okText && okFilter && okYear && okPlace && okTag) ? '' : 'none';
    });
  }

  chips.forEach(c => {
    c.addEventListener('click', () => {
      chips.forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      activeFilter = c.dataset.filter || 'all';
      apply();
    });
  });

  [q, year, place, tag].forEach(el => el.addEventListener('input', apply));
  [year, place, tag].forEach(el => el.addEventListener('change', apply));

  // Lightbox binding
  const lb = document.getElementById('lightbox');
  lb.addEventListener('show.bs.modal', (event) => {
    const btn = event.relatedTarget;
    document.getElementById('lbTitle').textContent = btn.getAttribute('data-title') || 'Album';
    const src = btn.getAttribute('data-src') || '';
    const img = document.getElementById('lbImg');
    img.src = src;
    img.alt = document.getElementById('lbTitle').textContent;
  });
})();
</script>
