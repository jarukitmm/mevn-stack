import React, { Component } from 'react';
// import Login from './login.js';
// import Drawer from './Drawer.js';
// import Loginmodal from './loginmodal.js';
import Carousel from './carousel.js';
import Card from './card.js';
import Footer from './footer.js';
import Navbar from './navbar.js';
import Navmenu from './navmenu.js';
import Shopingcart from './shopingcart.js';

export default class Home extends Component {
  render() {
    return (
      <div className="Container" style={{marginTop: '0px'}}>
        <Carousel/>
        <Navmenu/>
        <div class="cardzone" style={{margin: '0px',marginTop: '1em'}}>
        <flex-container>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
          <Card/><Card/>
        </flex-container>
          
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

