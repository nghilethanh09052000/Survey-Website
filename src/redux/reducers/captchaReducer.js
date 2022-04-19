const initState = {
    captchaCheck:false
}

const captchaReducer = (state=initState , action) =>{
    switch(action.type){
        case 'SET_CAPTCHA_CHECK':
            return{
                ...state,
                captchaCheck:action.captchaCheck
            }
        default:
            return state
    }
}
export default captchaReducer