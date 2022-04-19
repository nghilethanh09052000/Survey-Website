import { Typography,
            Container,
            Paper,
            Box,
            Divider,
            Stack,
            Button

} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import './Consent.scss'
import {COLORS} from '../../styles/constants'



import { useNavigate } from "react-router-dom";

//Redux Actions:
import { captchaAction } from "../../redux/actions/actions";
//Redux Selectors:
import { captchaMode } from "../../redux/selectors.js/selectors";
//Import React-Redux
import { useDispatch , useSelector } from "react-redux";

const Consent = () => {
 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const setCaptChaMode = useSelector(captchaMode)
 
    const handleCaptchaChange = (value) =>{
        setCaptChaMode.captchaCheck = value
        dispatch(captchaAction(setCaptChaMode.captchaCheck))
    }

    const handleCloseWindow = (e) =>{
        window.open("about:blank", "_self");
        window.close(); 
    }

    const handleAgree = () =>{
        if(setCaptChaMode.captchaCheck){
            navigate('/survey')
        }else{
            alert('Please check on Captcha')
            
        }
    }
   
    return (
        <Container sx={{marginTop:5}}>
            <Container>
                <Box>
                    <Paper sx={{display:'grid' , justifyContent:'center', alignContent:'center'}} > 
                        <Container>
                            <Typography align='center' variant="h4" gutterBottom component="div">Thank you for your interest</Typography>
                        </Container>

                        <Container sx={{width:700}}>
                            <Box>
                                <Divider orientation="horizontal">
                                    <Typography align='center' sx={{fontStyle:'italic',fontSize:15}} variant="caption" >Please read the the information below.</Typography>
                                </Divider>
                            </Box>
                        </Container>

                        <Container sx={{width:600}}>
                            <Box>
                                <Typography align='center' gutterBottom variant="subtitle2" component="div">
                                Once you have read and understood the information, if you agree to take part in the research, click on the <b>"I Agree"</b> button to begin the survey
                                </Typography>
                            </Box>
                        </Container>

                        <Container sx={{width:650, marginTop:3 }} >
                            <Paper sx={{background:'#F5F5F5', padding: '20px 20px'}}>
                                <Stack direction='column' spacing={2}  >
                                    <Box>
                                        <Typography sx={{color:COLORS.primary_color , fontWeight:'bold'}} gutterBottom component="div">
                                            Why we are asking you to take part
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" >
                                            We have invited you to take part in this survey because you have downloaded
                                            Gameloft mobile games for your child. We want to hear from parents all over the world
                                            whose children use apps
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{color:COLORS.primary_color , fontWeight:'bold'}} gutterBottom component="div">
                                           What would i need to do ?
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" component="div" >
                                            Taking part is voluntary. If you choose not to take part in, this will not
                                            affect your use of Gameloft mobile games. If you do decide to take part, we 
                                            will ask some questions about your household and about your child who uses Gameloft
                                            mobile games (or who you think will use Gameloft mobile games, if you have just downloaded
                                            the app). We want to hear from you, even if you think your child might not like
                                            the app or play it very much!
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" component="div">
                                            The question will ask you about the different activities your child does at home,
                                            how your child uses technology (like smartphones, tablets or television) and whether
                                            other people join them in these activities. We will also ask about your views on childrens
                                            using technology.
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" component="div">
                                            The survey will be anonymous. We will not ask for your name or your child's name. We will 
                                            collect some information concerning you or your child but in any case these data could directly
                                            identify you or your child.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{color:COLORS.primary_color , fontWeight:'bold'}} gutterBottom component="div">
                                           How will we use the information
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" >
                                           This research will help you to improve the design of Gameloft mobile games and others apps, so that they 
                                           are better able to meet the needs of children and parents, and to support child learning. We will
                                           share our findings with parents, app developers, and in academic publications.
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" >
                                            Please click here to find out more about how we store your data, and how
                                            the study has been reviewed to make sure it is ethical.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{color:COLORS.primary_color , fontWeight:'bold'}} gutterBottom component="div">
                                            What if I change my mind?
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" >
                                            While you are completing the survey, you can stop at any time by clicking the button
                                            which says 'I have change my mind, please delete my infomation'. Once you have completed the survey, we will
                                            not be able to withdraw your infomation because it will be anonymous (we will not know which answers are yours). 
                                            We will also delete the email address collected to send you the link to the survey within on month
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{color:COLORS.primary_color , fontWeight:'bold'}} gutterBottom component="div">
                                            How can i find out the results of the research?
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" >
                                            You can sing up to receive the results of the research at the end of the survey by providing your email address. Your
                                            email address will not be linked to your survey answers.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{color:COLORS.primary_color , fontWeight:'bold'}} gutterBottom component="div">
                                            Who do i contact to ask questions, or if i want to complain?
                                        </Typography>
                                        <Typography sx={{color:COLORS.text_color_paragraph}} gutterBottom variant="body2" >
                                            If you have any question or concerns about the study, before or
                                            after taking part, please email the lead researchers: Research Group <b style={{color:COLORS.primary_color}}>(research@gameloft.com)</b>. 
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Container>

                        <Container sx={{justifyContent:'center',display:'flex', alignItems:'center', marginTop:5}}>
                            <form>
                                <ReCAPTCHA
                                    onChange={handleCaptchaChange}
                                    sitekey="6Le3VoMfAAAAAJZS8ormh2ksNH8_qLhJvDZCpH_q"
                            />
                            </form>
                        </Container>
                        <Container 
                        sx={{marginTop:'15px' ,width:650,marginBottom:5}}
                            >
                            <Box sx={{ justifyContent:'space-around',display:'flex', alignItems:'center',}}>
                                <Button 
                                    variant="outlined"
                                    sx={{color:COLORS.primary_color ,
                                     textTransform:'none',
                                     fontWeight:'bold',
                                     border:`1px solid ${COLORS.primary_color}`
                                     }}
                                    onClick={handleCloseWindow}
                                    >
                                    Cancel
                                </Button>
                                <Button 
                                    variant="contained" 
                                    sx={{background:COLORS.primary_color,textTransform:'none',fontWeight:'bold'}}
                                    onClick={handleAgree}
                                    
                                >
                                    I have read and agree with the terms of use
                                </Button>
                            </Box>
                            
                        </Container>
                    </Paper>
                </Box>
            </Container>
        </Container>
      );
}
 
export default Consent;