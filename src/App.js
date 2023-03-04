import { Component } from 'inferno';
import { BrowserRouter, Switch } from 'inferno-router';
import PlatformProSupport from './platform-pro/support'
import PageNotFound from './404';
import RouteWrapper from './utils/routeWrapper';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <RouteWrapper exact path="/" component={Home} />
          <RouteWrapper path="/platformpro" component={PlatformProSupport} />
          <RouteWrapper component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
