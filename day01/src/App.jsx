import React from "react";
import CardComponent from "./components/cardcomponents";
import products from "./utility/data";

const App = () => {
    return (
        <div className="flex flex-wrap">
            <CardComponent contacts={products} />
        </div>
    );
};

export default App;
