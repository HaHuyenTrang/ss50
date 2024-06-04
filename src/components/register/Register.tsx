import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const register=(event:React.FormEvent)=>{
        event.preventDefault();
       
        navigate("/login")
    }
  return (
    <div>Register
        <form onClick={register} action=''>
            <label htmlFor="">email</label>
            <input type="text" />
            <br />
            <label htmlFor="">name</label>
            <input type="text" />
            <br />
            <label htmlFor="">password</label>
            <input type="text" />
            <br></br>
            <label htmlFor="">confirmpassword</label>
            <input type="text" />
            <br />
            <button >register</button>
           
        </form>
    </div>
  )
}
