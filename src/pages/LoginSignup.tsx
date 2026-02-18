import { useState } from "react"

const LoginSignup = () =>{
    const [but, setBut] = useState(false)
    return(
        <>
       <div className="w-screen h-screen flex justify-center items-center  ">
        <div className="w-75/100 h-75/100 border rounded-2xl relative flex">
            <div className={`border w-[33%] absolute left-0 top-0 rounded-l-2xl transform transition-transform duration-700 ease-in-out ${but?'translate-x-[200%]' :'translate-x-0'}`}>Welcome back</div>
            <div className={`border w-[67%] absolute right-0 top-0 rounded-r-2xl transform transition-transform duration-700 ease-in-out ${but? '-translate-x-1/2':'translate-x-0'}`}>
                <div className={``}>Create Account</div>
                <form action="" className="flex flex-col">
                    <input type="text" placeholder="Name"  />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button onClick={()=>setBut(!but)}>SIGN UP</button>
                </form>
            </div>
        </div>
       </div>
        </>
    )
}
export default LoginSignup