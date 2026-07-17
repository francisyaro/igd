<?php
if (!isset($active)) { $active = ''; }
function is_active($key, $active) { return $key === $active ? ' active' : ''; }
?>

<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <div class="container">
    <a class="navbar-brand logo-box logo-wrapper" href="index.php">
      <img src="images/logo-igd-site-web-b.png" alt="Logo IGD">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link<?= is_active('home',$active) ?>" href="index.php">Accueil</a>
        </li>

        <li class="nav-item dropdown dropdown-hover dropdown-mega dropdown-institut">
  <a class="nav-link dropdown-toggle" href="#" role="button" onclick="return false;">
    L’Institut
  </a>

  <div class="dropdown-menu mega-menu p-3 p-lg-4">
    <div class="row g-4">

      <!-- Colonne éditoriale -->
      <div class="col-lg-5">
        <div class="mega-head">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-building" style="color:var(--igd-green);"></i>
            <strong>Présentation de l’Institut</strong>
          </div>
          <p class="text-muted mt-2 mb-0 small">
            Découvrez l’IGD, sa mission, sa vision et l’équipe qui œuvre
            pour la gouvernance démocratique et le développement en Afrique.
          </p>
        </div>

        <div class="mt-3">
          <a href="a-propos.php" class="btn btn-igd-green w-100">
            <i class="bi bi-arrow-right"></i> Découvrir l’Institut
          </a>
        </div>
      </div>

      <!-- Liens -->
      <div class="col-lg-7">
        <div class="mega-links">

          <a class="mega-link" href="a-propos.php">
            <i class="bi bi-info-circle"></i>
            <div>
              <div>À propos</div>
              <small class="text-muted">Historique, vision et valeurs</small>
            </div>
          </a>

          <a class="mega-link" href="missions.php">
            <i class="bi bi-bullseye"></i>
            <div>
              <div>Missions & Objectifs</div>
              <small class="text-muted">Axes stratégiques et priorités</small>
            </div>
          </a>

          <a class="mega-link" href="personnel.php">
            <i class="bi bi-people-fill"></i>
            <div>
              <div>Personnel</div>
              <small class="text-muted">Direction & équipe technique</small>
            </div>
          </a>

        </div>
      </div>

    </div>
  </div>
</li>


        <li class="nav-item dropdown dropdown-hover dropdown-mega">
  <a class="nav-link dropdown-toggle" href="#" role="button">Programmes</a>

  <div class="dropdown-menu mega-menu p-3 p-lg-4">
    <div class="row g-4">

      <!-- En cours -->
      <div class="col-lg-6">
        <div class="mega-head">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-lightning-charge-fill" style="color:var(--igd-green);"></i>
              <strong>Programmes en cours</strong>
            </div>
            <span class="badge badge-encours">En cours</span>
          </div>
          <div class="text-muted small mt-1">7 programmes actifs</div>
        </div>

        <div class="mega-links mt-3">
          <a class="mega-link" href="programme-en-cours-projet-jeunes-leaders.php">
            <i class="bi bi-people-fill"></i>
            <span>Projet Jeunes Leaders (PJL)</span>
          </a>

          <a class="mega-link" href="programme-en-cours-afrobarometer.php">
            <i class="bi bi-bar-chart-line-fill"></i>
            <span>Afrobarometer</span>
          </a>

          <a class="mega-link" href="programme-en-cours-empowering-women-in-politics.php">
            <i class="bi bi-gender-female"></i>
            <span>Empowering Women in Politics (EWIP)</span>
          </a>

          <a class="mega-link" href="programme-en-cours-refonder-la-gouvernance.php">
            <i class="bi bi-shield-check"></i>
            <span>Refonder la gouvernance</span>
          </a>

          <a class="mega-link" href="programme-en-cours-program-for-young-politicians-in-africa.php">
            <i class="bi bi-mortarboard-fill"></i>
            <span>Program for Young Politicians in Africa (PYPA)</span>
          </a>

          <a class="mega-link" href="programme-en-cours-politiques-securite-democratisation-elites-sahel.php">
            <i class="bi bi-shield-lock-fill"></i>
            <span>SDEP-Sahel</span>
          </a>

          <a class="mega-link" href="programme-en-cours-wyde-political-parties.php">
            <i class="bi bi-people-fill"></i>
            <span>WYDE – Political Parties</span>
          </a>

        </div>

        <div class="mt-3">
          <a href="programmes.php#en-cours" class="btn btn-igd-green w-100">
            <i class="bi bi-arrow-right"></i> Voir tous les programmes en cours
          </a>
        </div>
      </div>

      <!-- Terminés -->
      <div class="col-lg-6">
        <div class="mega-head">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <i class="bi bi-check2-circle" style="color:#6c757d;"></i>
              <strong>Programmes terminés</strong>
            </div>
            <span class="badge badge-termine">Terminé</span>
          </div>
          <div class="text-muted small mt-1">4 programmes finalisés</div>
        </div>

        <div class="mega-links mt-3">
          <a class="mega-link" href="programme-termine-jeunes-transition-au-burkina-faso.php">
            <i class="bi bi-megaphone-fill"></i>
            <span>Jeunes et transition au Burkina Faso</span>
          </a>

          <a class="mega-link" href="programme-termine-engageons-nous-pour-plus-de-femmes-en-politique-au-benin-et-au-maroc.php">
            <i class="bi bi-person-hearts"></i>
            <span>Engageons-nous : pour plus de femmes en politique</span>
          </a>

          <a class="mega-link" href="programme-termine-jeunes-et-resilience-a-l-injustice-sociale.php">
            <i class="bi bi-shield-exclamation"></i>
            <span>Jeunes et résilience à l’injustice sociale</span>
          </a>

          <a class="mega-link" href="programme-termine-projet-ecole-des-cadres-des-partis-politiques.php">
            <i class="bi bi-mortarboard"></i>
            <span>École des cadres des partis politiques</span>
          </a>
        </div>

        <div class="mt-3">
          <a href="programmes.php#termines" class="btn btn-igd-outline w-100">
            <i class="bi bi-arrow-right"></i> Voir tous les programmes terminés
          </a>
        </div>
      </div>

    </div>

    <hr class="my-4">

    <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2">
      <div class="text-muted small">
        <i class="bi bi-info-circle"></i> Astuce : utilisez la page Programmes pour filtrer et rechercher rapidement.
      </div>
      <a href="programmes.php" class="btn btn-sm btn-igd-green">
        <i class="bi bi-grid-3x3-gap"></i> Page Programmes
      </a>
    </div>
  </div>
</li>


        <li class="nav-item">
          <a class="nav-link<?= is_active('publications',$active) ?>" href="publications.php">Publications</a>
        </li>
        <li class="nav-item"><a class="nav-link<?= is_active('photo',$active) ?>" href="phototheque.php">Photothèque</a></li>
        <li class="nav-item"><a class="nav-link<?= is_active('video',$active) ?>" href="videotheque.php">Vidéothèque</a></li>
        <li class="nav-item"><a class="nav-link<?= is_active('actu',$active) ?>" href="actualites.php">Actualités</a></li>
        <li class="nav-item"><a class="nav-link<?= is_active('contact',$active) ?>" href="contact.php">Contact</a></li>

        <li class="nav-item d-flex align-items-center ms-3">
          <a href="#" class="text-white me-2" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-white me-2" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="text-white" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
