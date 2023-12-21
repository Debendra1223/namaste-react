//const element = React.createElement("h1", {id:'heading'}, "Welcome to Namaste React.");
// the above React.createElement give the React element and React element is nothing but an object 
// and this React element passed to render() and there it creats html element and put it in root
//below are the case of nested element
import React from 'react';
import ReactDOM from 'react-dom/client';

//const element = React.createElement("div", {id:'parent'}, [
    // React.createElement('div', {id: 'child1'}, [
        //   React.createElement('h1', {id: 'head1'}, 'h1 head'),
        // React.createElement('h2', {id: 'head2'}, 'h2 head')
        // ]),
        //React.createElement('div', {id: 'child2'}, [
            // React.createElement('h1', {id: 'head1'}, 'h1 head'),
            //React.createElement('h2', {id: 'head2'}, 'h2 head')
            //])
    //])
// JSX => Babel transpile into React.creatElement => ReactElement.js Object => HtmlElement(rendered)
const JSXHeading1 = <h1 id='heading'>Welcome to the beautiful Series</h1>
// const JSXHeading = (
//       <div id='head'>
//         {JSXHeading1}
//         <h1 id='heading' className='head'>Welcome to Namaste React</h1>
//       </div>
//     );
const ReactHeading = () => <h1 id='heading'>This is my inner ReactComponent</h1>;
const ReactComponent = () => (
  <div id='head'>
   {JSXHeading1}
   <ReactHeading />
   {ReactHeading()}
   <ReactHeading></ReactHeading>
    <h1 id='heading' className='head'>Welcome to Namaste React</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactComponent />);