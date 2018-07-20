import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollDownButton from '../app/ScrollDownButton';

const Transparent = styled.div`
  width: 100%;
  height: 700px;
  position : relative;
`;

class PostIntro extends Component {

  constructor(props) {
    super(props);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  handleScrollDown() {
    var el = document.getElementById('postlist');
    el.scrollIntoView({ behavior: 'smooth' , block: "start", inline: "nearest"});
  }

  render() {
    return (
      <div>
        <Transparent>
          <ScrollDownButton handleScrollDown = {this.handleScrollDown}/>
        </Transparent>
      </div>
    );
  }
}

export default PostIntro;
