const RespLoginPage = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-tr from-sky-200 via-purple-200 to-pink-200 flex justify-center items-center p-4">
      
      <div className="w-full max-w-5xl min-h-[650px] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* LEFT SIDE */}
        <div className="w-full md:w-3/5 h-64 md:h-auto bg-[url(/156156-abstract-lavender-background.jpg)] bg-cover bg-center flex flex-col justify-center items-center gap-3 p-6 text-center">
          <h1 className="text-gray-800 font-medium text-xl">Welcome back!</h1>
          <div className="text-gray-800 font-medium max-w-xs">
            You can sign in to access with your existing account.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-2/5 bg-white flex flex-col justify-center items-center gap-4 p-6">
          <h1 className="text-gray-800 font-medium text-xl">Sign In</h1>

          <form className="w-full flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Username or email"
              className="border border-gray-800 w-full max-w-xs h-12 rounded-3xl px-4 placeholder-gray-800"
            />

            <input
              type="password"
              placeholder="Password"
              className="border border-gray-800 w-full max-w-xs h-12 rounded-3xl px-4 placeholder-gray-800"
            />

            <div className="flex w-full max-w-xs justify-between text-sm">
              <label className="text-gray-800 flex items-center gap-2">
                <input type="checkbox" className="accent-purple-500 w-4 h-4" />
                Remember me
              </label>

              <a href="#" className="text-purple-500">Forgot password?</a>
            </div>

            <button className="w-full max-w-xs h-12 rounded-3xl bg-purple-500 hover:bg-purple-600 text-white font-semibold">
              Sign In
            </button>
          </form>

          <div className="text-gray-800 text-sm">
            New here? <a href="#" className="text-purple-500">Create an Account</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RespLoginPage;
