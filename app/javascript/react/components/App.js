import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BayIndex from "./BayIndex"
import BayComponent from "./BayComponent"
import TruckIndex from "./TruckIndex"

const App = (props) => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ BayIndex }/>
      <Route exact path="/bays" component={ BayIndex }/>
      <Route exact path="/bays/:id" component={ BayComponent }/>
      <Route exact path="/trucks" component={ TruckIndex }/>
    </Switch>    
  </BrowserRouter>
  )
}

export default App
