import { outputShortcode } from './shortcode-output';

export const getEmbedType = ( input ) => {
  let type = null;

  if ( input.includes( 'cdp-article-embed' ) ) {
    type = 'article';
  }

  return type;
};

export const getEmbedParam = ( input, string ) => {
  let param = null;
  let dataString = ''; // eslint-disable-line no-unused-vars
  const regex = new RegExp( `${string}="(.*?)"` );

  if ( input.search( regex ) !== -1 ) {
    const value = input.match( regex );
    [dataString, param] = value;
  }

  return param;
};

export const parseEmbedCode = ( input ) => {
  const type = getEmbedType( input );
  const postId = getEmbedParam( input, 'data-id' );
  const site = getEmbedParam( input, 'data-site' );
  const loader = getEmbedParam( input, 'src' );

  const shortcode = outputShortcode( type, postId, site, loader );
  return shortcode;
};
