import { NavBar} from 'antd-mobile';
import React,{ Component } from 'react'
export default class Nav extends Component {
  render() {
    var name=['住吧家居','灵感','商城','我的']
    return (
     
      <div>
        <NavBar
        style={{color:'white',backgroundColor:'#3fcccb'}}
    >{name[this.props.num]}</NavBar>
      </div>
    )
  }
}
