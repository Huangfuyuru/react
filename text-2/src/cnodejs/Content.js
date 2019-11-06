import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export function Content(props){

    let [data,setData] = useState([]);
    useEffect(()=>{
        let url = 'https://cnodejs.org/api/v1/topics'+props.location.search
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(res=>setData(res.data))
    },[props.location.search]);
    return (
        <div className="content">
            {
                data&&data.map((item,index)=>{
                    return <div key={index}>
                        {/* <img src={item.author.avatar_url}/> */}
                        <Link to={{
                            pathname:`/topic/${item.id}`
                        }}>
                            {item.title}
                        </Link>
                    </div>
                })
            }
            <ul>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>{
                        var page = 'page'+item;
                        return <li key={page}><Link to={{
                            pathname:props.location.pathname,
                            search:props.location.search.split('&')[0]+'&page='+item
                        }}>{item}</Link></li>
                    })
                }
            </ul>
        </div>
    )
}