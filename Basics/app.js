import React from "react";
import ReactDOM from "react-dom/client";

// Create the root element where React will mount
const root = ReactDOM.createRoot(document.getElementById('root'));
//1.React.craeteElement()

// Define JSX heading element
//2.const jsxheading = <h1 className='head' tabIndex='2'>I am a Jsx heading!</h1>;

//React element start with small letter

const el = <span id="heading">React element in span</span>

const title = (
    <h1 className = 'reactelement'>
        {el} I am a react element
    </h1>
);

//React Components
//Class Based Component
//Functional Component

//3.React Functional Component

const Title = () => (
    <h2>This is a title React component</h2>
);

const val = 1000;
const HeadingComponent1 = () =>(
    <div id="container">
        {/* Component within component */}
        <Title/>
        
        {/* we can also call this title function in curly braces {Title()} */}

        {/* Js in React component */}
        {val}
        
        {/* React element in react component */}
        {title}
        <h1 className ='heading'>This is a React functional component</h1>;

    </div>
)

//OR

//const HeadingComponent2 = () => (<h1>This is inline arrow functional component</h1>);

//
// Render the JSX heading to the root
//root.render(jsxheading);

root.render(<HeadingComponent1/>);//babel understand this way of rendering


