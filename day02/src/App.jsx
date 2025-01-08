import React from "react";
import CardComponent from "./components/cardcomponents";
import products from "./utility/data";

const App = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-wrap bg-slate-700">
            <CardComponent items={products} />
        </div>
    );
};

export default App;