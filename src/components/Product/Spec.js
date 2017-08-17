import React from 'react';
import { connect } from 'dva';
import { Row, Col,Table,Input,Select } from 'antd';
import styles from './Spec.less';
const Option = Select.Option;



/*商品规格信息*/
function ProductSpec({ dispatch}) {


  const specRender = function({id}){
      if(id=="1"){
       return (
          <Select
            size="large"
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="请选择"
          >
            <Option key="S">S</Option>
            <Option key="M">M</Option>
            <Option key="L">L</Option>
            <Option key="XL">XL</Option>
          </Select>
        )
      }else{
        return (
            <Select
              size="large"
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="请选择"
            >
              <Option key="红">红</Option>
              <Option key="黄">黄</Option>
              <Option key="绿">绿</Option>
              <Option key="蓝">蓝</Option>
            </Select>
          )
      }
  }

  const columns = [
    {
      title: '规格名称',
      dataIndex: 'name',
      key: 'name',
      width:250/*,
      render: function(text, record, index) {
        return (<Input size="large" value={text}/>);
      }*/
    },
    {
      title: '规格值',
      dataIndex: 'value',
      key: 'value',
      render:function(text, record, index){
        return specRender(record)
      }
    }]
  const dataSource = [
    { 
      id:"1",
      name:"尺码",
      value:""
    },{ 
      id:"2",
      name:"颜色",
      value:""
    }
  ]
  return (
    <div>
      <h3 className="create-header">
        <span className="pde-fh3-tit">商品规格</span>
      </h3>
      <div>
        <Table
          dataSource = {dataSource}
          columns={columns}
          rowKey={record => record.id}
          pagination={false}
          bordered={true}
        />
      </div>

    </div>
  );
}

// function mapStateToProps(state) {
//   const { list, total, page } = state.users;
//   return {
//     loading: state.loading.models.users,
//     list,
//     total,
//     page,
//   };
// }

export default connect()(ProductSpec);
