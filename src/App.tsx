import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { privateRoutes } from './routers'
import MyLayout from './components/MyLayout'

export interface IAppProps {
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
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
