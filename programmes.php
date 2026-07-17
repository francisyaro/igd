<?php
$page_title = "Programmes – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "programmes";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Programmes</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item active" aria-current="page">Programmes</li>
          </ol>
        </nav>
      </div>
      <div class="d-flex gap-2 flex-wrap">
        <a href="#en-cours" class="btn btn-igd-green"><i class="bi bi-lightning-charge"></i> En cours</a>
        <a href="#termines" class="btn btn-igd-outline"><i class="bi bi-check2-circle"></i> Terminés</a>
      </div>
    </div>
  </div>
</section>

<section class="container py-5">

  <!-- Barre outils -->
  <div class="card-soft p-3 p-md-4 mb-4">
    <div class="row g-3 align-items-center">
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-text bg-white border-0" style="border-radius:12px 0 0 12px;">
            <i class="bi bi-search"></i>
          </span>
          <input id="progSearch" type="text" class="form-control border-0" placeholder="Rechercher un programme (ex : PYPA, EWIP, Jeunes...)">
          <button class="btn btn-igd-green" type="button" id="clearSearch" style="border-radius:0 12px 12px 0;">Effacer</button>
        </div>
      </div>

      <div class="col-lg-3">
        <select id="progFilter" class="form-select">
          <option value="all" selected>Afficher : Tous</option>
          <option value="en-cours">En cours</option>
          <option value="termine">Terminés</option>
        </select>
      </div>

      <div class="col-lg-3 text-lg-end">
        <span class="badge rounded-pill text-bg-light border" id="countBadge">0 programme</span>
      </div>
    </div>
  </div>

  <!-- Programmes en cours -->
  <div class="d-flex justify-content-between align-items-end mb-3" id="en-cours">
    <h2 class="section-title mb-0">Programmes en cours</h2>
    <span class="text-muted small">6 programmes</span>
  </div>

  <div class="row g-4" id="gridEnCours">

    <!-- PJL -->
    <div class="col-md-6 col-xl-4 program-item" data-status="en-cours" data-title="Projet Jeunes Leaders PJL">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div class="d-flex align-items-center gap-3">
            <div class="program-logo">
              <img src="images/Logo-Jeunes-Leaders.png" alt="PJL">
            </div>
            <div>
              <div class="d-flex align-items-center gap-2">
                <h5 class="mb-0">Projet Jeunes Leaders (PJL)</h5>
                <span class="badge badge-encours"><i class="bi bi-circle-fill me-1"></i>En cours</span>
              </div>
              <p class="text-muted mb-0 small">Coaching & formation – Leadership des jeunes</p>
            </div>
          </div>
          <i class="bi bi-people-fill prog-icon"></i>
        </div>

        <p class="mt-3 text-muted">
          Renforcer la démocratie et l’inclusion citoyenne des jeunes au Burkina Faso via des formations,
          voyages d’étude et coaching individualisé.
        </p>

        <div class="d-flex flex-wrap gap-2 mt-auto">
          <span class="chip"><i class="bi bi-globe-africa me-1"></i>Burkina Faso</span>
          <span class="chip"><i class="bi bi-calendar-event me-1"></i>Depuis 2022</span>
          <span class="chip"><i class="bi bi-currency-euro me-1"></i>Union Européenne</span>
        </div>

        <div class="mt-3 d-flex gap-2">
          <a href="programme-en-cours-projet-jeunes-leaders.php" class="btn btn-igd-green w-100"><i class="bi bi-arrow-right"></i> Voir le programme</a>
        </div>
      </div>
    </div>

    <!-- Afrobarometer -->
    <div class="col-md-6 col-xl-4 program-item" data-status="en-cours" data-title="Afrobarometer">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div class="d-flex align-items-center gap-3">
            <div class="program-logo">
              <img src="images/logo-afrobarometer.png" alt="Afrobarometer">
            </div>
            <div>
              <div class="d-flex align-items-center gap-2">
                <h5 class="mb-0">Afrobarometer</h5>
                <span class="badge badge-encours"><i class="bi bi-circle-fill me-1"></i>En cours</span>
              </div>
              <p class="text-muted mb-0 small">Enquêtes panafricaines – Gouvernance & qualité de vie</p>
            </div>
          </div>
          <i class="bi bi-bar-chart-line-fill prog-icon"></i>
        </div>

        <p class="mt-3 text-muted">
          Partenaire national au Burkina Faso : collecte, analyse et dissémination des résultats de l’enquête,
          en partenariat avec le CDD Ghana.
        </p>

        <div class="d-flex flex-wrap gap-2 mt-auto">
          <span class="chip"><i class="bi bi-globe me-1"></i>Réseau panafricain</span>
          <span class="chip"><i class="bi bi-calendar-event me-1"></i>Tous les 2 ans</span>
          <span class="chip"><i class="bi bi-file-earmark-text me-1"></i>Données publiques</span>
        </div>

        <div class="mt-3 d-flex gap-2">
          <a href="programme-en-cours-afrobarometer.php" class="btn btn-igd-green w-100"><i class="bi bi-arrow-right"></i> Voir le programme</a>
        </div>
      </div>
    </div>

    <!-- EWIP -->
    <div class="col-md-6 col-xl-4 program-item" data-status="en-cours" data-title="Empowering Women in Politics EWIP">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div class="d-flex align-items-center gap-3">
            <div class="program-logo">
              <img src="images/logo-EWIP.png" alt="EWIP">
            </div>
            <div>
              <div class="d-flex align-items-center gap-2">
                <h5 class="mb-0">Empowering Women in Politics (EWIP)</h5>
                <span class="badge badge-encours"><i class="bi bi-circle-fill me-1"></i>En cours</span>
              </div>
              <p class="text-muted mb-0 small">Autonomisation des femmes en politique</p>
            </div>
          </div>
          <i class="bi bi-gender-female prog-icon"></i>
        </div>

        <p class="mt-3 text-muted">
          Renforcer les capacités, la confiance et l’influence des femmes actives en politique ; dialogue avec
          partis, leaders et parties prenantes.
        </p>

        <div class="d-flex flex-wrap gap-2 mt-auto">
          <span class="chip"><i class="bi bi-geo-alt me-1"></i>Burkina Faso & Togo</span>
          <span class="chip"><i class="bi bi-calendar-event me-1"></i>Depuis 2019</span>
          <span class="chip"><i class="bi bi-people me-1"></i>Ateliers & dialogues</span>
        </div>

        <div class="mt-3 d-flex gap-2">
          <a href="programme-en-cours-empowering-women-in-politics.php" class="btn btn-igd-green w-100"><i class="bi bi-arrow-right"></i> Voir le programme</a>
        </div>
      </div>
    </div>

    <!-- Refonder la gouvernance -->
    <div class="col-md-6 col-xl-4 program-item" data-status="en-cours" data-title="Refonder la gouvernance">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div class="d-flex align-items-center gap-3">
            <div class="program-logo program-logo-fallback">
              <i class="bi bi-diagram-3-fill"></i>
            </div>
            <div>
              <div class="d-flex align-items-center gap-2">
                <h5 class="mb-0">Refonder la gouvernance</h5>
                <span class="badge badge-encours"><i class="bi bi-circle-fill me-1"></i>En cours</span>
              </div>
              <p class="text-muted mb-0 small">Démocratie, inclusion & participation citoyenne</p>
            </div>
          </div>
          <i class="bi bi-shield-check prog-icon"></i>
        </div>

        <p class="mt-3 text-muted">
          Contribuer à l’enracinement de la démocratie : usage responsable des médias, réflexion participative,
          participation citoyenne sur politiques minières et foncières.
        </p>

        <div class="d-flex flex-wrap gap-2 mt-auto">
          <span class="chip"><i class="bi bi-calendar-event me-1"></i>2023–2024</span>
          <span class="chip"><i class="bi bi-handshake me-1"></i>Diakonia</span>
          <span class="chip"><i class="bi bi-megaphone me-1"></i>Plaidoyer</span>
        </div>

        <div class="mt-3 d-flex gap-2">
          <a href="programme-en-cours-refonder-la-gouvernance.php" class="btn btn-igd-green w-100"><i class="bi bi-arrow-right"></i> Voir le programme</a>
        </div>
      </div>
    </div>

    <!-- PYPA -->
    <div class="col-md-6 col-xl-4 program-item" data-status="en-cours" data-title="Program for Young Politicians in Africa PYPA">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div class="d-flex align-items-center gap-3">
            <div class="program-logo">
              <img src="images/logo-PYPA.png" alt="PYPA">
            </div>
            <div>
              <div class="d-flex align-items-center gap-2">
                <h5 class="mb-0">PYPA</h5>
                <span class="badge badge-encours"><i class="bi bi-circle-fill me-1"></i>En cours</span>
              </div>
              <p class="text-muted mb-0 small">Renforcement des jeunes leaders politiques</p>
            </div>
          </div>
          <i class="bi bi-mortarboard-fill prog-icon"></i>
        </div>

        <p class="mt-3 text-muted">
          Préparer les jeunes à assumer un rôle de leader au service de la démocratie et de la bonne gouvernance,
          approfondir le dialogue interpartis et renforcer l’influence.
        </p>

        <div class="d-flex flex-wrap gap-2 mt-auto">
          <span class="chip"><i class="bi bi-globe-africa me-1"></i>Afrique de l’Ouest</span>
          <span class="chip"><i class="bi bi-calendar-event me-1"></i>Depuis 2012</span>
          <span class="chip"><i class="bi bi-people me-1"></i>+400 alumni</span>
        </div>

        <div class="mt-3 d-flex gap-2">
          <a href="programme-en-cours-program-for-young-politicians-in-africa.php" class="btn btn-igd-green w-100"><i class="bi bi-arrow-right"></i> Voir le programme</a>
        </div>
      </div>
    </div>

    <!-- SDEP Sahel -->
    <div class="col-md-6 col-xl-4 program-item" data-status="en-cours" data-title="SDEP Sahel">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div class="d-flex align-items-center gap-3">
            <div class="program-logo">
              <img src="images/logo-SDEP-Sahel.png" alt="SDEP-Sahel">
            </div>
            <div>
              <div class="d-flex align-items-center gap-2">
                <h5 class="mb-0">SDEP-Sahel</h5>
                <span class="badge badge-encours"><i class="bi bi-circle-fill me-1"></i>En cours</span>
              </div>
              <p class="text-muted mb-0 small">Recherche – sécurité, démocratisation & élites</p>
            </div>
          </div>
          <i class="bi bi-shield-lock-fill prog-icon"></i>
        </div>

        <p class="mt-3 text-muted">
          Étude comparative Burkina Faso, Niger, Nigéria sur les interactions entre stratégies des élites,
          démocratisation et défi sécuritaire.
        </p>

        <div class="d-flex flex-wrap gap-2 mt-auto">
          <span class="chip"><i class="bi bi-calendar-event me-1"></i>Depuis 2022</span>
          <span class="chip"><i class="bi bi-award me-1"></i>ESRC (UK)</span>
          <span class="chip"><i class="bi bi-buildings me-1"></i>Partenaires académiques</span>
        </div>

        <div class="mt-3 d-flex gap-2">
          <a href="programme-en-cours-politiques-securite-democratisation-elites-sahel.php" class="btn btn-igd-green w-100"><i class="bi bi-arrow-right"></i> Voir le programme</a>
        </div>
      </div>
    </div>

  </div>

  <!-- Terminés -->
  <div class="d-flex justify-content-between align-items-end mt-5 mb-3" id="termines">
    <h2 class="section-title mb-0">Programmes terminés</h2>
    <span class="text-muted small">4 programmes</span>
  </div>

  <div class="row g-4" id="gridTermines">

    <div class="col-md-6 col-xl-3 program-item" data-status="termine" data-title="Jeunes et transition au Burkina Faso">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="d-flex align-items-center gap-2">
              <h6 class="mb-0">Jeunes et transition au Burkina Faso</h6>
              <span class="badge badge-termine"><i class="bi bi-check2-circle me-1"></i>Terminé</span>
            </div>
            <p class="text-muted small mb-0">2016</p>
          </div>
          <i class="bi bi-megaphone-fill prog-icon"></i>
        </div>
        <p class="mt-3 text-muted mb-0">
          Accompagnement des jeunes pour une meilleure insertion dans la gouvernance politique :
          conférences, campagne médiatique, plaidoyer, concours, formations.
        </p>
        <div class="mt-3">
          <a href="programme-termine-jeunes-transition-au-burkina-faso.php" class="btn btn-igd-outline w-100">Voir</a>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-3 program-item" data-status="termine" data-title="Engageons-nous femmes en politique Bénin Maroc">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="d-flex align-items-center gap-2">
              <h6 class="mb-0">Engageons-nous : femmes en politique</h6>
              <span class="badge badge-termine"><i class="bi bi-check2-circle me-1"></i>Terminé</span>
            </div>
            <p class="text-muted small mb-0">2018–2021</p>
          </div>
          <i class="bi bi-person-hearts prog-icon"></i>
        </div>
        <p class="mt-3 text-muted mb-0">
          Formation de jeunes femmes au Bénin (genre, démocratie, leadership…). Renforcement du débat public
          et consolidation de l’engagement politique.
        </p>
        <div class="mt-3">
          <a href="programme-termine-engageons-nous-pour-plus-de-femmes-en-politique-au-benin-et-au-maroc.php" class="btn btn-igd-outline w-100">Voir</a>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-3 program-item" data-status="termine" data-title="Jeunes et résilience à l’injustice sociale">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="d-flex align-items-center gap-2">
              <h6 class="mb-0">Jeunes & résilience à l’injustice sociale</h6>
              <span class="badge badge-termine"><i class="bi bi-check2-circle me-1"></i>Terminé</span>
            </div>
            <p class="text-muted small mb-0">2017–2020</p>
          </div>
          <i class="bi bi-shield-exclamation prog-icon"></i>
        </div>
        <p class="mt-3 text-muted mb-0">
          Recherche & plaidoyer sur la résilience des jeunes : enquêtes, ateliers de restitution,
          publications et recommandations.
        </p>
        <div class="mt-3">
          <a href="programme-termine-jeunes-et-resilience-a-l-injustice-sociale.php" class="btn btn-igd-outline w-100">Voir</a>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-xl-3 program-item" data-status="termine" data-title="École des cadres des partis politiques">
      <div class="program-card2 h-100">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <div class="d-flex align-items-center gap-2">
              <h6 class="mb-0">École des cadres des partis politiques</h6>
              <span class="badge badge-termine"><i class="bi bi-check2-circle me-1"></i>Terminé</span>
            </div>
            <p class="text-muted small mb-0">2009–2011</p>
          </div>
          <i class="bi bi-mortarboard prog-icon"></i>
        </div>
        <p class="mt-3 text-muted mb-0">
          Plus de 120 leaders formés (leadership, démocratie, communication, planification, genre…).
          Base fondatrice des acquis du PYPA.
        </p>
        <div class="mt-3">
          <a href="programme-termine-projet-ecole-des-cadres-des-partis-politiques.php" class="btn btn-igd-outline w-100">Voir</a>
        </div>
      </div>
    </div>

  </div>

</section>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>

<!-- Script minimal de filtre/recherche -->
<script>
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
</script>
