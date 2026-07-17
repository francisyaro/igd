<?php
$page_title = "Missions – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "missions";
include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<!-- HERO INTERNE -->
<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Mission</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Mission</a></li>
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

  <!-- Intro Mission + Vision -->
  <div class="row g-4 align-items-center">
    <div class="col-lg-6">
      <div class="card-soft p-4">
        <h2 class="section-title">Mission</h2>
        <p class="mb-3">
          L’IGD a pour mission de promouvoir la démocratie, les droits humains et le développement humain durable en Afrique.
          Ses objectifs stratégiques reposent sur le postulat selon lequel l’avenir du continent dépend des jeunes et des femmes
          engagés et attachés aux idéaux de démocratie et de droits humains.
        </p>
        <p class="mb-0">
          À cet effet, l’Institut met en œuvre une logique d’intervention scientifique afin d’offrir, au niveau national et régional,
          des programmes de renforcement des capacités et de production de connaissances.
        </p>

        <div class="d-flex flex-wrap gap-2 mt-4">
          <span class="pill"><i class="bi bi-shield-check"></i> Démocratie & droits humains</span>
          <span class="pill"><i class="bi bi-people"></i> Jeunes & femmes</span>
          <span class="pill"><i class="bi bi-journal-text"></i> Connaissances scientifiques</span>
          <span class="pill"><i class="bi bi-mortarboard"></i> Renforcement de capacités</span>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card-soft overflow-hidden">
        <!-- Remplace par une image réelle si tu veux (ex: atelier, conférence, formation) -->
        <img src="images/mission-IGD.jpg" alt="Mission IGD" class="img-fluid" style="height: 320px; width:100%; object-fit: cover;">
      </div>
    </div>
  </div>

  <!-- Vision -->
  <div class="mt-5">
    <div class="card-soft p-4">
      <h2 class="section-title">Vision</h2>
      <p class="mb-0">
        L’IGD a pour vision de <strong>devenir un institut de référence</strong>, qui influence le développement, la démocratisation,
        la sécurité et la stabilité des pays africains, ainsi que leur intégration, à travers le renforcement des capacités des jeunes
        et des femmes, la production de connaissances scientifiques, la création de réseaux et le plaidoyer.
      </p>
    </div>
  </div>

  <!-- Chiffres clés (adaptables) -->
  <div class="mt-5">
    <h2 class="section-title">Repères</h2>
    <div class="row g-4">
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100">
          <div class="stat-icon"><i class="bi bi-calendar2-range"></i></div>
          <p class="stat-number">2022–2027</p>
          <p class="text-muted mb-0">Plan stratégique</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100">
          <div class="stat-icon"><i class="bi bi-diagram-3"></i></div>
          <p class="stat-number">3</p>
          <p class="text-muted mb-0">Axes stratégiques</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100">
          <div class="stat-icon"><i class="bi bi-globe-africa"></i></div>
          <p class="stat-number">National +</p>
          <p class="text-muted mb-0">Régional</p>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card-soft p-4 text-center h-100">
          <div class="stat-icon"><i class="bi bi-bullseye"></i></div>
          <p class="stat-number">1</p>
          <p class="text-muted mb-0">Objectif général</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Valeurs -->
  <div class="mt-5">
    <h2 class="section-title">Nos valeurs</h2>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-award"></i></div>
          <div class="value-title">Professionnalisme</div>
          <p class="value-sub">
            Certification des services, respect des délais, qualité, procédures normées, réactivité et proactivité.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-shield-lock"></i></div>
          <div class="value-title">Intégrité</div>
          <p class="value-sub">
            Tolérance zéro face à la corruption : fiabilité des informations, respect de la parole donnée, honnêteté, sincérité.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-eye"></i></div>
          <div class="value-title">Transparence</div>
          <p class="value-sub">
            Diffusion des méthodes de travail, explication des décisions, partage des règles et des bonnes pratiques.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-lightbulb"></i></div>
          <div class="value-title">Innovation</div>
          <p class="value-sub">
            Amélioration continue des méthodes pour accroître l’impact et proposer des solutions nouvelles.
          </p>
        </div>
      </div>

      <div class="col-md-6 col-lg-4">
        <div class="value-card">
          <div class="value-icon"><i class="bi bi-people"></i></div>
          <div class="value-title">Participation</div>
          <p class="value-sub">
            Concertation et implication des collaborateurs et partenaires dans la décision et l’exécution des activités.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Plan stratégique -->
  <div class="mt-5">
    <div class="card-soft p-4">
      <h2 class="section-title">Plan stratégique 2022–2027</h2>
      <p class="mb-0">
        Conscient de sa vision et de sa mission, l’IGD s’est doté d’un plan stratégique 2022–2027.
        L’objectif général de ce plan est de <strong>contribuer au renforcement de la gouvernance démocratique</strong>
        à travers l’analyse des politiques publiques de développement et le renforcement des capacités politiques
        des femmes et des jeunes d’Afrique.
      </p>
    </div>
  </div>

  <!-- Les 3 axes (cards alignées + mini résumé) -->
  <div class="mt-5">
    <h2 class="section-title">Axes stratégiques</h2>

    <div class="row g-4">
      <!-- Axe 1 -->
      <div class="col-lg-4">
        <div class="axis-card">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-3">
            <span class="axis-badge"><i class="bi bi-1-circle"></i> Axe stratégique 1</span>
          </div>
          <h5 class="fw-bold mb-2">La recherche appliquée</h5>
          <p class="text-muted mb-0">
            L’IGD ambitionne de se positionner comme un « think tank » de référence en Afrique de l’Ouest, en produisant
            des connaissances utiles pour les décideurs, à travers des études sur les thématiques émergentes et l’analyse
            rigoureuse des transformations structurelles affectant les sociétés africaines, notamment les jeunes.
          </p>
        </div>
      </div>

      <!-- Axe 2 -->
      <div class="col-lg-4">
        <div class="axis-card">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-3">
            <span class="axis-badge"><i class="bi bi-2-circle"></i> Axe stratégique 2</span>
          </div>
          <h5 class="fw-bold mb-2">Le renforcement des capacités</h5>
          <p class="text-muted mb-0">
            Domaine de prédilection de l’IGD, le renforcement des capacités a permis à l’Institut de se positionner comme un
            acteur crédible de la formation des acteurs de la gouvernance démocratique, notamment les femmes et les jeunes leaders.
            L’IGD poursuivra ses actions de formation et d’accompagnement.
          </p>
        </div>
      </div>

      <!-- Axe 3 -->
      <div class="col-lg-4">
        <div class="axis-card">
          <div class="d-flex justify-content-between align-items-start gap-2 mb-3">
            <span class="axis-badge"><i class="bi bi-3-circle"></i> Axe stratégique 3</span>
          </div>
          <h5 class="fw-bold mb-2">L’institutionnalisation de l’IGD</h5>
          <p class="text-muted mb-0">
            Axe transversal visant à renforcer l’administration et la gestion de l’Institut, afin d’optimiser la mise en œuvre
            des activités opérationnelles des deux premiers axes. Cet axe conditionne l’efficacité globale des interventions de l’IGD.
          </p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-4">
      <a href="programmes.html" class="btn btn-igd-green">
        <i class="bi bi-grid-3x3-gap"></i> Découvrir nos programmes
      </a>
      <a href="publications.html" class="btn btn-igd-outline ms-2">
        <i class="bi bi-file-earmark-text"></i> Voir nos publications
      </a>
    </div>
  </div>

</section>


<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>
