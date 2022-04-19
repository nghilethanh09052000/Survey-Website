import { Container,
            Box,
            Typography,
            Divider,
            Paper,
            Button
}
 from "@mui/material";
 import {  Link} from "react-router-dom";
import {COLORS} from '../../styles/constants'

const ChangeMind = () => {
    const handleCloseWindow = () =>{
        window.open("about:blank", "_self");
        window.close();
    }
 
    return (
        <Container  maxWidth="sm" sx={{marginTop:'30px'}}>
            <Paper sx={{display:'grid' , justifyContent:'center', alignContent:'center', padding:'20px 20px'}} >
            
                    <Box sx={{marginBottom:5}}>
                        <Box>
                            <Typography align='center' variant="h6" gutterBottom sx={{color:COLORS.primary_color, fontWeight:'bold'}}>
                                I no longer want to participate in the survey
                            </Typography>
                        </Box>
                        <Box>
                            <Typography align='center' variant="body1" gutterBottom sx={{color:COLORS.text_color_paragraph, }}>
                            Your progress will be lost
                            </Typography>
                        </Box>
                        <Container  sx={{  width:'400px' , marginBottom:'20px'}}>
                            <Box >
                                <Typography align='left' variant="body1" gutterBottom sx={{color:COLORS.text_color_paragraph, }}>
                                You can learn more about the purpose of the survey by
                                contacting our lead researchers if you have further question
                                </Typography>
                            </Box>
                        </Container>
                        
                        <Box sx={{display:'flex', justifyContent:'center'}}>
                            <ul>
                                <li>
                                    <p>
                                    <b style={{color:COLORS.primary_color}}>
                                        Research Group
                                    </b>
                                    &nbsp; (research@gameloft.com)
                                    </p>
                                
                                </li>
                            </ul>
                        </Box>
                    </Box>

                    <Divider
                        orientation="horizontal" 
                        flexItem
                    />

             
                    <Box sx={{marginTop:5}}>
                        <Box sx={{marginBottom:'20px'}}>
                            <Typography align="left" variant="body1" sx={{color:COLORS.text_color_paragraph}}>
                                Are you sure you no longer want
                                to take the survey ?
                            </Typography>
                        </Box>
                        <Container sx={{display:'grid' , justifyContent:'center', alignContent:'center'}}>
                            <Box>
                                <Button
                                    variant="contained"
                                    sx={{
                                        fontWeight:'bold',
                                        textTransform:'none',
                                        bgcolor:COLORS.primary_color,
                                        width:'200px'
                                    }}
                                    onClick ={handleCloseWindow}
                                >
                                    I have change my mind
                                </Button>
                            </Box>
                            <Box sx={{marginTop:'10px'}}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        fontWeight:'bold',
                                        textTransform:'none',
                                       
                                        border:`1px solid ${COLORS.primary_color}`,
                                        width:'200px',
                                
                                    }}
                                   
                                >
                                   <Link to='/survey' style={{textDecoration:'none', color:COLORS.primary_color}}>
                                       Back to survey
                                   </Link>
                                </Button>
                            </Box>
                            
                        </Container>
                    </Box>
     
            </Paper>
        </Container>
     );
}
 
export default ChangeMind;