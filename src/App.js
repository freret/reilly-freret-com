import { Component } from 'inferno';
import { BrowserRouter, Switch } from 'inferno-router';
import PlatformProSupport from './platform-pro/index'
import PageNotFound from './404';
import RouteWrapper from './utils/routeWrapper';
import Home from './Home';
import Messaging from './messaging';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <RouteWrapper exact path="/" component={Home} />
          <RouteWrapper path="/platformpro" component={PlatformProSupport} />
          <RouteWrapper path="/messaging" component={Messaging} />
          <RouteWrapper component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
