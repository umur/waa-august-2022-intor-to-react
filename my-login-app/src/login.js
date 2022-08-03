import React, { useState } from "react";


function LoginPage() {
     let [userState, setUserState] = useState({
         userName:'',
         password:''
     });

    const onChanged=(event)=>{
        setUserState({...userState,[event.target.name]:event.target.value})
    }

   function onSubmitClicked(){
       console.log(userState);
   }
    return (
        <div>
            <form>
                
                <h1>PLEASE SIGN IN</h1>
                <div>
                <label>Email address</label><br/>
                    <input type="email"   placeholder="name@example.com"
                    onChange={(event)=> onChanged(event)} name='username'value={userState.userName} />
                   
                </div>
                <div className="form-floating">
                <label htmlFor="floatingPassword">Password</label><br/>
                    <input type="password"   placeholder="Password" 
                    onChange={(event)=> onChanged(event) } name='password'value={userState.password} />
                    
                </div>
                <input type="button" value='submit'onClick={onSubmitClicked}/>
                
            </form>
        </div>

    )
}

export default LoginPage;