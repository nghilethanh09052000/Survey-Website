const initState = {
    question:1
}

const questionReducer = (state=initState , action) =>{
    switch(action.type){
        case 'SET_QUESTION_ACTION':
            return{
                ...state,
                question:action.question
            }
        default:
            return state
    }
}
export default questionReducer