import { FeaturedPropertiesSettingsType } from "../../Misc/FeaturedPropertuesSettings";

const FeatureDetailPhotoGalleryComponent = ({response}:{response:FeaturedPropertiesSettingsType}) => {
    return (
        <div className="flex flex-col gap-[2rem] w-[90%] mx-[5%] bg-[#F5F1EF] mt-[4rem] px-[1rem] py-[3rem] mb-[4rem]">
            <span className="hidenav text-[#3B3A5D] text-[2rem] font-[700] mb-[.4rem]">Photo Gallery</span>
            <span className="smallnav text-[#3B3A5D] text-[2rem] text-center self-center font-[700] mb-[1rem]">Photo Gallery</span>
            <div className="hidenav w-full grid grid-cols-automatic3 gap-[2rem]">
                {
                    response.photoGallery.slice(1).map((response) => {
                        return (
                            <>
                            <img className="w-full" src={response.urlPath} alt={`${response.id} gallery`} />
                            </>
                        )
                    })
                }
            </div>
            <div className="smallnav w-full flex flex-col justify-items-center items-center">
                {
                    response.photoGallery.slice(1).map((response) => {
                        return (
                            <>
                            <img className="mb-[1rem]" src={response.urlPath} alt={`${response.id} gallery`} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FeatureDetailPhotoGalleryComponent;