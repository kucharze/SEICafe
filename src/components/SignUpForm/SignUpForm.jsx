import { Component, useState } from "react";
import { signUp } from '../../utilities/users-service'

export default function SignUpForm (){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    });


    const handleChange = (e) =>{
        // console.log("changing")
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            error: ''
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        // alert(JSON.stringify({name,email,password,confirm,error}))
        //Prevent form from being submitted to the server
        try {
            // We don't want to send the 'error' or 'confirm' property,
            //  so let's make a copy of the state object, then delete them
            const newFormData = {name,email,password};
            // delete formData.error;
            // delete formData.confirm;
            // console.log("Inside Handle submit")
            const user = await signUp(newFormData)
        } catch (error) {
            //an error occured
            setError("Sign up Failed - Try again")
            // console.error(error)
        }
    }

    /*
    const handleSubmit = async (e) =>  {
    // Prevent form from being submitted to the server
    e.preventDefault()
    try {
      // We don't want to send the 'error' or 'confirm' property,
      // so let's make a copy of the state object, then delete them
      const newFormData = {...formData};
      delete newFormData.error;
      delete newFormData.confirm;
      // or
      // const {name, email, password} = formData
      console.log('inside handleSubmit',newFormData)
    } catch(err) {
      // An error occurred
      setFormData({error: 'Sign Up Failed - Try Again'})
    }
  }
    */

    // const disable = state.password !== state.confirm;
    return <div>
                <div className="form-container">
                     <form autoComplete="off" onSubmit={handleSubmit}>
                     <label>Name</label>
                     <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
                     <label>Email</label>
                     <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                     <label>Password</label>
                     <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                     <label>Confirm</label>
                     <input type="password" name="confirm" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required />
                     <button type="submit" disabled={password !== confirm}>SIGN UP</button>
                     </form>
                 </div>
                 <p className="error-message">&nbsp;{error}</p>
             </div>
}

// export default class SignUpForm extends Component {

//     // constructor(){
//     //     super()
//     //     this.state = {

//     //     }
//     //     this.handleChange = this.handleChange.bind(this)
//     // }
    // state = {
    //   name: '',
    //   email: '',
    //   password: '',
    //   confirm: '',
    //   error: ''
    // };

//     getName(params) {
//         const person = {
//             name: this.name
//         }
//     }

    // handleChange = (e) =>{
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         error: ''
    //     });
    // }

    // handleSubmit = (e) =>{
    //     e.preventDefault()
    //     alert(JSON.stringify(this.state))
    // }

//     render(){
//         const disable = this.state.password !== this.state.confirm;
//         return (
//             <div>
//                 <div className="form-container">
//                     <form autoComplete="off" onSubmit={this.handleSubmit}>
//                     <label>Name</label>
//                     <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
//                     <label>Email</label>
//                     <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
//                     <label>Password</label>
//                     <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
//                     <label>Confirm</label>
//                     <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
//                     <button type="submit" disabled={disable}>SIGN UP</button>
//                     </form>
//                 </div>
//                 <p className="error-message">&nbsp;{this.state.error}</p>
//             </div>
//         );
//     }
// }