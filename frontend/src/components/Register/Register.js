import React, { useCallback, useReducer } from "react";
import classes from "./Register.module.css";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import { NavLink } from "react-router-dom";

const initialState = {
  inputs: {
    name: { value: "", isValid: "false" },
    email: { value: "", isValid: "false" },
    password: { value: "", isValid: "false" },
  },
  formIsValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          name: {
            value: action.payload.inputState,
            isValid: action.payload.isValid,
          },
        },
      };

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
          state.inputs.email.isValid &&
          state.inputs.password.isValid &&
          state.inputs.name.isValid,
      };

    case "RESET":
      return initialState;

    default:
      break;
  }
};

function Register() {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  const nameIsValid = (val) => {
    let isValid = true;
    isValid = isValid && val.trim().length > 0;
    return isValid;
  };

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

    if (id === "name") {
      dispatch({ type: "NAME", payload: { inputState, isValid } });
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
        <h2>REGISTER</h2>

        <form onSubmit={submitHandler}>
          <Input
            id="name"
            placeholder="Name"
            type="text"
            onInput={formStateHandler}
            onValidate={nameIsValid}
            errorMsg="Please enter your name!"
            value={formState.inputs.name.value}
          />

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
            Do you have already an account?
            <NavLink to={"/login"}>Login</NavLink>
          </p>
        </form>
      </Card>
    </div>
  );
}

export default Register;
