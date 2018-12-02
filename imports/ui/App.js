import React, { Component } from 'react';
import Task from './Task';

export default class App extends Component{
    getTasks(){
        return [
            {_id: 1, text: 'This is task 1'},
            {_id: 2, text: 'This is task 2'},
            {_id: 3, text: 'This is task 3'},
            {_id: 4, text: 'This is task 4'},
            {_id: 5, text: 'This is task 5'}
        ];
    }

    renderTasks(){
        return this.getTasks().map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render(){
        return(
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}