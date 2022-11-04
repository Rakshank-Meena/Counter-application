
import BedtimeIcon from '@mui/icons-material/Bedtime';

const Navbar=({themeSwitch})=>{
  
    return(<>
    <div className="navbar">
        <div className="header">counter</div>
        <div className="form-check form-switch form-check-reverse" style={{marginLeft:'auto'}}>
            <input  onChange={themeSwitch} className="form-check-input" type="checkbox" id="flexSwitchCheckReverse"/>
            <label className="form-check-label" for="flexSwitchCheckReverse"><BedtimeIcon style={{color:'#FFFFFF'}}/></label>
        </div>
    </div>

    </>)
}
export default Navbar;