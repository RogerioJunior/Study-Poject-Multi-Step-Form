
// create Context, Reducer, Provider, Hook

import { createContext, useContext, useReducer } from "react";

const initialData = {
    currentStep: 0,
    name: "",
    level: 0,
    email: "",
    github: ""
}

// Context
const FormContext = createContext(undefined);

// Reducer

export const FORM_ACTIONS = {
  SET_CURRENT_STEP: 0,
  SET_NAME: "",
  SET_LEVEL: 0,
  SET_EMAIL: "",
  SET_GITHUB: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTIONS.SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case FORM_ACTIONS.SET_NAME:
      return { ...state, name: action.payload };
    case FORM_ACTIONS.SET_LEVEL:
      return { ...state, level: action.payload };
    case FORM_ACTIONS.SET_EMAIL:
      return { ...state, email: action.payload };
    case FORM_ACTIONS.SET_GITHUB:
      return { ...state, github: action.payload };
    default:
        return state;  
  }
};

// Provider

export const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

// Context Hook
export const useForm = () => {
    const contex = useContext(FormContext);
    if(contex === undefined) {
        throw new Error("useForm needs to be used within FormProvider");
    }
    return contex;
}
