<?php
$page_title = "A propos – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "contact";
include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<!-- HERO INTERNE -->
<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">À propos</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item active" aria-current="page">À propos</li>
          </ol>
        </nav>
      </div>
      <div class="page-actions d-flex gap-2">
        <a href="programmes.html" class="btn btn-igd-green"><i class="bi bi-grid-3x3-gap"></i> Découvrir nos programmes</a>
        <a href="contact.html" class="btn btn-igd-outline"><i class="bi bi-envelope"></i> Nous contacter</a>
      </div>
    </div>
  </div>
</section>

<!-- CONTENU -->
<section class="container py-5">

  <!-- Intro + image -->
  <div class="row g-4 align-items-center">
    <div class="col-lg-6">
      <div class="card-soft p-4">
        <h2 class="section-title">Qui sommes-nous ?</h2>
        <p class="mb-3">
          L’Institut Général Tiémoko Marc Garango pour la Gouvernance et le Développement (IGD) est un organisme
          non gouvernemental de droit burkinabè, à vocation régionale, spécialisé dans les domaines de la gouvernance,
          du droit et du développement.
        </p>
        <p class="mb-0">
          Son siège est situé à <strong>Ouagadougou, Cité Azimmo (Ouaga 2000)</strong>.
          Le réseau de l’Institut dépasse les frontières du Burkina Faso et couvre l’Afrique de l’Ouest francophone
          (Burkina Faso, Bénin, Côte d’Ivoire, Mali, Niger, Sénégal, Togo).
        </p>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card-soft overflow-hidden">
        <img src="images/hero2.jpg" alt="IGD" class="img-fluid" style="height:320px; width:100%; object-fit:cover;">
      </div>
    </div>
  </div>

  <!-- Chiffres clés -->
  <div class="mt-4">
    <h2 class="section-title">Chiffres clés</h2>
    <div class="row g-4">
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100 card-soft hover">
          <div class="stat-icon"><i class="bi bi-people"></i></div>
          <p class="stat-number">~400</p>
          <p class="text-muted mb-0">Alumni (jeunes & femmes)</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100 card-soft hover">
          <div class="stat-icon"><i class="bi bi-globe-africa"></i></div>
          <p class="stat-number">7</p>
          <p class="text-muted mb-0">Pays couverts</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100 card-soft hover">
          <div class="stat-icon"><i class="bi bi-calendar2-check"></i></div>
          <p class="stat-number">2008</p>
          <p class="text-muted mb-0">Reconnaissance officielle</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100 card-soft hover">
          <div class="stat-icon"><i class="bi bi-handshake"></i></div>
          <p class="stat-number">+</p>
          <p class="text-muted mb-0">Partenariats stratégiques</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Origine + Timeline -->
  <div class="row g-4 mt-5">
    <div class="col-lg-6">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Origine et création</h2>
        <p class="mb-3">
          La naissance de l’Institut est l’aboutissement d’un processus de consultation de partis politiques de la sous-région
          sur le projet de création d’une école de formation des élites politiques.
        </p>
        <p class="mb-0">
          Cette consultation, menée fin 2007 par un groupe d’enseignants-chercheurs au Burkina Faso, au Bénin, au Mali et au Niger,
          a conduit à la création d’un projet dénommé « École des partis politiques ». Dans ce contexte de renforcement de la démocratie
          par la formation des élites, l’IGD a été créé et officiellement reconnu en 2008.
        </p>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Repères</h2>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">Fin 2007</div>
            <div class="text-muted-2">Consultations sous-régionales et lancement du projet « École des partis politiques ».</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">2008</div>
            <div class="text-muted-2">Création et reconnaissance officielle de l’IGD.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">2009</div>
            <div class="text-muted-2">Choix de porter le nom de Tiémoko Marc Garango.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">31 déc. 2010</div>
            <div class="text-muted-2">Décision consacrée par récépissé n°2010-872 du Ministère chargé de l’Administration territoriale.</div>
          </div>
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">Jusqu’en 2019</div>
            <div class="text-muted-2">Direction assurée par le Pr Augustin Loada.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Vision / But -->
  <div class="mt-5">
    <div class="card-soft p-4">
      <h2 class="section-title">Notre ambition</h2>
      <p class="mb-0">
        Le but de l’Institut est de promouvoir les meilleures idées sur les grands défis politiques, sociaux et économiques du XXIᵉ siècle
        auxquels la jeunesse africaine, en particulier, est confrontée. Le travail de l’Institut est motivé par un réseau de décideurs et de
        chercheurs universitaires spécialisés sur les enjeux de long terme : gouvernance, politiques publiques, économie politique, attitudes sociales
        et affaires internationales, complété par l’expertise de l’équipe IGD.
      </p>
    </div>
  </div>

<!-- Tiémoko Marc Garango -->
<div class="mt-5">
  <div class="card-soft p-4">
    <h2 class="section-title">Tiémoko Marc Garango…</h2>

    <div class="row g-4 align-items-start">
      <!-- Photo -->
      <div class="col-lg-4">
        <div class="card-soft overflow-hidden h-100">
          <img
            src="images/marc-garango.jpg"
            alt="Général Tiémoko Marc Garango"
            class="img-fluid w-100"
            style="height: 320px; object-fit: cover;"
          >
        </div>
      </div>

      <!-- Texte + valeurs -->
      <div class="col-lg-8">
        <p class="mb-3">
          En 2009, l’Institut a choisi de porter le nom du général <strong>Tiémoko Marc Garango</strong> (1927-2015),
          une figure historique et politique au Burkina Faso. Par cette décision, consacrée par le récépissé
          n°2010-872 du 31 décembre 2010, les fondateurs de l’Institut ont voulu perpétuer les valeurs qu’il a portées
          et reconnaître sa contribution à la bonne gouvernance et au développement.
        </p>

        <p class="mb-4">
          Ancien diplômé de « Science-Po Aix », Ministre des Finances et du Commerce et Médiateur du Faso, il s’est distingué
          par son intégrité morale, son sens élevé du devoir et sa rigueur dans la conduite des affaires de l’État.
        </p>

        <!-- Cartes valeurs (alignées horizontalement) -->
        <div class="row g-3">
          <div class="col-md-4">
            <div class="value-card h-100">
              <i class="bi bi-shield-check" style="color:var(--igd-green); font-size:1.5rem;"></i>
              <div class="value-title">Intégrité morale</div>
              <div class="value-sub">Éthique, exemplarité</div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="value-card h-100">
              <i class="bi bi-award" style="color:var(--igd-green); font-size:1.5rem;"></i>
              <div class="value-title">Sens du devoir</div>
              <div class="value-sub">Service public</div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="value-card h-100">
              <i class="bi bi-rulers" style="color:var(--igd-green); font-size:1.5rem;"></i>
              <div class="value-title">Rigueur</div>
              <div class="value-sub">Gestion responsable</div>
            </div>
          </div>
        </div>
        <!-- /cartes valeurs -->
      </div>
    </div>
  </div>
</div>

  <!-- Gouvernance et organisation -->
  <div class="row g-4 mt-5">
    <div class="col-lg-6">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Gouvernance</h2>
        <p class="mb-2">
          L’Institut est administré par un <strong>Conseil d’administration (CA)</strong> composé de personnalités issues des pays ouest-africains.
        </p>
        <ul class="mb-0 text-muted-2">
          <li>Définit les orientations stratégiques de l’Institut</li>
          <li>Veille à leur mise en œuvre par la direction exécutive</li>
          <li>Désigne le président de l’Institut et nomme le Directeur exécutif</li>
        </ul>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Direction exécutive</h2>
        <p class="mb-3">
          La direction exécutive coordonne et met en œuvre les activités conformément aux orientations du CA, avec une équipe technique composée notamment de :
        </p>
        <div class="row g-3">
          <div class="col-6">
            <div class="card-soft p-3">
              <div class="fw-bold"><i class="bi bi-cash-coin me-2" style="color:var(--igd-red);"></i>Finances</div>
              <div class="text-muted-2">Gestion & reporting</div>
            </div>
          </div>
          <div class="col-6">
            <div class="card-soft p-3">
              <div class="fw-bold"><i class="bi bi-kanban me-2" style="color:var(--igd-red);"></i>Programmes</div>
              <div class="text-muted-2">Mise en œuvre</div>
            </div>
          </div>
          <div class="col-6">
            <div class="card-soft p-3">
              <div class="fw-bold"><i class="bi bi-graph-up-arrow me-2" style="color:var(--igd-red);"></i>Suivi-évaluation</div>
              <div class="text-muted-2">Planification</div>
            </div>
          </div>
          <div class="col-6">
            <div class="card-soft p-3">
              <div class="fw-bold"><i class="bi bi-mortarboard me-2" style="color:var(--igd-red);"></i>Recherche</div>
              <div class="text-muted-2">Experts & universitaires</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Partenariats & ressources -->
  <div class="mt-5">
    <div class="card-soft p-4">
      <h2 class="section-title">Partenariats, réseau et capacité opérationnelle</h2>
      <p class="mb-3">
        Depuis sa création, l’IGD a mis en œuvre plusieurs programmes de renforcement de capacités et de recherche en partenariat avec
        la Fondation internationale du parti du centre suédois (CIS), l’Union européenne, le GRIP (Bruxelles), Diakonia, etc.
      </p>
      <p class="mb-3">
        L’Institut travaille avec un large réseau d’alumni (environ 400 jeunes et femmes) issus du Sénégal, du Mali, du Niger, du Bénin,
        de la Côte d’Ivoire, du Burkina Faso et du Togo.
      </p>
      <p class="mb-0">
        L’IGD se singularise par ses activités de recherche et surtout de renforcement de capacités des acteurs de la gouvernance démocratique
        nationaux et sous-régionaux. L’Institut bénéficie de la confiance de partenaires financiers et a géré d’importantes ressources pour déployer
        ses activités au Burkina Faso et dans la sous-région ouest-africaine.
      </p>

      <div class="text-center mt-4">
        <a href="publications.html" class="btn btn-igd-green"><i class="bi bi-file-earmark-text"></i> Voir nos publications</a>
        <a href="actualites.html" class="btn btn-igd-outline ms-2"><i class="bi bi-newspaper"></i> Consulter les actualités</a>
      </div>
    </div>
  </div>

</section>


<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>