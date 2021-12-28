import React, { Component } from 'react';
import { withAuth0 ,user} from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.auth0.user.name,
      email: this.props.auth0.user.email,
      userPic: this.props.auth0.user.picture,
    };
  }
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div style={{background:'white',marginBottom:'40px',width:""}}>
        <br></br>
        <br></br>
        {/* User Data */}
        <div >
        <div style={{ width: '38%',margin:'auto' ,marginBottom:'80px',height:"100%",border:'solid 1px #F8FFAE'}}>
          <img
            variant="top"
            src={this.state.userPic}
            alt={this.state.user}
          />
          {/* <Card.Body> */}
            <h4 className='h444'>{this.state.user}</h4>
            <h4 className='h444'>{this.state.email}</h4>
          {/* </Card.Body> */}
        </div>
        </div>
      </div>
    );
  }
}

export default withAuth0(Profile);