import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    alert("me");
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // Props == Properties
    // destructuring array
    const { listUsers } = this.props;
    console.table(listUsers);
    return (
      // Lưu trữ hình ảnh trong server
      <div className="display-infor-container">
        <img src={logo} />
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === false
              ? "Hide List Users:"
              : "Show List Users:"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((users) => {
              return (
                <div
                  key={users.id}
                  className={+users.age > 18 ? "green" : "red"}
                >
                  <div>
                    <div>My name is {users.name}</div>
                    <div>My age is {users.age}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(users.id)}
                    >
                      Delete This User
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
