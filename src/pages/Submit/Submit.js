import { Typography,
    Container,
    Paper,
    Box,
    Divider,
    Grid,
    TextField,
    Button,
    FormControlLabel,
    FormGroup,
    Checkbox

} from "@mui/material";
import PopUp from "../../components/PopUp/PopUp";
import {COLORS} from '../../styles/constants'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";
import * as EmailValidator from 'email-validator';
import { useNavigate } from "react-router-dom";


//import  Selector
import { answerMode } from "../../redux/selectors/selectors";
import { useDispatch , useSelector } from "react-redux";
//import Action:
import { submitAction } from "../../redux/actions/actions";

const Submit = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setAnswerMode = useSelector(answerMode)


    //Value
    const [name , setName] = useState('');
    const [email, setEmail] = useState('')
    const [checkBoxValue , setCheckBoxValue] = useState([])
    //Error
    const [errorName ,setErrorName] = useState(false)
    const [errorEmail ,setErrorEmail] = useState(false)
    const [popUp , setPopUp] = useState(false)

    const handleNameInput = (e) =>{
        
        if( e.target.value.match(/^([a-zA-Z ]){2,30}$/) ){
            setName(e.target.value)
            setErrorName(false)
        }else{
            setErrorName(true)
        }
    }
    const handleEmailInput = (e) =>{
        if(EmailValidator.validate(e.target.value)){
            setEmail(e.target.value)
            setErrorEmail(false)
        }else{
            setErrorEmail(true)
        }
    }

    const handleCheckBox = (e) =>{
        const index = checkBoxValue.indexOf(e.target.value)
        if(index===-1){
            setCheckBoxValue([...checkBoxValue,e.target.value])
        }else{
            setCheckBoxValue(checkBoxValue.filter(value => value!==e.target.value))
        }
    }
    const handleBackButton = () =>{
        navigate('/survey')
    }


    const handleSubmit = () =>{
        if( (errorName || errorEmail)) {
            setPopUp(true)
        }else{
            dispatch(submitAction({
                isSubmit:true,
                name:name,
                email:email,
                userCheckBox:checkBoxValue,
                userAnswer:setAnswerMode
        }))
        navigate('/finish')
        }
       
        }
    return (
        <Container sx={{marginTop:5}}>
            <Container>
                <Box>
                    <Paper sx={{display:'grid' , justifyContent:'center', alignContent:'center',padding:'20px 30px'}} > 
                        <Container sx={{width:'700px'}}>

                     
                            <Container sx={{marginBottom:'10px'}}>
                            <Typography align='center' variant="h4" gutterBottom component="div" sx={{fontWeight:'bold'}}>
                            Thank you for taking the time to complete our survey. Your help is very
                            much appreciated
                            </Typography>
                            </Container>

                            <Container sx={{width:600 , display:'grid', justifyContent:'center', alignContent:'center', marginBottom:5}}>
                                <Box sx={{marginBottom:5}}>
                                    <Typography align='center' gutterBottom variant="subtitle2" component="div" >
                                        If you have any questions or concerns, please email the lead researchers                                
                                    </Typography>
                                </Box>
                       
                                <Box sx={{marginBottom:5, display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <ul>
                                        <li>
                            
                                                <b style={{color:COLORS.primary_color}}>
                                                    Research Group
                                                </b> &nbsp;(research@gameloft.com)
                            
                                        
                                        </li>
                                    </ul>
                                </Box>
                                <Box sx={{marginBottom:5}}>
                                    <Divider orientation="horizontal" />
                                    
                                </Box>

                                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'20px'}}> 
                                    <Typography  variant="h5" sx={{fontWeight:'bold'}}>
                                        Interested in a summary of the survey
                                    </Typography>
                                </Box>
                                <Box sx={{display:'grid',justifyContent:'center',alignContent:'center'}}> 
                                    <Typography  variant="body2" gutterBottom>
                                        If you would like to receive a summary of the survey
                                        findings OR if you are happy to be contacted by Gameloft
                                        about future research, please provide you details below
                                        and tick the relevant box/es
                                    </Typography>
                                    <Typography  variant="body2" gutterBottom>
                                        If you change your mind, you can always opt-out at a later date.
                                    </Typography>
                                </Box>

                                <Grid container rowSpacing={3}>
                                    <Grid item xs={12}>
                                        <Button
                                            sx={{color:'black', fontWeight:'bold'}}
                                            startIcon={<PersonIcon
                                                    sx={{color:'black'}}
                                            />}                                        >
                                            Your name
                                        </Button>
                                        <TextField 
                                        id="outlined-basic" 
                                        error={errorName ? true : false}
                                        fullWidth
                                        onChange={handleNameInput}
                                        required
                                        />
                                    </Grid>
                                    {errorName
                                    && 
                                    <Typography color='error' variant="caption">
                                        Your name must not have number or special characters
                                        (^,@,%, ...)
                                    </Typography>
                                    }
                                   
                                    <Grid item xs={12}>
                                        <Button
                                            sx={{color:'black', fontWeight:'bold'}}
                                            startIcon={<EmailIcon
                                                    sx={{color:'black'}}
                                            />}                                        >
                                            Email:
                                        </Button>
                                        <TextField 
                                            id="outlined-basic" 
                                            fullWidth 
                                            type='email'
                                            onChange={handleEmailInput}
                                            required
                                        />
                                        {errorEmail
                                    && 
                                    <Typography color='error' variant="caption">
                                        You must specify a valid email
                                    </Typography>
                                    }
                                    </Grid>

                                    <Grid item xs={12}>
                                       <FormGroup>
                                            <FormControlLabel 
                                                
                                                control={<Checkbox 
                                                            checked={checkBoxValue.includes("I agree to receive a summary of the survey findings")}
                                                            value="I agree to receive a summary of the survey findings" 
                                                            onChange={handleCheckBox}
                                                        />
                                                 } 
                                                label="I agree to receive a summary of the survey findings" 

                                            />
                                            <FormControlLabel 
                                                control={<Checkbox  
                                                            checked={checkBoxValue.includes("I agree to be contacted by Gameloft about future research")}
                                                            value="I agree to be contacted by Gameloft about future research" 
                                                            onChange={handleCheckBox}
                                                 />} 
                                                label="I agree to be contacted by Gameloft about future research" 

                                            />
                                        </FormGroup>
                                    </Grid>
                                    <Grid item xs={12} sx={{fontStyle:'italic'}}>
                                       <b>Please note:</b>&nbsp;
                                       your email and address will not be linked with your survey answers
                                    </Grid>
                                    <Grid item xs={4} sx={{fontStyle:'italic'}}>
                                       <Button
                                        startIcon={<ChevronLeftIcon sx={{color:COLORS.primary_color}}/>}
                                        variant='outlined'
                                        sx={{textTransform:'none' ,
                                            color:COLORS.primary_color, 
                                            fontWeight:'bold',
                                            border:`1px solid ${COLORS.primary_color}`,
                                            
                                         }}
                                         onClick={handleBackButton}
                                       >
                                           Back to Survey
                                       </Button>
                                    </Grid>
                                    <Grid item xs={8}>
                                    <Button
                                        variant='outlined'
                                        sx={{textTransform:'none' ,
                                            color:COLORS.primary_color, 
                                            fontWeight:'bold',
                                            border:`1px solid ${COLORS.primary_color}`,
                                            width:'100%',
                                            bgcolor:'#CACACA'
                                            
                                        }}
                                        disabled={checkBoxValue.length > 0 ? false : true}
                                        onClick={handleSubmit}
                                    >
                                           Submit
                                       </Button>
                                    </Grid>
                                </Grid>
                            </Container>
                           
                       

                    </Container>
                </Paper>
                            {popUp &&
                                <PopUp 
                                    popUp={popUp}
                                    setPopUp={setPopUp}
                                />
                            }
                        
                </Box>
            </Container>
        </Container>
      );
}
 
export default Submit;