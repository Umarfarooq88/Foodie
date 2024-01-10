const parent = React.createElement(
    "div",
    {id:"parent"}, 
    React.createElement("div",{id:"child"},React.createElement("h1",{id:"new tag"}, "Nested tag")));



// const heading = React.createElement
// ("h1",
// {id:"heading"},
// "Learning React");             //heading returns a object and still its not a h1 tag.
//         const root = ReactDOM.createRoot(document.getElementById("root"));

//         root.render(parent);// this statement renders the object and thn makes it as a h1 tag and show it in the browser.