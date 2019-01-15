import React from 'react';
import { connect } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';



const ProtectRoute = ({component:Component, userInfo, ...rest}) => (
  <Route
    {...rest}
    render={props => userInfo ? (<Component {...props} />) : (<Redirect to='/login'/>) }
  />
);

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer
  };
};



export default connect(mapStateToProps)(ProtectRoute);
