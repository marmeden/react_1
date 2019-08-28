import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img
          src={this.props.userInfo.avatar}
          alt="{this.props.userInfo.name}"
        />
        <h3>{this.props.userInfo.name}</h3>
        <div>
          <strong>Location</strong>
          <p>{this.props.userInfo.location}</p>
        </div>
        <div>
          <strong>Eats</strong>
          <p>{this.props.userInfo.foodType}</p>
        </div>
        <div>
          <strong>Age</strong>
          <p>{this.props.userInfo.age}</p>
        </div>
        <div>
          <strong>Likes</strong>
          <p>{this.props.userInfo.likes}</p>
        </div>
        <div>
          <strong>Twitter</strong>
          <a>@{this.props.userInfo.twitterUsername}</a>
        </div>
      </div>
    );
  }
}

export default UserInfo;
