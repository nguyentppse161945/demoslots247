import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './components/AddUser';
import User from './components/User';

function App() {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-12 d-flex'>
          <div className='col-md-5'>
          <AddUser></AddUser>
          </div>
          <div className='col-md-7'>
          <User></User>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
