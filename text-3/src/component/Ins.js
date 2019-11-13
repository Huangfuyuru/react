import { Tabs, WhiteSpace } from 'antd-mobile';
import React from 'react'
import {GridExample2} from './GridExample'
export default class Ins extends React.Component {
  
  renderContent = tab =>
    (<div style={{height: '100%', backgroundColor: '#fff' }}>
      <GridExample2/>
    </div>);

  render() {
    const tabs = [
      { title: '推荐' },
      { title: '冬季' },
      { title: '宜家' },
      { title: '小清新' },
      { title: '小户型' },
      { title: '个性色彩' },
      { title: '更多' },
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={tabs} tabBarActiveTextColor='#3fcccb' renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6}/>}>
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

