import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store';
import Root from './containers/Root';
import 'styles/styles.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const rootEl = document.getElementById('root');
let key = 0;

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} routerId={key++} />
    </AppContainer>,
    rootEl,
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    return render(NextRoot);
  });
}
