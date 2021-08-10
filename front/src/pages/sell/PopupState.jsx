import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPost from './DaumPost';
import { useSelector, useDispatch } from 'react-redux';
import { addrPopup } from '../../reducer/addressPopup'

const StyledPopup = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);

    ${({ activate }) => {
        return activate ? 'display: flex; flex-direction: column' : 'display: none';
    }}
`
const PopupCloseBtnWrap = styled.div`
    width: 400px;
    height: 50px;
    position: relative;
    display: flex;
    background-color: white;
    box-sizing: border-box;
    font-weight: bold;
    border-bottom: 1px solid black;
    padding: 10px 15px;
    align-items: center;
    justify-content: space-between;
`

const PopupCloseBtn = styled.div`
    // text-align: right;
    // position: absolute;
    // top: 27%;
    // right: 4%;
    border: none;
`

const PopupState = () => {
    const dispatch = useDispatch();

    // 팝업창 상태 관리
    const isPopupOpen = useSelector(state => state.addressPopup.addrPopup)

    // 팝업창 닫기
    const closePopup = () => {
        dispatch(addrPopup(false))
    };


    return <React.Fragment>
        <StyledPopup id="popupWrap" activate={isPopupOpen}>
            <PopupCloseBtnWrap>
                <span >주소 찾기</span>
                <PopupCloseBtn onClick={closePopup} ><img width="22px" src="x.png" alt="closeButton" /></PopupCloseBtn>
            </PopupCloseBtnWrap>
            {isPopupOpen && (
                <DaumPost onClose={closePopup} />
            )}
        </StyledPopup>


    </React.Fragment>
}

export default PopupState;