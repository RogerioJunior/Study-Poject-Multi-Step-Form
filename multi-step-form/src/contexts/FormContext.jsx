import { createContext, useState, useContext }  from "react";

export const FormContext = createContext({});

export const FormProvider = ({children}) =>{
    const [data, setData] = useState({
        currentStep: 0,
        name: "",
        level: 0,
        email: "",
        githubUrl:""
    })

    return(
        <FormContext.Provider value={{data, setData}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext)
