import React, { Component } from 'react';

import PostList from '../post/PostList';
import PostIntro from '../post/PostIntro';

class Postpage extends Component {
  render() {
    return (
      <div>
        <PostIntro/>
        <PostList/>
      </div>
    );
  }
}

export default Postpage;
