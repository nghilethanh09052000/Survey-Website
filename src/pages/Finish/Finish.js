import { 
    Container,
    Paper,
    Box,
    Typography,
    Button,
    Grid,

} from "@mui/material";
import {COLORS} from '../../styles/constants'
//import  Selector
import {  submitMode } from "../../redux/selectors/selectors";
import {  useSelector } from "react-redux";

const Finish = () => {
   
    const setSubMitMode = useSelector(submitMode)
    console.log(setSubMitMode)
    return ( 
        <Container sx={{marginTop:5, marginBottom:'100px'}}>
            <Container>
                <Box>
                    <Paper elevation={1} sx={{display:'grid' , justifyContent:'center', alignContent:'center', padding:'50px 10px'}}> 
                        <Container sx={{width:'700px',marginTop:'10px'}}>           
                            <Grid container rowSpacing={3}>
                                <Grid item xs={12}>
                                    <Box sx={{display:'flex', justifyContent:'center'  }}>
                                        <Typography variant='h5' sx={{color:COLORS.primary_color,fontWeight:'bold'}}>
                                            Thank you!!
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{display:'flex', justifyContent:'center'  }}>
                                        <Typography variant='body1' sx={{color:COLORS.primary_color,fontWeight:'bold'}}>
                                            We appreciate your time so far
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{display:'flex', justifyContent:'center'  }}>
                                        <a href='https://www.gameloft.com/'>
                                            <Button
                                                variant='contained'
                                                sx={{
                                                    textTransform:'none',
                                                    fontWeight:'bold',
                                                    bgcolor:COLORS.primary_color
                                                }}
                                            >
                                                Back to game loft
                                            </Button>
                                        </a>
                                    </Box>
                                </Grid>
                            </Grid>
                                
                            
                     

                            

                        </Container>


                    
                    
                    </Paper>
                </Box>
            </Container>
        </Container>
     );
}
 
export default Finish;