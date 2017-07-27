import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    _.extend(initialState, loadState()),
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant(), routerMiddleware(browserHistory)),
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
  );
}
