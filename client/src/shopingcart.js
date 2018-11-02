// react-super-responsive-table
import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { formatMs } from '@material-ui/core/styles/transitions';
import './css/shopingcart.css';
import axios from 'axios';

export default class Shopingcart extends React.Component{
  constructor(props){
    
    super(props);

    this.state = {
      data : []
    };
  }

  loopcount(){
    // this.setState({data:res.data} = axios.post(`http://localhost:3000/api/product`);
  }

  render(){
    return(
      <Table>
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>Product ID</Th>
            <Th>Product Img</Th>
            <Th>Product Name</Th>
            <Th>Product Detail</Th>
            <Th>Quantity</Th>
            <Th>Price/unit</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>31</Td>
            <Td>2017</Td>
            <Td>Alabama Community College System (ACCS)</Td>
            <Td>Mr. Toner Evans, Samford University</Td>
            <Td>Ms. Kelly Birchfield, Auburn University Montgomery</Td>
            <Td><img src="data:image/png;base64,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"></img></Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          {/* <Tr>
            <Td>30</Td>
            <Td>2016</Td>
            <Td>Samford University</Td>
            <Td>Ms. Angel Jowers, University of West Alabama</Td>
            <Td>Mr. Toner Evans, Samford University</Td>
            <Td>Academ(ia) Awards: Best Practices/Performances in IR</Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>29</Td>
            <Td>2015</Td>
            <Td>Eufaula (Wallace Community College Dothan)</Td>
            <Td>Dr. Annette Cederholm, Snead State Community College</Td>
            <Td>Ms. Angel Jowers, University of West Alabama</Td>
            <Td>Back to the Future</Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>28</Td>
            <Td>2014</Td>
            <Td>Huntsville (J.F. Drake State Community and Technical College)</Td>
            <Td>Dr. Jon C. Acker, The University of Alabama</Td>
            <Td>Dr. Annette Cederholm, Snead State Community College</Td>
            <Td>Institutional Research…and Beyond!</Td>
            <Td></Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>27</Td>
            <Td>2013</Td>
            <Td>The University of Alabama</Td>
            <Td>Mr. John McIntosh, Northwest-Shoals Community College</Td>
            <Td>Dr. Jon C. Acker, The University of Alabama</Td>
            <Td>Moving the Ball Forward</Td>
          </Tr> */}
        </Tbody>
      </Table>
    );
  }
}