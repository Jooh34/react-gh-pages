import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Homepage, Aboutpage, Postpage, PostDetailPage } from './components/pages'
import App from './components/App'

class Routes extends Component {
  render() {
    return (
      <Router key={Math.random()}>
        <div>
          <App>
            <Switch>
              <Route exact path="/react-gh-pages" component={Homepage}/>
              <Route path="/about" component={Aboutpage}/>
              <Route exact path="/post" component={Postpage}/>
              <Route path="/post/:postNum" component={PostDetailPage}/>
            </Switch>
          </App>
        </div>
      </Router>
    );
  }
}
export default Routes;
