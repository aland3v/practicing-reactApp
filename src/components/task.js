import React, { Component } from 'react';
import './task.css';
import PropTypes from 'prop-types';
class Task extends Component {
    
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { task } = this.props;
        const greenColor = {background: "green"}; // objeto
        return <p style={this.StyleCompleted()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            {/* <p style={greenColor}>Hola mundo de nuevo</p> */}
            <input onChange={this.props.checkDone.bind(this, task.id)} type="checkbox" />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)} >
                X
            </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color:'#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task