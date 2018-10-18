import React from 'react';
import { string } from 'prop-types';

const ShortcodeOutput = ( { output } ) => (
  <div className="iipce-shortcode-output">
    Copy the below shortcode to add to your post:
    <div className="iipce-shortcode-text">{ output }</div>
  </div>
);

ShortcodeOutput.propTypes = {
  output: string
};

export default ShortcodeOutput;
