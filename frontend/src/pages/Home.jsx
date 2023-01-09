import styles from "../styles/Home.module.css";

export default function Home() {
  const style = {
    backgroundImage: "url(https://www.example.com/space.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const starStyle = {
    width: "20px",
    height: "20px",
    backgroundImage: "url(https://www.example.com/stars.png)",
    backgroundSize: "cover",
    position: "absolute",
    top: "30%",
    left: "70%",
    zIndex: 1,
  };

  return (
    <div className={styles.container}>
      <h1>Explore the cosmos beyond the imaginable!</h1>
      <div style={style}>
        <div style={starStyle} />

        <button type="button" className={styles["button-launch"]}>
          Ready for Launch
        </button>
      </div>
    </div>
  );
}
