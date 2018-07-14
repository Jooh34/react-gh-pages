import React, { Component } from 'react';
import styled from 'styled-components';
import { Label } from 'semantic-ui-react'

const TitleTemplete = styled.h1`
  font-family :nanum;
  font-size : 1em;
`;

const LabelContainer = styled.div`
  margin-bottom : 1px;
  vertical-align: middle
`;

class SearchSample extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
      <TitleTemplete> {this.props.title} </TitleTemplete>
      <LabelContainer>
        { this.props.labels.map(label => <Label content={label}/>) }
      </LabelContainer>
      </div>
    );
  }
}

export default SearchSample;
