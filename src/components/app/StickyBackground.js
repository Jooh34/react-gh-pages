import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Sticky } from 'semantic-ui-react';

var selected_img

var post_img = require('../../assets/images/wallpaper/post_wallpaper.jpg')
var about_img = require('../../assets/images/wallpaper/about_wallpaper.jpg')
var home_img = require('../../assets/images/wallpaper/home_wallpaper.jpg')

var selected_text

var post_text = ''
var about_text = ''
var home_text = 'Welcome ! I\'m Jooh'

const Container = styled.div`
  background-color : #26262a
  background-image: url(${props => props.img});
  width: 100%;
  height: 800px;
  background-size: cover;
  background-repeat: no-repeat;

  position : absolute;
  z-index : -5;
`;

const TextContainer = styled.h2`
  font-family : trench;
  padding-top : 350px;
  width : 100%;
  height : 50px;
  text-align : center;
  color : #ffffff;
  font-size : 7em;
`;

class StickyBackground extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const path = this.props.location.pathname;

    if(path == "/about") {
      selected_img = about_img;
      selected_text = about_text;
    }
    else if(path == "/post") {
      selected_img = post_img;
      selected_text = post_text;
    }
    else if(path == "/react-gh-pages") {
      selected_img = home_img;
      selected_text = home_text;
    }
    else if(path == "/") {
      selected_img = home_img;
      selected_text = home_text;
    }
    else {
      selected_img = post_img;
      selected_text = "Post Detail";
    }

    return (
      <Sticky>
        <Container id = {'intro'} img = {selected_img}>
          <TextContainer> {selected_text} </TextContainer>
        </Container>
      </Sticky>
    )
  }
}

export default withRouter(StickyBackground);
