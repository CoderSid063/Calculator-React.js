import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
