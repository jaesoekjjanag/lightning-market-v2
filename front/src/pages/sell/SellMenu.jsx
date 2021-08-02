import React from 'react'
import Header from '../../components/header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SellPageWrapper = styled.div`
  border: 0.1px solid black;
  display:flex;
  height: 3.5rem;
  margin-bottom: 2.5rem;

  & div {
    font-size: 0.9rem;
    padding: 0 1.4rem;
    margin: 1rem 0;
    border-right: 0.1px solid gray;
  }
`

const SellMenu = ({ children }) => {
  return (
    <div>
      <Header />
      <SellPageWrapper className="wrapper">
        <div><Link to='/sell/register'>상품등록</Link></div>
        <div><Link to='/sell/manage'>상품관리</Link></div>
        <div><Link to='/sell/history' >구매/판매 내역</Link></div>
      </SellPageWrapper>
    </div>
  )
}

export default SellMenu
