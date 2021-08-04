import React from 'react'
import styled from 'styled-components';

const WrapperDiv = styled.div`
  padding: 0 1rem;
  position: relative;

  &>li{
  cursor:pointer;
  }

  &>ul{
    position:absolute;
    list-style:none;
    bottom:-500%;
    opacity: 0;
    transition: bottom 0.3s;
    pointer-events: none;
  }

  &:hover > ul{
    // background-color: grey;
    display:block;
    bottom: -700%;
    opacity: 1;

    &>li:first-child{
    padding-top:2.5rem;
    }
  }

  &:hover > ul li{
    pointer-events:auto;
  }

  &> ul>li{
    padding:0.5rem 0;
    cursor: pointer;
  }
`
const StyledLi = ({ val, sub }) => {
  const subCategories = sub.map((v) => <li key={v}>{v}</li>)

  return (
    <WrapperDiv>
      <li>
        {val}
      </li>
      <ul>
        {subCategories}
      </ul>
    </WrapperDiv>
  )
}

export default StyledLi;