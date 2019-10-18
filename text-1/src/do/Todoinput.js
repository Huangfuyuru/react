import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            item:{title:'',done:true}
        }
    }
    handleChange=(event)=>{
        this.setState({
            item:{title:event.target.value,done:true}
        })

    }
    put=(event)=>{
        if(event.keyCode === 13){
            this.props.add(this.state.item)
        }
    }
    render() {
        return (
            <div className="todoinput">
                <div className="doinput">
                <h1>请输入要做的事情</h1>
                <input name="item" type="text" value={this.state.item.title} onChange={this.handleChange} onKeyDown={this.put}/>
                </div>
            </div>
        )
    }
}
