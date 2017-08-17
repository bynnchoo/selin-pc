import React from 'react';
import { connect } from 'dva';
import { Row, Col,Table,Input,Select } from 'antd';
import styles from './Spec.less';
const Option = Select.Option;



/*商品规格信息*/
function ProductSpec({ dispatch}) {

  const columns = [
    {
      title: '规格名称',
      dataIndex: 'name',
      key: 'name',
      width:250,
      render: function(text, record, index) {
        return (<Input size="large" value={text}/>);
      }
    },
    {
      title: '规格值',
      dataIndex: 'value',
      key: 'value',
      render:function(text, record, index){
        return (<Select
            size="large"
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="请选择"
          >
            <Option key="颜色">颜色</Option>
            <Option key="尺码">尺码</Option>
          </Select>)
      }
    }]
  const dataSource = [
    { 
      id:"1",
      name:"规格1",
      value:""
    },{ 
      id:"2",
      name:"规格2",
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
