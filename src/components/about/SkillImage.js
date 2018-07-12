import React, { Component } from 'react';
import styled from 'styled-components';


const src = require('../../assets/images/project/preview/test.png');

const ImageContainer = styled.div`
  width : 500px;
  height : 400px;

  position: relative;
  margin-left : 10px;
  float : left;

  ${ImageLink}:hover & {
    fill : #008CBA
    transition: .5s ease;
  }
`;

const ImageLink = styled.a`
  width : 500px;
  height : 400px;
`;

const Img = styled.img`
  width: 500px;
  height: 400px;
`;

const TextCon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: #333333;

  ${ImageLink}:hover & {
    opacity : 0.8;
    transition: .5s ease;
  }
`;

const BackText = styled.h1`
  color: white;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

`;

class SkillImage extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const skilldata = this.props.skilldata;
    return (
      <ImageContainer>
        <ImageLink href = '#'>
          <Img src = {skilldata.src}/>
          <TextCon>
            <BackText> {skilldata.name} </BackText>
          </TextCon>
        </ImageLink>
      </ImageContainer>
    );
  }
}

export default SkillImage;
