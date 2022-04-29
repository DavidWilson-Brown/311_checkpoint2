import React from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import StatusBar from "../src/containers/StatusBar";


import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <StatusBar />
      <Router />
    </BrowserRouter>
  );
}
      

export default App;





// function App() {

    // get books API endpoint
    // const url = '/books'
//     return (
//       <div className="App">
//         <header className="App-header">
//         </header>
//       </div>
//     );
// }