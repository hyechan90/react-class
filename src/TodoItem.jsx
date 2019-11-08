// Counter.jsx
import React, { Component } from 'react';
import styled from 'styled-components';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  onClickChange = e => {};
  onClickDelete = e => {};

  render() {
    return (
      <div>
        <span>{this.props.value}</span>
        <button onClickChange={this.onClickChange}>수정</button>
        <button onClick={this.onClickDelete}>삭제</button>
      </div>
    );
  }
}

export default TodoItem;
