import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';

const users = (location, callback) => {
  require.ensure([], require => {callback(null,
    require('./routes/Users'))}, 'users')
};

const products = (location, callback) => {
  require.ensure([], require => {callback(null,
    require('./routes/Product/List'))}, 'products')
};
/*const products = (location, callback) => {
  require.ensure([], require => {callback(null,
    require('./routes/ProductList'))}, 'product')
};
*/
const r12 = (location, callback) => {
  require.ensure([], require => {callback(null,
    require('./routes/1-2'))}, '12')
};

const r22 = (location, callback) => {
  require.ensure([], require => {callback(null,
    require('./routes/2-2'))}, '22')
};
export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        {/* 添加一个路由，嵌套进我们想要嵌套的 UI 里 */}
        <Route path="/users" getComponent={users} />
        <Route path="/products/list" getComponent={products} />
        {/*<Route path="/products" getComponent={products} />*/}
        <Route path="/12" getComponent={r12} />
        <Route path="/22" getComponent={r22} />
      </Route>
    </Router>
  );
};


/*function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}



function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },{
      path: '/product',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/product'));
          cb(null, require('./routes/ProductList'));
        });
      },
    }
  ];

  return <Router history={history} routes={routes} />;
}
export default RouterConfig;
*/