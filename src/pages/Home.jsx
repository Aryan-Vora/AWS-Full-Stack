import {Link} from "react-router-dom";
import styles from "../styles/Home.module.css";
import "@aws-amplify/ui-react/styles.css";

function Home() {
  return (
    <div className={styles.main}>
      <h1>Home Page Content</h1>
      <Link to="/map">Site Map</Link>
    </div>
  );
}

export default Home;
