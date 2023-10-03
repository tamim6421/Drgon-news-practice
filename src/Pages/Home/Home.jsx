import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid gap-5 md:grid-cols-4 mt-5">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                   
                </div>

                <div className="border col-span-2 ">
                    <h1>Coming soon.....</h1>
                </div>

                <div className="border">
                <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Home;