import React, { Component } from 'react';

import EmbedCodeInput from '../components/EmbedCodeInput';
import ShortcodeOutput from '../components/ShortcodeOutput';
import ConvertButton from '../components/Buttons/ConvertButton';
import ClearButton from '../components/Buttons/ClearButton';
import CopyButton from '../components/Buttons/CopyButton';

import { parseEmbedCode } from '../utils/article-converter';

class EmbedConverter extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      input: 'Paste your embed code here',
      output: '[]'
    };

    this.setCopyButton = this.setCopyButton.bind( this );
    this.setClearButton = this.setClearButton.bind( this );
    this.handleChange = this.handleChange.bind( this );
    this.parseInput = this.parseInput.bind( this );
    this.resetFields = this.resetFields.bind( this );
  }

  setCopyButton() {
    const { output } = this.state;

    return (
      output === '[]'
      || output === 'Sorry, the embed code you entered does not appear to be valid'
    );
  }

  setClearButton() {
    const { output } = this.state;

    return (
      output === '[]'
    );
  }

  handleChange( e ) {
    this.setState( {
      input: e.target.value
    } );
  }

  parseInput( input ) {
    const shortcode = parseEmbedCode( input );

    this.setState( {
      output: shortcode
    } );
  }

  resetFields() {
    this.setState( {
      input: 'Paste your embed code here',
      output: '[]'
    } );
  }

  render() {
    const {
      input, output
    } = this.state;

    return (
      <div className="iipce-embed-converter">
        <EmbedCodeInput callback={ this.handleChange } input={ input } />
        <div className="iipce-embed-button-container">
          <ConvertButton callback={ this.parseInput } input={ input } />
          <CopyButton setButton={ this.setCopyButton } />
          <ClearButton callback={ this.resetFields } setButton={ this.setClearButton } />
        </div>
        <ShortcodeOutput output={ output } />
      </div>
    );
  }
}

export default EmbedConverter;
