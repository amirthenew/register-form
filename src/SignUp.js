
import React,{useState,useEffect} from "react";
import { validate } from "./validate";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { notify } from "./toast";


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
        <div>
        <form onSubmit={submitHandler}>
        <h2>sign up</h2>
        <div>
        <label>Name</label>
        <input type='text' name="name" value={data.name} onFocus={focusHandler} onChange={changeHandler} />
        {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div>
        <label>Email</label>
        <input type='text' name="email" value={data.email} onFocus={focusHandler} onChange={changeHandler} />
        {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div>
        <label>Password</label>
        <input type='password' name="password" value={data.password} onFocus={focusHandler} onChange={changeHandler} />
        {errors.password && touched.password && <span>{errors.password}</span>}
        </div>

        <div>
        <label>Confirm Password</label>
        <input type='password' name="confirmPassword" value={data.confirmPassword} onFocus={focusHandler} onChange={changeHandler} />
        {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>


        <div>
        <label>i accept the rules</label>
        <input type='checkbox' name="isAccepted" value={data.isAccepted} onFocus={focusHandler} onChange={changeHandler} />
        {errors.isAccepted  && <span>{errors.isAccepted}</span>}
        </div>

<div>
<a href="#">Login</a>
<button type="submit">Sign Up</button>
</div>
        </form>
        <ToastContainer />
        </div>
     );
}
 
export default SignUp;