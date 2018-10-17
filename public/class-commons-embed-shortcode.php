<?php

namespace Commons_Embed;

class Article_Shortcode {

  public function commons_create_shortcode( $args ) {
    $atts = shortcode_atts( array(
      'type' => 'article',
      'post_id' => '',
      'post_site' => '',
      'loader_url' => ''
    ) , $args );

    // Set shortcode attributes as variables
    $post_id = $atts['post_id'];
    $post_site = $atts['post_site'];
    $loader_url = $atts['loader_url'];

    $html = '<div id="cdp-article-embed"></div><script async id="cdpArticle" data-id="' . $post_id . '" data-site="' . $post_site . '" src="' . $loader_url . '"></script>';
    return $html;
  }

  function commons_add_shortcode() {
    add_shortcode( 'commons-embed', array( $this, 'commons_create_shortcode' ) );
  }
}