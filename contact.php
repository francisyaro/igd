<?php
$page_title = "Contact – IGD";
$active = "contact";
include __DIR__ . "/partials/head.php";
include __DIR__ . "/partials/header.php";
?>

<section class="page-hero">
  <div class="container">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
      <div>
        <h1 class="page-title mb-2">Contact</h1>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/refonte/" class="breadcrumb-link">Accueil</a></li>
            <li class="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
      <div class="d-flex gap-2 flex-wrap">
        <a class="btn btn-igd-outline" href="#coordonnees"><i class="bi bi-geo-alt"></i> Coordonnées</a>
        <a class="btn btn-igd-green" href="#formulaire"><i class="bi bi-send"></i> Écrire à l’IGD</a>
      </div>
    </div>
  </div>
</section>




<section class="container py-5">

  <!-- Cartes info -->
  <div class="row g-4" id="coordonnees">
    <div class="col-md-4">
      <div class="card-soft p-4 h-100">
        <div class="d-flex gap-3">
          <div class="info-icon"><i class="bi bi-geo-alt"></i></div>
          <div>
            <div class="info-title">Adresse</div>
            <p class="info-text mb-1">Cité Azimmo – Ouaga 2000</p>
            <p class="info-text">Ouagadougou, Burkina Faso</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card-soft p-4 h-100">
        <div class="d-flex gap-3">
          <div class="info-icon"><i class="bi bi-telephone"></i></div>
          <div>
            <div class="info-title">Téléphone</div>
            <p class="info-text mb-1"><a href="tel:+22625375082" class="text-decoration-none">(+226) 25 37 50 82</a></p>
            <p class="info-text"><a href="tel:+22651575858" class="text-decoration-none">(+226) 51 57 58 58</a></p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card-soft p-4 h-100">
        <div class="d-flex gap-3">
          <div class="info-icon"><i class="bi bi-envelope"></i></div>
          <div>
            <div class="info-title">Email</div>
            <p class="info-text mb-2"><a href="mailto:institutgarango@igd.bf" class="text-decoration-none">institutgarango@igd.bf</a></p>
            <div class="d-flex gap-2">
              <a href="#" class="btn btn-sm btn-igd-outline"><i class="bi bi-facebook"></i></a>
              <a href="#" class="btn btn-sm btn-igd-outline"><i class="bi bi-twitter"></i></a>
              <a href="#" class="btn btn-sm btn-igd-outline"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Form + Map -->
  <div class="row g-4 mt-1 align-items-stretch" id="formulaire">
    <div class="col-lg-6 d-flex">
      <div class="card-soft p-4 flex-fill">
        <h2 class="section-title mb-3">Envoyez-nous un message</h2>
        <p class="text-muted mb-4">Réponse généralement sous 24 à 72h (jours ouvrés).</p>

        <form>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-bold" for="nom">Nom complet</label>
              <input class="form-control" id="nom" type="text" placeholder="Votre nom" required>
            </div>

            <div class="col-md-6">
              <label class="form-label fw-bold" for="telephone">Téléphone (optionnel)</label>
              <input class="form-control" id="telephone" type="tel" placeholder="Ex: +226 ...">
            </div>

            <div class="col-12">
              <label class="form-label fw-bold" for="email">Adresse e-mail</label>
              <input class="form-control" id="email" type="email" placeholder="exemple@email.com" required>
            </div>

            <div class="col-12">
              <label class="form-label fw-bold" for="sujet">Objet</label>
              <select class="form-select" id="sujet" required>
                <option value="" selected disabled>Choisir un sujet</option>
                <option>Informations générales</option>
                <option>Programmes & candidatures</option>
                <option>Publications & recherche</option>
                <option>Partenariats</option>
                <option>Autre</option>
              </select>
            </div>

            <div class="col-12">
              <label class="form-label fw-bold" for="message">Message</label>
              <textarea class="form-control" id="message" rows="5" placeholder="Décrivez votre demande..." required></textarea>
            </div>

            <div class="col-12 d-grid d-sm-flex gap-2">
              <button type="submit" class="btn btn-igd-green flex-grow-1">
                <i class="bi bi-send"></i> Envoyer
              </button>
              <a href="mailto:institutgarango@igd.bf" class="btn btn-igd-outline flex-grow-1">
                <i class="bi bi-envelope-paper"></i> Écrire par email
              </a>
            </div>

            <div class="col-12">
              <small class="text-muted">
                En envoyant ce message, vous acceptez que l’IGD traite vos informations uniquement pour répondre à votre demande.
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="col-lg-6 d-flex">
      <div class="card-soft p-4 flex-fill">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h2 class="section-title mb-0">Localisation</h2>
          <a class="btn btn-sm btn-igd-outline" target="_blank" rel="noopener"
             href="https://www.google.com/maps?q=Cité%20Azimmo%20Ouaga%202000%20Ouagadougou">
            <i class="bi bi-box-arrow-up-right"></i> Ouvrir sur Google Maps
          </a>
        </div>

        <div class="map-wrap">
          <iframe
            src="https://www.google.com/maps?q=Cité%20Azimmo%20Ouaga%202000%20Ouagadougou&output=embed"
            loading="lazy"
            allowfullscreen=""
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="mt-3 text-muted">
          <i class="bi bi-info-circle"></i>
          Accès : Ouaga 2000, Cité Azimmo. Merci de prendre rendez-vous avant toute visite.
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ -->
  <div class="mt-5">
    <h2 class="section-title">Questions fréquentes</h2>

    <div class="accordion" id="faq">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q1">
            Comment candidater à un programme ?
          </button>
        </h2>
        <div id="q1" class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body text-muted">
            Consultez la page “Programmes” puis sélectionnez le programme concerné. Les appels à candidatures sont publiés dans la rubrique “Actualité”.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2">
            Où trouver les rapports et études ?
          </button>
        </h2>
        <div id="q2" class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body text-muted">
            Toutes les ressources téléchargeables sont disponibles dans la page “Publications”.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3">
            En combien de temps l’IGD répond ?
          </button>
        </h2>
        <div id="q3" class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body text-muted">
            Nous répondons généralement sous 24 à 72h les jours ouvrés. Pour les demandes urgentes, privilégiez le téléphone.
          </div>
        </div>
      </div>
    </div>
  </div>

</section>


<?php
include __DIR__ . "/partials/footer.php";
include __DIR__ . "/partials/scripts.php";
?>
