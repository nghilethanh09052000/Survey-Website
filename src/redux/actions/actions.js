export const captchaAction =(payload) =>({
    type:'SET_CAPTCHA_CHECK',
    captchaCheck:payload
})

export const questionAction =(payload) =>({
    type:'SET_QUESTION_ACTION',
    question:payload
})

export const answerAction =(data) =>({
    type:'SET_USER_ANSWER',
    payload:data
})

export const submitAction =(payload) =>({
    type:'SET_SUBMIT_ACTION',
    submit:payload
    
})
