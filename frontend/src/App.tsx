import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import AddHotel from "./pages/AddHotel/AddHotel";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>home page</p></Layout>} />
        <Route path="/search" element={<Layout><p>search page</p></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/sign-in" element={<Layout>< SignIn /></Layout>} />
        {isLoggedIn &&
          <>
            <Route path="/add-hotel" element={<Layout><AddHotel /></Layout>} />
          </>}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App; 
