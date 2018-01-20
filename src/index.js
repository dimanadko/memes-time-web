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
import Header from './components/Header';
import Footer from './components/Footer';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div style={{
        backgroundColor: '#ecf0f1',
        width: '960px',
        height: '100%',
        margin: 'auto',
      }}
      >
        <Header />
        <Switch>
          <Route exact path="/" component={ChooseMeme} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
