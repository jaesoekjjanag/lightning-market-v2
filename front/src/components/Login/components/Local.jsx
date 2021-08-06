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
      margin-bottom:5%;
      padding:1rem;
      border: 1px solid lightgray;
    }

    & > button{
      background-color:var(--main-yellow)
    }

`

const Local = ({ close }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const info = await axios.post('http://localhost:5000/user/login', {
        email,
        password
      });
      const userInfo = logIn(info.data)
      dispatch(userInfo)
      e.target.reset();
      close();
    } catch (err) {
      // alert(err.response.data)
      console.log(err);
    }

  }
  return (
    <React.Fragment>
      <Inputs onSubmit={onSubmitLogin}>
        <input type="email" name='email' placeholder='이메일을 입력하세요' onChange={(e) => setEmail(e.currentTarget.value)} />
        <input type="password" name='password' placeholder='비밀번호를 입력하세요' onChange={(e) => setPassword(e.currentTarget.value)} />
        <button><h4>로그인</h4></button>
      </Inputs>
    </React.Fragment>
  )
}

export default Local
