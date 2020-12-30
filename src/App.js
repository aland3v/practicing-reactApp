// import logo from './logo.svg';
import './App.css';
import React from 'react'
/* function HelloWorld(props) {
  console.log(props);
  return (
    <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.myText}
    </div>
  )
} */

class HelloWorld extends React.Component {

  state = {
    show: true
  }

  /* toggleShow(){
    this.setState({show:false})
  } */

  toggleShow = () => {
    this.setState({show:!this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.myText}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>There are not Elements</h1>
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div>
    This is my component:
    <HelloWorld myText='hola Alan' subtitle='algo' />
    <HelloWorld myText='hola Pepe' subtitle='nuevo' />
    <HelloWorld myText='hola Ana' subtitle='sucederá' />
    </div>
  );
}

export default App;
