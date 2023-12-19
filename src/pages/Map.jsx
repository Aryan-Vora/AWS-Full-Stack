import styles from "../styles/Map.module.css";
function Map() {
  return (
    <div>
      <h1>Site Map</h1>
      <div className={styles.map}>
        <a href="/">Map</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
}

export default Map;
