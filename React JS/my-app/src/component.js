import React, { Component } from 'react'

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Damon Yadav",
        };
    }
    changeName() {
        console.log(this, "this")
        this.setState({fullName: "test"});
    }

  render() {
    return (
        <>
        <div>
        {this.state.fullName}
        </div>
        <button onClick = {this.changeName.bind(this)}>Change Name</button>
        </>
    )
  }
}

