import styles from "./Motto.module.css";

function Motto ()
{
  return (
    <div className={styles["motto"]}>
      <span className={styles["motto__text"]}>Our solar system: my new home.</span>
      <span className={styles["motto__emojis"]}>🌎🚀🧑‍🚀🪐</span>
    </div>
  );
}

export default Motto;
