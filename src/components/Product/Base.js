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


/*商品基本信息*/
class ProductBaseForm extends React.Component {
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
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    const productTypeData = [{
        label: '男装',
        value: '1',
        key: '1',
        children: [{
          label: 'T恤',
          value: '1-1',
          key: '1-1',
        }],
      }, {
        label: '卫衣',
        value: '2',
        key: '2'
      }, {
        label: '裙子',
        value: '3',
        key: '3'
      }];

    return (
      <div>
        <h3 className="create-header">
          <span className="pde-fh3-tit">基础信息</span>
          <Checkbox checked={true}>立即上架</Checkbox>
        </h3>
        <Form> 
          <br/>
          <Row style={{width:'100%',margin:'0 auto'}}>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="商品名称"
              >
                {/*{getFieldDecorator('brand', {
                  rules: [{ required: true, message: '商品名称必填!' }],
                })(*/}
                  <Input
                    placeholder="必填"
                  />
                {/*)}*/}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="商品分类"
                hasFeedback
              >
                {/*{getFieldDecorator('category_id', {
                  rules: [{
                    required: true, message: '请选择商品类别!',
                  }],
                })(*/}
                  <TreeSelect
                    treeData={productTypeData}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll/*
                    onChange={this.onChange}*/
                  />
               {/* )} */}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="品牌"
              >
               {/* {getFieldDecorator('brand', {
                  rules: [{ required: true, message: '请输入品牌!' }],
                })(*/}
                  <Select
                    placeholder="品牌"
                    /*onChange={this.handleSelectChange}*/
                  >
                    <Option value="MX">MX</Option>
                    <Option value="色琳">色琳</Option>
                  </Select>
                {/*)}*/}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="排序值"
              >
                <InputNumber min={0} defaultValue={0} placeholder="名字越大排名越前"/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="计量单位"
              >
                {/*{getFieldDecorator('unit', {
                  rules: [{ required: true, message: '请选择计量单位!' }],
                })(*/}
                  <Select
                    placeholder="请选择"
                  >
                    <Option value="件">件</Option>
                    <Option value="个">个</Option>
                  </Select>
                {/*)}*/}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="搜索关键字"
              >
                <Input placeholder="" name="keyword"/>
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                {...formItemLayout}
                label="商品标签"
              >
                <div>
                  <KeywordTag>新品上架</KeywordTag>
                  <KeywordTag>热卖推荐</KeywordTag>
                  <KeywordTag>清仓特惠</KeywordTag>
                </div>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
// export default connect()(Form.create()(ProductBaseForm));
export default Form.create()(ProductBaseForm);
