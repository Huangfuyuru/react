import React, { Component } from 'react'
import Nav from './Nav'
import Cargo from './Cargo'
import {FlexExample1} from './Flex'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Nav num={0}/>
                <Cargo numCargo={0}/>
                <div style={{backgroundColor:'#eeeeee'}}>
                    <FlexExample1 />
                </div>
                <div>
                    <p>
                    <span style={{width:5,height:15,backgroundColor:'#3fcccb',color:'#3fcccb',marginRight:10}}>|</span>
                    <span style={{fontSize:15}}>热 门 推 荐</span>
                    </p>
                    <div style={{position:'relative'}}>
                        <img src="http://img0.imgtn.bdimg.com/it/u=1915475841,2831578249&fm=26&gp=0.jpg" style={{width:'100%',height:200}}/>
                        <p style={{position:'absolute',bottom:8,zIndex:5,fontSize:16,color:'white',marginLeft:15}}>什么是英伦装修风格&nbsp;英伦风家装&nbsp;英伦风格装修效果图</p>
                    </div>  
                </div>
            </div>
        )
    }
}
