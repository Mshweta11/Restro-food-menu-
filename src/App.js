import React from "react"
import Item from "./component/Item";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import FoodDetails from "./component/FoodDetails";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Item/>}> </Route>
          {/* <Route exact path='./Item/:id' element={<FoodDetails/>}> </Route> */}
        {/* </Routes> */}
      {/* // </BrowserRouter> */} 
      <Item/>
    
    </div>
  );
}

export default App;
