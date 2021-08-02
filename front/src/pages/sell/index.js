import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Manage from './Manage';
import SellMenu from './SellMenu';
import Register from './ProductRegister'



const Sell = () => {
  return (
    <div>
      <SellMenu />
      <Switch>
        <Route path='/sell/Register' component={Register}/>
        <Route path='/sell/manage' component={Manage} />
      </Switch>
    </div>
  )
}

export default Sell;