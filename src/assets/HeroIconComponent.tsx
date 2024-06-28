import HeroGif from './../assets/herogif.gif'
const HeroIconComponent = () => (
    <div>
    <img className="hidenav w-[1.5rem] h-[1.5rem] mr-[1rem]" src={HeroGif} alt="Your GIF" />
    <img className="smallnav w-[1rem] h-[1rem] mr-[.6rem]" src={HeroGif} alt="Your GIF Small" />
  </div>
)
export default HeroIconComponent;