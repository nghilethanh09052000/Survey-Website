const initState = {
    isSubmit:false,
    name:'',
    email:'',
    userCheckBox:[],
    userAnswer:[]
}

const submitReducer = (state=initState , action) =>{
    switch(action.type){
        case 'SET_SUBMIT_ACTION':
            return action.submit
            
        default:
            return state
    }
}
export default submitReducer