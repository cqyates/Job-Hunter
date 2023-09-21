
import './App.css';
import MyNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
