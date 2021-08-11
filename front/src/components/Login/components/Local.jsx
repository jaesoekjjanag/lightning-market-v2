import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logIn } from '../../../reducer/user'

const Inputs = styled.form`
    height:60%;

    &> *{
      width:100%;
      height: 18%;
      padding:1rem;
      margin-bottom:2%;
      border: 1px solid lightgray;
    }

    &>input:first-child{
      margin-bottom:5%;
    }

    & > button{
      background-color:var(--main-yellow)
    }

    & > div{
      text-align:center;
      border:none;
      margin:0;
      height:2rem;
      line-height:2rem;
      padding:0;
      font-size:0.75rem;
      color:red;
    }
`

const Local = ({ close, shake }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('');
  const dispatch = useDispatch();

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const info = await axios.post('/user/login', {
        email,
        password
      });
      const userInfo = logIn(info.data)
      dispatch(userInfo)
      e.target.reset();
      close();
    } catch (err) {
      setErrMsg(err.response.data)
      shake();
    }

  }
  return (
    <React.Fragment>
      <Inputs onSubmit={onSubmitLogin}>
        <input type="email" name='email' placeholder='이메일을 입력하세요' onChange={(e) => setEmail(e.currentTarget.value)} required />
        <input type="password" name='password' placeholder='비밀번호를 입력하세요' onChange={(e) => setPassword(e.currentTarget.value)} required />
        <div>{errMsg}</div>
        <button ><h4>로그인</h4></button>
      </Inputs>
    </React.Fragment>
  )
}

export default Local
