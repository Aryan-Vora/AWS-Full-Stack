import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Map from "./pages/Map";
import About from "./pages/About";
import PropTypes from "prop-types";
import {withAuthenticator} from "@aws-amplify/ui-react";
function App({signOut, user}) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
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
};
const AppWithAuthenticator = withAuthenticator(App);
export default AppWithAuthenticator;
