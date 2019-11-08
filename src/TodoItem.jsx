// Counter.jsx
import React, { Component } from 'react';
import styled from 'styled-components';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  onClickChange = e => {
    const change = prompt('바꿀 값');
    this.setState({ value: change });
  };
  onClickDelete = e => {
    
  };

  render() {
    return (
      <div className='all'>
        <span>{this.state.value}</span>
        <button onClick={this.onClickChange}>수정</button>
        <button onClick={this.onClickDelete}>삭제</button>
      </div>
    );
  }
}

export default TodoItem;
