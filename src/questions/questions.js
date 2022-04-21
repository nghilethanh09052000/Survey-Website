export const questions =[
    {
        id:0,
        type:'Single Selection Type',
        question: 'What is your role within the family ?',
        answer:['Mother', 'Father', 'Prefer not to say'],
        userAnswer:''
    },
    {
        id:1,
        type:'Multiple selections type',
        question: 'What language is spoken in your household ?',
        answer:[
            {
                id:0,
                label:'Chinese', 
                value:'Chinese', 
            },
            {
                id:1,
                label:'English', 
                value:'English', 
            },
            {
                id:2,
                label:'Vietnamese', 
                value:'Vietnamese', 
            }
        ],
        userAnswer:''
    },
    {
        id:2,
        type:'Text input type',
        question: 'Please tell us which touchscreen game, app or story you use most often with your child and why',
        answer:'',
        userAnswer:''
    },
]
