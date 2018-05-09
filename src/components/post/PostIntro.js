import React, { Component } from 'react';
import styled from 'styled-components';
import { Sticky } from 'semantic-ui-react';

import ScrollDownButton from '../app/ScrollDownButton';
import postWallpaper from '../../assets/images/wallpaper/post_wallpaper.jpg';

const BackgroundContainer = styled.div`
  background-image: url(${postWallpaper});
  width: 100%;
  height: 700px;
  background-size: cover;
  background-repeat: no-repeat;

  position : absolute;
  z-index : -5;
`;

const Transparent = styled.div`
  width: 100%;
  height: 700px;
  position : relative;
`;

const IntroText = styled.h2`
  font-family: 'axis';
  font-weight: 900;
  color: black;
  background-color : hsla(120, 100%, 90%, 0.7);
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 4rem;
  transform: translate(-50%, -50%);
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
        <Sticky>
          <BackgroundContainer id = 'postintro' >
            <IntroText>
              { 'Here is my work!'}
            </IntroText>
          </BackgroundContainer>
        </Sticky>
        <Transparent>
          <ScrollDownButton handleScrollDown = {this.handleScrollDown}/>
        </Transparent>
      </div>
    );
  }
}

export default PostIntro;
