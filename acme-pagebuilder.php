<?php

/*
Plugin Name: Yst Pagebuilder
Plugin URI: http://URI_Of_Page_Describing_Plugin_and_Updates
Description: A brief description of the Plugin.
Version: 1.0
Author: alexander
Author URI: http://URI_Of_The_Plugin_Author
License: A "Slug" license name e.g. GPL2
*/

define( 'YSTPB_PLUGIN_FILE', __FILE__ );

function ystpb_enqueue_scripts() {
	global $pagenow;

	if ( $pagenow === 'post.php' || $pagenow === 'post-new.php' ) {
		wp_register_script(
			'ystpb_pagebuilder',
			plugins_url( 'js/dist/pagebuilder.js', YSTPB_PLUGIN_FILE ),
			array(
				'wp-plugins',
			),
			null,
			true
		);
		wp_enqueue_script( 'ystpb_pagebuilder' );
	}
}

add_action( 'admin_init', 'ystpb_enqueue_scripts' );


