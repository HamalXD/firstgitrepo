// import './App.css';
// // import ComponentLifeCycles from './ComponentLifeCycles'
// // import ComponentUnmounting from './ComponentUnmounting';
// import TimerCounterApp from './TimerCounterApp';
// import List from './List';

// function App() {
//   // let name = "Ruby";
//   return (
//       <div className="App">
//           {/* <ComponentUnmounting/>
//           <ComponentLifeCycles name1 = {name} /> */}
//           <TimerCounterApp/><br></br>
//           <counter></counter>
//           <List/>
//       </div>
//   )
// }

// export default App;


import React, { Component } from 'react'
import List from './List'

export default class App extends Component {
  render() {
    return (
      <div>
        <List/>
      </div>
    )
  }
}
