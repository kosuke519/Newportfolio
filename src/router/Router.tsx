import { memo, VFC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../components/pages/About';
import { Contact } from '../components/pages/Contact';
import { Home } from '../components/pages/Home';
import { Works } from '../components/pages/Works';

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/works">
        <Works />
      </Route>
    </Switch>
  );
});
