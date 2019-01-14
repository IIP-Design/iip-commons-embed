import React from 'react';
import { func, string } from 'prop-types';

const ConvertButton = ( { callback, input } ) => (
  <button
    className="button"
    id="iipce-convert-button"
    onClick={ () => callback( `${input}` ) }
    type="button"
  >
    Convert Embed Code
  </button>
);

ConvertButton.propTypes = {
  callback: func,
  input: string
};

export default ConvertButton;
