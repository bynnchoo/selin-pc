import React from 'react';
import { connect } from 'dva';
import {Button} from 'antd';
import ProductBaseForm from './Base';
import ProductSpec from './Spec';
import Pictures from './Pictures';
import PriceForm from './Price';
import TestForm from './test2';


const  submitHandle = ()=>{

  console.log(this.props)



}
function prodCreate(dispatch){
  let _ref;

  return (
    <div>
      {/*<div id="productBase23">
        <TestForm />
      </div>*/}
      <div id="productBase">
        <ProductBaseForm ref={e => (_ref = e)} />
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
      <Button type="primary" onClick={alert(_ref)}>确定</Button>
{/*.onSubmit.bind(this)*/}
    </div>
  )
};
export default connect()(prodCreate);
