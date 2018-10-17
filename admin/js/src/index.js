import React from 'react';
import ReactDOM from 'react-dom';

import CommonsEmbedConverter from './containers/CommonsEmbedConverter';

import './commons-embed-admin.css';

ReactDOM.render(
  <CommonsEmbedConverter />,
  document.getElementById( 'iip-commons-embed-admin' )
);

module.hot.accept();
