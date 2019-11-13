import React, { Component } from 'react'
import Nav from './Nav'
import Ins from './Ins'
export default class Inspiration extends Component {
    render() {
        return (
            <div>
                 <Nav num={1}/>
                 <Ins/>
            </div>
        )
    }
}
