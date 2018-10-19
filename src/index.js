import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route } from 'react-router-dom';

import App from "./components/app";
import reducers from "./reducers";
import rootReducer from "./reducers";
import PostsIndex from "./components/posts_index";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Hello extends React.Component {
  render () { return <div>Hello</div> }
}

class Goodbye extends React.Component {
  render () { return <div>Goodbye!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
        <Route path="/weather" component={App} />
        <Route path="/hi" component={Hello} />
        <Route path="/bye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
