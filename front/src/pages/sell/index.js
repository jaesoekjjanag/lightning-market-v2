import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Post from './Post';
import Manage from './Manage';
import SellMenu from './SellMenu';



const Sell = () => {
  return (
    <div>
      <SellMenu />
      <Switch>
        {/* <Route path='/sell/post' component={Post} /> */}
        <Route path='/sell/Manage' component={Manage} />
      </Switch>
    </div>
  )
}

export default Sell;