import { Typography,
  Container,
  Paper,
  Box,
  Button,
  TextField
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {COLORS} from '../../styles/constants'
import { useState } from "react";

//import  Selector
import { questionMode } from "../../redux/selectors/selectors";
import { useDispatch , useSelector } from "react-redux";
//import Action:
import { questionAction , answerAction } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const TextInput = ({question}) => {
  const [valueText , setValueText] = useState(question.userAnswer==='' ? '' : question.userAnswer)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const setQuestionMode = useSelector(questionMode)


  const handleNextButton = () =>{
      dispatch(answerAction({
          id:question.id,
          value:valueText,
      }))
      navigate('/submit')
  }

  const handleBackButton = () =>{
    dispatch(questionAction(setQuestionMode.question -1))
  }

  const handleTextChange = (e) =>{
    setValueText(e.target.value)
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
                   [Part 2]
               </Typography>
               <Typography>
                   <b>01</b>/20
               </Typography>
           </Paper>
         
      </Box>
      <Container sx={{marginTop:5,flexDirection:'column',marginBottom:5}}>
          <Box sx={{marginBottom:5}}>
              <Typography variant="h5" align="center" sx={{fontWeight:'bold'}}>
                  {question.question}
              </Typography>
          </Box>
          <Box>
            <TextField
              multiline
              rows={5}
              fullWidth
              autoFocus
              sx={{marginBottom:5,
                bgcolor:COLORS.text_color_white,
                border: valueText.length >=2000 && '1px solid red'
              }}
              onChange={handleTextChange}
              defaultValue={question.userAnswer==='' ? valueText : question.userAnswer}
              inputProps={{
                maxLength:2000
              }}
           
            />
          </Box>
            <Box sx={{marginBottom:'10px',display:'flex', justifyContent:'center'}}>
              <Typography 
                sx={{
                  color: valueText.length < 2000 ? 'black' : 'red'
                }}
                variant='title1'
              >
                {valueText.length<2000 ? 2000 - valueText.length : 0}/2000 characters left
              </Typography>
            </Box>
            
            <Box sx={{marginBottom:5,display:'flex', justifyContent:'center'}}>
                <Button
                  variant="contained"
                  sx={{bgcolor:COLORS.primary_color,textTransform:'none'}}
                  onClick={handleNextButton}
                  disabled={valueText.length < 2000 ? false : true}
                >
                    Continue
                </Button>
              </Box>
      </Container>

  </Box>
      );
}
 
export default TextInput