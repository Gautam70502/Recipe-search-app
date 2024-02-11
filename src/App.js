import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Detailrecipe from './components/detailrecipe';
import './App.css';
import Recipe from './components/recipe';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/detailrecipe" element={<Detailrecipe />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App;
