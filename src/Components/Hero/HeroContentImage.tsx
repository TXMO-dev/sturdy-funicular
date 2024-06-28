import HeroImage from './../../assets/HeroImage.png';
import HeroImageSmall from './../../assets/heroimagesmall.png';
const HeroContentImage = () => {
    return (
           <>
            <img src={HeroImage} className='hidenav' alt="hero image" />
            <img src={HeroImageSmall} className='smallnav' alt="hero image small" />
           </>
    )
}
export default HeroContentImage;