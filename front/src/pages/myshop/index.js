import React from 'react'
import { Route } from 'react-router-dom'
import TabLayout from './layout/TabLayout'

const MyShop = () => {
  return (
    <TabLayout>
      {/* <Route exact path='/myshop' component={Tab} /> */}
      {/* <Route path='/myshop/:tab' component={Tab} /> */}
    </TabLayout>
  )
}

export default MyShop;