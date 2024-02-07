import React, { Component } from 'react'

class classBasedComponent extends Component {


    state = {
        count: 0

    }

    handleClick = () => {
        const { count } = this.state;

        this.setState({
            count: count + 1
        }, () => {
            console.log(this.state)
        })
    }



    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                {
                    this.state.count === 5 && "Count is 5"
                }
            </div >
        )
    }

};

export default classBasedComponent;