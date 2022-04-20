import { Typography,
    Container,
    Paper,
    Box,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid

} from "@mui/material";
import { useState } from "react";
import {COLORS} from '../../styles/constants'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
//import  Selector
import { answerMode , questionMode } from "../../redux/selectors/selectors";
import { useDispatch , useSelector } from "react-redux";
//import Action:
import { questionAction, answerAction } from "../../redux/actions/actions";

const SingleSelection = ({question}) => {
    const dispatch = useDispatch()

    const setAnswerMode = useSelector(answerMode)
   
    const setQuestionMode = useSelector(questionMode)
    
    const [radiusValue , setRadiusValue] = useState('') 


    const handleRadioChange = (e) =>{
        setRadiusValue(e.target.value)
        dispatch(answerAction({
            id:question.id,
            value:e.target.value,
        }))

        dispatch(questionAction(setQuestionMode.question + 1))
    }
    console.log(setAnswerMode)


     return (
       <Box>
           <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Box></Box>
                <Paper sx={{display:'flex' ,justifyContent:'space-between',alignItems:'center',width:100}}>
                    <Typography>
                        [Part 1]
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
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        onChange={handleRadioChange}
                        value={radiusValue}
                    >
                  
                            <Grid container rowSpacing={3}>
                            {question.answer.map( (answer,index) =>(
                                <Grid item xs={12} key={index}>
                                    <FormControlLabel 
                                        value={answer}
                                        control={<Radio 
                                                checkedIcon={<CheckCircleRoundedIcon
                                                            sx={{
                                                                color:COLORS.primary_color
                                                            }}
                                                />}

                                            />} 
                                        label={answer}
                                        sx=
                                            {{
                                                border: radiusValue===answer
                                                ?  `2px solid ${COLORS.primary_color}` 
                                                : `1px solid ${COLORS.border_color_primary}`,
                                                width:'100%'
                                            }}

                                    />
                                        
                                
                                </Grid>
                        
                                ))}
                            </Grid>
                        
                       
                       
                        
                       
                    </RadioGroup>
               </Box>
           </Container>

       </Box>
      );
}
 
export default SingleSelection;