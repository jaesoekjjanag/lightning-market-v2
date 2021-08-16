import React, { useRef, useState, useCallback, memo } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { NICKNAME_CHANGE, COMMENT_CHANGE, PROFILE_CHANGE } from '../../../reducer/user'
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
  margin-top: 20px;
  height:2rem;
  line-height:2.5rem;
  font-size:0.9rem;
`
const TextareaDiv = styled.div`
  display:flex;
  border-collapse:collapse;
  margin-top:1rem;
  height: 68%;

  & button{
    width:15%;
    vertical-align:center;
    border: .1px solid black;
  }
`
const TextArea = styled.textarea`
width:85%;
border: 0.1px solid black;
border-right:none;
resize:none;
box-sizing:border-box;
padding:2%;
font-size:0.9rem;


&:focus{
  outline:none;
}
`
const EditDiv = styled.div`
  position:absolute;
  bottom:1rem;
  button{
    border:0.1px solid black;
  }
`

const ProfileImg = styled.div`
  text-align:center;
  line-height:310px;
  background-color:lightgray;
  cursor:pointer;
  position:relative
`
const MyImg = styled.img`
  height:100%;
  width:100%;
  object-fit:cover;

  &:hover + div{
    display:block;
  }
`
const DefaultImg = styled.img`
  vertical-align:middle;
  height: 50%;
  width: 50%;
`
const Top = ({ userInfo, id, me }) => {
  const postCount = useSelector(state => state.user?.posts).length;
  const [nicknameValue, setNicknameValue] = useState(userInfo ? userInfo.nickname : `상점${id}`)
  const [nicknameChange, setNicknameChange] = useState(false);
  const [commentValue, setCommentValue] = useState(userInfo && userInfo.comment);
  const [onComment, setOnComment] = useState(false);
  const daysAgo = parseInt((new Date() - new Date(userInfo && userInfo.createdAt)) / (24 * 3600 * 1000))
  const dispatch = useDispatch();

  const onClickEdit = useCallback(async () => {
    try {
      await axios.patch('/user/nickname', { id: id, nickname: nicknameValue })
      dispatch({
        type: NICKNAME_CHANGE,
        nickname: nicknameValue,
      });
      setNicknameChange(prev => !prev)
    } catch (err) {
      console.error(err)
    }
  }, [setNicknameChange, id, nicknameValue, dispatch])

  const patchComment = useCallback(async (e) => {
    try {
      setOnComment(p => !p)
      await axios.patch('/user/comment', { id, comment: commentValue })
      dispatch({
        type: COMMENT_CHANGE,
        comment: commentValue
      })
    } catch (err) {
      console.error(err)
    }
  }, [id, commentValue, dispatch])

  const profileRef = useRef();

  const clickInput = useCallback(() => {
    profileRef.current.click();
  }, [profileRef])

  const uploadImg = async (e) => {
    const img = e.target.files[0]
    const formData = new FormData()
    formData.append('image', img)
    const res = await axios.post('/user/profile', formData, { header: { 'content-type': 'multipart/form-data' } });
    ask(res.data);
  }

  const ask = async (imgPath) => {
    let a = window.confirm('변경사항을 적용하시겠습니까?')
    if (a) {
      await axios.patch('/user/profile', { id: id, imgPath: imgPath })
      dispatch({
        type: PROFILE_CHANGE,
        profile: imgPath,
      })
    }
  }
  return (
    <TopDiv >
      <ProfileImg title="클릭하여 프로필 사진 변경" onClick={clickInput}>
        {userInfo
          ? <MyImg src={`http://localhost:5000/profile/${userInfo.profile}`} alt='profileImage' />
          : <DefaultImg src="man.png" alt="profileImage" />
        }
        <input type="file" name='profile' hidden ref={profileRef} onChange={uploadImg} />
      </ProfileImg>
      <div >
        {nicknameChange
          ? <NicknameEdit>
            <input type="text" value={nicknameValue} onChange={(e) => setNicknameValue(e.currentTarget.value)} />
            <button onClick={onClickEdit}>확인</button>
          </NicknameEdit>
          : <Nickname>
            <h3>{userInfo
              ? userInfo.nickname
              : `상점${id}`}</h3>
            {me && <button onClick={() => setNicknameChange(prev => !prev)}>상점 명 수정</button>}
          </Nickname>
        }
        <SmallInfo>
          <span>상점오픈일 {daysAgo}일 전</span>
          <span>상품판매 {postCount}회</span>
        </SmallInfo>

        <TextareaDiv >
          {onComment
            ? <TextArea value={commentValue} onChange={(e) => setCommentValue(e.currentTarget.value)} name="comment" cols="30" rows="10" />
            : <div>{commentValue}</div>}
          {onComment && <button onClick={patchComment}>확인</button>}
        </TextareaDiv>
        {me && (onComment
          || <EditDiv>
            <button onClick={() => setOnComment(p => !p)}>
              소개글 수정
            </button>
          </EditDiv>)}
      </div>
    </TopDiv>
  )
}

export default Top
