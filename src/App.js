import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modelOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modelOpen: true });
  };

  closeModal = () => {
    this.setState({ modelOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.modelOpen}
          timeout={300}
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>
        {this.state.modelOpen && <Backdrop />}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
