import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width : 100%;
  height : 80px;
  z-index : 5;
  position : relative;
`;

const MenusContainer = styled.div`
  padding-top : 12px;
  width : 50%;
  float : right;
  margin-right : 50px;
`;

const MenuContainer = styled.div`
  width : 30%;
  margin-top : 5px;
  display: inline-block;
  cursor: pointer;
`;

const Menu = styled.div`
  font : axis;
  font-weight: bold;
  color : ${props => (props.mouseOn === props.name || props.mouseOn === '') ? '#ffffff' : '#8d888f'}
  font-size : 1.5em;
  display: inline-block;
  margin-left : 20%;
  margin-top : 15px;
  padding-top : 8px;

  width : 70%;
  height : 40px;
  text-align : center;

  border : ${props => (props.mouseOn === props.name) ? '2px solid #ffffff' : ''}
  border-radius: 10px;
`;

const Bulkhead = styled.div`
  background-color : #ffffff;

  width : 0.25%;
  height : 15px;
  display: inline-block;
`;

class NavigationBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mouseOn : '',
    };
  }

  handleMenuClick = (name) => {
    if (name === 'home') this.props.history.push('/react-gh-pages');
    else this.props.history.push('/'+name);
  }

  handleMenuMouseEnter = (name) => {
    this.setState({
      mouseOn : name,
    });
  }

  handleMenuMouseLeave = (name) => {
    this.setState({
      mouseOn : '',
    });
  }

  render() {

    return (
      <Container id = 'navbar'>
        <MenusContainer>
          <MenuContainer onClick = {()=>this.handleMenuClick('home')} onMouseEnter ={() => this.handleMenuMouseEnter('home')} onMouseLeave ={() => this.handleMenuMouseLeave('home')}>
            <Menu mouseOn = {this.state.mouseOn} name = 'home'> HOME </Menu>
          </MenuContainer>
          <MenuContainer onClick = {()=>this.handleMenuClick('about')} onMouseEnter ={() => this.handleMenuMouseEnter('about')} onMouseLeave ={() => this.handleMenuMouseLeave('about')}>
            <Menu mouseOn = {this.state.mouseOn} name = 'about'> ABOUT ME </Menu>
          </MenuContainer>
          <MenuContainer onClick = {()=>this.handleMenuClick('post')} onMouseEnter ={() => this.handleMenuMouseEnter('post')} onMouseLeave ={() => this.handleMenuMouseLeave('post')}>
            <Menu mouseOn = {this.state.mouseOn} name = 'post'> PROJECT </Menu>
          </MenuContainer>
        </MenusContainer>
      </Container>
    )
  }
}

export default withRouter(NavigationBar);
