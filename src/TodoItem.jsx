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
      items: props.items
    };
  }

  onClickChange = e => {
    const change = prompt("바꿀 값");
    this.setState({ value: change });
  };

  render() {
    return (
      <Div>
        <span>{this.state.value}</span>
        <button onClick={this.onClickChange}>수정</button>
        <button onClick={this.props.onClickDel}>삭제</button>
      </Div>
    );
  }
}

export default TodoItem;
