import { Services, ServicesSettings } from "../../Misc/ServicesSettings";
import ServicesListWrapper from "../Wrappers/ServicesListWrapper";
import ServicesSingleComponent from "./ServicesSingleComponent";

const ServicesListComponent = () => {
    return (
        <ServicesListWrapper>
            {
                Services.map((service: ServicesSettings) => {
                    return (
                        <>
                        <ServicesSingleComponent key={service.id} service={service} />
                        </>
                    )
                })
            }
        </ServicesListWrapper>
    )
}
export default ServicesListComponent;