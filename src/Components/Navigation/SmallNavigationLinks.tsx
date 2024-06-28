import { Link} from "react-router-dom";
import Button from "../Buttons/Button";
import { Navigation } from "../../Misc/NavSettings";
import { Dispatch } from "react";

const SmallNavigationLinks = ({setIsOpen, isOpen}:{setIsOpen:Dispatch<React.SetStateAction<boolean>>, isOpen: boolean}) => {
    return (
        <>
            {
                Navigation.map((response) => {
                    if (response.route === '/contact') {
                        return (
                            <div className="smallnav" key={response.id}>
                                <Button width={10} text={response.name.toUpperCase()} route={response.route} />
                            </div>
                        )
                    }
                    return (
                        <Link onClick={() => setIsOpen(!isOpen)} className="smallnav hover:text-[#DFA857] last:hover:text-[#FFFFFF] font-[500] text-[#FFFFFF] text-[1rem] leading-[1.21rem] mb-[2rem] last:mb-[2.5rem]" to={response.route} key={response.id}>
                            {response.name.toUpperCase()}
                        </Link>
                    )
                })
            }
        </>
    )
}
export default SmallNavigationLinks;