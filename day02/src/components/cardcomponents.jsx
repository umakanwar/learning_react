import React from "react";
import products from "../utility/data";

const CardComponent = ({ items }) => {
    return (
        <>
           {items.map((items)=>(
            <div className=" w-72 m-2 p-4 h-[600px] bg-green-200 rounded-xl shadow-lg shadow-blue-500">
                <h1 className="m-2 text-centre text-black font-serif font-bold text-2xl">
                    {items.name}
                </h1>
                <img className="h-72 mx-auto rounded-xl w-60 bg-contain shadow-md shadow-blue-500" src={items.image}
                alt="Img" />
                <p className=" mx-3 my-4 text-black ">{items.productdesc}</p>
                <div className="flex space-x-5 p-5">
            <button className="rounded-2xl w-32 h-10 bg-green-500 p-7 text-center text-white text-2xl">
              <span className="text-center font-bold relative -top-4"> + </span>
            </button>
            <button className="rounded-2xl w-[140px] h-10 bg-red-600 p-7 text-white text-2xl">
              <span className="text-center font-bold relative -top-4"> - </span>
            </button>
          </div>
            </div>
           ))}

        </>
    );
};

export default CardComponent;