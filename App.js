import React from 'react';
import ReactDOM  from 'react-dom';

const parent = React.createElement(
    "div",
    {id:"parent"}, 
    React.createElement("div",{id:"child"},[        //use array for sibling tag

    React.createElement("h1",{id:"new tag"}, "Nested ///////tag"),    //for children tags just give another create ele statement in last parameter 
    React.createElement("h2",{id:"new tag"}, "sibling tag")   
    ])
);



// const heading = React.createElement
// ("h1",
// {id:"heading"},
// "Learning React");             //heading returns a object and still its not a h1 tag.
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);// this statement renders the object and thn makes it as a h1 tag and show it in the browser.