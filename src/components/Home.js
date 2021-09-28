import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruitArray: [],
      email:this.props.auth0.user.email,
    };
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_HEROCO}/fruit`).then((data) => {
      console.log(data.data);
      this.setState({
        fruitArray: data.data,
        
      });
    });
  };
  addToFav=(name,price,image)=>{
console.log(name,price,image,this.state.email);
const reqbody={
  name:name,
  price:price,
  image:image,
  email:this.state.email
};
axios.post(`${process.env.REACT_APP_HEROCO}/fruit`,reqbody).then((Fruit)=>{console.log(Fruit);});
  }

  render() {
    console.log(this.state.fruitArray);
    return (
      <>
        <h1>API Fruits</h1>
        {this.state.fruitArray.map((fruit) => {
          return(
          
            <Card style={{ width: "18rem",display:"inline-block" }}>
              <Card.Img variant="top" src={fruit.image} />
              <Card.Body>
                <Card.Title>{fruit.name}</Card.Title>
                <Card.Text>
                  {fruit.price}
                </Card.Text>
                <Button onClick={(()=>{this.addToFav(fruit.name,fruit.price,fruit.image)})} variant="primary">Add To Favorites</Button>
              </Card.Body>
            </Card>
          
        )})}
      </>
    );
  }
}

export default withAuth0(Home);
