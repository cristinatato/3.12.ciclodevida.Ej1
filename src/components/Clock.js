import React from 'react';


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: ''
		}
		this.updateClock = this.updateClock.bind(this);
	}
		componentDidMount () {
			this.interval = setInterval(()=>{this.updateClock()}, 1000);
		}

		componentWillUnmount () {
			clearInterval(this.interval);
		}
		updateClock() {
			const newDate = new Date();
			const hour = newDate.getHours();
			const minutes = newDate.getMinutes();
			const seconds = newDate.getSeconds();
			const actualTime = hour + ':' + minutes  + ':' + seconds;
			this.setState(( {
				time: actualTime
			}))
		}

    render() {
        return(
					<div>{this.state.time}</div>
				);
    }
}


export default Clock;