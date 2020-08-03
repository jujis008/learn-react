// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import classNames from 'classnames';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = (props) => {
//   return (
//     <div>
//       <h1>Welcome {props.title} ~</h1>
//       <p>Nice to meet you {props.title}</p>
//     </div>
//   )
// }

// const createApp = (props) => {
//   return (
//     <div>
//        <h1>Welcome {props.title} ~</h1>
//        <p>Nice to meet you {props.title}</p>
//     </div>
//   )
// }

// const app = createApp({title: 'React App'});

// export default app;


// import React, { Component } from 'react';
import styled from 'styled-components';

import {
  TodoHeader,
  TodoInput,
  TodoList
} from './components';

import React, { Component, Fragment } from 'react'

export default class App extends Component {
  render() {
    return (
      // <>
      //   <TodoHeader />
      //   <TodoInput />
      //   <TodoList />
      // </>
      <Fragment>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </Fragment>
    )
  }
}


// export default class App extends Component {
  
//   render() {
//     const Title = styled.h1`
//       color: #f00
//     `
//     const style = {color: 'red'};
//     return (
//       <div>
//         <Title>元素中的样式</Title>
//         <p>{this.props.desc}</p>
//         <ol>
//           <li style={style}>使用内联创建样式</li>
//           <li className='has-text-color'>使用class的方式，但是在react里class要写成className</li>
//           <li className={classNames('a', {b: true, c: false})}>要动态添加不同的classNames就可以使用第三方的包叫classNames,比如这个li标签上就只有a,b，没有c</li>
//           <li >使用styled-components</li>
//         </ol>
//       </div>
//     )
//   }
// }
