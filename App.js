import React from 'react';
import ReactDOM  from 'react-dom';

//JSX
const heading= <h1>Namaste REACT 🚀</h1>;
// the above JSX is transcompiled to React.createElement and the to HTML Element and then it is rendered in the browser using BABEL.
// JSX=> REact eElement => HTML Element


// react element ----- starts with lower case letters
             //------- for single line use "parenthesis"
             //--------for double line use return is der and use "flower brackets" 
const headingg=(
 <h1>  This is react element.</h1>
);



/*
react component
 ------- for single line use "parenthesis"
 --------for double line use return is der and use "flower brackets" 
to render use "</>"
*/
const Component1=()=>(
     <h1  className='headd'>This is react component 1 </h1>
);

// with flower brackets and /*component composition*/
const Component2=()=>{
    return(
   <div>
   <Component1/>  
   <h1  className='headd'>This is react component 2</h1> 
   <h1>React  is awesome!🚀 </h1>
   </div>
    );
    
};


const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Component2/>);
    root.render(headingg);