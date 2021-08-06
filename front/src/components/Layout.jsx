import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
@media(max-width:768px){
  width:100vw;
}
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
