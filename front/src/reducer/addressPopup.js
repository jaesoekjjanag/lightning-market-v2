export const ADDRESS = 'ADDRESS';
export const ADDRPOPUP = 'ADDRPOPUP'

// 상품 등록할 때 위치검색해서 나온 주소
export const address = (addr) => ({
    type: ADDRESS,
    content: addr
});

// 상품 등록할 때 거래지역 -> 위치검색할때 뜨는 팝업창
export const addrPopup = (bool) => ({
    type: ADDRPOPUP,
    boolean: bool
})


const initState = {
    address: "",
    addrPopup: false
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ADDRESS:
            return {...state, address: action.content}
        case ADDRPOPUP:
            return {...state, addrPopup: action.boolean}
    default:
        return state;
    }
}

export default reducer