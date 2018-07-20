import React, { Component } from 'react';
import styled from 'styled-components';

class PostDetailContent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var content = this.props.content;
    if(content.type == 'video') {
      return(
        <div>
        <video controls width="640" height="480">
          <source type="video/mp4" src={content.src}/>
        </video>
        </div>
      );
    }
  }
}

export default PostDetailContent;
