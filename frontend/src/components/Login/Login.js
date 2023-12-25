import React, { useCallback, useReducer } from "react";
import classes from "./Login.module.css";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import { NavLink } from "react-router-dom";

const initialState = {
  inputs: {
    email: { value: "", isValid: "false" },
    password: { value: "", isValid: "false" },
  },
  formIsValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          email: {
            value: action.payload.inputState,
            isValid: action.payload.isValid,
          },
        },
      };

    case "PASSWORD":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          password: {
            value: action.payload.inputState,
            isValid: action.payload.isValid,
          },
        },
      };

    case "VALID":
      return {
        ...state,
        formIsValid:
          state.inputs.email.isValid && state.inputs.password.isValid,
      };

    case "RESET":
      return initialState;

    default:
      break;
  }
};

function Login() {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const emailIsValid = (val) => {
    let isValid = true;
    isValid = isValid && /^\S+@\S+\.\S+$/.test(val);
    return isValid;
  };

  const passwordIsValid = (val) => {
    let isValid = true;
    isValid = isValid && val.trim().length >= 5;
    return isValid;
  };

  const formStateHandler = useCallback((inputState, isValid, id) => {
    if (id === "email") {
      dispatch({ type: "EMAIL", payload: { inputState, isValid } });
    }

    if (id === "password") {
      dispatch({ type: "PASSWORD", payload: { inputState, isValid } });
    }
    dispatch({ type: "VALID" });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
    console.log(formState);
  };
  return (
    <div className={classes.page}>
      <Card className={classes.login}>
        <h2>LOGIN</h2>

        <form onSubmit={submitHandler}>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            onInput={formStateHandler}
            onValidate={emailIsValid}
            errorMsg="Please enter a valid email!"
            value={formState.inputs.email.value}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            onInput={formStateHandler}
            onValidate={passwordIsValid}
            errorMsg="Please enter more than 5 characters!"
            value={formState.inputs.password.value}
          />
          <div className={classes.action}>
            <button type="submit" disabled={!formState.formIsValid}>
              Login
            </button>
          </div>
          <p>
            Doesn't have an account yet?
            <NavLink to={"/register"}>Register</NavLink>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Login;
