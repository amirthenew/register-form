
import React,{useState} from "react";

const SignUp = () => {

const [data,setData] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword :'',
    isAccepted : false
})

    return ( 
        <div>
        <form>
        <h2>sign up</h2>
        <div>
        <label>Name</label>
        <input type='text' name="name" value='name'/>
        </div>


        </form>
        </div>
     );
}
 
export default SignUp;