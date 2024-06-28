import { ReactNode } from 'react';

const FeaturedPropertiesCardWrapper = ({ children, id }: { children: ReactNode, id: number }) => {
    const url = `${window.location.origin}/featured-list/${id}`;
    console.log(url); // Log the URL to verify it's correct

    return (
        <>
            <a key={`${id}`} href={url} className="hidenav cursor-pointer bg-[#FFFFFF] py-[2.16rem] px-[1.8rem] rounded-[0.23rem] flex flex-col justify-items-center items-center">
                {children}
            </a>
            <a key={`${id}`} href={url} className="smallnav cursor-pointer w-[80%] bg-[#FFFFFF] py-[2.16rem] px-[1.8rem] rounded-[0.23rem] flex flex-col justify-items-center items-center">
                {children}
            </a>
        </>
    );
};


export default FeaturedPropertiesCardWrapper;