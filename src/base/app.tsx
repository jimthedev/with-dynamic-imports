import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {Loader} from './Loadable';

export const Index = Loader({
  loader: () => import('../views/index/index')
});

export const About = Loader({
  loader: () => import('../views/about')
});

export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Index name="Zach" value="Hi" />} />
          <Route path="/about/:name" component={About} />
        </Switch>
      </HashRouter>
    );
  }
}
  