
const parent = React.createElement('div' , {id: " parent"} , React.createElement('div' , {id:"child"} , [React.createElement('h1' , {} , "This is first React h1") , React.createElement('h2' , {} , "This is first React h2")]))
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//for complex nested structure we use jsx
//this is the core concept
