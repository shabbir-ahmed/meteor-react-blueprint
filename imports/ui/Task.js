import React, { Component } from 'react';
import { Tasks } from '../api/tasks';
import classnames from 'classnames';

export default class Task extends Component{
    toggleChecked(){
        //set the checked property to the opposite of its current value
        Tasks.update(this.props.task._id, {
            $set: {
                checked: !this.props.task.checked
            },
        });
    }

    deleteThisTask(){
        Tasks.remove(this.props.task._id);
    }

    render(){

        const taskClassName = classnames({
            checked: this.props.task.checked
        });

        return(
            <li className={taskClassName}>
                <button 
                className="delete" 
                onClick={this.deleteThisTask.bind(this)} >
                    &times;
                </button>

                <input 
                type="checkbox" 
                readOnly
                checked={!!this.props.task.checked}
                onClick={this.toggleChecked.bind(this)}
                />
                <span className="text">{this.props.task.text}</span>
            </li>
        );
    }
}