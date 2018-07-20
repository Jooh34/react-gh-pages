import React, { Component } from 'react';
import styled from 'styled-components';
import PostDetailContent from './PostDetailContent'

const BackgroundContainer = styled.div`
  width : 100%
  height : 700px;
  background-color : #edeeef;
  position : relative;
`;

const PostContainer = styled.div`
  width: 70%;
  padding-top : 200px;
  margin: auto;
`;

const postdetails = require('../../assets/postdetails').default;

class PostDetail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var postNum = this.props.postNum;
    var post = postdetails.find(function(element) {
      return element.id == postNum;
    });
    return(
      <BackgroundContainer>
        <PostContainer>
          {post.contents.map(content => <PostDetailContent content = {content}/>)}
        </PostContainer>
      </BackgroundContainer>
    );
  }
}

export default PostDetail;
