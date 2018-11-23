import React, { Component } from 'react';
import './css/App.css';
import Login from './login.js';
// import Drawer from './Drawer.js';
import Loginmodal from './loginmodal.js';
import Home from './home.js'
import Header from './header.js';
import Carousel from './carousel.js';
import Card from './card.js';
import Footer from './footer.js';
import Navbar from './navbar.js';
import Navmenu from './navmenu.js';
import Shopingcart from './shopingcart.js';
import Productcard from './productcard.js';
import Searchbar from './searchbar.js';
import Slidingpane from './slidingpane.js';
 
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Navbar/>
        <div style={{marginTop: '68px'}}>
          <Route exact path="/" component={Home} />
          <Route path="/header" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/navmenu" component={Navmenu} />
          <Route path="/card" component={Card} />
          <Route path="/shopingcart" component={Shopingcart}/>
          <Route path="/productcard" component={Productcard} />
          <Route path="/footer" component={Footer} />
          <Route path="/searchbar" component={Searchbar} />
          <Route path="/slidingpane" component={Slidingpane} />
        </div>
        <Footer style={{marginTop: '20em'}}/>
      </div>
    );
  }
}

export default App;
