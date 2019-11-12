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

  onClickDel = idx => {
    const newItems = [...this.state.items];
    newItems.splice(idx, 1);
    this.setState({ items: newItems });
    console.log(idx);
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
          <button
            onClick={this.onClickAdd}
            style={({ border: "none" }, { color: "black" })}
          >
            추가
          </button>

          {this.state.items.map((value, idx) => (
            <TodoItem
              onClickDel={() => this.onClickDel(idx)}
              key={Math.random() + idx}
              value={value}
              className="list"
            />
          ))}
        </Div>
      </>
    );
  }
}

export default App;
