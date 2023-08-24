import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//pages
import AuthPage from "./pages/Authpage/Authpage";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [user, setUser] = useState(null);
  //return fetch("/api/orders/history").then((res) => res.json());
  return (
    <div className="App">
      <Navbar />
      {user ? (
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
