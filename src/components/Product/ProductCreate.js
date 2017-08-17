import React from 'react';
import { connect } from 'dva';
import ProductBase from './Base';
import ProductSpec from './Spec';
import ProductImage from './Image';

function prodCreate(dispatch){
  return (
    <div>
      <div id="productBase">
        <ProductBase/>
      </div>
      <div id="ProductSpec">
        <ProductSpec/>
      </div>
      <div id="ProductImage">
        <ProductImage/>
      </div>
    </div>
  )
};
export default connect()(prodCreate);
