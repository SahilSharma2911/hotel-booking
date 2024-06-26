import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import AddHotel from "./pages/AddHotel/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels/MyHotels";
import EditHotel from "./pages/EditHotel/EditHotel";
import Search from "./pages/Search/Search";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>home page</p></Layout>} />
        <Route path="/search" element={<Layout><p>search page</p></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/sign-in" element={<Layout>< SignIn /></Layout>} />
        <Route path="/search" element={<Layout>< Search/></Layout>} />
        {isLoggedIn &&
          <>
            <Route path="/add-hotel" element={<Layout><AddHotel /></Layout>} />
            <Route path="/my-hotels" element={<Layout><MyHotels /></Layout>} />
            <Route path="/edit-hotel/:hotelId" element={<Layout><EditHotel /></Layout>} />
          </>}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App; 
