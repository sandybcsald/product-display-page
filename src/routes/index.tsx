import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
// pages
import { Home, Examples } from "pages";
// ui
import { AppLayout } from "components/layouts";

export const Routes = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/" component={Home} layout={AppLayout} />
        <PublicRoute exact path="/examples" component={Examples} layout={AppLayout} />
      </Switch>
    </>
  );
};
