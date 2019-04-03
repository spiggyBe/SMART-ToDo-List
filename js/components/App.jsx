import React, {Component} from 'react';

import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';

import '../../scss/main.scss';


class App extends Component {

    counter = 2;

    state = {
        tasks: [{
            id: 1,
            text: 'Start using Your App',
            date: new Date().toLocaleString().slice(0,10),
            important: true,
            active: true,
            finishDate: null,
        }],
    };



    deleteTask = (id) => {

        // I. way to work on copy of array and set new state to remove task

        let tasks = [...this.state.tasks];

        tasks = tasks.filter(task => task.id !== id);
        //Explanation: checking array and filter(finding) task.id and copy to new array every id which is not the
        // same. After that will delete id which is exactly the same.

        this.setState({
            tasks
        })

        // II. way to work on copy of array and set new state to remove task

        /*const tasks = [...this.state.tasks];
        // best  way to copy of array
        const index = tasks.findIndex(task => task.id === id);
        //Explanation: Check array and if would not find, then return -1. If task.id is found with the same id,
        // remove this 'tasks' with 'this id'
        tasks.splice(index, 1); // remove one item with this index nr.
        this.setState({
            tasks
        })*/
    };

    changeTaskStatus = (id) => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime();
            }
        });

        this.setState({
            tasks
        })
    };

    addTask = (text, date, important) => {
        const task = {
            id: this.counter,
            text: text,
            date: date,
            important: important,
            active: true,
            finishDate: null,
        };

        this.counter++;

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
        }));

        return true;

    };


    render() {
        return (
                <div className='mainApp'>
                    <h1 className='title'>Smart To-Do App</h1>
                    <AddTask add={this.addTask}/>
                    <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>

                </div>
        )
    }
}

export default App;





