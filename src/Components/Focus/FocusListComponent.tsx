import { Focus } from "../../Misc/MainFocusSettings";
import FocusListWrapper from "../Wrappers/FocusListWrapper";
import FocusSingleComponent from "./FocusSingleComponent";

const FocusListComponent = () => {
    return (
        <FocusListWrapper>
            {
                Focus.map((response) => {
                    return (
                        <FocusSingleComponent key={response.id} focus={response} />
                    )
                })
            }
        </FocusListWrapper>
    )
}
export default FocusListComponent;