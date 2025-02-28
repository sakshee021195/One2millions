import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './components/Home'
import Payment from './components/Payment';  // ✅ Import the Payment component

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/payment/:value" element={<Payment />} /> {/* ✅ Dynamic Route */}
      </Routes>
    </Router>
  )
}

export default App
