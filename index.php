<?php
$isHome = true;
require __DIR__ . '/includes/header.php';
?>

    <!-- Hero Section -->
    <section class="relative py-28 md:py-40 overflow-hidden">
        <div class="container mx-auto px-6 text-center relative z-10">
            <div class="hero-text max-w-6xl mx-auto">
                <span class="chip mb-8"><span class="dot"></span><?= t('hero_badge') ?></span>
                <h1 class="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-6 gradient-text lg:whitespace-nowrap"><?= t('hero_tagline') ?></h1>
                <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"><?= t('hero_sub') ?></p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="#products" class="btn-primary">
                        <?= t('hero_cta_products') ?>
                        <i class="fas fa-arrow-down text-sm" aria-hidden="true"></i>
                    </a>
                    <a href="#about" class="btn-ghost">
                        <?= t('hero_cta_contact') ?>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-20">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"><?= t('products_title') ?></h2>
                <p class="text-gray-600 text-lg"><?= t('products_sub') ?></p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <?php foreach ($products as $slug => $p): ?>
                <div class="product-card fade-in p-8" style="--glow: <?= $p['glow'] ?>;">
                    <div class="card-shine"></div>
                    <div class="flex items-start justify-between mb-6">
                        <div class="w-14 h-14 bg-gradient-to-br <?= $p['gradient'] ?> rounded-2xl flex items-center justify-center">
                            <i class="fas <?= $p['icon'] ?> text-xl text-white" aria-hidden="true"></i>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="chip !py-1 !px-3 text-xs"><?= t('since') ?> <?= $p['year'] ?></span>
                            <?php if ($p['status']): ?>
                            <span class="chip !py-1 !px-3 text-xs <?= $p['accent'] ?>"><?= $p['status'] ?></span>
                            <?php endif; ?>
                        </div>
                    </div>
                    <h3 class="font-display text-2xl font-bold mb-1 text-gray-900"><?= t($slug . '_name') ?></h3>
                    <p class="text-sm <?= $p['accent'] ?> mb-4"><?= t($slug . '_tagline') ?></p>
                    <p class="text-gray-600 leading-relaxed mb-8"><?= t($slug . '_desc') ?></p>
                    <div class="flex items-center gap-3">
                        <a href="product.php?p=<?= $slug ?>" class="inline-flex items-center gap-2 bg-gradient-to-r <?= $p['gradient'] ?> text-white font-semibold py-2.5 px-5 rounded-full text-sm hover:opacity-90 transition-opacity">
                            <?= t('learn_more') ?>
                            <i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                        </a>
                        <a href="<?= $p['url'] ?>" class="btn-ghost !py-2.5 !px-4 text-sm" title="<?= t('visit_site') ?>" aria-label="<?= t('visit_site') ?>">
                            <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="about" class="py-20">
        <div class="container mx-auto px-6">
            <div class="fade-in max-w-5xl mx-auto">
                <div class="glass rounded-3xl p-10 md:p-16 text-center">
                    <h2 class="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4"><?= t('contact_title') ?></h2>
                    <p class="text-gray-600 text-lg mb-12"><?= t('contact_sub') ?></p>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="feature-card p-6 text-center">
                            <div class="text-2xl mb-3 text-indigo-600"><i class="fas fa-envelope" aria-hidden="true"></i></div>
                            <p class="font-semibold text-gray-900 mb-2"><?= t('contact_email') ?></p>
                            <p class="text-gray-600 text-sm break-all">nguyenlukhanhduy@gmail.com</p>
                        </div>
                        <div class="feature-card p-6 text-center">
                            <div class="text-2xl mb-3 text-indigo-600"><i class="fas fa-phone" aria-hidden="true"></i></div>
                            <p class="font-semibold text-gray-900 mb-2"><?= t('contact_phone') ?></p>
                            <p class="text-gray-600 text-sm">097 2 342 075</p>
                        </div>
                        <div class="feature-card p-6 text-center">
                            <div class="text-2xl mb-3 text-indigo-600"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></div>
                            <p class="font-semibold text-gray-900 mb-2"><?= t('contact_address') ?></p>
                            <p class="text-gray-600 text-sm">Can Tho City, Vietnam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php require __DIR__ . '/includes/footer.php'; ?>
