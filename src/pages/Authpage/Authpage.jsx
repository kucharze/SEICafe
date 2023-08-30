import LoginForm from "../../components/Loginform/Loginform"
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import React, {useState} from 'react'
import styles from './AuthPage.module.css'

function Authpage({setUser}) {
  const [showLogin,setShowLogin] = useState(true)

  return (
    <main className={styles.AuthPage}>
      <div>
        <h1>Auth page</h1>
        <h3 onClick={()=>{setShowLogin(!showLogin)}}>
          {showLogin? 'Sign up' : 'Login'}
          </h3>
        {
          showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser}/>
          
        }
        
      </div>
    </main>
  )
}

export default Authpage
