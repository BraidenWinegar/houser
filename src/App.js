import React from 'react';
import {HashRouter as Hash} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import Header from './Components/Header/Header'
import routes from './routes'


function App() {
  return (
    <Provider store={store}>
      <Hash >
        <div className="App">
          <Header />
          {routes}
        </div>
      </Hash>
    </Provider>
  );
}

export default App;
