import './App.css';
import React from 'react';
import Main from './components/Main';
import {Router} from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import history from './shared/history';

const store = ConfigureStore();

function App() {
  return (
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>

  );
}

export default App;
