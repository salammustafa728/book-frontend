import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ApointmentForm from "./ApointmentForm";

class Buyer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seller: [],
      url: process.env.REACT_APP_URL,
      show: false,
      search: "",
      searchResult: "",
    };
  }

  componentDidMount = () => {
    axios
      .get(`${this.state.url}/seller`)
      .then((response) => {
        this.setState({
          seller: response.data[0].sellers,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  showForm = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  closeForm = () => {
    this.setState({
      show: false,
    });
  };
  updateSearch = (e) => {
    this.setState({
      search: e.target.value.substr(0, 20),
    });
    console.log(this.state.search);
  };

  render() {
    let filterdSeller = this.state.seller.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    console.log("filterdarray ", filterdSeller);

    return (
      <div id="Buyer">
        <div>
          {" "}
          <h1 className="h111">Sellers Data</h1>
          <div>
            <h3 className="h444"> Filter the sellers, enter a name </h3>
            <div className="form__group">
              <input
                className="form__input"
                type="text"
                name="name"
                id="name"
                placeholder="seller name"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "20px 20px",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {filterdSeller.map((d, idx) => {
              return (
                <div key={idx}>
                  <div>
                    <Card
                      style={{
                        width: "18rem",
                        marginBottom: "20px",
                        marginLeft: "20px",
                      }}
                      key={idx}
                    >
                      <Card.Body>
                        Seller data
                        <Card.Title>Name: {d.name}</Card.Title>
                        {console.log(d.name)}
                        <Card.Text>Description: {d.description}</Card.Text>
                        <button className="btn" onClick={this.showForm}>
                          {" "}
                          Book Appointment
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
          {this.state.show && (
            <div>
              <ApointmentForm
                show={this.state.show}
                showForm={this.showForm}
                closeForm={this.closeForm}
                seller={this.state.seller}
                url={this.state.url}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Buyer;
