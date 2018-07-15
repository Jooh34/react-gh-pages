import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { search } from '../../actions';
import { withRouter } from 'react-router-dom';

const ImageContainer = styled.div`
  width : 450px;
  height : 300px;

  position: relative;
  margin-top : 20px;
  margin-left : 20px;
  float : left;

  ${ImageLink}:hover & {
    fill : #008CBA
    transition: .5s ease;
  }
`;

const ImageLink = styled.a`
  width : 450px;
  height : 300px;
`;

const Img = styled.img`
  width: 450px;
  height: 300px;
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

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.setKeyword(this.props.skilldata.name);
    var el = document.getElementById('profilebox');
    el.scrollIntoView({ behavior: 'smooth' , block: "start", inline: "nearest"});
    this.props.history.push('/post');
  }

  render() {
    const skilldata = this.props.skilldata;
    return (
      <ImageContainer>
        <ImageLink onClick={this.handleClick} >
          <Img src = {skilldata.src}/>
          <TextCon>
            <BackText> {skilldata.name} </BackText>
          </TextCon>
        </ImageLink>
      </ImageContainer>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setKeyword: (keyword) => dispatch(search(keyword))
    };
}

SkillImage = connect(undefined, mapDispatchToProps)(SkillImage);

export default withRouter(SkillImage);
