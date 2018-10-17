<?php
/**
 * Plugin Name: IIP Commons Embed
 * Description: Adds ability to embed a Google map onto a WordPress site
 * Version: 0.0.1
 * Author: Marek Rewers
 * Text Domain: iip-commons-embed
 * License: GPLv2 or laters
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
 	die;
}

// Define constants
define( 'COMMONS_EMBED_DIR', plugin_dir_path( dirname( __FILE__ ) ) . 'iip-commons-embed/' );
define( 'COMMONS_EMBED_URL', plugin_dir_url( dirname( __FILE__ ) ) . 'iip-commons-embed/' );

// function iip_map_activate() {
// 	require_once plugin_dir_path( __FILE__ ) . 'includes/class-iip-map-activator.php';
// 	IIP_Map_Activator::activate();
// }
// register_activation_hook( __FILE__, 'iip_map_activate' );


// function iip_map_deactivate() {
// 	require_once plugin_dir_path( __FILE__ ) . 'includes/class-iip-map-deactivator.php';
// 	IIP_Map_Deactivator::deactivate();
// }
// register_deactivation_hook( __FILE__, 'iip_map_deactivate' );

require plugin_dir_path( __FILE__ ) . 'includes/class-commons-embed.php';

/* Begin execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 */

function run_commons_embed() {
 	$plugin = new IIP_Commons_Embed();
 	$plugin->run();
}

run_commons_embed();
