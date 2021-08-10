import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
const SignUp = ({ toggle, close }) => {
  const [checkMsg, setCheckMsg] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState('');
  const [pswdFocus, setPswdFocus] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.currentTarget.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onChangeCheck = (e) => {
    setCheck(e.currentTarget.value)
  }

  useEffect(() => {
    if (!password & !check) {
      setCheckMsg('6자 이상 영어, 숫자를 사용하세요.')
    }
    else if (password === check) {
      setCheckMsg('일치합니다.')
    } else {
      setCheckMsg('일치하지 않습니다.')
    }
  }, [password, check])

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (password === check) {
      try {
        await axios.post('/user/signup', {
          email,
          password
        })
        e.target.reset();
        close();
      } catch (err) {
        alert(err.response.data)
      }
    }
  }

  const onFocusPswd = () => {
    setPswdFocus(p => !p)
  }

  return (
    <React.Fragment>
      <Inputs onSubmit={onSubmitForm}>
        <input type="email" name='email' placeholder='이메일을 입력하세요' onChange={onChangeEmail} />
        <input type="password" name='password' placeholder='비밀번호를 입력하세요' onChange={onChangePassword} onFocus={onFocusPswd} onBlur={onFocusPswd} />
        <input type="password" name='check' placeholder='비밀번호 확인' onChange={onChangeCheck} onFocus={onFocusPswd} onBlur={onFocusPswd} />
        <p>{pswdFocus && checkMsg}</p>
        <button>가입하기</button>
      </Inputs>
      <div>이미 계정이 있으신가요? <span onClick={toggle}>로그인</span></div>
    </React.Fragment>
  )
}

export default SignUp
