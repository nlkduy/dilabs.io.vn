<?php
/**
 * Product catalog. Text lives in i18n.php under "<slug>_*" keys;
 * this file holds everything that doesn't need translating.
 */

$products = [
    'vangson' => [
        'icon'          => 'fa-music',
        'gradient'      => 'from-rose-500 to-orange-400',
        'accent'        => 'text-rose-300',
        'glow'          => 'rgba(244, 63, 94, 0.35)',
        'url'           => 'https://vangson.info',
        'year'          => '2017',
        'status'        => null,
        'feature_icons' => ['fa-book-open', 'fa-users', 'fa-heart'],
    ],
    'dinhduongthaiky' => [
        'icon'          => 'fa-baby',
        'gradient'      => 'from-teal-400 to-emerald-500',
        'accent'        => 'text-teal-300',
        'glow'          => 'rgba(45, 212, 191, 0.35)',
        'url'           => 'https://dilabs.io.vn/dinhduongthaiky',
        'year'          => '2026',
        'status'        => null,
        'feature_icons' => ['fa-calendar-week', 'fa-utensils', 'fa-lightbulb'],
    ],
    'lazymus' => [
        'icon'          => 'fa-headphones',
        'gradient'      => 'from-violet-500 to-blue-500',
        'accent'        => 'text-violet-300',
        'glow'          => 'rgba(139, 92, 246, 0.35)',
        'url'           => 'https://dilabs.io.vn/lazymus/',
        'year'          => '2026',
        'status'        => 'Alpha',
        'feature_icons' => ['fa-play', 'fa-record-vinyl', 'fa-magnifying-glass'],
    ],
];
