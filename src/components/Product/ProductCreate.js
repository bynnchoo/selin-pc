import React from 'react';
import { connect } from 'dva';
import {Button} from 'antd';
import ProductBaseForm from './Base';
import ProductSpec from './Spec';
import Pictures from './Pictures';
import PriceForm from './Price';



function prodCreate(dispatch){
  let _ref;
  const  submitHandle = (event)=>{
    console.log(_ref.getFieldsValue())
  }
  return (
    <div>
      {/*<div id="productBase23">
        <TestForm />
      </div>*/}
      <div id="productBase">
        <ProductBaseForm ref={e => (_ref = e)}/>
      </div>
      <div id="ProductSpec">
        <ProductSpec/>
      </div>
      <div id="ProductPictures">
        <Pictures/>
      </div>
      <div id="ProductPrice">
        <PriceForm/>
      </div>
      <div style={{ height: 30}}></div>
      <Button type="primary" onClick={submitHandle}>确定</Button>
    </div>
  )
};

export default prodCreate;

/*
var Product = React.createClass({
  handleClick: function() {
    // 使用原生的 DOM API 获取焦点
    console this.refs;
  },
  render: function() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
          <div id="productBase">
            <ProductBaseForm refs="myForm"/>
          </div>
          <div id="ProductSpec">
            <ProductSpec/>
          </div>
          <div id="ProductPictures">
            <Pictures/>
          </div>
          <div id="ProductPrice">
            <PriceForm/>
          </div>
          <div style={{ height: 30}}>
          </div>
          <Button type="primary" onClick={handleClick}>确定</Button>
        </div>
    );
  }
});
*/
// export default Product;
