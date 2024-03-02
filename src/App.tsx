import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Navbar from "./components/Navbar/Navbar";
import Flights from "./pages/Flights/Flights";
import Stays from "./pages/Stays/Stays";

const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/stays" element={<Stays />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  );
};

export default App;
