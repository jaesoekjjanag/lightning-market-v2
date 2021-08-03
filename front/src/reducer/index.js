export const PRODUCTWARNINGMSG = "PRODUCTWARNINGMSG";


export const productWarningMsg = (bool) => ({
    type: PRODUCTWARNINGMSG,
    boolean: bool
})


const initState = {
    productWarningMsg: false
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case PRODUCTWARNINGMSG:
            return {...state, productWarningMsg: action.boolean}
    default:
        return state;
    }
}

export default reducer