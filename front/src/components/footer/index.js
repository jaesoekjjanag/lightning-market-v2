import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 1024px;
  margin: 0 auto;
  padding-top: 1.5rem;
  padding-bottom:1.5rem;
  border-top: 0.5px soLid rgb(216, 214, 214);
  border-bottom: 0.5px soLid rgb(216, 214, 214);
  margin-bottom: 100px;

  @media(max-width:768px){
    display:none;
  }
`
const Ul = styled.ul`
  padding:0;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  list-style:none;
`

const Li = styled.li`
  &:not(:last-child){
    padding-right:1.1rem;
    border-right: 0.5px solid rgb(216, 214, 214);
  }

`

const Footer = () => {
  return (
    <StyledFooter>
      <Ul>
        <Li>공지사항</Li>
        <Li>FAQ</Li>
        <Li>운영정책</Li>
        <Li>1:1문의</Li>
        <Li>사업자정보확인</Li>
        <Li>이용약관</Li>
        <Li>개인정보처리방침</Li>
        <Li>청소년보호정책</Li>
        <Li>위치기반서비스 이용약관</Li>
      </Ul>
    </StyledFooter>
  )
}

export default Footer;