import React from 'react'
import styled from 'styled-components'

const Inputs = styled.div`
    height:50%;

    &> *{
      width:100%;
      height: 20%;
      margin-bottom:5%;
      padding:1rem;
    }
`
const SignUp = () => {
  return (
    <Inputs>
      <input type="text" placeholder='이메일을 입력하세요' />
      <input type="text" placeholder='비밀번호를 입력하세요' />
    </Inputs>
  )
}

export default SignUp
