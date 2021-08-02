import React from 'react'
import Main from './pages/main'
import Myshop from './pages/myshop'
// import Login from './pages/login'
import Sell from './pages/sell'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled.div`
  width:1024px;
  margin: 0 auto;
`

const App = () => {
  return (
    <PageWrapper>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          {/* <Route exact path='/login' component={Login} /> */}
          <Route path='/myshop' component={Myshop} />
          <Route path='/sell' component={Sell} />
        </Switch>
      </Router>
    </PageWrapper>
  )
}

export default App
