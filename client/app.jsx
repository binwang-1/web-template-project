import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from '@apollo/client';

import routes from './routes';
import { client } from './graphql';

import 'antd/dist/antd.less';
// import 'snowy/dist/snowy.css';
import 'snowy/dist/styles/index.less';


function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={browserHistory} routes={routes} />
    </ApolloProvider>
  )
}

const div = document.createElement('div');
document.body.append(div);

ReactDOM.render(<App />, div);
