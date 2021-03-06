import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { shape } from 'prop-types';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route
          path="/details/:id"
          component={props => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  match: shape.isRequired
};

export default App;
