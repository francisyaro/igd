<?php
$page_title = "Photothèque | IGD";
$meta_description = "Découvrez la photothèque de l’IGD : albums, événements, programmes et moments forts en images.";
$active = "phototheque";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";

/**
 * Démo statique (à remplacer par une source DB/CMS plus tard)
 * - cover: image de couverture
 * - title: titre album
 * - count: nombre de photos
 * - date: date/année
 * - tags: catégories
 */
$albums = [
  [
    "cover" => "images/phototheque/album-1.jpg",
    "title" => "Conférence régionale – Participation des femmes",
    "count" => 48,
    "date"  => "Avril 2025",
    "tags"  => ["Événements", "Femmes", "Conférences"]
  ],
  [
    "cover" => "images/phototheque/album-2.jpg",
    "title" => "Formation WYDE – Abidjan",
    "count" => 36,
    "date"  => "Avril 2025",
    "tags"  => ["Programmes", "Jeunes", "WYDE"]
  ],
  [
    "cover" => "images/phototheque/album-3.jpg",
    "title" => "Ateliers Jeunes Leaders – Cohorte 3",
    "count" => 54,
    "date"  => "Mars 2025",
    "tags"  => ["PJL", "Formations"]
  ],
  [
    "cover" => "images/phototheque/album-4.jpg",
    "title" => "Dialogue interpartis – PYPA",
    "count" => 28,
    "date"  => "2024",
    "tags"  => ["PYPA", "Gouvernance"]
  ],
  [
    "cover" => "images/phototheque/album-5.jpg",
    "title" => "Restitution d’étude – Gouvernance",
    "count" => 22,
    "date"  => "2024",
    "tags"  => ["Recherche", "Restitutions"]
  ],
  [
    "cover" => "images/phototheque/album-6.jpg",
    "title" => "Cérémonie FEMIN-IN – Cohorte 2025",
    "count" => 41,
    "date"  => "Mars 2025",
    "tags"  => ["Femmes", "Cohortes"]
  ],
];
?>

<style>
  /* ===== Page Photothèque ===== */
  .photo-hero{
    padding: 35px 0 25px;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .photo-hero .page-title{
    font-weight: 800;
    letter-spacing: -0.3px;
  }

  .photo-toolbar{
    background: #fff;
    border: 1px solid #eee;
    border-radius: 14px;
    padding: 14px;
  }

  .chip{
    display:inline-flex;
    align-items:center;
    gap:.4rem;
    padding: .35rem .7rem;
    border-radius: 999px;
    border: 1px solid #e9e9e9;
    background: #fff;
    font-size: .9rem;
    cursor:pointer;
    user-select:none;
    transition: .2s;
    white-space: nowrap;
  }
  .chip.active{
    border-color: var(--igd-green);
    color: var(--igd-green);
    box-shadow: 0 0 0 3px rgba(124,194,66,.15);
  }

  .album-card{
    border: 1px solid #e9e9e9;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    height: 100%;
    transition: transform .25s, box-shadow .25s;
  }
  .album-card:hover{
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0,0,0,.08);
  }
  .album-cover{
    position: relative;
    height: 210px;
    overflow: hidden;
    background: #f4f4f4;
  }
  .album-cover img{
    width:100%;
    height:100%;
    object-fit: cover;
    transition: transform .35s;
  }
  .album-card:hover .album-cover img{ transform: scale(1.05); }

  .album-badges{
    position:absolute;
    left: 12px;
    right: 12px;
    bottom: 12px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    gap: 10px;
  }
  .album-pill{
    background: rgba(255,255,255,.92);
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 999px;
    padding: .25rem .55rem;
    font-size: .82rem;
    display:inline-flex;
    align-items:center;
    gap: .4rem;
    box-shadow: 0 6px 16px rgba(0,0,0,.12);
    backdrop-filter: blur(6px);
    white-space: nowrap;
  }

  .album-meta{
    display:flex;
    align-items:center;
    justify-content: space-between;
    gap: 12px;
    color: #6c757d;
    font-size: .9rem;
  }
  .album-tags{
    display:flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: .7rem;
  }
  .tag{
    font-size: .8rem;
    border: 1px solid #eaeaea;
    border-radius: 999px;
    padding: .2rem .55rem;
    color:#495057;
    background:#fff;
  }

  .btn-igd-green{
    background-color: var(--igd-green);
    color: #fff;
    border: none;
  }
  .btn-igd-green:hover{
    filter: brightness(.95);
    color:#fff;
  }

  /* Lightbox (modal) */
  .lightbox-img{
    width:100%;
    height:auto;
    border-radius: 12px;
    background:#f6f6f6;
  }
  .modal-backdrop.show{ opacity:.7; }
</style>

<!-- HERO INTERNE -->
<section class="photo-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2" style="color: var(--igd-green);">Photothèque</h1>
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
        <a href="#albums" class="btn btn-igd-green">
          <i class="bi bi-images me-1"></i> Parcourir les albums
        </a>
      </div>
    </div>
  </div>
</section>

<section class="container py-5" id="albums">

  <!-- Toolbar: recherche + filtres -->
  <div class="photo-toolbar mb-4">
    <div class="row g-3 align-items-center">
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
          <input id="albumSearch" type="text" class="form-control" placeholder="Rechercher un album (ex: WYDE, Jeunes Leaders, conférence…)">
        </div>
      </div>

      <div class="col-lg-6 d-flex flex-wrap gap-2 justify-content-lg-end">
        <span class="chip active" data-filter="all"><i class="bi bi-grid"></i> Tous</span>
        <span class="chip" data-filter="evenements"><i class="bi bi-calendar-event"></i> Événements</span>
        <span class="chip" data-filter="programmes"><i class="bi bi-diagram-3"></i> Programmes</span>
        <span class="chip" data-filter="recherche"><i class="bi bi-journal-text"></i> Recherche</span>
        <span class="chip" data-filter="formations"><i class="bi bi-mortarboard"></i> Formations</span>
      </div>
    </div>
  </div>

  <!-- Grille albums -->
  <div class="row g-4">
    <?php foreach ($albums as $i => $a): 
      // tags normalisés pour filtres simples
      $tagsLower = strtolower(implode(" ", $a["tags"]));
      $filterKey = "all";
      if (str_contains($tagsLower, "événements") || str_contains($tagsLower, "conférences")) $filterKey = "evenements";
      if (str_contains($tagsLower, "programmes") || str_contains($tagsLower, "pjl") || str_contains($tagsLower, "pypa") || str_contains($tagsLower, "wyde")) $filterKey = "programmes";
      if (str_contains($tagsLower, "recherche")) $filterKey = "recherche";
      if (str_contains($tagsLower, "formations")) $filterKey = "formations";
    ?>
      <div class="col-md-6 col-lg-4 d-flex album-item" data-filter="<?= $filterKey ?>" data-title="<?= htmlspecialchars(strtolower($a["title"])) ?>">
        <div class="album-card w-100">
          <div class="album-cover">
            <img src="<?= htmlspecialchars($a["cover"]) ?>" alt="<?= htmlspecialchars($a["title"]) ?>" loading="lazy">
            <div class="album-badges">
              <span class="album-pill">
                <i class="bi bi-camera"></i> <?= (int)$a["count"] ?> photos
              </span>
              <span class="album-pill">
                <i class="bi bi-calendar3"></i> <?= htmlspecialchars($a["date"]) ?>
              </span>
            </div>
          </div>

          <div class="p-4">
            <h3 class="h5 mb-2" style="font-weight:800;"><?= htmlspecialchars($a["title"]) ?></h3>

            <div class="album-meta mb-3">
              <span><i class="bi bi-folder2-open me-1"></i> Album</span>
              <button class="btn btn-sm btn-igd-green"
                      data-bs-toggle="modal"
                      data-bs-target="#albumModal"
                      data-album-title="<?= htmlspecialchars($a["title"]) ?>"
                      data-album-cover="<?= htmlspecialchars($a["cover"]) ?>"
                      data-album-count="<?= (int)$a["count"] ?>"
                      data-album-date="<?= htmlspecialchars($a["date"]) ?>">
                <i class="bi bi-eye me-1"></i> Ouvrir
              </button>
            </div>

            <div class="album-tags">
              <?php foreach ($a["tags"] as $t): ?>
                <span class="tag"><?= htmlspecialchars($t) ?></span>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

  <!-- Pagination (démo) -->
  <div class="d-flex justify-content-center mt-5">
    <nav aria-label="Pagination photothèque">
      <ul class="pagination mb-0">
        <li class="page-item disabled"><a class="page-link" href="#">Précédent</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">Suivant</a></li>
      </ul>
    </nav>
  </div>

</section>

<!-- Modal (album preview) -->
<div class="modal fade" id="albumModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" style="border-radius:16px;">
      <div class="modal-header">
        <h5 class="modal-title" id="albumModalTitle">Album</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
      </div>
      <div class="modal-body p-0 position-relative">

        <!-- Bouton précédent -->
        <button class="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2 shadow"
                id="albumPrev">
          <i class="bi bi-chevron-left"></i>
        </button>

        <!-- Image -->
        <img
          id="albumModalImg"
          src=""
          alt=""
          class="w-100"
          style="max-height: 80vh; object-fit: contain; background:#000;"
        >

        <!-- Bouton suivant -->
        <button class="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2 shadow"
                id="albumNext">
          <i class="bi bi-chevron-right"></i>
        </button>

      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>

<script>
  // Recherche albums + filtres (vanilla)
  (function(){
    const searchInput = document.getElementById('albumSearch');
    const chips = document.querySelectorAll('.chip');
    const items = document.querySelectorAll('.album-item');

    let activeFilter = 'all';

    function applyFilters(){
      const q = (searchInput.value || '').toLowerCase().trim();

      items.forEach(el => {
        const title = el.getAttribute('data-title') || '';
        const f = el.getAttribute('data-filter') || 'all';

        const matchText = !q || title.includes(q);
        const matchFilter = (activeFilter === 'all') || (f === activeFilter);

        el.style.display = (matchText && matchFilter) ? '' : 'none';
      });
    }

    chips.forEach(ch => {
      ch.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        ch.classList.add('active');
        activeFilter = ch.getAttribute('data-filter') || 'all';
        applyFilters();
      });
    });

    searchInput.addEventListener('input', applyFilters);

    // Modal data binding
    const modal = document.getElementById('albumModal');
    modal.addEventListener('show.bs.modal', function (event) {
      const btn = event.relatedTarget;
      const title = btn.getAttribute('data-album-title') || 'Album';
      const cover = btn.getAttribute('data-album-cover') || '';
      const count = btn.getAttribute('data-album-count') || '';
      const date = btn.getAttribute('data-album-date') || '';

      document.getElementById('albumModalTitle').textContent = title;
      const img = document.getElementById('albumModalImg');
      img.src = cover;
      img.alt = title;

      document.getElementById('albumModalCount').textContent = count;
      document.getElementById('albumModalDate').textContent = date;
    });
  })();
</script>

<script>
(() => {
  let currentIndex = 0;
  let albumImages = [];

  // Exemple : images de l’album (à remplacer plus tard par un vrai dataset)
  albumImages = [
    "images/phototheque/album-1.jpg",
    "images/phototheque/album-2.jpg",
    "images/phototheque/album-3.jpg",
    "images/phototheque/album-4.jpg"
  ];

  const img = document.getElementById('albumModalImg');
  const prevBtn = document.getElementById('albumPrev');
  const nextBtn = document.getElementById('albumNext');

  function showImage(index) {
    if (!albumImages.length) return;
    currentIndex = (index + albumImages.length) % albumImages.length;
    img.src = albumImages[currentIndex];
  }

  prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  // Reset à l’ouverture du modal
  const modal = document.getElementById('albumModal');
  modal.addEventListener('show.bs.modal', function () {
    showImage(0);
  });
})();
</script>

