// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import tasks from './sample/tasks.json'

// Components
import Tasks from './components/tasks'
import TaskForm from './components/taskForm'
import Posts from './components/Posts'
// console.log(tasks);
class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    // console.log(title, description);
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks})
  }

  render() {
    return <div>
      <TaskForm addTask={this.addTask} />
      <Tasks
        tasks={this.state.tasks}
        deleteTask={this.deleteTask}
        checkDone={this.checkDone}
        />
      <Posts />
    </div>
  }
}

export default App;