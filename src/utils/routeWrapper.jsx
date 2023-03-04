import { Layout as DefaultLayout } from "../layout";
import { Route } from "inferno-router";

export default function RouteWrapper({ component: Component, layout: Layout = DefaultLayout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}