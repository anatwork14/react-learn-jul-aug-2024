// Class Component

// Function Component
import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

// Day la class Component
class MyComponent extends React.Component {
  state = {
    listUsers: [
      {
        id: 1,
        name: "Bui KAn",
        age: "16",
      },
      {
        id: 2,
        name: "Bui KAn 1 ",
        age: "31",
      },
      {
        id: 3,
        name: "Bui KAn 2",
        age: "3",
      },
    ],
  };
  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  render() {
    // return (
    //   <div>
    // My name is {this.state.name}
    // <br />
    // and I'm in {this.state.age}
    // {/* <button
    //   onClick={(event) => {
    //     this.handleClick(event);
    //   }}
    // >
    //   Click me
    // </button> */}
    // <form
    //   onSubmit={(event) => {
    //     this.handleonSubmit(event);
    //   }}
    // >
    //   <label>Your name: </label>
    //   <input
    //     type="text"
    //     onChange={(event) => {
    //       this.handleonChangeInput(event);
    //     }}
    //     value={this.state.name}
    //   />
    //   <button>Submit</button>

    //   <label> Your age: </label>
    //   <input
    //     type="number"
    //     onChange={(event) => {
    //       this.handleonChangeAge(event);
    //     }}
    //     value={this.state.age}
    //   />
    //   <button>Submit</button>
    // </form>
    //     <UserInfo/>
    //   </div>
    // );
    // DRY: Dont Repeat yourself
    return (
      // DRY: Don't repeat yourself
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfo
            listUsers={this.state.listUsers} // Dòng dưới không cần () do là đang truyền hàm chứ không phải gọi hàm
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
