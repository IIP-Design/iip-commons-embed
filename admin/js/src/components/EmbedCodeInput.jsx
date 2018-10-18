import React from 'react';
import { func, string } from 'prop-types';

const EmbedCodeInput = ( { input, callback } ) => (
  <div className="iipce-embed-input">
    <form>
      <label htmlFor="embed-input">
        Paste the Commons embed code here:
        <textarea
          className="iipce-text-input"
          id="embed-input"
          name="embed-input"
          onChange={ callback }
          value={ input }
        />
      </label>
    </form>
  </div>
);

EmbedCodeInput.propTypes = {
  input: string,
  callback: func
};

export default EmbedCodeInput;
