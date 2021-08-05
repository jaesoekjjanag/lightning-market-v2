import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Inputs = styled.form`
    height:60%;

    &> input{
      width:100%;
      height: 18%;
      margin-bottom:5%;
      padding:1rem;
    }
    & > button{
      float:right;
      border:1px solid lightgray;
      background-color:white;
      height:10%;
      padding:3px;
    }

    & > button:hover{
      background-color:var(--main-yellow)
    }

    & > p{
      font-size:0.7rem;
      color:red;
      position:absolute
    }
`
const SignUp = ({ toggle }) => {
  const [checkMsg, setCheckMsg] = useState();
  const [pswd, setPswd] = useState('');
  const [check, setCheck] = useState('');

  const onChangePswd = (e) => {
    setPswd(e.currentTarget.value)
  }
  const onChangeCheck = (e) => {
    setCheck(e.currentTarget.value)
  }


  useEffect(() => {
    if (!pswd & !check) {
      setCheckMsg('6자 이상 영어, 숫자를 사용하세요.')
    }
    else if (pswd === check) {
      setCheckMsg('일치합니다.')
    } else {
      setCheckMsg('일치하지 않습니다.')
    }
  }, [pswd, check])

  return (
    <React.Fragment>
      <Inputs>
        <input type="email" placeholder='이메일을 입력하세요' />
        <input type="password" placeholder='비밀번호를 입력하세요' onChange={onChangePswd} />
        <input type="password" placeholder='비밀번호 확인' onChange={onChangeCheck} />
        <p>{checkMsg}</p>
        <button>가입하기</button>
      </Inputs>
      <div>이미 계정이 있으신가요? <span onClick={toggle}>로그인</span></div>
    </React.Fragment>
  )
}

export default SignUp
