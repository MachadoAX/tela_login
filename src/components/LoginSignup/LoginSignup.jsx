import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import { useState } from 'react'

const LoginSignup = () => {
    const [action, setAction] = useState('Login')

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === 'Login' ? 
            <div></div> 
            :
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" required placeholder='Nome'/>
            </div>
            }
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" required placeholder='E-mail'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" required placeholder='Senha' />
            </div>
        </div>

        {action === "Cadastrar" ? 
        <div className="forgot-password">Já tem cadastro? <span onClick={()=> setAction("Login")} >Login</span></div>
        :
        <>
        <div className="forgot-password">Esqueceu a senha? <span>Clique aqui</span></div>
        <span onClick={()=> setAction("Cadastrar")}>Cadastre-se</span> 
        </>
        }
        <div className="submit-container">
            {action==='Cadastrar'?
            <div className="submit" >Cadastrar</div>
            :
            <div className="submit" >Entrar</div>
        }           
            
        </div>
        
              
    </div>
  )
}

export default LoginSignup