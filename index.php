<?php
$page_title = "Accueil – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "accueil";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<!-- Hero Carousel -->
<div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style="background-image:url('images/hero1.jpg');">
      <div class="carousel-caption">
        <h1>Remise des attestations – Conférence régionale sur la participation des femmes</h1>
      </div>
    </div>
    <div class="carousel-item" style="background-image:url('images/hero2.jpg');">
      <div class="carousel-caption">
        <h1>Conférence régionale sur la participation des femmes en Afrique</h1>
      </div>
    </div>
  </div>
</div>

<!-- NOS PROGRAMMES -->
<section class="container py-5">
  <h2 class="section-title">Nos Programmes</h2>
  <div class="row g-4">

    <!-- PJL -->
    <div class="col-md-4">
      <a href="programme-en-cours-projet-jeunes-leaders.php" class="program-link h-100 d-block">
        <div class="program-card h-100 text-center">
          <img src="images/Logo-Jeunes-Leaders.png" class="img-fluid mb-3" style="max-height: 90px;" alt="PJL">
          <h5>Projet Jeunes Leaders (PJL)</h5>
          <p>Programme financé par l’Union européenne visant à renforcer la démocratie et le leadership citoyen des jeunes au Burkina Faso à travers formations, coaching et voyages d’étude.</p>
        </div>
      </a>
    </div>

    <!-- Afrobarometer -->
    <div class="col-md-4">
      <a href="programme-en-cours-afrobarometer.php" class="program-link h-100 d-block">
        <div class="program-card h-100 text-center">
          <img src="images/logo-afrobarometer.png" class="img-fluid mb-3" style="max-height: 90px;" alt="Afrobarometer">
          <h5>Afrobarometer</h5>
          <p>Programme d’enquêtes d’opinion publique permettant de comprendre les perceptions des citoyens sur la démocratie, la gouvernance et la qualité de vie au Burkina Faso.</p>
        </div>
      </a>
    </div>

    <!-- EWIP -->
    <div class="col-md-4">
      <a href="programme-en-cours-empowering-women-in-politics.php" class="program-link h-100 d-block">
        <div class="program-card h-100 text-center">
          <img src="images/logo-EWIP.png" class="img-fluid mb-3" style="max-height: 110px;" alt="EWIP">
          <h5>Empowering Women in Politics (EWIP)</h5>
          <p>Programme régional axé sur le leadership féminin en politique, renforçant les capacités des femmes et favorisant leur participation active dans la gouvernance.</p>
        </div>
      </a>
    </div>

    <!-- Refonder la Gouvernance -->
    <div class="col-md-4">
      <a href="programme-en-cours-refonder-la-gouvernance.php" class="program-link h-100 d-block">
        <div class="program-card h-100 text-center">
          <img src="images/diakonia-logo.jpg" class="img-fluid mb-3" style="max-height: 90px;" alt="Refonder la gouvernance">
          <h5>Refonder la gouvernance</h5>
          <p>Programme soutenu par Diakonia visant à promouvoir une gouvernance inclusive, responsable et égalitaire, notamment via études, ateliers et engagement citoyen.</p>
        </div>
      </a>
    </div>

    <!-- PYPA -->
    <div class="col-md-4">
      <a href="programme-en-cours-program-for-young-politicians-in-africa.php" class="program-link h-100 d-block">
        <div class="program-card h-100 text-center">
          <img src="images/logo-PYPA.png" class="img-fluid mb-3" style="max-height: 90px;" alt="PYPA">
          <h5>Program for Young Politicians in Africa (PYPA)</h5>
          <p>Programme panafricain formant de jeunes leaders politiques dans plusieurs pays afin de renforcer la gouvernance démocratique et le dialogue interpartis.</p>
        </div>
      </a>
    </div>

    <!-- SDEP-Sahel -->
    <div class="col-md-4">
      <a href="programme-en-cours-politiques-securite-democratisation-elites-sahel.php" class="program-link h-100 d-block">
        <div class="program-card h-100 text-center">
          <img src="images/logo-SDEP-Sahel.png" class="img-fluid mb-3" style="max-height: 90px;" alt="SDEP-Sahel">
          <h5>SDEP-Sahel</h5>
          <p>Projet de recherche comparatif sur les élites, la sécurité et la démocratisation au Sahel, impliquant plusieurs institutions africaines et européennes.</p>
        </div>
      </a>
    </div>

    <!-- WYDE – Political Parties -->
  <div class="col-md-4">
    <a href="programme-en-cours-wyde-political-parties.php" class="text-decoration-none text-dark">
      <div class="program-card h-100 text-center">
        <img 
          src="images/Logo-WYDE.png" 
          class="img-fluid mb-3" 
          style="max-height: 90px;"
          alt="WYDE – Women and Youth Democratic Engagement">
        
        <h5>WYDE – Political Parties</h5>
        
        <p>
          Programme financé par l’Union européenne et dirigé par ENoP, visant à renforcer
          la participation des femmes et des jeunes dans les processus politiques en Afrique
          de l’Est et de l’Ouest à travers formations, mentorat et plaidoyer.
        </p>

        <span class="badge bg-success">En cours</span>
      </div>
    </a>
  </div>


  </div>

  <div class="text-center mt-4">
    <a href="programmes.php" class="btn btn-igd-green">Voir tous les programmes</a>
  </div>
</section>





<!-- PUBLICATIONS -->
<section class="container py-5">
  <h2 class="section-title">Publications récentes</h2>
  <div class="row g-4">
    <div class="col-md-4">
      <div class="publication-card">
        <i class="bi bi-file-earmark-pdf"></i>
        <h5>Rapport annuel 2024</h5>
        <p>Découvrez les principales réalisations de l’année 2024.</p>
        <a href="docs/rapport-annuel-2024.pdf" class="btn btn-outline-danger btn-sm" download>Télécharger</a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="publication-card">
        <i class="bi bi-journal-text"></i>
        <h5>Étude sur la Gouvernance</h5>
        <p>Analyse de l’impact des politiques publiques sur la gouvernance démocratique.</p>
        <a href="docs/etude-gouvernance.pdf" class="btn btn-outline-danger btn-sm" download>Télécharger</a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="publication-card">
        <i class="bi bi-file-earmark-bar-graph"></i>
        <h5>Bulletin d’information</h5>
        <p>Les actualités trimestrielles du développement et de la participation citoyenne.</p>
        <a href="docs/bulletin-igd.pdf" class="btn btn-outline-danger btn-sm" download>Télécharger</a>
      </div>
    </div>
  </div>
  <div class="text-center mt-4">
    <a href="#" class="btn btn-igd">Voir toutes les publications</a>
  </div>
</section>

<!-- Section Actualités -->
<section class="container py-5">
  <h2 class="section-title">Actualités récentes</h2>
  <div class="row g-4 align-items-stretch">
    <div class="col-md-4 d-flex">
      <div class="card news-card flex-fill">
        <img src="images/news1.jpg" class="card-img-top" alt="News 1">
        <div class="card-body">
          <h5 class="card-title">Session de formation WYDE à Abidjan</h5>
          <p class="card-text">Une trentaine de jeunes et de femmes venus de Côte d’Ivoire et du Sénégal ont participé à la session de formation WYDE.</p>
          <a href="actualite-detail.html" class="btn btn-outline-danger btn-sm">Lire plus</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="card news-card flex-fill">
        <img src="images/news2.jpg" class="card-img-top" alt="News 2">
        <div class="card-body">
          <h5 class="card-title">Jeunes leaders</h5>
          <p class="card-text">Première session de formation de la troisième cohorte du projet "Jeunes Leaders".</p>
          <a href="actualite-detail.html" class="btn btn-outline-danger btn-sm">Lire plus</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 d-flex">
      <div class="card news-card flex-fill">
        <img src="images/news3.jpg" class="card-img-top" alt="News 3">
        <div class="card-body">
          <h5 class="card-title">Citoyen FEMIN-IN</h5>
          <p class="card-text">Cérémonie de clôture et lancement de la cohorte 2025 de l’Incubateur Politique Citoyen FEMIN-IN.</p>
          <a href="actualite-detail.html" class="btn btn-outline-danger btn-sm">Lire plus</a>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mt-4">
  <a href="actualites.html" class="btn btn-igd-green">Voir toutes les actualités</a>
</div>

</section>

<!-- PARTENAIRES -->
<section class="partners text-center">
  <div class="container">
    <h2 class="section-title text-start">Nos Partenaires</h2>

    <div class="partners-carousel">
      <div class="partners-track">

        <!-- Logos (doublés pour boucle fluide) -->

        <img src="images/cis.png" class="partner-logo" alt="CIS">
        <img src="images/diakonia-logo.jpg" class="partner-logo" alt="Diakonia">
        <img src="images/eu.png" class="partner-logo" alt="Union Européenne">

        <!-- DUPLICATION POUR BOUCLE -->
        <img src="images/fondation-hirondelle.png" class="partner-logo" alt="CIS">
        <img src="images/diakonia-logo.jpg" class="partner-logo" alt="Diakonia">
        <img src="images/eu.png" class="partner-logo" alt="Union Européenne">

      </div>
    </div>

  </div>
</section>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>
