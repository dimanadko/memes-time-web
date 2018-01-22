import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import React from 'react';

import HeaderComponent from './components/Header/HeaderComponent.js';
import registerServiceWorker from './registerServiceWorker';
import ChooseMeme from './components/ChooseMeme';
import Footer from './components/Footer';
import reducer from './reducers';
import thunk from 'redux-thunk';
import './index.css';
import RegisterForm from './components/RegisterForm.js'


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div style={{
        width: '960px',
        margin: 'auto'
      }}
      >
        <HeaderComponent />
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={ChooseMeme} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
)

  /*<RegisterForm />*/
, document.getElementById('root'));
registerServiceWorker();
