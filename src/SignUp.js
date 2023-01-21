
import React,{useState} from "react";
import {validate} from 'json-schema'

const SignUp = () => {

const [data,setData] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword :'',
    isAccepted : false
})

const changeHandler = event => {
 if (event.target.name === 'isAccepted'){
    setData({...data,[event.target.name]: event.target.checked})
 }else {
    setData({...data,[event.target.name]:event.target.value})
 }
}

    return ( 
        <div>
        <form>
        <h2>sign up</h2>
        <div>
        <label>Name</label>
        <input type='text' name="name" value={data.name} onChange={changeHandler} />
        </div>

        <div>
        <label>Email</label>
        <input type='text' name="email" value={data.email} onChange={changeHandler} />
        </div>

        <div>
        <label>Password</label>
        <input type='password' name="password" value={data.password} onChange={changeHandler} />
        </div>

        <div>
        <label>Confirm Password</label>
        <input type='password' name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} />
        </div>


        <div>
        <label>i accept the rules</label>
        <input type='checkbox' name="isAccepted" value={data.isAccepted} onChange={changeHandler} />
        </div>

<div>
<a href="#">Login</a>
<button type="submit">Sign Up</button>
</div>
        </form>
        </div>
     );
}
 
export default SignUp;