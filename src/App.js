import React from 'react';
import MyName from './MyName';
import Student from './Student';
import Counter from './Counter';
import TodoItem from './TodoItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: '',
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items,
      value: null,
    });
  };

  render() {
    return (
      <>
        <input type='text' onChange={this.onChange} />
        <button onClick={this.onClickAdd}>추가</button>
        {this.state.items.map((value, idx) => (
          <TodoItem key={idx} value={value} />
        ))}
      </>
    );
  }
}

export default App;
