export const outputShortcode = ( type, postId, site, loader ) => {
  let shortcode;

  if ( type && postId && site && loader ) {
    shortcode = `[commons-${type} post_id="${postId}" post_site="${site}" loader_url="${loader}"]`;
  } else {
    shortcode = 'Sorry, the embed code you entered does not appear to be valid';
  }

  return shortcode;
};
