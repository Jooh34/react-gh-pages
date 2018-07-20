import React, { Component } from 'react';

import PostDetailIntro from '../post/PostDetailIntro'
import PostDetail from '../post/PostDetail'

class PostDetailPage extends Component {
  render() {
    var postNum = this.props.match.params.postNum;
    return (
      <div>
        <PostDetailIntro/>
        <PostDetail postNum = {postNum}/>
      </div>
    );
  }
}

export default PostDetailPage;
