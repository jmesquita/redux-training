import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchContent } from '../actions/content'
import ContentView from '../Content'

class Content extends Component {
  componentWillReceiveProps (nextProps) {
    const {
      section_id
    } = nextProps
    const {
      fetchContent
    } = this.props
    fetchContent(section_id)
  }
  render () {
    const {
      content
    } = this.props
    return <ContentView content={content}/>
  }
}

function mapStateToProps (state) {
  return {
    section_id: state.app.select_section_id,
    content: state.app.currentContent
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchContent: (section_id) => dispatch(fetchContent(section_id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
