import logo from './logo.svg';
import './App.css';
import AllRoutes from './Route/AllRoutes';
import Navbar from './Components/Navbar';
// import DoctorButton from './Model/DoctorButton';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
