import React, { useEffect, useState } from "react";
import classes from "./Input.module.css";

function Input(props) {
  const [inputState, setInputState] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { onValidate, onInput, id } = props;

  const changeHandler = (e) => {
    setInputState(e.target.value);
  };

  const touchHandler = () => {
    setIsTouched(true);
  };

  useEffect(() => {
    const validateHandler = () => {
      setIsValid(onValidate(inputState));
    };
    validateHandler();
  }, [inputState, onValidate]);

  useEffect(() => {
    onInput(inputState, isValid, id);
  }, [inputState, isValid, onInput, id]);

  return (
    <div className={classes.formControl}>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={props.value}
      />

      {isTouched && !isValid && (
        <p className={classes.errMsg}>{props.errorMsg}</p>
      )}
    </div>
  );
}

export default Input;
