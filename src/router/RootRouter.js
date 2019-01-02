import React from 'react';
import { Route, Switch} from "react-router-dom";
import LoginContainer from '../pages/container/LoginContainer';
import HomeContainer from '../pages/container/HomeContainer';
import ProtectRoute from './ProtectRoute';

const RootRouter = () => (
  <Switch>
    <Route path='/login' component={LoginContainer} />
    <ProtectRoute  path='/' component={HomeContainer} />
  </Switch>

)
export default RootRouter;
