
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

import { validate } from "./validate";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { notify } from "./toast";
  import styles from './Login.module.css'
import SignUp from './SignUp';


const Login = () => {

const [data,setData] = useState({
    email : '',
    password : '',
})


const [errors , setErrors] = useState({})
const [touched , setTouched] = useState({})

useEffect(()=>{
setErrors(validate(data,'login'))
},[data,touched])

const changeHandler = event => {
 if (event.target.name === 'isAccepted'){
    setData({...data,[event.target.name]: event.target.checked})
 }else {
    setData({...data,[event.target.name]:event.target.value})
 }
}

const focusHandler = (event) =>{
    setTouched({...touched,[event.target.name]:true})
}

const submitHandler = (event)=>{
event.preventDefault()
notify()
if(!Object.keys(errors).length){
    notify('login succeed','success')
}else {
    notify('invalid data','error')
    setTouched({name : true , 
        email : true,
        password:true,


    
    })
}
}

    return ( 
        <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Login</h2>
        <div>
        <label>Email</label>
        <br/>
        <input type='text' name="email" value={data.email} onFocus={focusHandler} onChange={changeHandler} />
        </div>
        {errors.email && touched.email && <span>{errors.email}</span>}

        <div>
        <label>Password</label>
        <br/>
        <input type='password' name="password" value={data.password} onFocus={focusHandler} onChange={changeHandler} />
        </div>
        {errors.password && touched.password && <span>{errors.password}</span>}

        
<div className={styles.formButtons}>
<Link className={styles.login} to="/signup">SignUp</Link>
<button type="submit">Login</button>
</div>
        </form>
        <ToastContainer />
        </div>
     );
}
 
export default Login;