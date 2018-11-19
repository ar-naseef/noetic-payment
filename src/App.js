import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import 'bulma/css/bulma.css';

import Modal from './components/Modal';
import Mainpage from './components/MainPage';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Modal />
          <Mainpage />
        </div>
      </Provider>
    );
  }
}

export default App;