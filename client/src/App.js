import React, { Component } from 'react';
import './css/App.css';
// import Login from './login.js';
// import Drawer from './Drawer.js';
import Loginmodal from './loginmodal.js';
// import Header from './header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        {/* <Login/> */}
        {/* <Drawer/> */}
        <br/><br/><br/> 
        <Loginmodal/>
      </div>
    );
  }
}

export default App;
