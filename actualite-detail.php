<?php
$page_title = "Actualités – IGD";
$meta_description = "L’IGD est un institut de référence en gouvernance, démocratie et renforcement des capacités des jeunes et des femmes en Afrique.";
$active = "contact";
include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<!-- Contenu principal -->
<section class="container py-5">
  <div class="row">
    <!-- Article principal -->
    <div class="col-lg-8">
      <h2 class="section-title">Session de formation WYDE à Abidjan</h2>
      <p class="text-muted mb-3"><i class="bi bi-calendar"></i> Publié le 26 avril 2025</p>
      <img src="images/news1.jpg" class="news-image mb-4" alt="Session WYDE">
      <p>Du 22 au 26 avril 2025, une trentaine de jeunes et de femmes venus de Côte d’Ivoire et du Sénégal ont participé à une session de formation dans le cadre du programme <strong>Women and Youth Democratic Engagement (WYDE)</strong>.</p>
      <p>Cette formation, organisée par l’Institut Général Tiémoko Marc Garango pour la Gouvernance et le Développement (IGD), avait pour objectif de renforcer les capacités de leadership et de gouvernance démocratique chez les jeunes acteurs politiques.</p>
      <p>Les participants ont échangé sur des thématiques clés telles que la participation citoyenne, la gestion éthique du pouvoir et l’inclusion politique. La session s’est clôturée par la remise officielle des attestations de participation.</p>

      <div class="mt-4">
        <a href="actualites.html" class="btn btn-outline-danger"><i class="bi bi-arrow-left"></i> Retour aux actualités</a>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="col-lg-4">
      <h5 class="mb-3">Autres actualités</h5>

      <div class="sidebar-item mb-3">
        <a href="actualite-detail.html">
          <img src="images/news2.jpg" alt="Jeunes leaders">
          <h6>Formation de la 3e cohorte du projet Jeunes Leaders</h6>
        </a>
      </div>

      <div class="sidebar-item mb-3">
        <a href="actualite-detail.html">
          <img src="images/news3.jpg" alt="FEMIN-IN">
          <h6>Cérémonie FEMIN-IN : lancement de la cohorte 2025</h6>
        </a>
      </div>

      <div class="sidebar-item">
        <a href="actualite-detail.html">
          <img src="images/hero1.jpg" alt="Citoyenneté active">
          <h6>Forum sur la citoyenneté active à Ouagadougou</h6>
        </a>
      </div>
    </div>
  </div>
</section>

<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>
