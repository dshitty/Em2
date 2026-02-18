const LoginPage = ()=>{
  return(
    <div className="w-screen h-screen flex bg-gradient-to-br from-blue-500 to-cyan-400 justify-center items-center">
      <div className="border-none bg-cyan-50 rounded-2xl shadow-2xl w-100 h-100">
        <h2 className="flex text-2xl mt-2 mr-5 h-10 font-semibold text-cyan-900  justify-center items-center">Login</h2>
<form action="" className="flex flex-col gap-2 ">
  <div className="flex flex-col  gap-2 p-3 w-100">
  <label htmlFor="Em" className="ml-0.5 text-cyan-900 font-medium">Email</label>
  <input id = "Em" type="email" placeholder="Enter your email" className="border border-cyan-200 rounded-md px-3 w-90 h-10 bg-white caret-cyan-900 text-cyan-900 focus:ring-2 focus:ring-blue-400" />
  </div>
  <div className="flex flex-col gap-2 p-3 w-100">
    <label htmlFor= "pass" className="ml-0.5 text-cyan-900 font-medium">Password</label>
  <input type="text" placeholder="Enter your password" id="pass" className="border border-cyan-200 px-3 text-cyan-900 caret-cyan-900 bg-white focus:ring-2 focus:ring-blue-400 rounded-md w-90 h-10" />
  </div>
  <button className="w-90 p-3 ml-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-200 shadow-md ">Login</button>
</form>
<div className="text-center text-cyan-900 mt-4">Don't have an account?<a className="cursor-pointer text-blue-600 hover:text-blue-800 font-semibold"> Sign up </a></div>
    </div>
    </div>
  )
}
export default LoginPage
// import { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Simple frontend validation
//     if (!email.includes("@")) {
//       alert("Please enter a valid email");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters");
//       return;
//     }

//     console.log("Login Data:", { email, password });
//   };

//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 px-4">
//       {/* Card */}
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 ">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Welcome Back
//         </h1>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
//           {/* Email */}
//           <div className="flex flex-col">
//             <label className="mb-1 text-gray-600">Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="flex flex-col">
//             <label className="mb-1 text-gray-600">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-500 mt-6">
//           Don’t have an account? <span className="text-blue-600 cursor-pointer">Sign up</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
