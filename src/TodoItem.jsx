// Counter.jsx
import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
`;

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      show: true
    };
  }

  onClickChange = e => {
    const change = prompt("바꿀 값");
    this.setState({ value: change });
  };
  onClickDelete = e => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Div style={{ display: this.state.show ? "block" : "none" }}>
        <span>{this.state.value}</span>
        <button onClick={this.onClickChange}>수정</button>
        <button onClick={this.onClickDelete}>삭제</button>
      </Div>
    );
  }
}

export default TodoItem;
