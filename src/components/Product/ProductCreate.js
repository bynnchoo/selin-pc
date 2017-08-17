import React from 'react';
import { connect } from 'dva';
import ProductBase from './Base';
import ProductSpec from './Spec';
import Pictures from './Pictures';

function prodCreate(dispatch){
  return (
    <div>
      <div id="productBase">
        <ProductBase/>
      </div>
      <div id="ProductSpec">
        <ProductSpec/>
      </div>
      <div id="ProductPictures">
        <Pictures/>
      </div>
      <div style={{ height: 30}}></div>
    </div>
  )
};
export default connect()(prodCreate);
