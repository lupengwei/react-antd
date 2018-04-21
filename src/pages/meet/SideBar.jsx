import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './Common.less';

const { Sider } = Layout;

class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
        className="des-sider-content"
      >
        <div className="logo-content">
          <img className={this.state.collapsed ? 'logo-small' : 'logo'} src="http://docs.cq-tct.com/desp/images/logo_001.png" alt="des logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>呵呵 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>哈哈 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>嘿嘿 3</span>
          </Menu.Item>
        </Menu>
        <div className="des-sider-icon">
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </div>
      </Sider>
    );
  }
}

export default SiderDemo;