import React, { Component } from 'react'

export default class ComponentLifeCycles extends Component {
    constructor(props){
        super(props);
        this.state = { name: "Java"}
    }
    // static getDerivedStateFromProps(props, state){
    //   return { name: props.name1 }
    // }
    // componentDidMount() {
    //   setTimeout(() => {
    //     this.setState({ name: "Python"})
    //   }, 1000);
    // };

    //should component update
    shouldComponentUpdate() {
      return true;
    }

    //function to change name 
    changeName = () => {
      this.setState({ name:"Python"});
    }

    //can access the value of previous state and pros
    getSnapshotBeforeUpdate(prevProps, prevState){
      document.getElementById("div1").innerHTML = "Before:" + prevState.name;
    }

    //component did update
    componentDidUpdate() {
      document.getElementById("div2").innerHTML = "After:" + this.state.name;
    }
  render() {
    console.log(this, "this")
    return (
      <>
      {this.state.name}
      <button onClick={this.changeName}>Change Name</button>
      <div id="div1"></div>
      <div id="div2"></div>
      </>
    )
  }
}
