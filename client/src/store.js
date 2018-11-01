import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //middleware
import rootReducer from './reducerd'; // pasta das rotas do redux

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
