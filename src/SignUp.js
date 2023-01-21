
import React,{useState,useEffect} from "react";


import { validate } from "./validate";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { notify } from "./toast";
  import styles from './SignUp.module.css'


const SignUp = () => {

const [data,setData] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword :'',
    isAccepted : false
})


const [errors , setErrors] = useState({})
const [touched , setTouched] = useState({})

useEffect(()=>{
setErrors(validate(data))
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
    notify('successed','success')
}else {
    notify('failed','error')
    setTouched({name : true , 
        email : true,
        password:true,
        confirmPassword : true,
        isAccepted:true

    
    })
}
}

    return ( 
        <div className={styles.container}>
        <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>sign up</h2>
        <div>
        <label>Name</label>
        <br/>
        <input className={(errors.name && touched.name) ? styles.uncompleted : styles.completed  }
        type='text' 
        name="name" 
        value={data.name} 
        onFocus={focusHandler} 
        onChange={changeHandler} />
        </div>
        {errors.name && touched.name && <span>{errors.name}</span>}

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

        <div>
        <label>Confirm Password</label>
        <br/>
        <input type='password' name="confirmPassword" value={data.confirmPassword} onFocus={focusHandler} onChange={changeHandler} />
        </div>
        {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}


        <div>
        <input type='checkbox' name="isAccepted" value={data.isAccepted} onFocus={focusHandler} onChange={changeHandler} />
        <label style={{'fontSize':'.6rem','paddingLeft':'.5rem'}}>i accept the rules</label>
        
        </div>
        {errors.isAccepted  && touched.isAccepted &&<span>{errors.isAccepted}</span>}

<div className={styles.formButtons}>
<button className={styles.login} href="#">Login</button>
<button type="submit">Sign Up</button>
</div>
        </form>
        <ToastContainer />
        </div>
     );
}
 
export default SignUp;