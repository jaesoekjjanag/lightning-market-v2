import React, { useState } from 'react'
import Buttons from './Buttons'
import Local from './Local'

const Login = ({ toggle, close, shake }) => {
  const [loginPlatform, setLoginPlatform] = useState();

  const onClickPlatform = (e) => {
    const platform = e.currentTarget.value;
    if (platform === 'local') {
      setLoginPlatform('local')
    }
  }

  if (!loginPlatform) {
    return (
      <React.Fragment>
        <Buttons platform={onClickPlatform} />
        <div>계정이 없으신가요? <span onClick={toggle}>회원가입</span></div>
      </React.Fragment>
    )
  } else if (loginPlatform === 'local') {
    return (
      <React.Fragment>
        <Local close={close} shake={shake} />
        <div>계정이 없으신가요? <span onClick={toggle}>회원가입</span></div>
      </React.Fragment>
    )
  }

}

export default Login
