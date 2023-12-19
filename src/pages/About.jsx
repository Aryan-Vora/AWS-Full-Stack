import {Link} from "react-router-dom";
import {Authenticator} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
function About() {
  return (
    <Authenticator>
      {({signOut, user}) => (
        <div>
          <h1>About Page Content</h1>
          <h1>Hey, {user && user.signInDetails.loginId}</h1>
          <Link to="/map">Site Map</Link>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default About;
