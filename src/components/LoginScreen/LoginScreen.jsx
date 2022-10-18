import { useContext } from "react"
import { useState } from "react"
import { LoginContext } from "../../context/LoginContext"
import './LoginScreen.css'

const LoginScreen = () => {
    
    const {login, user} = useContext(LoginContext)
    console.log(user)
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            email,
            pass
        })
    }
    
    return(
        <div className="container-bienvenida">
            <h2 className="container py-2">¡Bienvendio/a a MatoGames!</h2>
            <form onSubmit={handleSubmit} className="container py-5">
                <input type={'email'} 
                className='form-control my-2'
                value={email}
                onChange={handleEmailChange}
                placeholder='Introduce tu Email'
                />
                <input type={'password'} 
                className='form-control my-2'
                value={pass}
                onChange={handlePassChange}
                placeholder='Introduce tu contraseña'
                />
                <button className="btn btn-primary" type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen