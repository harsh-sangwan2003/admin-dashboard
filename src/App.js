import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import List from './pages/login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
