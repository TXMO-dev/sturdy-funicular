import MainHeadings from "../Components/General/MainHeadings";
import WhyAlakadosComponent from "../Components/Whyalakados/WhyAlakadosComponent";
import WhyAlakadosWrapper from "../Components/Wrappers/WhyAlakadosWrapper";

const WhyAlakadosSection = () => {
    return (
       <WhyAlakadosWrapper>
        <MainHeadings mainText="WHY ALAKADOS?" subText="Why Choose Our Properties Of Real Estate Industries" />
        <WhyAlakadosComponent />
       </WhyAlakadosWrapper>
    )
}
export default WhyAlakadosSection;