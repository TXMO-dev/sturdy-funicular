import { Alakados, AlakadosSettings } from "../../Misc/WhyAlakadosSettings";
import WhyAlakadosListWrapper from "../Wrappers/WhyAlakadosListWrapper";
import WhyAlakadosSingleComponent from "./WhyAlakadosSingleComponent";

const WhyAlakadosListComponent = () => {
    return (
        <WhyAlakadosListWrapper>
            {
                Alakados.map((alakados: AlakadosSettings, index: number) => {
                    return (
                            <WhyAlakadosSingleComponent settings={alakados} index={index} />
                    )
                }) 
            }
        </WhyAlakadosListWrapper>
    )
}
export default WhyAlakadosListComponent; 