import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategory] = useState([])

    useEffect( ()=>{
        fetch('categories.json')
        .then( res => res.json())
        .then( data  => setCategory(data) )
    } ,[])

    console.log(categories)
    return (
        <div className="p-3 space-y-2">
            <h3 className="text-xl font-semibold text-center">All Catagories: {categories.length}</h3>
            <h1 className="bg-gray-200 py-3 text-center text-lg font-semibold">National News</h1>
            {
             categories.map (category => <NavLink 
             key={category.id}
             to={`/category/${category.id}`}
             >
            <li className="list-none ml-5 my-5 text-lg font-semibold text-gray-400 hover:text-gray-700">{category.name}</li>
             </NavLink> )
            }
        </div>
    );
};

export default LeftSideNav;