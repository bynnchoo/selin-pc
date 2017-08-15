import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = React.createClass({
   getInitialState() {
    return {
      current: '1',
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render(){
    return (
       <Menu onClick={this.handleClick}
         selectedKeys={[this.state.current]}
         mode="vertical"
       > 
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>订单</span></span>} >
          <MenuItemGroup title="Item 1">
            <Menu.Item key="1"><Link to="/12">Option 1</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/22">Option 2</Link></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>商品</span></span>}>
          <MenuItemGroup title="商品管理">
            <Menu.Item key="5"><Link to="/products/list">商品列表</Link></Menu.Item>
            <Menu.Item key="53"><Link to="/users">用户TEST</Link></Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="库存管理">
            <Menu.Item key="7">商品库存</Menu.Item>
            <Menu.Item key="8">商品入库</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu key="sub4" title={<span><icon type="team" /><span>客户</span></span>}>
          <Menu.Item key="9"><Link to="/31">OptionOption 9</Link></Menu.Item>
          <Menu.Item key="10"><Link to="/32">Option 10</Link></Menu.Item>
          <Menu.Item key="11"><Link to="/33">Option 11</Link></Menu.Item>
          <Menu.Item key="12"><Link to="/34">Option 12</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});
export default Sider