import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";

const FeaturedFeaturesComponent = ({response}:{response: FeaturedPropertiesSettingsType}) => {
    return (
        <div className="flex flex-row items-center justify-items-center">
             {
                        response.features.map((feature) => {
                            // Assuming feature.type is a string containing alphanumeric characters
                            const firstNumbers = feature.type.match(/\d+/);

                            // Check if firstNumbers is not null before accessing its value
                            const displayText = firstNumbers ? firstNumbers[0] : '';
                            return (
                                <div key={`${feature.id}`} className="border border-[.1rem] rounded-[.2rem] border-[#D7D7D7] mr-[1rem] p-[.4rem] flex flex-row justify-items-center items-center">
                                    <span className="hidenav mr-[.4rem]">{feature.icon}</span>
                                    <span className="smallnav mr-[.4rem] w-[.8rem] h-[.8rem]">{feature.icon}</span>
                                    <span className="bg-[#D7D7D7] h-full w-[.1rem] mr-[.4rem]">&nbsp;</span>
                                    <span className="hidenav text-[.7rem] text-[#8E8E8E] font-[400]">{feature.type}</span>
                                    <span className="smallnav text-[.8rem] text-[#8E8E8E] font-[400]">{displayText}</span>   
                                </div>  
                            )
                        })
                    }
        </div>
    )
}

export default FeaturedFeaturesComponent;