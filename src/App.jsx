import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RequestProject from './pages/RequestProject';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Grain texture overlay */}
        <div className="grain" aria-hidden="true" />

        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/request" element={<RequestProject />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
