import {Route,Link} from 'react-router-dom'
import React from 'react'
import { Content } from './Content'
import MainContent from './MainContent'
export default function Home(props){
    var url = props.location.pathname;
    return (
        <div>
            <div className="tab">
                <Link to={{
                    pathname:url,
                    search:'?tab=all&page=1'
                }}>全部</Link>
                <Link to={{
                    pathname:url,
                    search:'?tab=good&page=1'
                }}>精华</Link>
                <Link to={{
                    pathname:url,
                    search:'?tab=share&page=1'
                }}>分享</Link>
                <Link to={{
                    pathname:url,
                    search:'?tab=job&page=1'
                }}>招聘</Link>
            </div>
            <div>
                <Route path={url} component={Content}/>
            </div>
        </div>
    )
}