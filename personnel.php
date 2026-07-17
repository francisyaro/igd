<?php
$page_title = "Personnel – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "personnel";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<!-- HERO INTERNE -->
<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Personnel</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Personnel</a></li>
            <li class="breadcrumb-item active" aria-current="page">À propos</li>
          </ol>
        </nav>
      </div>
      <div class="page-actions d-flex gap-2">
        <a href="programmes.php" class="btn btn-igd-green"><i class="bi bi-grid-3x3-gap"></i> Découvrir nos programmes</a>
        <a href="contact.php" class="btn btn-igd-outline"><i class="bi bi-envelope"></i> Nous contacter</a>
      </div>
    </div>
  </div>
</section>


<section class="container py-5">

  <!-- Directeur exécutif -->
  <div class="row g-4 align-items-start">
    <!-- Photo (à remplacer si tu as une vraie image) -->
    <div class="col-lg-4">
      <div class="card-soft p-3">
        <img src="images/Pr-Abdoul-Karim-SAIDOU-2.jpg" alt="Pr Abdoul Karim SAIDOU" class="profile-photo">
        <div class="mt-3 d-flex flex-wrap gap-2">
          <span class="profile-badge"><i class="bi bi-person-badge"></i> Directeur exécutif</span>
          <span class="profile-badge"><i class="bi bi-calendar2-check"></i> Depuis 2019</span>
        </div>
      </div>
    </div>

    <!-- Bio -->
    <div class="col-lg-8">
      <div class="card-soft p-4">
        <h2 class="section-title">Le directeur exécutif de l’IGD</h2>

        <h5 class="fw-bold mb-2">Pr Abdoul Karim SAIDOU</h5>
        <p class="text-muted mb-3">
          Agrégé de science politique et Maître de conférences (CAMES) – Université Thomas Sankara (Burkina Faso)
        </p>

        <p class="mb-3">
          Depuis 2019, le Directeur exécutif de l’IGD est le <strong>Pr Abdoul Karim SAIDOU</strong>. Il est responsable scientifique
          du <strong>Master recherche en science politique</strong> et chef de l’équipe de recherche <strong>sociologie politique et action publique</strong>
          au sein du Laboratoire de droit et de science politique de l’Université Thomas Sankara.
        </p>

        <p class="mb-3">
          Outre l’Université Thomas Sankara, il est enseignant associé/vacataire dans plusieurs universités :
          Université Joseph-Ki Zerbo (Burkina Faso), Université Abdou Moumouni de Niamey (Niger) et Université de Lomé (Togo).
        </p>

        <p class="mb-0">
          Diplômé de l’Ahmadu Bello University (Nigeria – BSc Science politique) et de l’Université Thomas Sankara (DEA & thèse),
          il a soutenu en 2014 une thèse sur les trajectoires de reconversion d’ex-chefs rebelles touaregs et toubou dans les partis politiques au Niger.
          Ses travaux portent sur les politiques publiques de sécurité, l’État et la démocratie au Sahel (Niger, Mali, Burkina Faso).
        </p>
      </div>

      <!-- Points clés (cartes horizontales) -->
      <div class="row g-3 mt-3">
        <div class="col-md-4">
          <div class="value-card">
            <div class="value-icon"><i class="bi bi-mortarboard"></i></div>
            <div class="value-title">Enseignement</div>
            <p class="value-sub">Universités : UTS, UJKZ, Niamey, Lomé</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="value-card">
            <div class="value-icon"><i class="bi bi-search"></i></div>
            <div class="value-title">Recherche</div>
            <p class="value-sub">Sécurité, État, démocratie au Sahel</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="value-card">
            <div class="value-icon"><i class="bi bi-globe2"></i></div>
            <div class="value-title">Réseaux</div>
            <p class="value-sub">GRIP (Bruxelles) • V-Dem (Gothenburg)</p>
          </div>
        </div>
      </div>

      <!-- Parcours IGD + Timeline -->
      <div class="card-soft p-4 mt-3">
        <h2 class="section-title">Parcours au sein de l’IGD</h2>
        <p class="mb-3">
          Le Pr Saidou travaille à l’IGD depuis 2009. Il a notamment été coordonnateur de projets structurants et continue de contribuer
          à la consolidation des programmes de renforcement des capacités.
        </p>

        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">2009 – 2011</div>
            <div class="text-muted-2">Coordonnateur du projet « École des cadres des partis politiques »</div>
          </div>

          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">2012 – 2022</div>
            <div class="text-muted-2">Coordonnateur du programme « Program for Young Politicians in Africa (PYPA) »</div>
          </div>

          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">Depuis 2019</div>
            <div class="text-muted-2">Directeur exécutif de l’IGD</div>
          </div>

          <div class="timeline-item">
            <span class="timeline-dot"></span>
            <div class="timeline-date">Depuis 2015</div>
            <div class="text-muted-2">Coordonnateur régional (Afrique de l’Ouest) – Variety of Democracy (V-Dem)</div>
          </div>
        </div>

        <hr class="my-4">

        <ul class="list-check">
          <li><i class="bi bi-check-circle-fill"></i> Chercheur associé au <strong>GRIP</strong> (Bruxelles)</li>
          <li><i class="bi bi-check-circle-fill"></i> Responsable scientifique du <strong>Master recherche</strong> en science politique</li>
          <li><i class="bi bi-check-circle-fill"></i> Chef d’équipe : <strong>sociologie politique & action publique</strong></li>
        </ul>
      </div>

    </div>
  </div>

  <!-- Stats équipe -->
  <div class="mt-5">
    <h2 class="section-title">Le staff technique de l’IGD</h2>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="card-soft p-4 text-center h-100">
          <div class="stat-icon"><i class="bi bi-people"></i></div>
          <p class="stat-number">14</p>
          <p class="text-muted mb-0">Personnes dans l’équipe</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-soft p-4 text-center h-100">
          <div class="stat-icon"><i class="bi bi-gender-female"></i></div>
          <p class="stat-number">8</p>
          <p class="text-muted mb-0">Femmes dans l’équipe</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-soft p-4 text-center h-100">
          <div class="stat-icon"><i class="bi bi-person-lines-fill"></i></div>
          <p class="stat-number">~20</p>
          <p class="text-muted mb-0">Formateurs / experts (répertoire)</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Organisation & départements -->
  <div class="row g-4 mt-4">
    <div class="col-lg-6">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Organisation</h2>
        <p class="mb-3">
          L’IGD est administré par un <strong>Conseil d’administration (CA)</strong> qui définit les orientations stratégiques de l’Institut,
          et dirigé par un <strong>Directeur exécutif</strong>. Le pilotage managérial repose sur une structuration légère, avec le Directeur
          exécutif au centre, appuyé par des départements techniques et financiers.
        </p>
        <p class="mb-0">
          Le Directeur exécutif coordonne et met en œuvre les activités conformément aux orientations du CA.
        </p>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card-soft p-4 h-100">
        <h2 class="section-title">Équipe & appuis</h2>
        <p class="mb-3">
          L’IGD dispose d’une équipe technique en charge des finances et de l’administration, de la coordination des projets,
          du suivi-évaluation et de la planification, ainsi que des assistants de projets.
        </p>
        <p class="mb-0">
          L’Institut fait également appel à l’expertise externe lorsque cela est pertinent et efficient, en s’appuyant sur un répertoire
          d’experts issus de plusieurs pays d’Afrique de l’Ouest.
        </p>
      </div>
    </div>
  </div>

  <!-- Départements (cards) -->
  <div class="mt-4">
    <div class="row g-4">
      <div class="col-md-6 col-lg-3">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-cash-coin"></i></div>
          <div class="value-title">Finances</div>
          <p class="value-sub">Gestion budgétaire, comptabilité, reporting</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-kanban"></i></div>
          <div class="value-title">Projets</div>
          <p class="value-sub">Coordination, mise en œuvre, partenariats</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-graph-up-arrow"></i></div>
          <div class="value-title">Suivi-évaluation</div>
          <p class="value-sub">Indicateurs, résultats, apprentissage</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-3">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-calendar2-week"></i></div>
          <div class="value-title">Planification</div>
          <p class="value-sub">Programmation, cohérence et priorisation</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-4">
      <a href="contact.html" class="btn btn-igd-green"><i class="bi bi-envelope"></i> Contacter l’IGD</a>
      <a href="a-propos.html" class="btn btn-igd-outline ms-2"><i class="bi bi-info-circle"></i> En savoir plus</a>
    </div>
  </div>

</section>


<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>
