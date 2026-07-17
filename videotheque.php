<?php
$page_title = "Vidéothèque | IGD";
$meta_description = "Vidéothèque IGD : conférences, formations, programmes et interventions en vidéo.";
$active = "videotheque";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";

/**
 * Démo statique (à alimenter depuis CMS/DB plus tard)
 * - thumb : miniature
 * - title : titre
 * - date  : date/année
 * - duration : durée
 * - category : Programme / Événement / Recherche
 * - place : lieu
 * - url : lien (YouTube/Facebook/MP4)
 */
$videos = [
  ["thumb"=>"images/videotheque/v1.jpg","title"=>"Formation WYDE – Abidjan (Session 1)","date"=>"Avril 2025","duration"=>"06:24","category"=>"Programmes","tag"=>"WYDE","place"=>"Abidjan","url"=>"https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  ["thumb"=>"images/videotheque/v2.jpg","title"=>"Projet Jeunes Leaders – Témoignages de la cohorte","date"=>"Mars 2025","duration"=>"04:58","category"=>"Programmes","tag"=>"PJL","place"=>"Ouagadougou","url"=>"https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  ["thumb"=>"images/videotheque/v3.jpg","title"=>"EWIP – Leadership & communication politique","date"=>"2024","duration"=>"08:12","category"=>"Programmes","tag"=>"EWIP","place"=>"Ouagadougou","url"=>"https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  ["thumb"=>"images/videotheque/v4.jpg","title"=>"Conférence – Gouvernance et participation citoyenne","date"=>"2024","duration"=>"12:05","category"=>"Événements","tag"=>"Conférence","place"=>"Ouagadougou","url"=>"https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  ["thumb"=>"images/videotheque/v5.jpg","title"=>"Restitution d’étude – Politiques publiques & Sahel","date"=>"2024","duration"=>"09:30","category"=>"Recherche","tag"=>"Recherche","place"=>"Ouagadougou","url"=>"https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  ["thumb"=>"images/videotheque/v6.jpg","title"=>"PYPA – Dialogue interpartis : best-of","date"=>"2023","duration"=>"05:40","category"=>"Programmes","tag"=>"PYPA","place"=>"Abidjan","url"=>"https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
];
?>

<style>
  .page-hero{ padding:35px 0 25px; background:#fff; border-bottom:1px solid #eee; }
  .page-title{ font-weight:800; color: var(--igd-green); letter-spacing:-0.3px; }
  .breadcrumb-link{ color: var(--igd-red); text-decoration:none; }
  .breadcrumb-link:hover{ text-decoration:underline; }

  .toolbar{
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

  .video-card{
    border:1px solid #e9e9e9;
    border-radius:16px;
    overflow:hidden;
    background:#fff;
    height:100%;
    transition:.25s;
  }
  .video-card:hover{ transform: translateY(-3px); box-shadow:0 12px 26px rgba(0,0,0,.08); }
  .video-thumb{
    position:relative;
    height:210px;
    background:#111;
    overflow:hidden;
  }
  .video-thumb img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
    opacity:.92;
    transition:.35s;
  }
  .video-card:hover .video-thumb img{ transform:scale(1.04); opacity:1; }

  .play-badge{
    position:absolute;
    inset:0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:2;
  }
  .play-btn{
    width:54px;
    height:54px;
    border-radius:999px;
    border:1px solid rgba(255,255,255,.25);
    background:rgba(0,0,0,.35);
    display:flex;
    align-items:center;
    justify-content:center;
    backdrop-filter: blur(6px);
    transition:.2s;
  }
  .video-card:hover .play-btn{
    transform:scale(1.05);
    background:rgba(0,0,0,.45);
  }
  .play-btn i{ color:#fff; font-size:1.55rem; margin-left:2px; }

  .duration{
    position:absolute;
    right:12px;
    bottom:12px;
    z-index:3;
    background:rgba(0,0,0,.6);
    color:#fff;
    border-radius:999px;
    padding:.2rem .55rem;
    font-size:.82rem;
  }

  .meta{
    color:#6c757d;
    font-size:.92rem;
    display:flex;
    flex-wrap:wrap;
    gap:10px;
  }
  .tag{
    display:inline-flex; align-items:center;
    border:1px solid #eee;
    border-radius:999px;
    padding:.18rem .55rem;
    font-size:.8rem;
    background:#fff;
    color:#495057;
  }

  .btn-igd-green{ background: var(--igd-green); color:#fff; border:none; }
  .btn-igd-green:hover{ filter: brightness(.95); color:#fff; }

  /* Modal video */
  .ratio iframe{ border-radius:14px; }
</style>

<!-- HERO -->
<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Vidéothèque</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item active" aria-current="page">Vidéothèque</li>
          </ol>
        </nav>
      </div>
      <div class="d-flex gap-2">
        <a href="contact.php" class="btn btn-outline-secondary">
          <i class="bi bi-camera-video me-1"></i> Proposer une vidéo
        </a>
        <a href="#" class="btn btn-igd-green">
          <i class="bi bi-youtube me-1"></i> Chaîne YouTube
        </a>
      </div>
    </div>
  </div>
</section>

<section class="container py-5">

  <!-- TOOLBAR -->
  <div class="toolbar mb-4">
    <div class="row g-3 align-items-center">
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-text bg-white"><i class="bi bi-search"></i></span>
          <input id="q" type="text" class="form-control" placeholder="Rechercher : WYDE, PJL, conférence, Ouaga 2000…">
        </div>
      </div>

      <div class="col-lg-6 d-flex flex-wrap gap-2 justify-content-lg-end">
        <span class="chip active" data-filter="all"><i class="bi bi-grid"></i> Tout</span>
        <span class="chip" data-filter="programmes"><i class="bi bi-diagram-3"></i> Programmes</span>
        <span class="chip" data-filter="evenements"><i class="bi bi-calendar-event"></i> Événements</span>
        <span class="chip" data-filter="recherche"><i class="bi bi-journal-text"></i> Recherche</span>
      </div>
    </div>

    <div class="row g-3 mt-1">
      <div class="col-md-4">
        <select id="year" class="form-select">
          <option value="">Année (toutes)</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
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
          <option value="Conférence">Conférence</option>
        </select>
      </div>
    </div>
  </div>

  <!-- GRID VIDEOS -->
  <div class="row g-4">
    <?php foreach($videos as $v):
      $year = preg_match('/\b(20\d{2})\b/', $v["date"], $m) ? $m[1] : "";
      $filter = strtolower($v["category"]);
    ?>
      <div class="col-md-6 col-lg-4 d-flex video-item"
           data-filter="<?= htmlspecialchars($filter) ?>"
           data-title="<?= htmlspecialchars(strtolower($v["title"]." ".$v["tag"]." ".$v["place"])) ?>"
           data-year="<?= htmlspecialchars($year) ?>"
           data-place="<?= htmlspecialchars($v["place"]) ?>"
           data-tag="<?= htmlspecialchars($v["tag"]) ?>"
      >
        <div class="video-card w-100">
          <div class="video-thumb">
            <img src="<?= htmlspecialchars($v["thumb"]) ?>" alt="<?= htmlspecialchars($v["title"]) ?>" loading="lazy">
            <div class="play-badge">
              <button class="play-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                      data-title="<?= htmlspecialchars($v["title"]) ?>"
                      data-url="<?= htmlspecialchars($v["url"]) ?>">
                <i class="bi bi-play-fill"></i>
              </button>
            </div>
            <div class="duration"><i class="bi bi-clock me-1"></i><?= htmlspecialchars($v["duration"]) ?></div>
          </div>

          <div class="p-4">
            <h3 class="h5 mb-2" style="font-weight:800;"><?= htmlspecialchars($v["title"]) ?></h3>
            <div class="meta mb-3">
              <span><i class="bi bi-calendar3"></i> <?= htmlspecialchars($v["date"]) ?></span>
              <span><i class="bi bi-geo-alt"></i> <?= htmlspecialchars($v["place"]) ?></span>
              <span class="tag"><?= htmlspecialchars($v["category"]) ?></span>
              <span class="tag"><?= htmlspecialchars($v["tag"]) ?></span>
            </div>

            <div class="d-flex gap-2">
              <button class="btn btn-igd-green btn-sm"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                      data-title="<?= htmlspecialchars($v["title"]) ?>"
                      data-url="<?= htmlspecialchars($v["url"]) ?>">
                <i class="bi bi-play-circle me-1"></i> Lire
              </button>
              <a class="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener"
                 href="<?= htmlspecialchars($v["url"]) ?>">
                <i class="bi bi-box-arrow-up-right me-1"></i> Ouvrir
              </a>
            </div>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

  <!-- Pagination (démo) -->
  <div class="d-flex justify-content-center mt-5">
    <nav aria-label="Pagination vidéos">
      <ul class="pagination mb-0">
        <li class="page-item disabled"><a class="page-link" href="#">Précédent</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">Suivant</a></li>
      </ul>
    </nav>
  </div>

</section>

<!-- MODAL VIDEO -->
<div class="modal fade" id="videoModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content" style="border-radius:16px;">
      <div class="modal-header">
        <h5 class="modal-title" id="videoTitle">Lecture vidéo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
      </div>

      <div class="modal-body">
        <div class="ratio ratio-16x9">
          <iframe id="videoFrame"
                  src=""
                  title="Vidéo IGD"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
        <p class="text-muted mt-3 mb-0">
          Astuce : tu peux connecter cette page à YouTube/Facebook ou un CMS pour alimenter automatiquement la vidéothèque.
        </p>
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
  const items = document.querySelectorAll('.video-item');

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

  // Modal binding: support YouTube links (convert watch?v= to embed/)
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoFrame');
  const title = document.getElementById('videoTitle');

  function toEmbed(url){
    if(!url) return "";
    // YouTube watch => embed
    if(url.includes("youtube.com/watch")){
      const u = new URL(url);
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
    }
    // youtu.be => embed
    if(url.includes("youtu.be/")){
      const id = url.split("youtu.be/")[1].split(/[?&]/)[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    // Sinon, on laisse tel quel (Facebook/MP4 etc.)
    return url;
  }

  modal.addEventListener('show.bs.modal', function (event) {
    const btn = event.relatedTarget;
    const t = btn.getAttribute('data-title') || "Lecture vidéo";
    const u = btn.getAttribute('data-url') || "";
    title.textContent = t;
    frame.src = toEmbed(u);
  });

  modal.addEventListener('hidden.bs.modal', function () {
    frame.src = ""; // stop vidéo
  });
})();
</script>
