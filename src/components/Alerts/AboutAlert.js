import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hideAbout } from '../../actions'

import { Alert } from 'reactstrap'

class AboutAlert extends Component {
  render () {
    const { dispatch, visible } = this.props
    return (
      <Alert color='info' isOpen={visible} toggle={() => dispatch(hideAbout())}>
        <h5 className='alert-heading'></h5> 
        
      </Alert>
    )
  }
}

export default connect((state) => {
  return {
    visible: state.Options.aboutVisible && state.Auth.guest
  }
})(AboutAlert)
