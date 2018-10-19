import React from 'react';
import { func } from 'prop-types';

import { copyOutput } from '../../utils/copy-shortcode';

const CopyButton = ( { setButton } ) => (
  <button className="button" disabled={ setButton() } id="iipce-copy-button" onClick={ () => copyOutput() } type="button">
    Copy Shortcode
  </button>
);

CopyButton.propTypes = {
  setButton: func
};

export default CopyButton;
