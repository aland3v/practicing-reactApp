// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import tasks from './sample/tasks.json'
import Tasks from './components/tasks'
// console.log(tasks);
class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}

export default App;