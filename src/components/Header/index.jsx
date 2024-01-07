import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

import { AuthContext } from '../../contexts/auth'

import avatarImg from '../../assets/avatar.png'

export default function Header(){
  const { user } = useContext(AuthContext)
  return(
    <>
      <aside 
        className='flex flex-col w-52 h-screen overflow-auto p-2 
                  max-md:w-screen max-md:h-auto max-md:relative 
                  bg-slate-500'
        >
        <div className='p-10 max-md:hidden'>
          <img className='w-28 h-28 object-cover' src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt="" />
        </div>
       
        <div className='flex flex-col gap-4 max-md:flex-row max-md:justify-start'>
          <Link to='/dashboard'>
            <div className='flex'>
              <FiHome className='mr-2' color='#fff' size={24}/>
              Chamados
            </div>
          </Link>
          
          <Link to='/customers'>
            <div className='flex'>
              <FiUser className='mr-2' color='#fff' size={24}/>
              Clientes
            </div>
          </Link>

          <Link to='/profile'>
            <div className='flex'>
              <FiSettings className='mr-2' color='#fff' size={24}/>
              Perfil
            </div>
          </Link>
        </div>
       
      </aside>
      
      <main >
        Dashsddddddddddddddddddd
      </main>
    </>
  )
}