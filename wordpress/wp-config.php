<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'library' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aL^(zC_N/!T2iIGVwXa vdPt:s?!{u8^>4{]NNu6~G[kOs=+$lt2c#uHHQm,}MbO' );
define( 'SECURE_AUTH_KEY',  'cdCk=.=SaJe^(: hhrOT$?xv$}45$Z=/ueg?[ol,hu3)TI-!iJ}.GD?T_vl)6X.L' );
define( 'LOGGED_IN_KEY',    'jY}Cqtf*#zrI>>0vc,L$d$=[o5TS~rN3oU:|q%HRu2vvwig2lSt#D~rDVzv6%`IY' );
define( 'NONCE_KEY',        '63nuP^}t-<@0~*og)c$Zu}/y)Awdwa%YgIF8Ph;|4;4<|8z^1q.k%pfLv0%M`h5)' );
define( 'AUTH_SALT',        'Z11U:/05BEc`rh6Dcz_H>[KA<.)JJ6HPe.fr?T>=lL.JKA}.} t43w-_OUg`*/Ww' );
define( 'SECURE_AUTH_SALT', 'bZh.JXvPbGeu 3f8!Asr[4z4iT4-8NGnzd?oWUT.K+0tOKvl.iVx@A{f7`~sG<:3' );
define( 'LOGGED_IN_SALT',   '2]T?@*E~5y&Hc[is8!AA_V={cW/3_S$:llfPJ~|L/T`z=gjq{#d[7)Bzll*]a_iE' );
define( 'NONCE_SALT',       '5PP$x0?`:~w?Rd6Xrms/r&9e*-&I&59dn/[hx!In_Zc(<J@I D32NwcU>b0@dg$O' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
