import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: [1,2,3]
    }

    this.remove = this.remove.bind(this)
  }
  remove(index){
    let newItems = [...this.state.items]
    newItems.splice(index, 1)
    this.setState({ items: newItems })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactCSSTransitionGroup
          transitionName="anim"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.state.items.map((value,index)=><div key={value}>{value}
            <button onClick={()=>this.remove(index)}>x</button>
          </div>)}
        </ReactCSSTransitionGroup>
        <button 
          onClick={()=> this.setState({items: [...this.state.items, new Date().getTime()]})}>add</button>
      </div>
    );
  }
}

export default App;
