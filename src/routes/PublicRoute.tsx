import React, { Fragment } from "react";
import { Route } from "react-router-dom";

type PublicRouteProps = {
  component?: any;
  layout?: any | typeof Fragment;
  exact?: boolean;
  path?: string;
};
const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, layout: Layout = Fragment, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);
export default PublicRoute;
