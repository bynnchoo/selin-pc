import styles from './List.css';
import ProductCreateComponent from '../../components/Product/ProductCreate';
import React from 'react';
import { connect } from 'dva';


class Option extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <ProductCreateComponent/>
    )
  }
  componentDidMount(){
    const breadcrumbData = {
      breadcrumb:[
        {
          name:'首页',
          path:'/'
        },{
          name:'商品',
          path:'/products/list'
        },{
          name:'商品列表',
          path:'/products/list'
        },{
          name:'商品新增'
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
