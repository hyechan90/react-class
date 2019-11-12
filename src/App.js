import React from "react";
//import MyName from './MyName';
//import Student from './Student';
//import Counter from './Counter';
import TodoItem from "./TodoItem";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 150px;
  margin-right: 150px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: ""
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items
    });
  };

  render() {
    return (
      <>
        <Div>
          <input
            type="text"
            onChange={this.onChange}
            style={({ border: "1px solid black" }, { height: "20px" })}
          />
          <button onClick={this.onClickAdd}>추가</button>

          {this.state.items.map((value, idx) => (
            <TodoItem key={idx} value={value} />
          ))}
        </Div>
      </>
    );
  }
}

export default App;
