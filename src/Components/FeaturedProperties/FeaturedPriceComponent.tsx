import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";

const FeaturedPriceComponent = ({response}:{response:FeaturedPropertiesSettingsType}) => {
    return (
        <>
        <p className="hidenav text-[2rem] font-[600] text-center text-[#DFA857] leading-[2rem]">{response.price}</p>  
        <p className="smallnav text-[1rem] font-[600] text-center text-[#DFA857] leading-[1rem]">{response.price}</p>
        </>
    )
}
export default FeaturedPriceComponent;