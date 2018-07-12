import React, { Component } from 'react';
import styled from 'styled-components';

import ScrollDownButton from '../app/ScrollDownButton';
import SkillImage from './SkillImage';

const skilldatum = require('../../assets/skillpreview').default;

const Container = styled.div`
  background-color : #edeeef;
  width : 100%;
  height : 1000px;

  padding-top : 50px;
  position : relative;
`;

const TitleTemplete = styled.h1`
  width : 100%;
  text-align : center;

  font-family : axis;
  font-size : 2em;
`;

const SkillsContainer = styled.div`
  background-color : #edeeef;
  width : 90%;
  margin-left : 5%;
  margin-top : 5%;
`;

class SkillsBox extends Component {

  constructor(props) {
    super(props);

    this.handleScrollDown = this.handleScrollDown.bind(this);
  }

  handleScrollDown() {
    var el = document.getElementById('footer');
    el.scrollIntoView({ behavior: 'smooth' , block: "end"});
  }

  render() {

    return (
      <Container id = 'skillsbox'>
        <TitleTemplete>Skills</TitleTemplete>
        <SkillsContainer>
          { skilldatum.map(skilldata => <SkillImage skilldata={skilldata}/>) }
        </SkillsContainer>
        <ScrollDownButton handleScrollDown = {this.handleScrollDown}/>
      </Container>
    );
  }
}

export default SkillsBox;
