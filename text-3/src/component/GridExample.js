import { Grid } from 'antd-mobile';
import React from 'react'
const img1 =[
  {
    imgPath:'https://wx4.sinaimg.cn/mw690/8189cc0agy1fyp6m8uiotj20fo0brq4m.jpg',
    name:'5只羊咩咩',
    money:'￥500'
  },
  {
    imgPath:'https://wx3.sinaimg.cn/mw690/8189cc0agy1fyp1nua6v9j20rs0kujvm.jpg',
    name:'一顿晚餐',
    money:'￥200'
  },
  {
    imgPath:'https://wx4.sinaimg.cn/mw690/a856d76cgy1fyjc6eh3slj20sg0il0vw.jpg',
    name:'可可爱爱小包子',
    money:'￥30'
  },
  {
    imgPath:'https://wx4.sinaimg.cn/mw690/a856d76cgy1fyjc6f7r5qj20sg0iz7c5.jpg',
    name:'鸡肉',
    money:'￥50'
  }
];
const img2 =[
  {imgPath:'https://wx2.sinaimg.cn/mw690/006CBYGGgy1fk1g5el19hj30j60ij78s.jpg',
   name:'橙色律动',
   authorImg:'https://ww2.sinaimg.cn/thumb150/006g4jQuly1g8wj0wphelj30ty0u0wjt.jpg'
  },
  {imgPath:'https://wx4.sinaimg.cn/mw690/006CBYGGgy1fk1g5fkyqpj30j60id78i.jpg',
   name:'儿童房',
   authorImg:'https://ww4.sinaimg.cn/thumb150/006g4jQuly1g8wj0wx6wcj30ku0kuwfn.jpg'
  },
  {imgPath:'https://wx2.sinaimg.cn/mw690/006CBYGGgy1fk1g5gk9ljj30j60iiq77.jpg',
   name:'翻滚吧，地毯君',
   authorImg:'https://ww1.sinaimg.cn/thumb150/006g4jQuly1g8wj0xa62fj30jg0jh0u8.jpg'
  },
  {imgPath:'https://wx3.sinaimg.cn/mw690/006CBYGGgy1fk1g5hh690j30j60ifwii.jpg',
   name:'角落里的遐想',
   authorImg:'https://ww1.sinaimg.cn/thumb150/006g4jQuly1g8wj0y3h2dj30cy0cy0t4.jpg'
  },
  {imgPath:'https://wx1.sinaimg.cn/mw690/006CBYGGgy1fk1g5ie6k8j30j60iin1q.jpg',
   name:'调皮的法斗',
   authorImg:'https://ww3.sinaimg.cn/thumb150/006g4jQuly1g8wj0xq0mej30u00u0taf.jpg'
  },
  {imgPath:'https://wx1.sinaimg.cn/mw690/006CBYGGgy1fk1g5l9lofj30j60ifgpt.jpg',
   name:'打翻的颜料盘',
   authorImg:'https://ww1.sinaimg.cn/thumb150/006g4jQuly1g8wj0xk2ioj30pi0pin2u.jpg'
  }
];
const data1 = img1.map((item) => ({
  icon: item.imgPath,
  name:item.name,
  money:item.money
}));

const data2 = img2.map((item) => ({
  icon: item.imgPath,
  name:item.name,
  authorImg:item.authorImg
}));

const GridExample1 = () => (
  <div>
    <Grid data={data1} columnNum={2} itemStyle={{height:200,backgroundColor:'#eeeeee'}}
    renderItem={dataItem=>(
      <div style={{height:190,width:180,marginLeft:12}}>
        <img src={dataItem.icon} style={{width:'100%',borderRadius:'5%'}}/>
        <div>
          <p style={{position:0,margin:0}}>{dataItem.name}</p>
          <p style={{position:0,margin:0}}>{dataItem.money}</p>
        </div>
      </div>
    )}
    />
  </div>
);

const GridExample2 = () => (
  <div>
    <Grid data={data2} columnNum={2} itemStyle={{height:230,backgroundColor:'#eeeeee'}}
    renderItem={dataItem => (
      <div style={{width:180,padding:0,marginLeft:12,backgroundColor:'white',borderRadius:'5%',height:210}}>
        <img src={dataItem.icon} style={{ width: '100%',borderRadius:'5% 5% 0 0'}} alt="" />
        <div style={{position:'relative'}}>
          <img src={dataItem.authorImg} style={{ width:40, height: 40,borderRadius:'50%',position:'absolute',left:8,top:-15}}/>
          <span style={{marginLeft:10}}>{dataItem.name}</span>
          <i className='iconfont icon-xihuan'style={{fontSize:20,position:'absolute',top:0,right:5}}/>
        </div>
      </div>
    )}
    />
  </div>
);
export {GridExample1,GridExample2}