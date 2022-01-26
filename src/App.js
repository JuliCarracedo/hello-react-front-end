import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';
import requestFromApi from './redux/greetings/api';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestFromApi());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/greetings" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
