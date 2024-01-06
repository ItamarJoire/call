import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

export default function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <div className='flex flex-col items-center'>
      <div className='h-44 w-44'>
        <img src={logo} alt="Logo do sistema de chamadas" />
      </div>

      <form action="" >
        <div className='flex flex-col items-center gap-3 '>
          <h1>Entrar</h1>
          
          <input 
            className='mt-4 py-2 pl-2 rounded-md'
            type="text" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            className='py-2 pl-2 rounded-md'
            type="password" 
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input className='cursor-pointer w-48 py-3 font-medium text-center bg-indigo-500 hover:bg-indigo-700 rounded-md' type="submit" value="Acessar" />
        
          <Link to="/register">Criar uma conta</Link>
        </div>
      </form>
    </div>
  )
}