import React, {Component} from 'react';
import {Menu, Breadcrumb, Icon} from 'antd';
import {Link} from 'react-router';

import './navgation.css';
import 'antd/lib/index.css';

const SubMenu = Menu.SubMenu;

export default class Navgation extends Component{
  state = {
    openKey: ['caipiao'],
    selectKey: ['1']
  };

  componentWillMount() {
    let routes = this.props.routes;
    console.log(routes);
    if(routes.length === 2) {
      this.setState({openKey: new Array(routes[1].path), selectKey: new Array(routes[2].path)});
    }
  }

  render() {
    return (
      <div className="ant-layout-aside">
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark"
            defaultSelectedKeys={this.state.selectKey} defaultOpenKeys={this.state.openKey}>
            <SubMenu key="caipiao" title={<span><Icon type="user" />网易彩票</span>}>
              <Menu.Item key="1"><Link to='/app/caipiao/1'>彩票1</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/app/caipiao/2'>彩票2</Link></Menu.Item>
              <Menu.Item key="3"><Link to='/app/caipiao/3'>彩票3</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/app/caipiao/4'>彩票4</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
              <Menu.Item key="5">选项5</Menu.Item>
              <Menu.Item key="6">选项6</Menu.Item>
              <Menu.Item key="7">选项7</Menu.Item>
              <Menu.Item key="8">选项8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
              <Menu.Item key="9">选项9</Menu.Item>
              <Menu.Item key="10">选项10</Menu.Item>
              <Menu.Item key="11">选项11</Menu.Item>
              <Menu.Item key="12">选项12</Menu.Item>
            </SubMenu>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    )
  }
}