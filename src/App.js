import { Component } from 'inferno';
import { BrowserRouter, Route, Switch } from 'inferno-router';
import PlatformProSupport from './platform-pro/support'
import PageNotFound from './404';
import Layout from './layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Layout> */}
            <RouteWrapper path="/platformpro" component={PlatformProSupport} layout={Layout}/>
            <RouteWrapper component={PageNotFound} layout={Layout}/>
          {/* </Layout> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
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

export default App;
