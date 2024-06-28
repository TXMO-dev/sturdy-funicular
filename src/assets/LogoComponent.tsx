import LogoIcon from './../assets/herohomeicon.svg';
import LogoIconSmall from './../assets/logocomponentsmall.svg';
const LogoComponent = () => (
  <>
    <img src={LogoIcon} className='hidenav' alt="logo icon" />
    <img src={LogoIconSmall} className='smallnav w-[5rem] h-[5rem]' alt="logo icon small" />
  </>
)
export default LogoComponent