import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Manage from './Manage';
import SellLayout from './Layout';
import Register from './ProductRegister'


const Sell = () => {
  return (
    <div>
      <SellLayout>
        <Switch>
          <Route path='/sell/register' component={Register} />
          <Route path='/sell/manage' component={Manage} />
        </Switch>
      </SellLayout>
    </div>
  )
}

export default Sell;