import React, { Component } from 'react'

export default class child extends Component {
    componentWillUnmount() {
        alert("This component named child is about to be unmounted.");
    }
  render() {
    console.log(this, "Test This");
    return <>{this.props.countDown}</>
  }
}
