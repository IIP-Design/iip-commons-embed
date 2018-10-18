import React from 'react';
import ReactDOM from 'react-dom';

import EmbedConverter from './containers/EmbedConverter';

import './commons-embed-admin.css';

ReactDOM.render(
  <EmbedConverter />,
  document.getElementById( 'iip-commons-embed-admin' )
);

module.hot.accept();
