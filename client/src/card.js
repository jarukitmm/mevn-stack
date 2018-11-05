import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import './css/card.css';

export default class Cardproduct extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data : null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/products/allproduct')
    .then(res=>{
      return res.json();
       }).then(data=>{
              let allproduct = data.product.map((product,index)=>{
            // console.log(index,JSON.stringify(product));
            return(
              <Card style={{margin: '10px', width: '400px'}}>
                {/* <div class="imagezone"> */}
                  <img width="100%" style={{width: '100em', height: '10em'}} src={product.image} alt="Card image cap" />
                {/* </div> */}
                <div class="contentzone">
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardSubtitle>{product.description}</CardSubtitle>
                  </CardBody>
                  <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">{product.cost+' บาท'}</CardLink>
                    <CardLink href="#">Add to Cart</CardLink>
                  </CardBody>
                </div>
              </Card> 
            )
          })
        //   console.log(allproducts);
        this.setState({data: allproduct});
       });
  }

  render(){
    return(
      this.state.data
    )
  }
}

