import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';

import Silder from '../components/Silder'
import CustomBreadcrumb from '../components/breadcrumb'

import { Row, Col } from 'antd';

const breadcrumbData = [
    {
      name:'首页',
      path:'/'
    },{
      name:'菜单21',
      path:'/21'
    }
];

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="app-warp">
        <div>
          <nav className="header-warp">
            <ul>
              <li></li>
            </ul>
          </nav>
        </div>
        <div className="r-warp">
          <div className="left-menu-wrap full">
            <Silder />
          </div>
          <div className="main-wrap main-wrap-full">
            <div className="content-wrap">
              <div className="breadcrumb">
                <CustomBreadcrumb data={this.props.common.breadcrumb} />
              </div>
              <div className="content">
                {this.props.children||'内容区域'}
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(App);
