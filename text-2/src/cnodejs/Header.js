import {Link} from 'react-router-dom'
import React from 'react'
export default function Header(){
    return (
        <div className="header">
            <Link to='/'>首页</Link>
            <Link to='/new'>新手入门</Link>
            <Link to='/api'>API</Link>
            <Link to='/about'>关于</Link>
        </div>
    )
}