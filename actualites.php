<?php
$page_title = "Actualités – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "actualites";
include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<!-- Contenu -->
<section class="container py-5">
  <h2 class="section-title">Toutes les actualités</h2>

  <!-- Barre de recherche -->
  <div class="mb-4">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Rechercher une actualité...">
      <button class="btn btn-danger"><i class="bi bi-search"></i></button>
    </div>
  </div>

  <!-- Grille d’actualités -->
  <div class="row g-4">
    <div class="col-md-4 d-flex">
      <div class="card news-card flex-fill">
        <img src="images/news1.jpg" class="card-img-top" alt="News 1">
        <div class="card-body">
          <h5 class="card-title">Session de formation WYDE à Abidjan</h5>
          <p class="text-muted small mb-1"><i class="bi bi-calendar"></i> 26 avril 2025</p>
          <p class="card-text">Une trentaine de jeunes et de femmes venus de Côte d’Ivoire et du Sénégal ont participé à la session de formation WYDE.</p>
          <a href="actualite-detail.html" class="btn btn-outline-danger btn-sm">Lire plus</a>
        </div>
      </div>
    </div>

    <div class="col-md-4 d-flex">
      <div class="card news-card flex-fill">
        <img src="images/news2.jpg" class="card-img-top" alt="News 2">
        <div class="card-body">
          <h5 class="card-title">Jeunes leaders – 3e cohorte</h5>
          <p class="text-muted small mb-1"><i class="bi bi-calendar"></i> 20 avril 2025</p>
          <p class="card-text">Première session de formation de la troisième cohorte du projet "Jeunes Leaders".</p>
          <a href="actualite-detail.html" class="btn btn-outline-danger btn-sm">Lire plus</a>
        </div>
      </div>
    </div>

    <div class="col-md-4 d-flex">
      <div class="card news-card flex-fill">
        <img src="images/news3.jpg" class="card-img-top" alt="News 3">
        <div class="card-body">
          <h5 class="card-title">Cérémonie FEMIN-IN 2025</h5>
          <p class="text-muted small mb-1"><i class="bi bi-calendar"></i> 5 mars 2025</p>
          <p class="card-text">Clôture de la cohorte 2024 et lancement de la cohorte 2025 de l’Incubateur Citoyen FEMIN-IN.</p>
          <a href="actualite-detail.html" class="btn btn-outline-danger btn-sm">Lire plus</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Pagination -->
  <nav aria-label="Pagination des actualités" class="mt-5">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled"><a class="page-link" href="#">Précédent</a></li>
      <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Suivant</a></li>
    </ul>
  </nav>
</section>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>