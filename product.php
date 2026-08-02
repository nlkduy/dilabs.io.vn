<?php
require_once __DIR__ . '/includes/i18n.php';
require_once __DIR__ . '/includes/products.php';

$slug = $_GET['p'] ?? '';
if (!isset($products[$slug])) {
    header('Location: index.php');
    exit;
}

$product = $products[$slug];

$pageTitle = t($slug . '_name') . ' - DiLabs';
$pageDesc  = t($slug . '_desc');
$pageUrl   = 'https://dilabs.io.vn/product.php?p=' . $slug;

require __DIR__ . '/includes/header.php';
?>

    <!-- Product Hero -->
    <section class="relative py-24 md:py-32 overflow-hidden">
        <div class="container mx-auto px-6 relative z-10">
            <div class="hero-text max-w-3xl mx-auto text-center">
                <a href="index.php#products" class="chip mb-10 hover:border-white/25 transition-colors">
                    <i class="fas fa-arrow-left text-xs" aria-hidden="true"></i>
                    <?= t('back_to_products') ?>
                </a>
                <div class="w-20 h-20 bg-gradient-to-br <?= $product['gradient'] ?> rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <i class="fas <?= $product['icon'] ?> text-3xl text-white" aria-hidden="true"></i>
                </div>
                <h1 class="font-display text-5xl md:text-6xl font-bold tracking-tight mb-4 gradient-text"><?= t($slug . '_name') ?></h1>
                <p class="text-xl md:text-2xl <?= $product['accent'] ?> mb-6"><?= t($slug . '_tagline') ?></p>
                <div class="flex items-center justify-center gap-3 mb-10">
                    <span class="chip"><?= t('since') ?> <?= $product['year'] ?></span>
                    <?php if ($product['status']): ?>
                    <span class="chip <?= $product['accent'] ?>"><span class="dot"></span><?= $product['status'] ?></span>
                    <?php endif; ?>
                </div>
                <a href="<?= $product['url'] ?>" class="btn-primary">
                    <?= t('visit_site') ?>
                    <i class="fas fa-arrow-up-right-from-square text-sm" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- About -->
    <section class="py-12">
        <div class="container mx-auto px-6">
            <div class="fade-in max-w-3xl mx-auto">
                <div class="glass rounded-3xl p-10 md:p-12">
                    <h2 class="font-display text-2xl md:text-3xl font-bold text-white mb-5"><?= t('about_title') ?></h2>
                    <p class="text-gray-300 text-lg leading-relaxed"><?= t($slug . '_about') ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Features -->
    <section class="py-16">
        <div class="container mx-auto px-6">
            <div class="max-w-5xl mx-auto">
                <h2 class="fade-in font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"><?= t('features_title') ?></h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <?php for ($i = 1; $i <= 3; $i++): ?>
                    <div class="feature-card fade-in p-8">
                        <div class="w-12 h-12 bg-gradient-to-br <?= $product['gradient'] ?> rounded-xl flex items-center justify-center mb-5">
                            <i class="fas <?= $product['feature_icons'][$i - 1] ?> text-lg text-white" aria-hidden="true"></i>
                        </div>
                        <h3 class="font-display text-xl font-bold text-white mb-3"><?= t($slug . '_f' . $i . '_t') ?></h3>
                        <p class="text-gray-400 leading-relaxed"><?= t($slug . '_f' . $i . '_d') ?></p>
                    </div>
                    <?php endfor; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
        <div class="container mx-auto px-6">
            <div class="fade-in max-w-3xl mx-auto">
                <div class="glass rounded-3xl p-10 md:p-14 text-center" style="box-shadow: 0 25px 80px -20px <?= $product['glow'] ?>;">
                    <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4"><?= t('detail_cta_title') ?></h2>
                    <p class="text-gray-400 text-lg mb-8"><?= t('detail_cta_sub') ?></p>
                    <a href="<?= $product['url'] ?>" class="inline-flex items-center gap-2 bg-gradient-to-r <?= $product['gradient'] ?> text-white font-semibold py-3.5 px-8 rounded-full hover:opacity-90 transition-opacity">
                        <?= t('visit_site') ?>
                        <i class="fas fa-arrow-up-right-from-square text-sm" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

<?php require __DIR__ . '/includes/footer.php'; ?>
