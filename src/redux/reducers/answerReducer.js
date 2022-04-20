import {questions} from '../../questions/questions'
const initState = questions


const answerReducer = (state=initState , action ) =>{
    switch(action.type){
        case 'SET_USER_ANSWER':
            return state.map(answer=>
                    answer.id === action.payload.id ? {...answer, userAnswer:action.payload.value} : answer
                )
        default:
            return state
    }
}
export default answerReducer