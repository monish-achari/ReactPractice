import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {GreetF} from './components/functionalGreet'; // exported as direct 
// import {GreetFes} from './components/functionalGreet';
// import GreetFesf from './components/functionalGreet'; // function default export 
import GreetFesf,{GreetFes,GreetF} from './components/functionalGreet'; // function default export 

import {GreetNoJsx , GreetNoJsxf} from './components/noJsxGreet';
import ClassGreetHello  from './components/classBasedGreet'; 

import ButtonOnOff from './components/stateExample';


// dafault  export should be funtion or class or primitive
// default does not contains { } look at above

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{

  

  render (){
    return (
      <div className="App">
      <ButtonOnOff />
      {/* <ClassGreetHello heroName="Selmon Bhai" />
      <ClassGreetHello heroName="Selmon Bhai" >Hello Bhai Doing Great  </ClassGreetHello>
      <GreetNoJsx name="Apple" /> 
      <GreetNoJsxf name="Apple" />
      <GreetFesf />
        <GreetFes movieName='Kick' heroName='Selmon Bhai' />
        <GreetF movieName='Kick' heroName='Selmon Bhai' />
        <GreetF movieName='Kick' heroName='Selmon Bhai' >
          <h5>Human Being Societ works</h5>
        </GreetF> */}
    </div>
    );

  }
  
}

export default App;
