import styles from './List.css';
import ProductListComponent from '../../components/Product/List';
import React from 'react';
import { connect } from 'dva';


class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <ProductListComponent />
      </div>
    )
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'商品列表'
        }
      ]
    };
    this.props.dispatch({
      type:'common/changeBreadcrumb',
      payload:breadcrumbData
    })
  }
}
function mapStateToProps({ common }) {
  return {common};
}
export default connect(mapStateToProps)(Option);
