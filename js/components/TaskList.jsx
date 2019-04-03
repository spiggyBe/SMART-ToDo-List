import React from 'react';

import Task from './Task.jsx';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    // not necessarily to use 'task => task.active === true', because it is automatically TRUE

    const done = props.tasks.filter(task => !task.active);
    // not task.active which means FALSE

    // -----------------------------------------------------------------------------------------------------

    // start sorting if is equal or more than 2 task in tasklist
    if (active.length >= 2) {
        //sort by date from closest on the top
        active.sort((a, b) => {
            return a.finishDate - b.finishDate;
        });
    }

    if (done.length >= 2) {
        //sort by date from latest on the top
        done.sort((a, b) => {
            return b.finishDate - a.finishDate;
        });
    }
// --------------------------------------------------------------------------------------------------------

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete}
                                             change={props.change}/>);


    const displayed = 5;

    return (
        <div>
            <div className='active'>
                <h3>Tasks to do: </h3>
                {activeTasks.length > 0 ? activeTasks : <p> Nothing to do, go to sleep:)</p>}
            </div>
            <hr/>
            <div className='done'>
                <h3> Finished tasks: <em>({done.length})</em></h3>
                {done.length > displayed && <span>Displays {displayed} of all</span>}
                {/*if true, if false - react ignores this condition.*/}
                {doneTasks.slice(0, displayed)}
                {/*slice - just as extra, helps to see clear view in app view - shows just 'const displayed' done
                 tasks.*/}
                {done.length > displayed && <a href="#">Show more...</a>}
            </div>
        </div>
    );
};

export default TaskList;