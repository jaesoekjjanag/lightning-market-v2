import React from 'react'
import Main from './pages/main'
import Myshop from './pages/myshop'
import Sell from './pages/sell'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:5000"

const PageWrapper = styled.div`
  width:1024px;
  margin: 0 auto;
`

const App = () => {
  const isPopUp = useSelector(state => state.loginPopup.isPopUp)
  return (
    <div>
      {isPopUp && <Login />}
      <PageWrapper>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/myshop' component={Myshop} />
            <Route path='/sell' component={Sell} />
          </Switch>
        </Router>
      </PageWrapper>
    </div>
  )
}

export default App
