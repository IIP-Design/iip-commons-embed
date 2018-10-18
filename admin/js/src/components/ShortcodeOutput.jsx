import React from 'react';
import { string } from 'prop-types';

const ShortcodeOutput = ( { output } ) => (
  <div className="iipce-shortcode-output">
    <label htmlFor="embed-input">
      Copy the below shortcode to add to your post:
      <textarea
        className="iipce-shortcode-text"
        id="shortcode-output"
        name="shortcode-output"
        readOnly
        value={ output }
      />
    </label>
  </div>
);

ShortcodeOutput.propTypes = {
  output: string
};

export default ShortcodeOutput;
