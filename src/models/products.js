import * as productService from '../services/products';

export default {
  namespace: 'products',
  state: {
    list: [],
    total: null,
    page: null,
    selectedRowKeys:[]
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      console.log("fetch in model")
      const { data, headers } = yield call(productService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put }) {
      yield call(productService.remove, id);
      yield put({ type: 'reload' });
    },
    *patch({ payload: { id, values } }, { call, put }) {
      yield call(productService.patch, id, values);
      yield put({ type: 'reload' });
    },
    *create({ payload: values }, { call, put }) {
      yield call(productService.create, values);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.products.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      console.log("subscriptions...............")
      return history.listen(({ pathname, query }) => {
        console.log("1231231231231231323")
        console.log(pathname);
        console.log(query)
        if (pathname=="/products/list") {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
