import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowswerRouter, Route } from 'react-router-dom'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowswerRouter>
      <div>
        <Route path="/" component={PostsIndex}>
        </Route>
      </div>
    </BrowswerRouter>
  </Provider>
  , document.querySelector('.container'));
