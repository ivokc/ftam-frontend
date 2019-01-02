import React, { Component } from 'react';
import { Router} from 'react-router-dom';
import './App.css';
import './main/constants/Constant';
import './main/constants/Image';
import './main/constants/Url';

import './main/global/Just';
import RootRouter from './router/RootRouter';
import createBrowserHistory from "history/createBrowserHistory";

class App extends Component {



  componentWillMount(){
    global.Just.log('App',global.store.getState());


    global.JJmHistory = createBrowserHistory();
  }

  render() {

    return (
        <Router history={global.JJmHistory}>
          <RootRouter/>
        </Router>
    );
  }
}


export default App;
