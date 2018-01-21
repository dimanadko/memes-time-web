import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import ChooseMeme from './components/ChooseMeme';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers';
import thunk from 'redux-thunk';
import Footer from './components/Footer';
import HeaderComponent from './components/Header/HeaderComponent.js';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div style={{
        height: '100vh',
        width: '960px',
        margin: 'auto',
        overflow: 'hidden',
      }}
      >
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={ChooseMeme} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
