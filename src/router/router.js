import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import Store from '../redux';
import App from '../containers/app';
// import Login from '../containers/login';
// import Main from '../containers/main';
// import NotFound from '../containers/notfound';
// import List from '../containers/list';
// import Img from '../containers/img';
// import Svg from '../containers/svg';
// import Icon from '../containers/icon';
import User from '../containers/user';
//redux 开发工具，__DEVTOOLS__ 为node环境变量，区分开发还是生产环境
import DevTools from '../redux/DevTools';

const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);
// {__DEVTOOLS__ && <DevTools />}

const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <div className="router-content">
        <Switch>
          <Router exact path="/" component={App} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
