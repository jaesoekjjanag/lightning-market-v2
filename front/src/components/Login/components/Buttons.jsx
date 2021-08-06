import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height:50%;

    &> *{
      width:100%;
      height: 20%;
      margin-bottom:5%;
    }
`

const Buttons = ({ platform }) => {
  return (
    <Wrapper>
      <button value='local' onClick={platform}>벼락장터 로그인</button>
      <button>카카오로 로그인</button>
    </Wrapper>
  )
}

export default Buttons
