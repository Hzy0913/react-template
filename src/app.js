import React from 'react';
import ReactDOM from 'react-dom'; // react-dom 中的ReactDOM方法
import browserHistory from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Root from './router/router'; // 引入 router
import store from './redux'; // 引入 store

// 全局css
import './style/index.styl';
import './style/less.less';
import './style/sass.sass';
import './style/scss.scss';
// 字体图标
import './assets/iconfont.css';
import './assets/iconfont.js';

const history = createHistory();
export default history;
// 给window 定义全局对象下
window.store = store;

ReactDOM.render(<Root />, document.getElementById('app')); // 渲染路由并且挂载到app ID的节点上
