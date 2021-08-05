import React, { useState } from 'react';
import ReactDom from 'react-dom';

const PopupDom = ({ children }) => {
    const [domReady, setDomReady] = React.useState(true);

    // React.useEffect(() => {
    //     setDomReady(true)
    // })

    const el = document.getElementById("popupDom");

    return domReady
        ? ReactDom.createPortal(children, el)
        : null;
};

export default PopupDom;