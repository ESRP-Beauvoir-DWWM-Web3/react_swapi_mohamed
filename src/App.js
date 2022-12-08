import logo from './logo.svg';
import './App.css';
import People from './components/People';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/People/:id" element={<People />} />
      </Routes>  
    </BrowserRouter>

  );
}

export default App;
