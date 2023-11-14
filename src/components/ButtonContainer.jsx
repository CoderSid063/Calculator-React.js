import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>c</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button>
    </div>
  );
};
export default ButtonContainer;