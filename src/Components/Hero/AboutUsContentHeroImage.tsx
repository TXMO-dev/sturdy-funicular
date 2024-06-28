const AboutUsContentHeroImage = ({imageUrl, height,width="20rem"}:{imageUrl:string, height?: string, width?: string}) => {
    return (
        <>
            <img style={{
                height: height
            }} src={imageUrl} className='hidenav w-full' alt="about us image" />
            <img style={{
                height: height,
                width: width
            }}  src={imageUrl} className='smallnav self-center mx-[10%] mt-[4rem]' alt="about us image small" />
        </>
    )
}
export default AboutUsContentHeroImage;