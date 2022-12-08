import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import People from './components/People';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<People />} />
      </Routes>  
    </BrowserRouter>

  );
}

export default App;
