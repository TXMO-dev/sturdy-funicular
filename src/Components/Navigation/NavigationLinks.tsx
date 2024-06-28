import { Link } from "react-router-dom";
import { Navigation } from "../../Misc/NavSettings";
import Button from "../Buttons/Button";
import HamburgerIcon from './../../assets/hamburgericon.svg';
import { Dispatch } from "react";

const NavigationLinks = ({setIsOpen, isOpen}:{setIsOpen:Dispatch<React.SetStateAction<boolean>>, isOpen: boolean}) => {
    return (
        <>
            {
                Navigation.map((response) => {
                    if (response.route === '/contact') {
                        return (
                            <div className="hidenav" key={response.id}>
                                <Button width={10} text={response.name.toUpperCase()} route={response.route} />
                            </div>
                        )
                    }
                    return (
                        <Link className="hidenav hover:text-[#DFA857] last:hover:text-[#FFFFFF] self-center mr-[2rem] last:mr-[0rem] font-[500] text-[#FFFFFF] text-[1rem] leading-[1.21rem]" to={response.route} key={response.id}>
                            {response.name.toUpperCase()}
                        </Link>
                    )
                })
            }
            <img src={HamburgerIcon} onClick={() => setIsOpen(!isOpen)} className="smallnav" alt="hamburger icon" />
        </>
    )
}

export default NavigationLinks;
