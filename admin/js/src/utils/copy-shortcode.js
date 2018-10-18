export const copyOutput = () => {
  const output = document.querySelector( '.iipce-shortcode-text' );
  output.select();
  document.execCommand( 'copy' );
};
