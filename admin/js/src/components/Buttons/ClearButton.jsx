import React from 'react';
import { func } from 'prop-types';

const ClearButton = ( { callback } ) => (
  <button className="button" id="iipce-clear-button" onClick={ () => callback() } type="button">
    Clear Inputs
  </button>
);

ClearButton.propTypes = {
  callback: func
};

export default ClearButton;
