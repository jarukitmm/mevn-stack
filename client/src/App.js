import React, { Component } from 'react';
import './css/App.css';
// import Login from './login.js';
// import Drawer from './Drawer.js';
// import Loginmodal from './loginmodal.js';
import Header from './header.js';
import Carousel from './carousel.js';
import Card from './card.js';
import Footer from './footer.js';
import Navbar from './navbar.js';
import Navmenu from './navmenu.js';

class App extends Component {
  render() {
    return (
      <div className="Container">
        {/* <Header/> */}
        {/* <Login/> */}
        {/* <Drawer/> */}
        {/* <Loginmodal/> */}
        <Navbar/>
        <Carousel/>
        <Navmenu/><br/>
        <div class="cardzone" style={{margin: '0px'}}>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
