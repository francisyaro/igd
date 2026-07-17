<?php
$page_title = "Publications – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "publications";

include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>


<!-- HERO INTERNE -->

<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Publications</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item active" aria-current="page">Publications</li>
          </ol>
        </nav>
      </div>
      <div class="d-flex gap-2 flex-wrap">
        <a class="btn btn-igd-outline" href="#liste"><i class="bi bi-collection"></i> Voir la liste</a>
        <a class="btn btn-igd-green" href="#"><i class="bi bi-envelope"></i> Demande d’info</a>
      </div>
    </div>
  </div>
</section>

<section class="container py-5" id="liste">

  <!-- Barre filtres -->
  <div class="filters-bar mb-4">
    <div class="row g-3 align-items-end">
      <div class="col-lg-5">
        <label class="form-label fw-bold">Rechercher</label>
        <div class="input-group">
          <span class="input-group-text bg-white" style="border-radius:12px 0 0 12px;"><i class="bi bi-search"></i></span>
          <input type="text" class="form-control" placeholder="Titre, thème, programme, auteur…"
                 style="border-left:0; border-radius:0 12px 12px 0;">
        </div>
      </div>

      <div class="col-lg-3">
        <label class="form-label fw-bold">Catégorie</label>
        <select class="form-select">
          <option selected>Toutes</option>
          <option>Rapports</option>
          <option>Études & recherches</option>
          <option>Notes politiques</option>
          <option>Appels & communiqués</option>
        </select>
      </div>

      <div class="col-lg-2">
        <label class="form-label fw-bold">Année</label>
        <select class="form-select">
          <option selected>Toutes</option>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div>

      <div class="col-lg-2 d-grid">
        <button class="btn btn-igd-green"><i class="bi bi-funnel"></i> Filtrer</button>
      </div>
    </div>
  </div>

  <div class="row g-4">
    <!-- Col principale -->
    <div class="col-lg-8">

      <h2 class="section-title">Dernières publications</h2>

      <div class="row g-4">
        <!-- Publication 1 -->
        <div class="col-md-6">
          <article class="card-soft pub-card hover-rise h-100">
            <div class="pub-cover">
              <span class="pub-badge">Rapport</span>
              <!-- Remplace l’image par vos miniatures -->
              <img src="images/publications/Brochure-Projet-PYPA.jpg" alt="Couverture publication">
            </div>
            <div class="p-4">
              <div class="pub-meta mb-2">
                <span><i class="bi bi-calendar3"></i> 2025</span>
                <span><i class="bi bi-tags"></i> Gouvernance</span>
                <span><i class="bi bi-file-earmark-pdf"></i> PDF</span>
              </div>
              <h3 class="pub-title h5 mb-2">Programme PYPA – Note de synthèse</h3>
              <p class="pub-desc">Programme régional de renforcement de capacités des jeunes leaders politiques africains.</p>

              <div class="pub-actions mt-3 d-flex gap-2">
                <a class="btn btn-igd-outline w-50" href="#" target="_blank" rel="noopener">
                  <i class="bi bi-eye"></i> Lire
                </a>
                <a class="btn btn-igd-green w-50" href="docs/pypa.pdf" download>
                  <i class="bi bi-download"></i> Télécharger
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Publication 2 -->
        <div class="col-md-6">
          <article class="card-soft pub-card hover-rise h-100">
            <div class="pub-cover">
              <span class="pub-badge">Étude</span>
              <img src="images/publications/programme-ewip-strategie-genre.jpg" alt="Couverture publication">
            </div>
            <div class="p-4">
              <div class="pub-meta mb-2">
                <span><i class="bi bi-calendar3"></i> 2024</span>
                <span><i class="bi bi-tags"></i> Genre</span>
                <span><i class="bi bi-file-earmark-pdf"></i> PDF</span>
              </div>
              <h3 class="pub-title h5 mb-2">EWIP – Stratégie genre</h3>
              <p class="pub-desc">Document de référence pour renforcer la participation et l’influence des femmes en politique.</p>

              <div class="pub-actions mt-3 d-flex gap-2">
                <a class="btn btn-igd-outline w-50" href="#" target="_blank" rel="noopener">
                  <i class="bi bi-eye"></i> Lire
                </a>
                <a class="btn btn-igd-green w-50" href="docs/ewip.pdf" download>
                  <i class="bi bi-download"></i> Télécharger
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Publication 3 -->
        <div class="col-md-6">
          <article class="card-soft pub-card hover-rise h-100">
            <div class="pub-cover">
              <span class="pub-badge">Note</span>
              <img src="images/publications/implication-jeunes-violence.jpg" alt="Couverture publication">
            </div>
            <div class="p-4">
              <div class="pub-meta mb-2">
                <span><i class="bi bi-calendar3"></i> 2024</span>
                <span><i class="bi bi-tags"></i> Jeunesse</span>
                <span><i class="bi bi-file-earmark-pdf"></i> PDF</span>
              </div>
              <h3 class="pub-title h5 mb-2">Violences associées à la jeunesse</h3>
              <p class="pub-desc">Pistes d’amélioration de l’action publique pour lutter contre les violences liées à la jeunesse.</p>

              <div class="pub-actions mt-3 d-flex gap-2">
                <a class="btn btn-igd-outline w-50" href="#" target="_blank" rel="noopener">
                  <i class="bi bi-eye"></i> Lire
                </a>
                <a class="btn btn-igd-green w-50" href="docs/jeunesse-violence.pdf" download>
                  <i class="bi bi-download"></i> Télécharger
                </a>
              </div>
            </div>
          </article>
        </div>

        <!-- Publication 4 -->
        <div class="col-md-6">
          <article class="card-soft pub-card hover-rise h-100">
            <div class="pub-cover">
              <span class="pub-badge">Afrobarometer</span>
              <img src="images/publications/Insecurite-Armee-Burkina-Faso-.png" alt="Couverture publication">
            </div>
            <div class="p-4">
              <div class="pub-meta mb-2">
                <span><i class="bi bi-calendar3"></i> 2023</span>
                <span><i class="bi bi-tags"></i> Opinion</span>
                <span><i class="bi bi-file-earmark-pdf"></i> PDF</span>
              </div>
              <h3 class="pub-title h5 mb-2">Afrobarometer – Note pays</h3>
              <p class="pub-desc">Synthèse des résultats d’enquête : gouvernance, démocratie et qualité de vie.</p>

              <div class="pub-actions mt-3 d-flex gap-2">
                <a class="btn btn-igd-outline w-50" href="#" target="_blank" rel="noopener">
                  <i class="bi bi-eye"></i> Lire
                </a>
                <a class="btn btn-igd-green w-50" href="docs/afrobarometer.pdf" download>
                  <i class="bi bi-download"></i> Télécharger
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Pagination -->
      <nav class="mt-4" aria-label="Pagination publications">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled"><a class="page-link" href="#">Précédent</a></li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Suivant</a></li>
        </ul>
      </nav>
    </div>

    <!-- Sidebar -->
    <aside class="col-lg-4">
      <div class="card-soft p-4 mb-4">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <h3 class="side-title mb-0">Ressources rapides</h3>
          <i class="bi bi-lightning-charge" style="color:var(--igd-red); font-size:1.2rem;"></i>
        </div>
        <div class="d-grid gap-2 mt-3">
          <a class="btn btn-igd-green" href="#"><i class="bi bi-file-earmark-arrow-down"></i> Télécharger le rapport annuel</a>
          <a class="btn btn-igd-outline" href="#"><i class="bi bi-collection"></i> Toutes les catégories</a>
          <a class="btn btn-igd-outline" href="#"><i class="bi bi-bell"></i> S’abonner aux publications</a>
        </div>
      </div>

      <div class="card-soft p-4 mb-4">
        <h3 class="side-title">Thématiques</h3>
        <div class="mt-2">
          <a class="tag" href="#"><i class="bi bi-diagram-3"></i> Gouvernance</a>
          <a class="tag" href="#"><i class="bi bi-shield-check"></i> Sécurité</a>
          <a class="tag" href="#"><i class="bi bi-gender-ambiguous"></i> Genre</a>
          <a class="tag" href="#"><i class="bi bi-people"></i> Jeunesse</a>
          <a class="tag" href="#"><i class="bi bi-graph-up"></i> Politiques publiques</a>
          <a class="tag" href="#"><i class="bi bi-globe2"></i> Démocratie</a>
        </div>
      </div>

      <div class="card-soft p-4">
        <h3 class="side-title">À propos des publications</h3>
        <p class="text-muted mb-0">
          Retrouvez ici les rapports, études, notes politiques et documents produits dans le cadre des programmes de l’IGD.
          Les fichiers sont proposés au format PDF pour consultation et téléchargement.
        </p>
      </div>
    </aside>
  </div>
</section>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>
