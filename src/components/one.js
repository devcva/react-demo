import React, { Component } from 'react'

export default class one extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    rec: "1",
                    name: "Siva",
                    age: 24
                },
                {
                    rec: "2",
                    name: "Muthu",
                    age: 29
                },
                {
                    rec: "3",
                    name: "Kumar",
                    age: 21
                }
            ],
            val: ""
        }
    }
    inc = () => {
        this.setState({
            age : this.state.age + 1
        })
    }
    dec = () => {
        if(this.state.age) {
            this.setState({
                age : this.state.age - 1
            })
        }
    }
    valChange = (e) => {
        this.setState({
            val:e.target.value
        })
    }
    addRec = () => {
        alert(this.state.val);
    }
    render() {
        return (
            <div>
                {
                this.state.data.map(e => 
                    <div className="record">
                        <h1>Record {e.rec}</h1>
                        <h2>Name: {e.name}</h2>
                        <div className="age-container">
                            <h2>Age: {e.age}</h2>
                            <button onClick={this.inc}>+</button>
                            <button onClick={this.dec}>-</button>
                        </div>
                    </div>
                    )
                }

                <div>
                    <form onSubmit={this.addRec}>
                        <input type="text" value={this.state.val} onChange={this.valChange} />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
