import React, { useState, useEffect, useRef } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Tab from './layout/Tab'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { NICKNAME_CHANGE, COMMENT_CHANGE } from '../../reducer/user'
import axios from 'axios'
import Product from './components/Product'
import Follower from './components/Follower'
import Ask from './components/Ask'
import Following from './components/Following'
import Review from './components/Review'
import Jjim from './components/Jjim'
import { LinkTagStyle } from '../../pages/main'



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

const TextareaDiv = styled.div`
  display:flex;
  border-collapse:collapse;
  margin-top:1rem;
  height: 76%;

  & button{
    width:15%;
    vertical-align:center;
    border: .1px solid black;
  }
`
const TextArea = styled.textarea`
width:85%;
border: ${prop => prop.on ? '1px solid black' : `none`};
border-right:none;
resize:none;
box-sizing:border-box;
padding:${prop => prop.on ? '2%' : '2% 0 2% 0'}
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
  //? 라우팅을 어떻게 해야할지 잘 모르겠음..

  const id = (match.url.replace('/myshop/', ''))

  const { nickname, comment } = useSelector(state => state.user.userInfo && state.user.userInfo)
  const [nicknameValue, setNicknameValue] = useState(nickname ? nickname : `상점${id}`)
  const [nicknameChange, setNicknameChange] = useState(false);
  const [commentValue, setCommentValue] = useState(comment && comment);
  const [onComment, setOnComment] = useState(false);

  const dispatch = useDispatch();

  const onClickEdit = async () => {
    try {
      const res = await axios.patch('/user/nickname', { id: id, nickname: nicknameValue })
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

  const patchComment = async (e) => {
    try {
      setOnComment(p => !p)
      const res = await axios.patch('/user/comment', { id, comment: commentValue })
      console.log(res.data)
      dispatch({
        type: COMMENT_CHANGE,
        comment: commentValue
      })
    } catch (err) {

    }
  }

  // const [crntTab, setCrntTab] = useState('')
  const [tabname, setTabName] = useState('상품');

  const onClickTab = (e) => {
    switch (e.currentTarget.textContent) {
      case '상품':
        setTabName('상품')
        return <Product />;
      case '상점문의':
        setTabName('상점문의')
        return <Ask />
      case '찜':
        setTabName('찜')
        return <Jjim />
      case '상점후기':
        setTabName('상점후기')
        return <Review />
      case '팔로잉':
        setTabName('팔로잉')
        return <Following />
      case '팔로워':
        setTabName('팔로워')
        return <Follower />
      default:
        break;
    }
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

            <TextareaDiv >
              <TextArea on={onComment} onChange={(e) => setCommentValue(e.currentTarget.value)} name="comment" cols="30" rows="10" value={commentValue} />
              {onComment && <button onClick={patchComment}>확인</button>}
            </TextareaDiv>
            {onComment
              || <EditDiv>
                <button onClick={() => setOnComment(p => !p)}>
                  소개글 수정
                </button>
              </EditDiv>}
          </div>
        </TopDiv>
        <BtmDiv>
          <LinkTagStyle />
          <Tab id={id} />
          <div><h3>{tabname} n</h3></div>
          <Route path={`${match.url}/product`} component={Product} />
          <Route path={`${match.url}/ask`} component={Ask} />
          <Route path={`${match.url}/jjim`} component={Jjim} />
          <Route path={`${match.url}/review`} component={Review} />
          <Route path={`${match.url}/following`} component={Following} />
          <Route path={`${match.url}/follower`} component={Follower} />
        </BtmDiv>
      </Layout>
    </React.Fragment>
  )
}

export default Router;