import React, {useState, useEffect} from 'react'
import './Login.scss'
import { logo } from 'images'
import { Button } from 'components/_common'
import { Field } from 'components/_common'
import validator from 'validator'
import Autentication from 'utils/auth/autentication'

console.log('login page')

const Login = props => {

  const [form, setForm] = useState({email:'', password:''})
  const [error, setError] = useState({email:null, password:null})
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    auth.listen((user)=>{
      if(user){
        setIsUser(true)
      }else{
        setIsUser(false)
      }
    })

    return ()=>{
      setIsUser(false)
    }
  }, [])

  let auth = Autentication.getInstance()

  const handleClick = async() =>{
    if(validator.isEmpty(form.email)){
      setError({email:'Esta Vacio'})
      return
    }
    if(!validator.isEmail(form.email)){
      setError({email:'no es un email'})
      return
    }else{
      setError({email:null})
      await auth.signInEmail(form.email,form.password)
    }
  }

  const handleForm = (input, target) =>{
    setForm({
      ...form,
      [target]: input,
    })
  }

  return (
    <div className="login">
      <div className="login__head">
        <img src={logo} alt=""/>
      </div>
      <h1>Sign in</h1>
      {!isUser?
      
      <div className="form-container shadow">
        <button onClick={()=>auth.signInGoogle(()=>props.history.push('/'))} type="button" className="google-signing-button"><span className="fit-icon"><svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.84363V11.307H13.8438C13.6365 12.428 12.9994 13.373 12.0489 14.0064V16.2534H14.9562C16.6601 14.6951 17.641 12.4029 17.641 9.67839C17.641 9.04502 17.5854 8.43176 17.4792 7.84865H9V7.84363Z" fill="#3E82F1"></path><path d="M9.00001 14.861C6.65394 14.861 4.67192 13.2876 3.96406 11.1714H0.955627V13.4937C2.43709 16.4142 5.48091 18.4198 9.00001 18.4198C11.432 18.4198 13.4697 17.6206 14.9562 16.2533L12.0489 14.0064C11.245 14.5443 10.2135 14.861 9.00001 14.861Z" fill="#32A753"></path><path d="M3.96404 5.45605H0.955617C0.348876 6.66246 0 8.02972 0 9.47238C0 10.915 0.348876 12.2823 0.955617 13.4887L3.96404 11.1714C3.78202 10.6335 3.6809 10.0605 3.6809 9.47238C3.6809 8.88426 3.78202 8.31122 3.96404 7.77336V5.45605Z" fill="#F9BB00"></path><path d="M0.955627 5.45597L3.96406 7.77327C4.67192 5.65703 6.65394 4.08368 9.00001 4.08368C10.3197 4.08368 11.5079 4.53608 12.4382 5.42078L15.0219 2.85214C13.4646 1.40948 11.427 0.52478 9.00001 0.52478C5.48091 0.52478 2.43709 2.53043 0.955627 5.45597Z" fill="#E74133"></path></svg></span><p>Continuar con Google</p></button>
        <p>or</p>
        <form action="" >
          <Field id="email" placeHolder="email" error={error.email} defaultValue={form.email} handle={handleForm}/>
          <Field id="password" type="password" placeHolder="password" error={error.password} defaultValue={form.password} handle={handleForm}/>
        </form>
          <Button color="primary" click={handleClick}>Sign in</Button>
      </div>
      : <div>
        <h1>ya jhas inicado sesion</h1>
        <button onClick={()=>auth.signOut()}>salir</button>
        </div>
        
      }
      <p>{form.email}</p>
      <p>{form.password}</p>


      
    </div>
  )
}

export default Login