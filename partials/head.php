<?php if (!isset($page_title)) { $page_title = "IGD"; } ?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?= htmlspecialchars($page_title) ?></title>

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
  <link rel="manifest" href="assets/favicon/site.webmanifest">
  <link rel="shortcut icon" href="assets/favicon/favicon.ico">
  <meta name="theme-color" content="#E63087">
  <meta name="description" content="<?= htmlspecialchars($meta_description ?? "Institut Général Tiémoko Marc Garango (IGD) – Gouvernance, démocratie, droits humains et développement en Afrique de l’Ouest.") ?>">
  <meta name="robots" content="index, follow">
  <!-- CSS centralisé -->
  <link href="assets/css/main.css" rel="stylesheet" />
  <link href="assets/css/bootstrap.min.css" rel="stylesheet" />

  <!-- Bootstrap Icons locaux -->
  <link rel="stylesheet" href="assets/icons/bootstrap-icons.css">

  <!-- Bootstrap + Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet" />


</head>
<body>
