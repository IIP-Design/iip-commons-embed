<?php

namespace Commons_Embed;

class Admin {

  public function enqueue_commons_embed_admin() {
    
    wp_enqueue_script( 'commons-embed-admin-js', COMMONS_EMBED_URL . 'admin/js/dist/commons-embed-admin.js', array(), null, true );
  }
  
  public function add_commons_metabox() {
    
    $post_type = array( 'post', 'page' );

    add_meta_box(
      'commons-embed-converter',
      __( 'Convert Commons Embed', 'iip-commons-embed' ),
      array( $this, 'render_commons_metabox' ),
      $post_type,
      'normal',
      'low'
    );
  }

  public function render_commons_metabox() {
    echo '<div id="iip-commons-embed-admin"></div>';
  }
}