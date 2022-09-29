
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";



export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const usuarios = [
        {
            email: 'abc@abc.com',
            password: '1234'
        },
        {
            email: 'santiago@denis.com',
            password: '1234'
        },
        {
            email: 'conrado@lanusse.com',
            password: 'coder'
        }
    ]
    
    
    const [user, setUser] = useState({
        user:'',
        logged: false
    })
    
    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if(match.password === values.pass){
                setUser({
                    user: match.email,
                    logged: true
                })
            } else {
                alert("Password Incorrecto")
            }
        } else {
            alert("Email Incorrecto")
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
    }
    
    return(
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
        )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}