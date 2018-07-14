import PropTypes from 'prop-types'
import React from 'react'
import { Label } from 'semantic-ui-react'

import SearchExampleStandard from './SearchExampleStandard'
import SearchSample from './SearchSample'

const resultRenderer = ({ title, labels }) => <SearchSample title = {title} labels = {labels}/>

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

const SearchExampleStandardCustom = () => <SearchExampleStandard resultRenderer={resultRenderer} />

export default SearchExampleStandardCustom
