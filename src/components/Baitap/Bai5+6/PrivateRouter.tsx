import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PrivateRouter() {
    const navigate = useNavigate();
    const [state, setState] = useState(true)
    if (!state){
   
        navigate(`/Account`)
    } else{
        navigate(`/Login`)
    }
    const handlechang=()=>{
        setState(false)
    }
    const user=[
      {
        email:"trang@gamil.com",
        pass:2005,
      },
    ]
    
    
  return (
    <div>PrivateRouter
        <button onClick={handlechang}>click</button>
        <form  action=''>
          <h3>Đăng nhập</h3>
            <input type="text" placeholder='Nhập Email' />
            <br />
            <input type="text" placeholder='Nhập mật khẩu' />
            <br />
            <select id="location" name="location">
              <option value="">-- Chọn quyền --</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
            <br />
            <button>Đăng nhập</button>
                      
        </form>
        
    </div>
  )
}
