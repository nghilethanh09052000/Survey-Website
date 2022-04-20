import { Typography,
  Container,
  Paper,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,

  Radio
} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {COLORS} from '../../styles/constants'
import { useState } from "react";

//import  Selector
import { answerMode , questionMode } from "../../redux/selectors/selectors";
import { useDispatch , useSelector } from "react-redux";
//import Action:
import { questionAction } from "../../redux/actions/actions";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


const MultiSelection = ({question}) => {
    const dispatch = useDispatch();
    const setAnswerMode = useSelector(answerMode)
    const setQuestionMode = useSelector(questionMode)


    const [valueCheckBox, setValueCheckBox] = useState([]);
    const [checkAll , setCheckAll] = useState(false)

    const handleBackButton = () =>{
      dispatch(questionAction(setQuestionMode.question -1))
    }
    const handleNextButton = () =>{
      dispatch(questionAction(setQuestionMode.question +1))
    }

    const handleChange = (e) => {
   
      setValueCheckBox(e.target.value)
    
    };
    console.log(setAnswerMode)
    console.log(valueCheckBox)
    
   
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
            <FormControl sx={{border:`1px solid ${COLORS.primary_color} ` , width: '100%' }}>
            <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={valueCheckBox}
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
              input={<OutlinedInput label="Tag" />}
              MenuProps={MenuProps}
            >
              <MenuItem value={question.answer}>
                <Checkbox checked={checkAll ? true : false}/>
                <ListItemText primary='Select All' />
              </MenuItem>
              {question.answer.map((answer) => (
                <MenuItem key={answer} value={answer}>
                  <Checkbox 
                    checked={valueCheckBox.indexOf(answer) > -1} 

                  />
                  <ListItemText primary={answer} />
                </MenuItem>
              ))}
            </Select>
            
            </FormControl>
          </Box>

          <Box sx={{marginBottom:5,display:'flex', justifyContent:'center'}}>
              <Button
                variant="contained"
                sx={{bgcolor:COLORS.primary_color,textTransform:'none'}}
                onClick={handleNextButton}
              >
                  Continue
              </Button>
          </Box>

         
      </Container>

  </Box>
      );
}
 
export default MultiSelection