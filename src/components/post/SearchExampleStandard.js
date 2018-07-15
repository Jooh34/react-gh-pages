import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { search } from '../../actions'

const source = require('../../assets/posts').default;

class SearchExampleStandard extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.labels[0] })
    this.props.setKeyword(result.labels[0]);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    this.props.setKeyword(value);

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.labels)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, results } = this.state;
    const value = this.props.value;

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}
let mapStateToProps = (state) => {
    return {
        value: state.search.keyword
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setKeyword: (keyword) => dispatch(search(keyword))
    };
}

SearchExampleStandard = connect(mapStateToProps, mapDispatchToProps)(SearchExampleStandard);

export default SearchExampleStandard;
