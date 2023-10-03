import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-gray-50 shadow-sm">
            <button className="btn btn-secondary"> Latest</button>
            <Marquee speed={100} pauseOnHover={true}>
           <Link className="mr-8"> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>

           <Link> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
</Marquee>
        </div>
    );
};

export default BreakingNews;