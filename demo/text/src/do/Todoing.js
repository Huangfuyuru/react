import React, { Component } from 'react'

export default class Todoing extends Component {
    constructor(){
        super();
        
    }
    completeThing=(index)=>{
        this.props.ch(index);
    }
    delItem=(index)=>{
        this.props.del(index);
    }
    render() {
        console.log(this.props.list);
        var num=0;
        var num2=this.props.list.length;
        
        this.props.list && this.props.list.forEach((item)=>{
            if(item.done){
                num++;
            }
        })
        return (
            
            <div className="todoing">
                <div className="doing">
                    <h2>正在进行   {num}</h2>
                    <ul>
                    {
                        this.props.list && this.props.list.map((item,index)=>{
                            var a = 'c'+index;
                            if(item.done === true){
                            return (
                                <li key={a}>
                                    <button onClick={()=>this.completeThing(index)}>完成</button>
                                    <span>{item.title}</span>
                                    <button onClick={()=>this.delItem(index)}>删除</button>
                                </li>
                            )
                            }
                        })
                        
                    }
                    </ul>
                </div>
                <div className="doing">
                    <h2>已经完成   {num2-num}</h2>
                    
                    <ul>
                    {
                        this.props.list&&this.props.list.map((item,index)=>{
                            var b = 'n'+index
                            if(item.done === false){
                            return (
                                <li key={b}>
                                    <button onClick={()=>this.completeThing(index)}>未完成</button>
                                    <span>{item.title}</span>
                                    <button onClick={()=>this.delItem(index)}>删除</button>
                                </li>
                            )
                            }
                        })
                        
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
