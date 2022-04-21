import { Typography,
  Container,
  Paper,
  Box,
  Button,

} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {COLORS} from '../../styles/constants'
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

//import  Selector
import { questionMode } from "../../redux/selectors/selectors";
import { useDispatch , useSelector } from "react-redux";
//import Action:
import { questionAction , answerAction } from "../../redux/actions/actions";





const MultiSelection = ({question}) => {
    const dispatch = useDispatch();

    const setQuestionMode = useSelector(questionMode)
    const [valueCheckBox, setValueCheckBox] = useState([]);
    const handleBackButton = () =>{
      dispatch(questionAction(setQuestionMode.question -1))
    }
    const handleNextButton = () =>{
      dispatch(answerAction({
        id:question.id,
        value:valueCheckBox,
      }))
      dispatch(questionAction(setQuestionMode.question +1))
    }

    const handleNextButton2 = () =>{
      if(valueCheckBox.length > 0){
     
        dispatch(answerAction({
          id:question.id,
          value:valueCheckBox,
        }))
        dispatch(questionAction(setQuestionMode.question +1))
      }
      if( valueCheckBox.length===0  ){

        dispatch(answerAction({
          id:question.id,
          value:question.userAnswer,
        }))
        dispatch(questionAction(setQuestionMode.question +1))
      }
     
    }
 


    return (
      <Box>
      <Box sx={{display:'flex',justifyContent:'space-between', alignItem:'center'}}>
           <Box>
              <Button
                sx={{color:COLORS.primary_color, textTransform:'none'}}
                startIcon={<ArrowBackIosIcon sx={{color:COLORS.primary_color }}/>}
                onClick={handleBackButton}
              >
               Back
              </Button>
           </Box>
           <Paper sx={{display:'flex' ,justifyContent:'space-between',alignItems:'center',width:100}}>
               <Typography>
                   [Part 1]
               </Typography>
               <Typography>
                   <b>03</b>/20
               </Typography>
           </Paper>
         
      </Box>
      <Container sx={{marginTop:5,flexDirection:'column',marginBottom:5}}>
          <Box sx={{marginBottom:5}}>
              <Typography variant="h5" align="center" sx={{fontWeight:'bold'}}>
                  {question.question}
              </Typography>
          </Box>

          <Box sx={{marginBottom:5}}>
  
          <MultiSelect
            options={question.answer}
            value={valueCheckBox}
            onChange={setValueCheckBox}
            labelledBy="Select"
            valueRenderer={ (selected)=>{
              if(selected.length===0){
                if(question.userAnswer===''){
                  return 'Search...'
                }else{
                  return question.userAnswer.map(answer=>
                    answer.label.concat(' ')
                )
                }
              }
            }}

          />
           </Box>

          <Box sx={{marginBottom:5,display:'flex', justifyContent:'center'}}>
          {question.userAnswer ==='' &&
            <Button
                variant="contained"
                sx={{bgcolor:COLORS.primary_color,textTransform:'none'}}
                onClick={handleNextButton}
                disabled={ valueCheckBox.length===0  ? true : false }
                >
                  Continue
              </Button>
          }
          
              {question.userAnswer !== '' &&
                  <Button
                    variant="contained"
                    sx={{bgcolor:COLORS.primary_color,textTransform:'none'}}
                    onClick={handleNextButton2}
                  >
                  Continue
                  </Button>
              }
            
          </Box>

         
      </Container>

  </Box>
      );
}
 
export default MultiSelection