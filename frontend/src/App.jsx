import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import UserDetails from "./components/UserDetails";
import Update from "./components/Update.";

function App() {
  return (
    <div className="min-h-screen m-4">
      <Navbar />
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/adduser" element={<AddUser />}></Route>
            <Route path="/userdetails" element={<UserDetails />}></Route>
            <Route path="/Update/:id" element={<Update />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
