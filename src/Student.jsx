import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  & + div {
    display: none;
  }
  &.check {
    & + div {
      display: block;
    }
  }
`;

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      checkedstyle: false,
    };
  }

  handleChange = event => {
    this.setState({ checked: event.target.checked });
  };
  handleChangeStyled = event => {
    this.setState({ checkedstyle: event.target.checked });
  };
  render() {
    return (
      <React.Fragment>
        <input type='checkbox' name='checkbox' onChange={this.handleChange} />
        {this.state.checked && <div>Check!</div>}
        <br />
        <Input
          type='checkbox'
          name='checkbox'
          onChange={this.handleChangeStyled}
          className={this.state.checkedstyle && 'check'}
        />
        <div>Check-styled</div>
        <br />
      </React.Fragment>
    );
  }
}

export default Check;
