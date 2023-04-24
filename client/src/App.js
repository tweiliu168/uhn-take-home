import './App.css';
import { Routes, Route } from 'react-router-dom';
import Psets from './components/Psets';
import PsetDatabase from './components/PsetDatabase';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<Psets />} />
          <Route path="/pset-database" element={<PsetDatabase />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
    </div>
  );
}

export default App;
