import { TabBar } from 'antd-mobile';
import React from 'react'
import Home from './Home';
import Inspiration from './Inspiration';
import Shoppingmail from './Shoppingmail';
import My from './My';
export default class Tabbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tab1',
      
    };
  }

  

  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-fangzi" style={{fontSize:25}}></i>
            }
            selectedIcon={<i className="iconfont icon-fangzi-copy" style={{fontSize:25}}/>
            }
            selected={this.state.selectedTab === 'tab1'}
        
            onPress={() => {
              this.setState({
                selectedTab: 'tab1',
              });
            }}
           
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <i className="iconfont icon-jingxuan" style={{fontSize:25}}/>
            }
            selectedIcon={
                <i className="iconfont icon-jingxuan-copy" style={{fontSize:25}}/>
            }
            title="灵感"
            key="inspiration"
            selected={this.state.selectedTab === 'tab2'}
            onPress={() => {
              this.setState({
                selectedTab: 'tab2',
              });
            }}
            
          >
            <Inspiration/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-dianpu" style={{fontSize:25}}/>}
            selectedIcon={<i className="iconfont icon-dianpu-copy" style={{fontSize:25}}/>}
            title="商城"
            key="shoppingmail"
            selected={this.state.selectedTab === 'tab4'}
            onPress={() => {
              this.setState({
                selectedTab: 'tab4',
              });
            }}
          >
            <Shoppingmail/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-wode" style={{fontSize:25}}/>}
            selectedIcon={<i className="iconfont icon-wode-copy" style={{fontSize:25}}/>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'tab5'}
            onPress={() => {
              this.setState({
                selectedTab: 'tab5',
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}