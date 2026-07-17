<?php
$page_title = "PJL – IGD";
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
          <h1 class="page-title mb-2">Projet Jeunes Leaders (PJL)</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
              <li class="breadcrumb-item"><a href="programmes.html" class="breadcrumb-link">Programmes en cours</a></li>
              <li class="breadcrumb-item active" aria-current="page">PJL</li>
            </ol>
          </nav>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <a href="programmes.php" class="btn btn-igd-outline"><i class="bi bi-arrow-left"></i> Retour aux programmes</a>
          <a href="#inscription" class="btn btn-igd-green"><i class="bi bi-pencil-square"></i> Candidater</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTENT -->
  <section class="container py-5">

    <!-- Banner / résumé -->
    <div class="program-hero card-soft mb-4">
      <div class="program-hero-content">
        <h2 class="program-hero-title">Former une génération de jeunes leaders engagés</h2>
        <p class="program-hero-sub">
          Mis en œuvre depuis <strong>novembre 2022</strong> avec la <strong>Fondation Hirondelle</strong>, le PJL vise à renforcer la démocratie
          et l’inclusion citoyenne des jeunes au Burkina Faso, grâce à un parcours combinant formation, coaching et immersion.
        </p>
        <div class="d-flex flex-wrap gap-2 mt-2">
          <span class="pill"><i class="bi bi-calendar2-check"></i> 2022 → 3 ans</span>
          <span class="pill"><i class="bi bi-building"></i> Fondation Hirondelle + IGD</span>
          <span class="pill"><i class="bi bi-flag"></i> Burkina Faso</span>
          <span class="pill"><i class="bi bi-cash-coin"></i> Financé par l’UE</span>
        </div>
      </div>
    </div>

    <!-- Chiffres clés -->
    <div class="row g-4 mt-4">

  <!-- Présentation + Objectifs -->
  <div class="col-lg-7">
    <div class="card-soft p-4 h-100">
      <h2 class="section-title">Présentation du programme</h2>
      <p>
        Le <strong>Projet Jeunes Leaders (PJL)</strong> est mis en œuvre depuis <strong>novembre 2022</strong> par
        l’<strong>Institut Général Tiémoko Marc Garango (IGD)</strong> en partenariat avec la
        <strong>Fondation Hirondelle</strong>.
      </p>
      <p>
        Le projet est financé par l’<strong>Union européenne</strong> pour une durée de <strong>trois ans</strong>
        et vise à renforcer la démocratie et l’inclusion citoyenne des jeunes au Burkina Faso.
      </p>
      <p class="mb-0">
        À travers des activités de formation, de coaching personnalisé et de voyage d’étude, le PJL accompagne
        l’émergence d’une nouvelle génération de jeunes leaders capables d’impacter positivement leur société
        dans différents domaines tels que l’entrepreneuriat, la citoyenneté, le sport, la culture et l’engagement public.
      </p>

      <hr class="my-4">

      <h2 class="section-title">Objectifs du programme</h2>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-bullseye"></i></div>
        <h6 class="fw-bold mb-1">Objectif général</h6>
        <p class="text-muted mb-0">
          Contribuer au renforcement de la démocratie et de l’inclusion citoyenne des jeunes au Burkina Faso.
        </p>
      </div>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="card-soft p-3 hover h-100">
            <div class="feature-icon"><i class="bi bi-award"></i></div>
            <h6 class="fw-bold mb-1">Développement du leadership</h6>
            <p class="text-muted mb-0">
              Renforcer les capacités des jeunes à exercer un leadership responsable et engagé dans la vie publique.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card-soft p-3 hover h-100">
            <div class="feature-icon"><i class="bi bi-lightbulb"></i></div>
            <h6 class="fw-bold mb-1">Soutien aux initiatives</h6>
            <p class="text-muted mb-0">
              Accompagner la concrétisation de projets portés par les jeunes dans des domaines d’intérêt collectif.
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
          Fondation Hirondelle
        </p>
      </div>

      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-cash-coin"></i></div>
        <h6 class="fw-bold mb-1">Partenaire financier</h6>
        <p class="text-muted mb-0">
          Union européenne
        </p>
      </div>

      <hr class="my-4">

      <h2 class="section-title">Parties prenantes</h2>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-person-badge"></i></div>
        <h6 class="fw-bold mb-1">Jeunes bénéficiaires</h6>
        <p class="text-muted mb-0">
          Quinze jeunes sont recrutés chaque année sur appel à candidatures pour participer au programme.
        </p>
      </div>

      <div class="card-soft p-3 hover mb-3">
        <div class="feature-icon"><i class="bi bi-person-hearts"></i></div>
        <h6 class="fw-bold mb-1">Coachs / mentors</h6>
        <p class="text-muted mb-0">
          Des personnalités compétentes et expérimentées accompagnent individuellement les jeunes sélectionnés.
        </p>
      </div>

      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-building"></i></div>
        <h6 class="fw-bold mb-1">Écosystème d’appui</h6>
        <p class="text-muted mb-0">
          Le programme mobilise différents acteurs institutionnels et sociaux autour du leadership des jeunes.
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
              Sessions pratiques sur le leadership, l’engagement citoyen, la prise de parole et les outils d’action publique.
            </p>
          </div>
        </div>

        <div class="col-12">
          <div class="card-soft p-3 hover">
            <div class="feature-icon"><i class="bi bi-person-hearts"></i></div>
            <h6 class="fw-bold mb-1">Coaching individuel</h6>
            <p class="text-muted mb-0">
              Accompagnement personnalisé de chaque participant par un mentor expérimenté.
            </p>
          </div>
        </div>

        <div class="col-12">
          <div class="card-soft p-3 hover">
            <div class="feature-icon"><i class="bi bi-airplane"></i></div>
            <h6 class="fw-bold mb-1">Voyage d’étude</h6>
            <p class="text-muted mb-0">
              Immersion hors du Burkina Faso pour apprendre d’autres expériences et élargir les perspectives.
            </p>
          </div>
        </div>

        <div class="col-12">
          <div class="card-soft p-3 hover">
            <div class="feature-icon"><i class="bi bi-lightbulb"></i></div>
            <h6 class="fw-bold mb-1">Mise en œuvre de projets</h6>
            <p class="text-muted mb-0">
              Appui aux jeunes pour concrétiser des initiatives à impact dans leurs domaines d’engagement.
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
        <h6 class="fw-bold mb-1">Zone principale d’intervention</h6>
        <p class="text-muted mb-0">
          Le programme est mis en œuvre au <strong>Burkina Faso</strong>.
        </p>
      </div>

      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-globe"></i></div>
        <h6 class="fw-bold mb-1">Ouverture internationale</h6>
        <p class="text-muted mb-0">
          Des voyages d’étude hors du Burkina Faso permettent une ouverture à d’autres contextes et pratiques.
        </p>
      </div>

      <hr class="my-4">

      <h2 class="section-title">Impact attendu</h2>
      <div class="card-soft p-3 hover">
        <div class="feature-icon"><i class="bi bi-stars"></i></div>
        <h6 class="fw-bold mb-1">Émergence de jeunes leaders</h6>
        <p class="text-muted mb-0">
          Le PJL vise à faire émerger une génération de jeunes leaders capables d’influencer positivement leur société
          et de contribuer à la consolidation de la démocratie et de l’inclusion citoyenne.
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