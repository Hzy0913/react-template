import React from 'react';
import {message} from 'antd';
import ReactDOM from 'react-dom';
import browserHistory from 'react-router';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import Root from './router';
import store from './redux';

// css
import './style/index.styl';
// iconfont
import './assets/iconfont.css';
import './assets/iconfont.js';

const history = createHistory();
export default history;
// window object
window.store = store;
window.axios = axios;

const tid = localStorage.getItem('tid');
axios.defaults.headers.tid = tid || ''; // axios headers token
axios.interceptors.response.use(
  res => res,
  err => {
    const {data: {err: errnum, error}} = (err || {}).response;
    if (errnum === 200 && error) {
      message.success(error);
    } else {
      message.error(error);
    }
    if (err.response.status === 401) {
      message.info('您的登录已过期，请重新登录');
      setTimeout(() => {
        history.replace('/login');
        localStorage.removeItem('tid');
        window.location.reload();
      }, 600);
    }
  }
);
ReactDOM.render(<Root />, document.getElementById('app'));
