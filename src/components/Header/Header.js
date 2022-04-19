import './Header.scss'
import {COLORS} from '../../styles/constants'
import { Link } from 'react-router-dom';

import {  
     Button
} from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Header = () => {
    return (
        <header className='header'>
            <div className='header_container'>
                <div className='header_containter_box1'>
                    <div className='box1'>
                        <AdminPanelSettingsIcon sx={{color:'#ffff', width:'50px', height:'50px'}}/>
                    </div>
                    <div className='box2'>
                        <p>FAMILIES USING TECHNOLOGY SURVEY</p>
                    </div>
                </div>
                <div className='header_containter_box2'>
                    <Button
                        endIcon={<ArrowForwardIosIcon sx={{color:COLORS.text_color}}/>}
                    >
                    <Link to='/changemind'>
                        <p className='box2'>I have change my mind</p>
                    </Link>
                     
                    </Button>
                   
                </div>
            </div>
           
        </header>
      );
}
 
export default Header;