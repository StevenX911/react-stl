import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { privateRoutes } from './routers';
import MyLayout from './components/MyLayout';

export interface IAppProps {
    history: any;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
    // console.log(props);

    props?.history?.listen((location: any) => {
        const findOne = privateRoutes.find(item => {
            return location.pathname === item.pathname;
        });
        // 设置浏览器tab标题
        document.title = findOne ? findOne.title : document.title;
    });

    return (
        <MyLayout>
            <Switch>
                {privateRoutes.map((item, index) => {
                    return (
                        <Route
                            key={item.pathname}
                            exact={item.exact}
                            path={item.pathname}
                            component={item.component}
                        ></Route>
                    );
                })}
                <Redirect
                    from="/admin"
                    to="/admin/dashboard"
                    exact={true}
                ></Redirect>
                <Redirect to="/404"></Redirect>
            </Switch>
        </MyLayout>
    );
};

export default App;
