import React, {Component} from 'react';



class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10);

    state = {
        text: '',
        checked: false,
        date: this.minDate,
    };


    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    };

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    };

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    };

    handleClick = () => {
        //invocation of methode Click + invocation of function adding object from props (from
        // componenet App.jsx "<AddTask add={this.addTask}/>"

        const {text, checked, date} = this.state;

        if(text.length > 3) {

            const add = this.props.add(text, date, checked);
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate,
                })
            }
        }else {
            alert('too short task-name')
        }
    };

    render() {

        let maxDate = (this.minDate.slice(0,4)) * 1 + 1;

        maxDate = maxDate + '-12-31';

        return (
            <div className='form'>
                <input className='add-task' type='text' placeholder='Add task...' value={this.state.text} onChange={this.handleText}/>
                <div className='inp-lab-cont'>
                <input className='check-important' type='checkbox' checked={this.state.checked} id='important' onChange={this.handleCheckbox}/>
                <label className='label-important' htmlFor='important'> Important (check if priority) </label>
                </div>
                <label className='date-until' htmlFor='date'> Until: </label>
                <input className='date-finish' type='date' value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
                <br/>
                <button className='add-btn' onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddTask;