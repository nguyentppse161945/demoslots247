import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Add from './components/Add';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Contact></Contact>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
