const LoginPage2 = () => {
  return (
    <div
      className="w-screen h-screen bg-gradient-to-tr from-sky-200 via-purple-200 to-pink-200
 flex justify-center items-center"
    >
      <div className="w-75/100 h-75/100 border-none rounded-2xl shadow-2xl flex flex-wrap ">
        <div className="border-none h-full rounded-l-2xl  w-60/100 bg-[url(/156156-abstract-lavender-background.jpg)] bg-cover flex flex-col justify-center items-center gap-3">
          <h1 className="text-gray-800 font-medium"> Welcome back! </h1>
          <div className="text-gray-800 font-medium">
            You can sign in to access with your existing account.
          </div>
        </div>
        <div className="border-none h-full sm:w:full md:w-40/100 flex flex-col justify-center items-center gap-4 rounded-r-2xl bg-white">
          <h1 className="text-gray-800 w-73/100 font-medium">Sign In</h1>
          <form
            action=""
            className="w-full border-none  flex flex-col items-center h-1/2 gap-4 "
          >
            <input
              type="email"
              placeholder="Username or email"
              className="border border-gray-800 w-75/100 h-22/100 rounded-3xl px-3 placeholder-gray-800"
            />
            <input
              type="text"
              placeholder="Password"
              className="border border-gray-800 w-75/100 h-22/100 rounded-3xl px-3 placeholder-gray-800"
            />
            <div className="flex w-75/100 justify-between">
              {" "}
              <div className="text-gray-800">
                {" "}
                <input
                  type="checkbox"
                  className=" accent-purple-500 cursor-pointer w-3 h-3 border border-gray-800"
                />{" "}
                Remember me{" "}
              </div>
              <a href="" className="text-purple-500">
                Forgot password?
              </a>
            </div>
            <button className="w-70/100 h-22/100 rounded-3xl bg-purple-500 hover:bg-purple-600">
              Sign In
            </button>
          </form>
          <div className="text-gray-800">
            New here?{" "}
            <a href="" className="text-purple-500">
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage2;
