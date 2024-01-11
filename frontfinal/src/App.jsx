import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import AddPage from './Pages/AddPage';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/AddPage" element={<AddPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
