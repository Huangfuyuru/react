import React, { Component } from 'react'
import Nav from './Nav'
import Cargo from './Cargo'
import {FlexExample2} from './Flex'
import {GridExample1} from './GridExample'
export default class Shoppingmail extends Component {
    render() {
        return (
            <div>
                 <Nav num={2}/>
                 <Cargo numCargo={2}/>
                 <FlexExample2/>
                 <GridExample1/>
            </div>
        )
    }
}
