import React, {useState} from 'react';
import styled from 'styled-components';
import PopupDom from './PopupDom';
import DaumPost from './DaumPost';
import {useSelector, useDispatch} from 'react-redux';
// import DaumPostcode from 'react-daum-postcode';
import {addrPopup} from '../../reducer/index'

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
const PopupCloseBtn = styled.button`
    width: 402px;
    height: 40px;
    display: block;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid black;
    font-weight: bold;
    &:hover {
        background: rgb(244, 244, 250);
        cursor: pointer;
    }
`

const PopupState = () => {
    const dispatch = useDispatch();

    // 팝업창 상태 관리
    const isPopupOpen = useSelector(state => state.addrPopup)


    // 팝업창 닫기
    const closePopup = () => {
        dispatch(addrPopup(false))
    };  


    return <React.Fragment>
        <StyledPopup id="popupDom" activate={isPopupOpen}>
            
            {isPopupOpen && (
                <PopupDom>
                    <DaumPost onClose={closePopup}/>
                </PopupDom>
            )}
            <PopupCloseBtn onClick={closePopup}>닫기</PopupCloseBtn>
        </StyledPopup>


    </React.Fragment>
}

export default PopupState;