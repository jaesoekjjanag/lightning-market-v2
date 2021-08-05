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
const Login = ({ toggle }) => {
  return (
    <React.Fragment>
      <Buttons>
        <button>벼락장터 로그인</button>
        <button>카카오로 로그인</button>
      </Buttons>
      <div>계정이 없으신가요? <span onClick={toggle}>회원가입</span></div>
    </React.Fragment>
  )
}

export default Login
