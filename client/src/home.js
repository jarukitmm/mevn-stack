import React, { Component } from 'react';
// import Login from './login.js';
// import Drawer from './Drawer.js';
// import Loginmodal from './loginmodal.js';
import Carousel from './carousel.js';
import Card from './card.js';
import Navmenu from './navmenu.js';
import Shoppingcart2 from './shoppingcart2';
import { Button } from '@material-ui/core';
// import Shopingcart from './product.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.cardpage = this.cardpage.bind(this);
    this.state = {
      page: 'ทั้งหมด',
      itemIncard: 0,
      SelectedItem: []
    };
    this.handleAddtoCard = this.handleAddtoCard.bind(this);
  }

  cardpage = p => {
    this.setState({ page: p });
    console.log(this.state);
  };

  handleAddtoCard = async e => {
    await this.setState({
      itemIncard: this.state.itemIncard + 1,
      SelectedItem: [...this.state.SelectedItem, e]
    });
    this.props.setRootState.bind(this, e);
    //console.log('homepage', this.state.SelectedItem);
  };

  render() {
    return (
      <div className="Container" style={{ marginTop: '0px' }}>
        <div style={{ position: 'fixed', bottom: 35, right: 35 }}>
          <Button href="/shopingcart">
            This is ShoppingCard2 {this.state.itemIncard}
          </Button>
        </div>
        <Carousel />
        <Navmenu setpage={this.cardpage} />
        {/* <p>{this.state.page}</p> */}
        <div class="cardzone" style={{ margin: '0px', marginTop: '1em' }}>
          <flex-container>
            <Card
              page={this.state.page}
              addItemtoCard={this.props.setRootState}
            />
          </flex-container>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}
