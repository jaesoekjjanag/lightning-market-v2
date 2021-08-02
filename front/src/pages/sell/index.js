import React from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Post from './Post';
import Manage from './Manage';
import Header from '../../components/header';

const SellPageWrapper = styled.div`
  margin: 0 auto;
  width: 1024px;
  border: 1px solid black;
`

const Sell = () => {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <SellPageWrapper className="wrapper">
          <ul>
            <li><Link to='/sell/post'>상품등록</Link></li>
            <li><Link to='/sell/manage'>상품관리</Link></li>
            <li><Link to='/sell/history' >구매/판매 내역</Link></li>
          </ul>
        </SellPageWrapper>
      </React.Fragment>
      <Switch>
        <Route path='/sell/post'><Post /></Route>
        <Route path='/sell/manage'><Manage /></Route>
      </Switch>
    </Router>
  )
}

export default Sell;