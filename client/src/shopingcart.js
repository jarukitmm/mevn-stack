// react-super-responsive-table
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { formatMs } from '@material-ui/core/styles/transitions';
import './css/shopingcart.css';
import axios from 'axios';
import CheckoutModal from './checkout.js';

export default class shopingcart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      selectedBook: [],
      ToggleModal: false,
      TotalOrderPrice: 0
    };
  }

  async componentDidMount() {
    //console.log(this.props.SelectedBook);
    let TotalOrderPrice = 0;
    for (let i = 0; i < this.props.SelectedBook.length; i++) {
      TotalOrderPrice += this.props.SelectedBook[i].cost;
    }
    this.setState({ TotalOrderPrice: TotalOrderPrice });
    const renderTable = this.props.SelectedBook.map((product, index) => {
      return (
        <Tr>
          <Td>{index + 1}</Td>
          <Td>
            <img
              style={{ width: '10em', height: '10em' }}
              src={product.image}
            />
          </Td>
          <Td>{product.name}</Td>
          <Td>{product.description}</Td>
          <Td>{product.subject}</Td>
          <Td>{product.level}</Td>
          <Td>{product.cost}</Td>
          <Td>
            <button onClick={this.props.RemoveItem.bind(this, index)}>
              Delete Items
            </button>
          </Td>
        </Tr>
      );
    });
    await this.setState({ data: renderTable });
  }
  handleToggleCheckoutModalOpen = () => {
    this.setState({ ToggleModal: true });
  };
  handleToggleCheckoutModalClose = () => {
    this.setState({ ToggleModal: false });
  };

  render() {
    return (
      <div>
        {this.state.ToggleModal ? (
          <CheckoutModal
            handleToggleClose={this.handleToggleCheckoutModalClose}
          />
        ) : (
          <div />
        )}
        <Table>
          <Thead>
            <Tr>
              <Th>No.</Th>
              {/* <Th>Product ID</Th> */}
              <Th>รูป</Th>
              <Th>ชื่อหนังสือ</Th>
              <Th>ชื่อผู้แต่ง/สำนักพิมพ์</Th>
              <Th>วิชา</Th>
              <Th>ระดับชั้น</Th>
              {/* <Th>Quantity</Th> */}
              <Th>ราคา</Th>
              {/* <Th>Total</Th> */}
            </Tr>
          </Thead>
          <Tbody>{this.state.data}</Tbody>
        </Table>
        <Table>
          <Thead>
            <Tr>
              <Th>จำนวนหนังสือ</Th>
              <Th>ราคารวม</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{this.props.SelectedBook.length}</Td>
              <Td>{this.state.TotalOrderPrice}</Td>
            </Tr>
          </Tbody>
        </Table>
        <button onClick={this.handleToggleCheckoutModalOpen}>Checkout</button>
      </div>
    );
  }
}
