import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home'
import Greeting from './components/Greeting';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/greetings' element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
