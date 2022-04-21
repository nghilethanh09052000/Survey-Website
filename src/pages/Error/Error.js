import { 
    Container,
    Box,
    Typography,
    Button

} from "@mui/material";
import { Link } from "react-router-dom";
const Error = () => {
    return ( 
        <Container>
            <Box sx={{display:'flex', justifyContent:'center',marginBottom:'30px'}}>
                <Typography color='error'>
                    This page is no longer available.
                </Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent:'center'}}>
             
                    <Link to='/' style={{textDecoration:'none'}}>
                        <Button variant="contained">
                            <Typography>
                                Back to homepage
                            </Typography>
                        </Button>
                       
                    </Link>
             
            </Box>
        </Container>
     );
}
 
export default Error;