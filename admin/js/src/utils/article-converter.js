import { outputShortcode } from './shortcode-output';

export const getEmbedType = ( input ) => {
  let type = null;

  if ( input.includes( 'cdp-article-embed' ) ) {
    type = 'article';
  }

  return type;
};

export const getEmbedPostId = ( input ) => {
  let postId = null;
  let dataString = '';
  const regex = /data-id="(.*?)"/;

  if ( input.search( regex ) !== -1 ) {
    const value = input.match( regex );
    [dataString, postId] = value;
  }

  return postId;
};

export const getEmbedPostSite = ( input ) => {
  let site = null;
  let dataString = '';
  const regex = /data-site="(.*?)"/;

  if ( input.search( regex ) !== -1 ) {
    const value = input.match( regex );
    [dataString, site] = value;
  }

  return site;
};

export const getEmbedLoader = ( input ) => {
  let loader = null;
  let dataString = '';
  const regex = /src="(.*?)"/;

  if ( input.search( regex ) !== -1 ) {
    const value = input.match( regex );
    [dataString, loader] = value;
  }

  return loader;
};

export const parseEmbedCode = ( input ) => {
  const type = getEmbedType( input );
  const postId = getEmbedPostId( input );
  const site = getEmbedPostSite( input );
  const loader = getEmbedLoader( input );

  const shortcode = outputShortcode( type, postId, site, loader );
  return shortcode;
};
