import React from 'react';
import { connect } from 'dva';
import { Row, Col,Form, Input, Tooltip, Icon, Cascader, Select, Checkbox, Button, AutoComplete } from 'antd';
import {TreeSelect,InputNumber,Tag} from 'antd';
import KeywordTag from '../Common/KeywordTag';
import styles from './ProductCreate.css';

const TreeNode = TreeSelect.TreeSelect;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


/*商品价格信息*/
class ProductPriceForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      }
    };

    
    return (
      <div>
        <h3 className="create-header">
          <span className="pde-fh3-tit">价格信息</span>
        </h3>
        <Form> 
          <br/>
          <Row style={{width:'100%',margin:'0 auto'}}>
            <Col span={8}>
              <FormItem
                {...formItemLayout}
                label="销售价"
              >
                <InputNumber 
                  min={0} precision = {2} defaultValue={0} step={10}
                  placeholder="必填"/>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem
                {...formItemLayout}
                label="进价"
              >
                <InputNumber 
                  min={0} precision = {2} defaultValue={0} step={10}
                  placeholder="必填"/>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem
                {...formItemLayout}
                label="最低售价"
              >
               <InputNumber 
                  min={0} precision = {2} defaultValue={0} step={10}
                  placeholder=""/>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
// export default connect()(Form.create()(ProductBaseForm));
export default Form.create()(ProductPriceForm);
