import {HashRouter as Router,Route} from 'react-router-dom'
import MainContent from './MainContent'

import React from 'react'
import Header from './Header'
import {New,Api,About} from './More'
import Home from './Home'
export default function App(){
    return (
        <Router>
            <div>
                <Header/>
                <Route path='/' exact component={Home}/>
                <Route path='/new' component={New}/>
                <Route path='/api' exact component={Api}/>
                <Route path='/about' exact component={About}/>
                <Route path='/topic/:id' component={MainContent}/>
            </div>
        </Router>
        
    )
}