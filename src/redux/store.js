import { createStore, compose, applyMiddleware } from 'redux';
import allReducers from './reducers';

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware())
  );

  return store;
}