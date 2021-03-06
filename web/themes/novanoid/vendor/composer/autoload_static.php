<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf077742b00ee95f468976cbc4b0547b4
{
    public static $files = array (
        '3917c79c5052b270641b5a200963dbc2' => __DIR__ . '/..' . '/kint-php/kint/init.php',
    );

    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kint\\' => 5,
        ),
        'D' => 
        array (
            'Doctrine\\Common\\Collections\\' => 28,
        ),
        'C' => 
        array (
            'CommerceGuys\\Addressing\\' => 24,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kint\\' => 
        array (
            0 => __DIR__ . '/..' . '/kint-php/kint/src',
        ),
        'Doctrine\\Common\\Collections\\' => 
        array (
            0 => __DIR__ . '/..' . '/doctrine/collections/lib/Doctrine/Common/Collections',
        ),
        'CommerceGuys\\Addressing\\' => 
        array (
            0 => __DIR__ . '/..' . '/commerceguys/addressing/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf077742b00ee95f468976cbc4b0547b4::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf077742b00ee95f468976cbc4b0547b4::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf077742b00ee95f468976cbc4b0547b4::$classMap;

        }, null, ClassLoader::class);
    }
}
