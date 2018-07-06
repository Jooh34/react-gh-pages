import React, { Component } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  width : 100%;
  background-color : #edeeef;
`;

const PostContainer = styled.div`
  width: 70%;
  padding-top : 200px;
  margin: auto;
`;

const postdetails = require('../../assets/posts').default;

class PostDetail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var postNum = this.props.match.params.postNum;
    return(
      <BackgroundContainer>
        <PostContainer>
        </PostContainer>
      </BackgroundContainer>
    );
  }
}

export default PostDetail;
