import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height:50%;
`
const Button = styled.button`
  width:100%;
  height: 20%;
  margin-bottom:5%;
  border:0.1px solid gray;

  &:hover{
    box-shadow: 0 0 2px gray;
  }
`

const Buttons = ({ platform }) => {
  return (
    <Wrapper>
      <Button value='local' onClick={platform}>벼락장터 로그인</Button>
      <Button>카카오로 로그인</Button>
    </Wrapper>
  )
}

export default Buttons
