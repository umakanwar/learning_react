import React from "react";
import products from "../utility/data";

const CardComponent = ({ items }) => {
    return (
        <>
           {items.map((items)=>(
            <div className=" w-72 m-2 p-4 h-[600px] bg-green-200 rounded-xl shadow-xl shadow-blue-500">
                <h1 className="m-2 text-centre text-black font-serif font-bold text-2xl">
                    {items.name}
                </h1>
                <img className="h-72 mx-auto rounded-xl w-60 bg-contain shadow-lg shadow-blue-500" src={items.image}
                alt="Img" />
                <p className=" mx-3 my-4 text-black ">{items.productdesc}</p>
                <div className=" flex justify-between m-1">
                    <button className="bg-green-500 p-2 w-[155px] rounded-xl">Add</button>
                    <button className="bg-red-600 p-2 rounded-xl">Remove</button>                
                    </div>
            </div>
           ))}

        </>
    );
};

export default CardComponent;