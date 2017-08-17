import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button,Dropdown,Menu,Icon,Input } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './List.css';
import { PAGE_SIZE } from '../../constants';
import Hello from '../../components/Hello';

/*import UserModal from './UserModal';*/
const Search = Input.Search;

function ProductList({ dispatch, list: dataSource, loading, total, page: current }) {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a href="">{text}</a>,
    },
    {
      title: '商品编码',
      dataIndex: 'code',
      key: 'code',
      sorter: (a, b) => a.code.length - b.code.length
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length
    },{
      title: '供应商',
      dataIndex: 'supplier_id',
      key: 'supplier_id'
    },{
      title: '是否自产',
      dataIndex: 'is_oneself',
      key: 'is_oneself'
    },{
      title: '商品分类',
      dataIndex: 'category_id',
      key: 'category_id'
    },{
      title: '成本价格',
      dataIndex: 'cost_price',
      key: 'cost_price'
    },{
      title: '市场价',
      dataIndex: 'retail_price',
      key: 'retail_price'
    },{
      title: '最低市场价',
      dataIndex: 'minimum_price',
      key: 'minimum_price'
    },{
      title: '附件',
      dataIndex: 'accessory',
      key: 'accessory'
    },{
      title: '描述',
      dataIndex: 'description',
      key: 'description'
    },{
      title: '状态',/*上架，下架*/
      dataIndex: 'state',
      key: 'state'
    },{
      title: '关键字',
      dataIndex: 'keyword',
      key: 'keyword'
    },{
      title: '起订量',
      dataIndex: 'minimum_num',
      key: 'minimum_num'
    },{
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
         {/* <UserModal record={record} onOk={editHandler.bind(null, record.id)}>
            <a>Edit</a>
          </UserModal>*/}
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  function deleteHandler(id) {
    dispatch({
      type: 'products/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/products/list',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    dispatch({
      type: 'products/patch',
      payload: { id, values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'products/create',
      payload: values,
    });
  }
  function onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    // this.setState({ selectedRowKeys });
  }
  const selectedRowKeys  = [];
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  function handleMenuClick(e) {
    console.log('click', e);
  }

  const importMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">批量导入商品</Menu.Item>
      <Menu.Item key="2">批量导入图片</Menu.Item>
      <Menu.Item key="3">批量导入客户定价</Menu.Item>
    </Menu>
  );

  const filterStateMenu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">批量导入商品</Menu.Item>
        <Menu.Item key="2">批量导入图片</Menu.Item>
        <Menu.Item key="3">批量导入客户定价</Menu.Item>
      </Menu>
  );

  
  function keywordSearch(value){
    console.log("搜索："+value);
  }



  return (
    <div>
      <div className="header">
        <div className="table-box">
          <div className="table-cell">
            <Dropdown overlay={filterStateMenu}>
              <a className="ant-dropdown-link" href="#">
                全部状态<Icon type="down" />
              </a>
            </Dropdown>
            <span className="space"></span>
            <Search
              placeholder="请输入商品名称/编码/规格/关键字/条形码"
              style={{ width: 300 }}
              onSearch={keywordSearch}/>
          </div>
          <Hello name="123"/>
          <Hello name="456"/>
          <div className="table-cell tr" id="productListBtnGroup">
            <Button>导出</Button>
            <Dropdown overlay={importMenu}>
              <Button>导入<Icon type="down" /></Button>
            </Dropdown>
            <Button type="primary">新增</Button>
          </div>
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowSelection={rowSelection}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.products;
  return {
    loading: state.loading.models.products,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(ProductList);
