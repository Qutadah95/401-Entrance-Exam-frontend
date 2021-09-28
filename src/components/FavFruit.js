import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UpdateModel from "./UpdateModel";

class FavFruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favFruitArray: [],
      email: this.props.auth0.user.email,
      show:false,
      id:{},
      email:this.props.auth0.user.email,
    };
  }
  componentDidMount = () => {
    axios
      .get(`http://localhost:8080/fruit/${this.state.email}`)
      .then((frute) => {
        console.log(frute, "ddddddddd");
        this.setState({
          favFruitArray: frute.data,
        });
      });
  };

  removeOne = (id) => {
console.log(id);
axios.delete(`http://localhost:8080/fruit/${id}`).then((deletedItem)=>{
console.log(deletedItem);
// if(deletedItem.data.deletedCount===1){
//   const result = deletedItem.filter(dataa => dataa._id !== id);
//   return result;
//   })
//   return deletedItem;
  
// }
// this.setState({
//   favFruitArray: deletedItem,
// })
// console.log(this.state.favFruitArray,"ddddefrefsa");
// window.location.reload();

alert('refresh the page to see the result');
});
  };
  showModel=(id)=>{
    this.setState({
      show:true,
      id:id
    });
  }
  closeModele=()=>{
this.setState({
  show:false,
});
  }
  updateBotton=(event)=>{
    event.preventDefault();
    const reqbody={
      name:event.target.name.value,
      price:event.target.price.value,
      image:event.target.image.value,
      email:this.state.email
    };
    console.log(reqbody);
    axios.put(`http://localhost:8080/fruit/${this.state.id}`,reqbody).then((updateArray)=>{
      console.log(updateArray);
    });
  }
  render() {
    console.log(this.state.favFruitArray, "qqqqqqqq");
    return (
      <>
        <h1>My Favorite Fruits</h1>
        {this.state.favFruitArray.map((fruit) => {
          return (
            <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={fruit.image} />
              <Card.Body>
                <Card.Title>{fruit.name}</Card.Title>
                <Card.Text>{fruit.price}</Card.Text>
                <Button
                  onClick={() => {
                    this.removeOne(fruit._id);
                  }}
                  variant="danger"
                >
                  Remove
                </Button>
                <Button   onClick={() => {
                    this.showModel(fruit._id);
                  }} variant="primary">Update</Button>
              </Card.Body>
            </Card>
            <UpdateModel
             show={this.showModel}
             close={this.closeModele}
             updateBotton={this.updateBotton}
             fruit={fruit}


             />
            </div>
          );
        })}
      </>
    );
  }
}

export default withAuth0(FavFruit);
