import React, { Component } from 'react';

import NavigationBar from './app/NavigationBar'
import Footer from './app/Footer'
import StickyBackground from './app/StickyBackground'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StickyBackground />
        <NavigationBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App
