import React, { useState, useRef } from 'react'
import { Route } from 'react-router-dom'
import Tab from './layout/Tab'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { NICKNAME_CHANGE } from '../../reducer/user'
import axios from 'axios'


const TopDiv = styled.div`
  border: 0.5px solid gray;
  height: 310px;
  box-sizing: border-box;
  display:flex;

  & > div:first-child{
    width: 310px;
    height: 310px;
    border-right: 0.5px solid gray;
  }
  & > div:last-child{
  width: calc(100% - 310px);
  height: 310px;
  padding: 2.8%;
  position:relative;

  & span{
    margin-right: 2%;
  }
  }
`
const Nickname = styled.div`
  h3{
    display:inline-block;
    font-size:1.1rem;
    margin-right: 1rem;

  }

  button{
    border:1px solid lightgray;
  }

`
const NicknameEdit = styled.div`
  input{
    font-size:1rem;
    line-height:1.8rem;
    width:16rem;
    border:1px solid lightgray;
    margin-right: 1rem;
    padding: 0 .5rem;
  }

  button{
    height:1.8rem;
    vertical-align:top;
    padding:0 1rem;
    box-sizing:content-box;
    background-color:var(--main-yellow);

    &:hover{
      box-shadow: 0 0 1px lightgray;
    }
`

const SmallInfo = styled.div`
  height:2rem;
  line-height:2.5rem;
  font-size:0.9rem;
`

const Textarea = styled.form`
  display:flex;
  border-collapse:collapse;
  margin-top:1rem;
  height: 76%;
  & textarea{
    width:85%;
    border: 0.1px solid black;
    border-right:none;
    resize:none;
    box-sizing:border-box;
    padding: 2%;
  }

  & button{
    width:15%;
    vertical-align:center;
    border: .1px solid black;
  }
`
const BtmDiv = styled.div`
  margin:30px 0;

  & h3 {
    font-weight:500;
  }
`
const EditDiv = styled.div`
  position:absolute;
  bottom:1rem;
  button{
    border:0.1px solid black;
  }
`

const Router = ({ match }) => {
  //미완성

  const { id, nickname } = useSelector(state => state.user.userInfo && state.user.userInfo)
  const [nicknameValue, setNicknameValue] = useState(nickname ? nickname : `상점${id}`)
  const [nicknameChange, setNicknameChange] = useState(false);
  const [onComment, setOnComment] = useState(false);

  const dispatch = useDispatch();

  const onClickEdit = async () => {
    try {
      const res = await axios.post('/user/nickname', { id: id, nickname: nicknameValue })
      console.log(res.data)
      dispatch({
        type: NICKNAME_CHANGE,
        nickname: nicknameValue,
      });
      setNicknameChange(prev => !prev)
    } catch (err) {
      console.log(err)
    }
  }

  // const commentOff = async (e) => {
  //   e.preventDefault();
  //   setOnComment(p => !p)
  // }
  const patchComment = (e) => {
    // e.preventDefault();
    e.preventDefault();
    console.log('bug?')
    // setOnComment(p => !p)
    // console.log(e.comment.value)
  }

  return (
    <React.Fragment>
      <Layout>
        <TopDiv>
          <div></div>
          <div>
            {nicknameChange
              ? <NicknameEdit>
                <input type="text" value={nicknameValue} onChange={(e) => setNicknameValue(e.currentTarget.value)} />
                <button onClick={onClickEdit}>확인</button>
              </NicknameEdit>
              : <Nickname>
                <h3>{nickname
                  ? nickname
                  : `상점${id}`}</h3>
                <button onClick={() => setNicknameChange(prev => !prev)}>상점 명 수정</button>
              </Nickname>
            }
            <SmallInfo>
              <span>상점 오픈 일</span>
              <span>상품 판매 n회</span>
            </SmallInfo>
            {onComment
              && <Textarea onSumbit={patchComment}>
                <textarea name="comment" cols="30" rows="10" />
                <button>확인</button>
              </Textarea>}
            {onComment
              || <EditDiv>
                <button onClick={() => setOnComment(p => !p)}>
                  소개글 수정
                </button>
              </EditDiv>}
          </div>
        </TopDiv>
        <BtmDiv>
          < Route path='/myshop/:tab' component={Tab} />
        </BtmDiv>
      </Layout>
    </React.Fragment>
  )
}

export default Router;