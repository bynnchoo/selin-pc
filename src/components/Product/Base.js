import React from 'react';
import { connect } from 'dva';
import { Row, Col,Form, Input, Tooltip, Icon, Cascader, Select, Checkbox, Button, AutoComplete } from 'antd';
import {TreeSelect,InputNumber,Tag} from 'antd';
import {CheckboxGroup} from '../Common/CheckboxGroup';
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
    // const prefixSelector = getFieldDecorator('prefix', {
    //   initialValue: '86',
    // })(
    //   <Select style={{ width: 60 }}>
    //     <Option value="86">+86</Option>
    //     <Option value="87">+87</Option>
    //   </Select>
    // );

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
                  <Tag >新品上架</Tag>
                  <Tag >热卖推荐</Tag>
                  <Tag >清仓特惠</Tag>
                </div>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    )
    // return (
    //   <Form>
    //     <Row style={{width:'100%',margin:'0 auto'}}>
    //     <Col span={12}>
    //       <FormItem
    //         {...formItemLayout}
    //         label="E-mail"
    //         hasFeedback
    //       >
    //         {getFieldDecorator('email', {
    //           rules: [{
    //             type: 'email', message: 'The input is not valid E-mail!',
    //           }, {
    //             required: true, message: 'Please input your E-mail!',
    //           }],
    //         })(
    //           <TreeSelect
    //             showSearch
    //             value={this.state.value}
    //             dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
    //             placeholder="Please select"
    //             allowClear
    //             treeDefaultExpandAll/*
    //             onChange={this.onChange}*/
    //           >
    //             <TreeNode value="parent 1" title="parent 1" key="0-1">
    //               <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
    //                 <TreeNode value="leaf1" title="my leaf" key="random" />
    //                 <TreeNode value="leaf2" title="your leaf" key="random1" />
    //               </TreeNode>
    //               <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
    //                 <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
    //               </TreeNode>
    //             </TreeNode>
    //           </TreeSelect>
    //         )}
    //       </FormItem>
    //     </Col>
    //     <Col span={12}>
    //       <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
    //         {getFieldDecorator('agreement', {
    //           valuePropName: 'checked',
    //         })(
    //           <Checkbox>I have read the <a href="">agreement</a></Checkbox>
    //         )}
    //       </FormItem>
    //     </Col>
    //   </Row>
    //   </Form>
    // );
  }
}
export default connect()(Form.create()(ProductBaseForm));
