import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Proj from './components/projects/Proj'
import Proj1 from './components/projects/Proj1'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/project1" component={Proj1}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
