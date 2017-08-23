import React, { Component } from 'react'
import { connect } from 'react-redux'

import { list } from '../actions/sections'
import { selectSection } from '../actions/app'
import HeaderCmp from '../Header'

class Header extends Component {
  componentWillMount () {
    const {
      listSections
    } = this.props
    listSections()
  }
  render () {
    const {
      sections,
      selectSection
    } = this.props
    return <HeaderCmp sections={sections} onClick={selectSection}/>
    }
}

function mapStateToProps(state) {
  return {
    sections: state.sections
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listSections: function cualquiera() {
      return dispatch(list())
    },
    selectSection: (section_id) => dispatch(selectSection(section_id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
