import React, { memo } from 'react'
import styled from 'styled-components'
import {
  CommentMainWrap, CommentSubWrap, ProfileWrap, InfoWrap,
  Top, Middle, Bottom, ShopName, UploadTime, BtnWrap
} from '../../product/components/comment'


const EachAsk = memo(({ data }) => {
  return (
    <CommentMainWrap>
      <CommentSubWrap>
        <ProfileWrap>
          <img src={`http://localhost:5000/profile/${data?.AskFrom.profile}`} width="48" height="48" alt="프로필 이미지" />
        </ProfileWrap>
        <InfoWrap>
          <Top>
            <ShopName><h4>{data?.AskFrom.nickname}</h4></ShopName>
            <UploadTime>방금 전</UploadTime>
          </Top>
          <Middle>{data?.content}</Middle>
          <Bottom>
            <BtnWrap>
              <img src="comment.png" width="17" height="14" alt="댓글달기 버튼 이미지" style={{ marginRight: "4px" }} />
              댓글달기
            </BtnWrap>
            <BtnWrap >
              <img src="trashcan.png" width="17" height="14" alt="삭제하기 버튼 이미지" style={{ marginRight: "4px" }} />
              삭제하기
            </BtnWrap>
          </Bottom>
        </InfoWrap>
      </CommentSubWrap>
    </CommentMainWrap>
  );
})

export default EachAsk
