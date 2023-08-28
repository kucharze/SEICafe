import LoginForm from "../../components/Loginform/Loginform"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

function Authpage({setUser}) {
  return (
    <div>
      <h1>Auth Page Login</h1>
      <SignUpForm setUser={setUser}/>
      <LoginForm setUser={setUser}/>
    </div>
  )
}

export default Authpage
