<?php

namespace Commons_Embed;

class Article_Shortcode {

  public function article_create_shortcode( $args ) {
    // Enumerate shortcode attributes
    $atts = shortcode_atts( array(
      'post_id' => '',
      'post_site' => '',
      'loader_url' => ''
    ) , $args );

    // Set shortcode attributes as variables
    $post_id = $atts['post_id'];
    $post_site = $atts['post_site'];
    $loader_url = $atts['loader_url'];

    // Return shortcode
    $html = '<div id="cdp-article-embed"></div><script async id="cdpArticle" data-id="' . $post_id . '" data-site="' . $post_site . '" src="' . $loader_url . '"></script>';
    return $html;
  }

  function article_add_shortcode() {
    add_shortcode( 'commons-article', array( $this, 'article_create_shortcode' ) );
  }
}