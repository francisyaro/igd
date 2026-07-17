<?php
$page_title = "EWIP – IGD";
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
        <h1 class="page-title mb-2">Empowering Women in Politics (EWIP)</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item"><a href="programmes.html" class="breadcrumb-link">Programmes en cours</a></li>
            <li class="breadcrumb-item active" aria-current="page">EWIP</li>
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
      <h2 class="program-hero-title">Accroître la participation et l’influence des femmes en politique</h2>
      <p class="program-hero-sub">
        Mis en œuvre depuis <strong>2019</strong> par l’IGD avec la <strong>Fondation internationale du parti du centre suédois (CIS)</strong>,
        EWIP contribue au renforcement des capacités des femmes en politique et à une meilleure prise en compte de leurs besoins.
      </p>
      <div class="d-flex flex-wrap gap-2 mt-2">
        <span class="pill"><i class="bi bi-calendar2-check"></i> Depuis 2019</span>
        <span class="pill"><i class="bi bi-people"></i> Partenariat : IGD + CIS</span>
        <span class="pill"><i class="bi bi-cash-coin"></i> Financé par l’ASDI</span>
        <span class="pill"><i class="bi bi-geo-alt"></i> Burkina Faso & Togo</span>
      </div>
    </div>
  </div>

  <div class="row g-4 mt-4">

  <!-- Présentation + Objectifs -->
  <div class="col-lg-7">
    <div class="card-soft p-4 h-100">
      <h2 class="section-title">Présentation du programme</h2>
      <p>
        <strong>Empowering Women in Politics (EWIP)</strong> est un programme mis en œuvre par l’IGD depuis
        <strong>2019</strong> en partenariat avec la <strong>Fondation internationale du parti du centre suédois (CIS)</strong>.
      </p>
      <p>
        Le programme est financé par l’<strong>Agence suédoise de coopération au développement international (ASDI)</strong>
        et vise à accroître la participation et l’influence des femmes dans la vie politique en Afrique.
      </p>
      <p class="mb-0">
        EWIP intervient à travers le renforcement des capacités, le dialogue avec les partis politiques et
        les parties prenantes, ainsi que la sensibilisation de l’environnement social des femmes engagées
        en politique, afin de favoriser une meilleure prise en compte de leurs besoins et aspirations.
      </p>

      <hr class="my-4">

      <h2 class="section-title">Objectifs du programme</h2>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-bullseye"></i></div>
        <h6 class="fw-bold mb-1">Objectif général</h6>
        <p class="text-muted mb-0">
          Contribuer à accroître la participation et l’influence des femmes dans la vie politique
          dans les pays d’intervention du programme.
        </p>
      </div>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="card-soft p-3 hover h-100">
            <div class="feature-icon"><i class="bi bi-person-check"></i></div>
            <h6 class="fw-bold mb-1">Renforcement des capacités</h6>
            <p class="text-muted mb-0">
              Les capacités, les compétences et la confiance des femmes actives en politique sont renforcées.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card-soft p-3 hover h-100">
            <div class="feature-icon"><i class="bi bi-diagram-3"></i></div>
            <h6 class="fw-bold mb-1">Réceptivité des acteurs</h6>
            <p class="text-muted mb-0">
              Les partis politiques et autres parties prenantes deviennent plus réceptifs aux besoins spécifiques des femmes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Partenaires + Parties prenantes -->
  <div class="col-lg-5">
    <div class="card-soft p-4 h-100">
      <h2 class="section-title">Partenaires techniques et financiers</h2>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-people"></i></div>
        <h6 class="fw-bold mb-1">Partenaire technique</h6>
        <p class="text-muted mb-0">
          Fondation internationale du parti du centre suédois (<strong>CIS</strong>)
        </p>
      </div>

      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-cash-coin"></i></div>
        <h6 class="fw-bold mb-1">Partenaire financier</h6>
        <p class="text-muted mb-0">
          Agence suédoise de coopération au développement international (<strong>ASDI</strong>)
        </p>
      </div>

      <hr class="my-4">

      <h2 class="section-title">Parties prenantes</h2>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-person-lines-fill"></i></div>
        <h6 class="fw-bold mb-1">Femmes actives en politique</h6>
        <p class="text-muted mb-0">
          Principales bénéficiaires du programme, issues des partis politiques et engagées dans la vie publique.
        </p>
      </div>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-building"></i></div>
        <h6 class="fw-bold mb-1">Partis politiques</h6>
        <p class="text-muted mb-0">
          Acteurs institutionnels clés appelés à créer un environnement plus favorable à la participation des femmes.
        </p>
      </div>

      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-people-fill"></i></div>
        <h6 class="fw-bold mb-1">Entourage social et familial</h6>
        <p class="text-muted mb-0">
          Les maris et proches des femmes politiques sont mobilisés pour réduire les freins sociaux à leur engagement.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Activités + Couverture géographique -->
<div class="row g-4 mt-4">
  <div class="col-lg-6">
    <div class="card-soft p-4 h-100">
      <h2 class="section-title">Activités du programme</h2>

      <div class="row g-3">
        <div class="col-12">
          <div class="card-soft p-3 hover">
            <div class="feature-icon"><i class="bi bi-easel2"></i></div>
            <h6 class="fw-bold mb-1">Ateliers de formation</h6>
            <p class="text-muted mb-0">
              Renforcement des capacités sur le leadership, la communication politique et les compétences de terrain.
            </p>
          </div>
        </div>

        <div class="col-12">
          <div class="card-soft p-3 hover">
            <div class="feature-icon"><i class="bi bi-chat-dots"></i></div>
            <h6 class="fw-bold mb-1">Dialogue avec les partis</h6>
            <p class="text-muted mb-0">
              Échanges avec les leaders des partis politiques et autres parties prenantes sur les besoins spécifiques des femmes.
            </p>
          </div>
        </div>

        <div class="col-12">
          <div class="card-soft p-3 hover">
            <div class="feature-icon"><i class="bi bi-people-fill"></i></div>
            <h6 class="fw-bold mb-1">Dialogue social et familial</h6>
            <p class="text-muted mb-0">
              Dialogue avec les maris des femmes politiques afin de renforcer l’acceptation et l’appui à leur engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-6">
    <div class="card-soft p-4 h-100">
      <h2 class="section-title">Couverture géographique / zones d’intervention</h2>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-geo-alt"></i></div>
        <h6 class="fw-bold mb-1">Pays couverts</h6>
        <p class="text-muted mb-0">
          Le programme couvre actuellement le <strong>Burkina Faso</strong> et le <strong>Togo</strong>.
        </p>
      </div>

      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-globe-africa"></i></div>
        <h6 class="fw-bold mb-1">Portée stratégique</h6>
        <p class="text-muted mb-0">
          EWIP s’inscrit dans une dynamique plus large visant à accroître la participation politique des femmes
          dans plusieurs pays africains.
        </p>
      </div>

      <hr class="my-4">

      <h2 class="section-title">Impact attendu</h2>
      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-award"></i></div>
        <h6 class="fw-bold mb-1">Participation renforcée</h6>
        <p class="text-muted mb-0">
          Le programme contribue à renforcer la présence, la légitimité et l’influence des femmes dans les espaces
          de décision politique et dans les partis politiques.
        </p>
      </div>
    </div>
  </div>
</div>

</section>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>