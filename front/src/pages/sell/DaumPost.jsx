import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import { useSelector, useDispatch } from 'react-redux';
import { address } from '../../reducer/addressPopup';

const PopupStyle = {
    background: "white",
    width: "400px",
    height: "500px",

}

const DaumPost = (props) => {
    const dispatch = useDispatch();
    const findAddress = (data) => {
        let addr = `${data.sido} ${data.sigungu} ${data.bname}`
        dispatch(address(addr))
        props.onClose();
    };

    return <React.Fragment>
        <DaumPostcode onComplete={findAddress} style={PopupStyle}></DaumPostcode>
    </React.Fragment>
}

export default DaumPost;