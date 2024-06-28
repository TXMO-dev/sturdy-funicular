import { useParams } from "react-router-dom";
import FeaturedDetailsSection from "../Sections/FeaturedDetailsSection";

const FeaturedListDetailPage = () => {
    const { id } = useParams();

    // Check if id is undefined before using it
    if (id === undefined) {
        // Handle the case where id is undefined, such as showing a loading spinner or redirecting
        return <div>Loading...</div>;
    }

    return (
        <div className="overflow-x-hidden">
            <FeaturedDetailsSection id={+id} />
        </div>
    );
}
export default FeaturedListDetailPage;
