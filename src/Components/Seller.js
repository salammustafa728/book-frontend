import React, { Component } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Seller.css";

export class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      buyer: [],
      url: process.env.REACT_APP_URL,
      name:'',
      description:'',
      phone:'',
      show:false,
    };
  }
  componentDidMount = () => {
    axios
      .get(`${this.state.url}/buyer`)
      .then((response) => {
        console.log(response.data, " response.data");
        this.setState({
          userid: response.data[0]._id,
          buyer: response.data[0].buyers,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  deleteApoitment = (idx, dataId) => {
    console.log("dataid " + dataId);
    console.log("idx " + idx);
    axios
      .delete(`${this.state.url}/buyer/${dataId}/${idx}`)
      .then((response) => {
        console.log(response.data, "eeeeee");
        this.setState({
          buyer: response.data,
        });
      })
      .catch((error) => console.log(error.message));
  };
  // showForm = () => {
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };
  closeForm = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div id="Seller" className="mainDiv">
        <h1 className="h111">Appointments</h1>
        <div  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "20px 20px",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}>

          {this.state.buyer.length &&
            this.state.buyer.map((data, idx) => {
              return (
                <div
                  key={idx}> <div>
                    <Card style={{ width: "18rem" }} key={idx}>
                      <Card.Body>
                        <Card.Title>Name: {data.name}</Card.Title>
                        <Card.Text>Description: {data.description}</Card.Text>
                        <Card.Text>Phone: {data.phone}</Card.Text>
                        <button
                          className="btn"
                          onClick={() =>
                            this.deleteApoitment(data._id, this.state.userid)
                          }
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                  
                </div>
              );
            })}
        </div>

     
      </div>
    );
  }
}

export default Seller;
