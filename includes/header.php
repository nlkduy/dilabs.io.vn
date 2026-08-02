<?php
require_once __DIR__ . '/i18n.php';
require_once __DIR__ . '/products.php';

// Pages may override these before including the header.
$pageTitle = $pageTitle ?? 'DiLabs - Build the Apps You Live With';
$pageDesc  = $pageDesc  ?? t('meta_description');
$pageUrl   = $pageUrl   ?? 'https://dilabs.io.vn/';
$isHome    = $isHome    ?? false;
$navPrefix = $isHome ? '' : 'index.php';
?>
<!DOCTYPE html>
<html lang="<?= $lang ?>">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-9SMBHTKMHL"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-9SMBHTKMHL');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?></title>
    <meta name="description" content="<?= $pageDesc ?>">
    <meta name="keywords" content="DiLabs, applications, Vietnam, Vietnamese apps, music archive, pregnancy nutrition, music streaming, VangSon, LazyMus, dinh duong thai ky">
    <meta name="author" content="DiLabs">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="<?= $pageUrl ?>">
    <link rel="icon" type="image/png" href="favicon.png">
    <meta name="theme-color" content="#f8fafc">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="DiLabs">
    <meta property="og:title" content="<?= $pageTitle ?>">
    <meta property="og:description" content="<?= $pageDesc ?>">
    <meta property="og:url" content="<?= $pageUrl ?>">
    <meta property="og:image" content="https://dilabs.io.vn/background.jpg">
    <meta property="og:locale" content="<?= $lang === 'vi' ? 'vi_VN' : 'en_US' ?>">
    <meta property="og:locale:alternate" content="<?= $lang === 'vi' ? 'en_US' : 'vi_VN' ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= $pageTitle ?>">
    <meta name="twitter:description" content="<?= $pageDesc ?>">
    <meta name="twitter:image" content="https://dilabs.io.vn/background.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DiLabs",
            "url": "https://dilabs.io.vn/",
            "logo": "https://dilabs.io.vn/favicon.png",
            "email": "info@dilabs.io.vn",
            "telephone": "+84972342075",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Can Tho City",
                "addressCountry": "VN"
            },
            "sameAs": [
                "https://vangson.info",
                "https://dilabs.io.vn/lazymus/"
            ]
        }
    </script>
</head>
<body>
    <div class="aurora" aria-hidden="true">
        <span class="aurora-blob aurora-1"></span>
        <span class="aurora-blob aurora-2"></span>
        <span class="aurora-blob aurora-3"></span>
    </div>

    <!-- Header -->
    <header class="sticky top-0 glass-nav z-30">
        <nav class="site-nav container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="index.php" class="flex items-center gap-0">
                <img src="favicon.png" alt="D" class="h-8 w-8">
                <span class="-ml-1 text-3xl font-bold font-display gradient-text">iLabs</span>
            </a>
            <button id="menuToggle" class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mainMenu">
                <i class="fas fa-bars" aria-hidden="true"></i>
            </button>
            <ul id="mainMenu" class="main-menu flex space-x-8 items-center">
                <li><a href="<?= $navPrefix ?>#products" class="nav-link text-gray-600 hover:text-gray-900 font-medium"><?= t('nav_products') ?></a></li>
                <li><a href="<?= $navPrefix ?>#about" class="nav-link text-gray-600 hover:text-gray-900 font-medium"><?= t('nav_contact') ?></a></li>
                <li>
                    <label class="lang-picker" for="langSelect" aria-label="Select language">
                        <span id="langBadge" class="lang-badge" aria-hidden="true"><?= strtoupper($lang) ?></span>
                        <select id="langSelect" class="lang-select">
                            <option value="en"<?= $lang === 'en' ? ' selected' : '' ?>>English</option>
                            <option value="vi"<?= $lang === 'vi' ? ' selected' : '' ?>>Tiếng Việt</option>
                        </select>
                    </label>
                </li>
            </ul>
        </nav>
    </header>
