import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1. 设置antd中文
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

// 2. 路由处理
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { commonRoutes } from './routers';

// 3. 布局及样式处理
import './css/index.less';

ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <Router>
                <Switch>
                    {/*1. 私有路由 */}
                    <Route
                        path="/admin"
                        render={rootProps => {
                            // TODO: 这里做登陆授权检测
                            return <App {...rootProps} />;
                        }}
                    ></Route>

                    {/*2.公共路由*/}
                    {commonRoutes.map((item, index) => {
                        return (
                            <Route
                                key={item.pathname}
                                path={item.pathname}
                                component={item.component}
                            ></Route>
                        );
                    })}
                    {/*3.错误路由和默认路由*/}
                    <Redirect from="/" to="/admin" exact={true}></Redirect>
                    <Redirect to="/404"></Redirect>
                </Switch>
            </Router>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
