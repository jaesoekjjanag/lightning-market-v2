import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import UpDown from './UpDown';
import RecentVisit from './RecentVisit';
import Jjim from './Jjim';



const NavigationItems = styled.span`
  display:flex;
  flex-direction: column;
  width: 7.7rem;
  position: absolute;
  top:95%;
  right: calc(50% - 650px);
  z-index: 10;
  & > *{
  border:1px solid rgb(216, 214, 214);
  margin:0.5rem 1rem;
  }

`;


const NavigationBar = () => {


  return (
    <NavigationItems className='navigation-bar'>
      <Jjim />
      <RecentVisit />
      <UpDown />
    </NavigationItems>
  )
}

export default NavigationBar;