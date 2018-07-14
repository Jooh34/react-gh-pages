import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PostItem from './PostItem'
import PaginationNavBar from './PaginationNavBar'
import SearchExampleStandardCustom from './SearchExampleStandardCustom'

const PostBackgroundContainer = styled.div`
  width : 100%;
  background-color : #edeeef;
  position : relative;
`;

const SearchBarContainer = styled.div`
  padding-top : 100px;
  float : left;
  margin-left : 10px;
`;

const PostListContainer = styled.div`
  width: 70%;
  padding-top : 200px;
  margin: auto;
`;

const TitleTemplete = styled.h2`
  margin-left : 20px
  font-size : 1.5em;
  font-family :nanum;
`;

const posts = require('../../assets/posts').default;

class PostList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activePage : 1,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(e, { activePage }) {
    var el = document.getElementById('postlist');
    el.scrollIntoView({ behavior: 'smooth' , block: "start", inline: "nearest"});
    this.setState({
      activePage : activePage,
    });
  }

  render() {
    const activePosts = posts.slice((this.state.activePage-1)*5,this.state.activePage*5)
    return (
      <div id = 'postlist'>
        <PostBackgroundContainer>
          <SearchBarContainer>
            <TitleTemplete> search by label </TitleTemplete>
            <SearchExampleStandardCustom/>
          </SearchBarContainer>
          <PostListContainer>
              { activePosts.map(post => <PostItem post={post}/>) }
            <PaginationNavBar handlePageChange={this.handlePageChange}/>
          </PostListContainer>
        </PostBackgroundContainer>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        keyword : state.search.keyword,
        posts : state.search.posts
    };
}

PostList = connect(mapStateToProps)(PostList);

export default PostList;
