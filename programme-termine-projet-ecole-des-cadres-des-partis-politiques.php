<?php
$page_title = "Ecole des cadres des partis politiques – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "programmes";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<!-- HERO INTERNE -->

<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Ecole des cadres des partis politiques</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item"><a href="programmes-termines.html" class="breadcrumb-link">Programmes terminés</a></li>
            <li class="breadcrumb-item active" aria-current="page">Ecole des cadres</li>
          </ol>
        </nav>
      </div>
      <div class="d-flex gap-2 flex-wrap">
        <a href="programmes.php" class="btn btn-sm btn-light"><i class="bi bi-arrow-left"></i> Retour</a>
      </div>
    </div>
  </div>
</section>

<section class="container py-5">

  <div class="program-hero card-soft mb-4">
    <div class="program-hero-content">
      <h2 class="program-hero-title">Renforcement des capacités des leaders politiques</h2>
      <p class="program-hero-sub">
        Projet mis en œuvre par l’IGD avec la <strong>Fondation CIS</strong> de <strong>2009 à 2011</strong> au Niger,
        au Mali, au Burkina Faso et au Bénin. Financé par l’<strong>ASDI</strong>, il a renforcé les capacités
        des leaders des partis sur les enjeux de la <strong>gouvernance démocratique</strong>.
      </p>
      <div class="d-flex flex-wrap gap-2 mt-2">
        <span class="pill"><i class="bi bi-calendar2-range"></i> 2009–2011</span>
        <span class="pill"><i class="bi bi-geo-alt"></i> Niger • Mali • Burkina • Bénin</span>
        <span class="pill"><i class="bi bi-cash-coin"></i> ASDI</span>
        <span class="pill"><i class="bi bi-diagram-3"></i> Partenariat : IGD + CIS</span>
      </div>
    </div>
  </div>

  <!-- Chiffres clés -->
  <div class="row g-4">
    <div class="col-md-4">
      <div class="card-soft p-4 text-center h-100">
        <div class="stat-icon"><i class="bi bi-people"></i></div>
        <p class="stat-number">120+</p>
        <p class="text-muted mb-0">Leaders formés</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card-soft p-4 text-center h-100">
        <div class="stat-icon"><i class="bi bi-globe2"></i></div>
        <p class="stat-number">4</p>
        <p class="text-muted mb-0">Pays couverts</p>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card-soft p-4 text-center h-100">
        <div class="stat-icon"><i class="bi bi-journal-bookmark"></i></div>
        <p class="stat-number">1</p>
        <p class="text-muted mb-0">Manuel de formation</p>
      </div>
    </div>
  </div>

  <div class="row g-4 mt-4">
    <div class="col-lg-7">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Objectif</h2>
        <p class="mb-0">
          Contribuer au renforcement des capacités des leaders de partis politiques de la région sur les
          problématiques de la gouvernance démocratique, à travers des formations structurées et un cadre
          pédagogique commun.
        </p>

        <hr class="my-4">

        <h2 class="section-title">Approche</h2>
        <div class="row g-3">
          <div class="col-md-6">
            <div class="card-soft p-3 hover h-100">
              <div class="feature-icon"><i class="bi bi-journal-text"></i></div>
              <h6 class="fw-bold mb-1">Manuel participatif</h6>
              <p class="text-muted mb-0">Un manuel élaboré de manière participative a servi de base commune.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-soft p-3 hover h-100">
              <div class="feature-icon"><i class="bi bi-people-fill"></i></div>
              <h6 class="fw-bold mb-1">Réseau de formateurs</h6>
              <p class="text-muted mb-0">Formateurs issus des pays couverts, avec groupes nationaux dédiés.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="col-lg-5">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Modules de formation</h2>

        <div class="row g-3">
          <div class="col-12">
            <div class="card-soft p-3 hover">
              <div class="feature-icon"><i class="bi bi-person-badge"></i></div>
              <h6 class="fw-bold mb-1">Leadership & démocratie</h6>
              <p class="text-muted mb-0">Renforcer les compétences de leadership démocratique.</p>
            </div>
          </div>

          <div class="col-12">
            <div class="card-soft p-3 hover">
              <div class="feature-icon"><i class="bi bi-megaphone"></i></div>
              <h6 class="fw-bold mb-1">Communication politique</h6>
              <p class="text-muted mb-0">Messages, stratégies, relation aux citoyens et médias.</p>
            </div>
          </div>

          <div class="col-12">
            <div class="card-soft p-3 hover">
              <div class="feature-icon"><i class="bi bi-diagram-3"></i></div>
              <h6 class="fw-bold mb-1">Planification stratégique</h6>
              <p class="text-muted mb-0">Organisation interne, feuille de route et pilotage.</p>
            </div>
          </div>

          <div class="col-12">
            <div class="card-soft p-3 hover">
              <div class="feature-icon"><i class="bi bi-gender-ambiguous"></i></div>
              <h6 class="fw-bold mb-1">Genre & bonne gouvernance</h6>
              <p class="text-muted mb-0">Inclusion, transparence, principes de gouvernance.</p>
            </div>
          </div>
        </div>

        <hr class="my-4">

        <div class="card-soft p-3">
          <div class="d-flex align-items-start gap-3">
            <div class="feature-icon mb-0"><i class="bi bi-lightbulb"></i></div>
            <div>
              <h6 class="fw-bold mb-1">Héritage</h6>
              <p class="text-muted mb-0">
                Le <strong>PYPA</strong> a été élaboré en s’appuyant sur les acquis enregistrés dans le cadre de ce projet.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="mt-5">
    <h2 class="section-title">Chronologie</h2>
    <div class="card-soft p-4">
      <div class="timeline">
        <div class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-title">2009 – Démarrage & structuration</div>
          <p class="timeline-text">Lancement du partenariat IGD–CIS et constitution des groupes nationaux de formateurs.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-title">2010 – Déploiement des formations</div>
          <p class="timeline-text">Sessions dans les 4 pays sur la base du manuel conjointement élaboré.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-title">2011 – Consolidation & capitalisation</div>
          <p class="timeline-text">Capitalisation des acquis, qui ont servi de fondations pour le développement du PYPA.</p>
        </div>
      </div>
    </div>
  </div>

</section>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>
