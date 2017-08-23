import React, { Component } from 'react'
import { Provider } from 'react-redux'

import configureStore from './configureStore'
import Header from './containers/Header'
import Content from './containers/Content'

class App extends Component {
  render () {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Content />
        </div>
      </Provider>
    )
  }
}

export default App
