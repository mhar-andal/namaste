import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

// import { loginSuccess } from 'store/Session/actions';
// import { getCookie } from 'store/auth';
import rootReducer from 'store/reducers.js';
import { apiMiddleware, errorMiddleware } from 'store/middleware.js';

const historyMiddleware = routerMiddleware(browserHistory);

export default () => {
  // const cookie = getCookie();

  const devTools =
    window.devToolsExtension && process.env.NODE_ENV !== 'production'
      ? window.devToolsExtension()
      : f => f;

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
        apiMiddleware,
        historyMiddleware,
        errorMiddleware,
      ),
      devTools,
    ),
  );

  // if (cookie && cookie.token) {
  //   store.dispatch(loginSuccess(cookie));
  // }

  return store;
};
