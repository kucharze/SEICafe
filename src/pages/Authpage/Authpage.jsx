import LoginForm from "../../components/Loginform/Loginform"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

function Authpage() {
  return (
    <div>
      <h1>Auth Page Login</h1>
      <SignUpForm/>
      <LoginForm/>
    </div>
  )
}

export default Authpage
