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

	if ( get_post_type() !== 'acme-pages' ) {
		return;
	}

	if ( $pagenow === 'post.php' || $pagenow === 'post-new.php' ) {
		wp_register_script(
			'ystpb_lodash',
			plugins_url( 'js/vendor/lodash.min.js', YSTPB_PLUGIN_FILE ),
			array(),
			false,
			true
		);
		wp_register_script(
			'ystpb_pagebuilder',
			plugins_url( 'js/dist/pagebuilder.js', YSTPB_PLUGIN_FILE ),
			array(
				"wp-data",
				"wp-element",
				"ystpb_lodash",
			),
			true,
			true
		);
		wp_add_inline_script( "ystpb_lodash", "window.lodash = _.noConflict();", "after" );
		wp_enqueue_script( 'ystpb_pagebuilder' );
	}
}

function ystpb_register_post_type() {
	register_post_type( 'acme-pages', array(
		'has_archive' => 'acme/pagebuilder',
		'label'       => __( 'Acme Pages', 'acme' ),
		'public'      => true,
		'rewrite'     => array(
			'feeds'      => false,
			'slug'       => 'acme/pagebuilder',
			'with_front' => false,
		),
	) );
}

function ystpb_hide_editor() {

}

add_action( 'admin_init', 'ystpb_hide_editor' );
add_action( 'admin_enqueue_scripts', 'ystpb_enqueue_scripts' );
add_action( 'init', 'ystpb_register_post_type' );




