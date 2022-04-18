import './Footer.scss'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {COLORS} from '../../styles/constants'
const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className='footer_containter'>
                <div className='footer_containter_box1'>
                    <p>in collaboration with</p>
                </div>
                <div className='footer_containter_box2'>
                    <AdminPanelSettingsIcon sx={{color:COLORS.text_color_white , height:'35px' ,width:'35px'}}/>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;