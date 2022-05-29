import React, { Component } from 'react';
import { Button, Pagination } from 'antd';

import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { privateRoutes } from './routers'
import MyLayout from './components/MyLayout'

function App() {
  return (
    <MyLayout>
      <Switch>
        {privateRoutes.map((item, index) => {
          return (
            <Route key={item.pathname} path={item.pathname} component={item.component}></Route>
          )
        })}
        <Redirect from='/admin' to='/admin/dashboard' exact={true}></Redirect>
        <Redirect to='/404'></Redirect>
      </Switch>
    </MyLayout>
  );
}

export default App;
