import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function About({signOut, user}) {
  return (
    <div>
      <h1>About Page Content</h1>
      <h1>Hey, {user.signInDetails.loginId}</h1>
      <button onClick={signOut}>Sign out</button>
      <Link to="/">Site Map</Link>
    </div>
  );
}

About.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    userId: PropTypes.string,
    signInDetails: PropTypes.shape({
      loginId: PropTypes.string,
      authFlowType: PropTypes.string,
    }),
  }),
  signOut: PropTypes.func,
};
export default About;
