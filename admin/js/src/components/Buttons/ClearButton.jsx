import React from 'react';
import { func } from 'prop-types';

const ClearButton = ( { callback, setButton } ) => (
  <button className="button" disabled={ setButton() } id="iipce-clear-button" onClick={ () => callback() } type="button">
    Clear Inputs
  </button>
);

ClearButton.propTypes = {
  callback: func,
  setButton: func
};

export default ClearButton;
