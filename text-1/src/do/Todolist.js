import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './css/todolist.css'

export default class TodoList extends Component {
    constructor(){
        super();
        this.state={
            todo:JSON.parse(localStorage.getItem('todo')) || []
        }
    }
    addItem=(msg)=>{
        this.setState({
            todo:[...this.state.todo,msg]
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        });
    }
    delItem=(index)=>{
        var data2 = [...this.state.todo];
        data2.splice(index,1);
        this.setState({
            todo:data2
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    change=(index)=>{
        console.log(index)
        var data1 = [...this.state.todo];

        if(data1[index].done){
            data1[index].done=false
        }else{
            data1[index].done=true
        }
        this.setState({
            todo:data1
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo))
        })
    }
    render() {
        return (
            <div className="todolist">
                <div className="dolist">
                <Todoinput add={this.addItem}/>
                <Todoing list={this.state.todo} del={this.delItem} ch={this.change}/>
                </div>
            </div>
        )
    }
}
