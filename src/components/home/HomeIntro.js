import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollDownButton from '../app/ScrollDownButton';
import home_wallpaper from '../../assets/images/wallpaper/home_wallpaper.jpg';

const Transparent = styled.div`
  width: 100%;
  height: 700px;
  position : relative;
`;

class HomeIntro extends Component {

  constructor(props) {
    super(props);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  handleScrollDown() {
    var el = document.getElementById('footer');
    el.scrollIntoView({ block: 'start',  behavior: 'smooth' });
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

export default HomeIntro;
