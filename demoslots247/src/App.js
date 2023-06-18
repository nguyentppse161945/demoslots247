import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Players from "./Players";
import Contact from "./pages/contact";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;