
import { Typography,
 
    Paper,
    Box,
    Card,
   CardContent,
   CardActions,
   Button

} from "@mui/material";
import {COLORS} from '../../styles/constants'
import CloseIcon from '@mui/icons-material/Close';
const PopUp = ({popUp, setPopUp}) => {
    const handlePopUp = () =>{
        setPopUp(false)
    }
    return (
        <Box 
            sx={{
                position:'fixed',
                top:'50%',
                right:'50%',
                transform:' translate(50%,-50%)',
            
            }}
          >
           <Card sx={{ width: 300 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="error" gutterBottom>
                        Failed to submit
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{color:COLORS.primary_color}}>
                        Please check the all the requirements correctly
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handlePopUp}>Close</Button>
                </CardActions>
            </Card>
        </Box>
      );
}
 
export default PopUp;