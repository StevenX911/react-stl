import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { privateRoutes } from '../../routers';

const { Header, Content, Sider } = Layout;

const mapIcon = new Map();
mapIcon.set('edit', UserOutlined);
mapIcon.set('home', LaptopOutlined);
mapIcon.set('setting', NotificationOutlined);

const topItems: MenuProps['items'] = privateRoutes
    .filter(item => item.isTop === true)
    .map((item, index) => {
        // const key = String(index + 1);
        return {
            key: item.pathname,
            icon: React.createElement(mapIcon.get(item.icon)),
            label: <NavLink to={item.pathname}>{item.title}</NavLink>,
        };
    });

const MyLayout: React.FC = (props: any) => {
    // console.log(props)
    return (
        <Layout style={{ minHeight: '100%' }}>
            <Header className="header">
                <div className="logo" />
                <h2 style={{ color: '#fff' }}>REACT后台应用模板</h2>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[props.location.pathname]}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={topItems}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/* 面包屑 */}
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

// 将路由信息挂载到props, 处理菜单项高亮
export default withRouter(MyLayout);
