import { Flex, WhiteSpace ,WingBlank} from 'antd-mobile';
import React from 'react'
var img = [
    {title:'热门品牌',imgPath:'https://wx1.sinaimg.cn/mw690/8189cc0agy1g8ui3tb1h9j20sg0izjsx.jpg'},
    {title:'私人搭配师',imgPath:'https://wx1.sinaimg.cn/mw690/8189cc0agy1g8ui3tfwq2j20u00jzq6f.jpg'},
    {title:'选购指南',imgPath:'https://wx1.sinaimg.cn/mw690/8189cc0agy1g8ui3tb0qnj20sg0izwfz.jpg'}
]
var tabName = [
    {title:'床',classTitle:"icon-bed-"},
    {title:'桌',classTitle:"icon-desk-"},
    {title:'椅',classTitle:"icon-chair-"},
    {title:'柜',classTitle:'icon-cupboard-1'},
    {title:'几',classTitle:"icon-bath-"},
    {title:'书架',classTitle:'icon-bookcase'},
    {title:'挂件',classTitle:'icon-bake'},
    {title:'更多',classTitle:'icon-speaker'}
];
var PlaceHolder = ({ className = '', data,...restProps }) => (
    <div className={`${className} placeholder`} {...restProps} style={{position:'relative'}}>
        <img src={data.imgPath} style={{width:'100%',height:121}}/>
        <span style={{position:'absolute',top:50,left:33,color:'white',fontSize:15}}>{data.title}</span>
    </div>
    
  );
var PlaceHolder2 = ({ className = '', data,...restProps }) => (
    
    <div className={`${className} placeholder`} {...restProps} style={{width:60,height:80,marginLeft:'8%',marginTop:10}}>
        <div className='change' style={{width:60,height:60,backgroundColor:'#3fcccb',borderRadius:'50%',position:'relative'}}>
        <i className={`iconfont ${data.classTitle}`} style={{fontSize:'40px'}}/>
        </div>
        <p style={{textAlign:'center',position:0,margin:0}}>{data.title}</p>  
    </div>
    
); 
const FlexExample1 = () => (
  <div className="flex-container">
    <WhiteSpace size="lg" />
    <WingBlank>
    <Flex>
        {
            img.map((item,index)=>{
                return (
                    <Flex.Item key={`a${index}`}>
                        <PlaceHolder data={item}/>
                    </Flex.Item>
                )
            })
        }
    </Flex>
    </WingBlank>
    <WhiteSpace size="lg" />
  </div>)
const FlexExample2 = ()=>(
    <div className="flex-container">
        <Flex wrap="wrap">
            {
                tabName.map((item,index)=>(
                    
                    <PlaceHolder2 className="inline" data={item} key={`b${index}`}/>
                    
                ))
            }
        </Flex>
    </div>
)
  export {FlexExample1,FlexExample2}