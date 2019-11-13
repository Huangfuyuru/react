import { Carousel, WingBlank } from 'antd-mobile';
import React from 'react'
export default class Cargo extends React.Component {
  state = {
    data1: ['https://wx3.sinaimg.cn/mw690/006CBYGGgy1fjya5wocm8j30j60bbjt2.jpg', 'https://wx4.sinaimg.cn/mw690/006CBYGGgy1fjya5z5v68j30j60aygmq.jpg'],
    data2:['https://wx1.sinaimg.cn/mw690/7f53cc17ly1g8ab4bp31pj218g0tnwlw.jpg','https://wx1.sinaimg.cn/mw690/7f53cc17gy1g8ab8w0ellj218g0tndn7.jpg',
    'https://wx3.sinaimg.cn/mw690/7f53cc17ly1g8ab4c3naoj215y0u0wir.jpg','https://wx2.sinaimg.cn/mw690/006CBYGGgy1fjya5xawk3j30j60bugn3.jpg']
  }
  
  render() {
    var show = this.props.numCargo == 0?this.state.data1:this.state.data2;
    return (
        <Carousel
          autoplay={true}
          infinite
        >
          {show.map((val,index) => (
            <a
              key={index}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: 260 }}
            >
              <img
                src={val}
                style={{ width: '100%', verticalAlign: 'top' }}
                
              />
            </a>
          ))}
        </Carousel>

    );
  }
}
