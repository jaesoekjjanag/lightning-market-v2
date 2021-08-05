import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
    height:50%;

    &> *{
      width:100%;
      height: 20%;
      margin-bottom:5%;
    }
`
const Login = () => {
  return (
    <Buttons>
      <button>벼락장터 로그인</button>
      <button>카카오로 로그인</button>
    </Buttons>
  )
}

export default Login
