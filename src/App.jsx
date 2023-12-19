import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Map from "./pages/Map";
import About from "./pages/About";
import Home from "./pages/Home";
import PropTypes from "prop-types";
function App({signOut, user}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/map" element={<Map />} />
        <Route
          path="/about"
          element={<About user={user} signOut={signOut} />}
        />
      </Routes>
    </Router>
  );
}
App.propTypes = {
  user: PropTypes.shape({
    attributes: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
  signOut: PropTypes.func,
  signIn: PropTypes.func,
};
export default App;
