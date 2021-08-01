import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../CommonPage/header';

// import Header from '../CommonPage/header';
// import CategoryBar from '../CommonPage/categoryBar';


const MyPage = ({ isLoggedIn }) => {
  return (
    <React.Fragment>
      <Header />
      <h1>My Page</h1>
    </React.Fragment>
  )
}

export default MyPage;