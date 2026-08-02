    <!-- Footer -->
    <footer class="border-t border-gray-200 bg-white/60 py-14 mt-4">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-3 gap-10 mb-10">
                <div>
                    <div class="flex items-center gap-0 mb-3">
                        <img src="favicon.png" alt="D" class="h-7 w-7">
                        <span class="-ml-1 text-2xl font-bold font-display gradient-text">iLabs</span>
                    </div>
                    <p class="text-gray-500 text-sm leading-relaxed"><?= t('hero_tagline') ?></p>
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900 mb-4"><?= t('nav_products') ?></h4>
                    <ul class="space-y-2 text-sm">
                        <?php foreach ($products as $slug => $p): ?>
                        <li><a href="product.php?p=<?= $slug ?>" class="text-gray-500 hover:text-gray-900 transition-colors"><?= t($slug . '_name') ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold text-gray-900 mb-4"><?= t('nav_contact') ?></h4>
                    <ul class="space-y-2 text-sm text-gray-500">
                        <li><i class="fas fa-envelope mr-2 text-gray-400"></i>nguyenlukhanhduy@gmail.com</li>
                        <li><i class="fas fa-phone mr-2 text-gray-400"></i>097 2 342 075</li>
                        <li><i class="fas fa-map-marker-alt mr-2 text-gray-400"></i>Can Tho City, Vietnam</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-200 pt-8 text-center">
                <p class="text-sm text-gray-500"><?= t('footer_copyright') ?></p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
