import React,{useState,useEffect} from 'react'
export default function MainContent(props){
    console.log(props);
    let [data,setData] = useState([])
    useEffect(() => {
        let url = 'https://cnodejs.org/api/v1'+props.match.url;
        fetch(url)
        .then(res=>res.json())
        .then(res=>setData(res.data))
    }, [props.match.url])
    return (
        <div style={{backgroundColor:"white"}} dangerouslySetInnerHTML = {{ __html:data.content }}>
  
            </div>
    )
}