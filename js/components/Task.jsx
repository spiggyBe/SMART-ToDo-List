import React from 'react';

const Task = (props) => {

    const {text, date, id, active, important, finishDate} = props.task;

    const style = {
        color: 'red',
    };

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>&nbsp;{text}&nbsp;</strong>&nbsp;- do
                    to:<span>&nbsp;{date}&nbsp;</span>
                    <button onClick={() => props.change(id)}> Done </button>
                    <button className='del' onClick={() => props.delete(id)}> X </button>
                </p>
            </div>
        )
    } else {

        const finish = new Date(finishDate).toLocaleString();

        return (
            <div>
                <p>
                    <strong>{text}</strong> <em>(do to:&nbsp;{date}&nbsp;)</em>
                    <br/>
                    - done:
                    <span>&nbsp;{finish}&nbsp;</span>
                    <button onClick={() => props.delete(id)}> X </button>
                </p>
            </div>
        )
    }
};

export default Task;

