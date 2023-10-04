import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";


const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const myNews = data.filter ( news => news._id === id)
    // console.log(myNews)
    // console.log(id)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" col-span-3 ">
                    <h3 className="text-2xl font-semibold">New Details</h3>
                    {
                        myNews.map( news => <div key={news.id}> 
                            <img src={news.image_url} alt="" />
                            <p className="text-lg font-semibold"> {news.title} </p>
                            <p> {news.details}</p>
                        </div> )
                    }
                </div>
                <div>
                <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;