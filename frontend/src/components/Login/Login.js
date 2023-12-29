import React, { useCallback, useContext, useReducer, useState } from "react";
import classes from "./Login.module.css";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const emailIsValid = (val) => {
    let isValid = true;
    isValid = isValid && /^\S+@\S+\.\S+$/.test(val);
    return isValid;
  };

  const passwordIsValid = (val) => {
    let isValid = true;
    isValid = isValid && val.trim().length >= 6;
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

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:5000/api/v1/auth/login`, {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
      });
      const data = await res.json();
      console.log(data.user);
      authCtx.login({
        userId: data.user._id,
        userName: data.user.name,
        email: data.user.email,
      });
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
    dispatch({ type: "RESET" });
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
