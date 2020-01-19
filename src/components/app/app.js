import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Header from 'components/header'
import {HomePage, CartPage } from 'components/pages'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage}/>
      </Switch>
    </div>
  )
}

export default App
