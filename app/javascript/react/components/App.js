import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BayIndex from "./BayIndex"

const App = (props) => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ BayIndex }/>
      <Route exact path="/bays" component={ BayIndex }/>
    </Switch>    
  </BrowserRouter>
  )
}

export default App
