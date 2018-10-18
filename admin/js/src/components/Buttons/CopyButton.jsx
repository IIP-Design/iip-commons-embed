import React from 'react';

import { copyOutput } from '../../utils/copy-shortcode';

const CopyButton = ( ) => (
  <button className="button" id="iipce-copy-button" onClick={ () => copyOutput() } type="button">
    Copy Shortcode
  </button>
);

export default CopyButton;
