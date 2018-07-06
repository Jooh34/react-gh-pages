import React, { Component } from 'react';
import styled from 'styled-components';
import { Sticky } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

import ScrollDownButton from '../app/ScrollDownButton';

const Transparent = styled.div`
  width: 100%;
  height: 700px;
  position : relative;
`;

class AboutIntro extends Component {

  constructor(props) {
    super(props);
    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  handleScrollDown() {
    var el = document.getElementById('profilebox');
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

export default AboutIntro;
