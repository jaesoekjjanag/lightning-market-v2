import React from 'react'
import Main from './pages/main'
import Myshop from './pages/myshop'
// import Login from './pages/login'
import Sell from './pages/sell'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        {/* <Route exact path='/login' component={Login} /> */}
        <Route exact path='/myshop' component={Myshop} />
        <Route exact path='/sell' component={Sell} />
      </Switch>
    </Router>
  )
}

export default App
