const LoginPage2 = () => {
  return (
    <div
      className="w-screen h-screen bg-gradient-to-tr from-sky-200 via-purple-200 to-pink-200
 flex justify-center items-center"
    >
      <div className="w-[95%] h-[50%] md:w-75/100 md:h-75/100 border-none rounded-2xl shadow-2xl flex ">
        <div className="border-none h-full rounded-l-2xl  w-60/100 bg-[url(/156156-abstract-lavender-background.jpg)] bg-cover flex flex-col justify-center items-center gap-3">
          <h1 className="text-gray-800 md:font-medium font-semibold text-center "> Welcome back! </h1>
          <div className="text-gray-800 md:font-medium font-light text-center">
            You can sign in to access with your existing account.
          </div>
        </div>
        <div className="border-none h-full sm:w:full md:w-40/100 flex flex-col justify-center items-center gap-4 rounded-r-2xl bg-white">
          <h1 className="text-gray-800 md:w-73/100 md:font-medium text-center font-serif my-3 ">Sign In</h1>
          <form
            action=""
            className="w-full border-none  flex flex-col items-center h-1/2 gap-4 "
          >
            <input
              type="email"
              placeholder="Username or email"
              className="border border-gray-800 w-75/100 h-22/100 rounded-3xl px-3 placeholder-gray-800 placeholder: text-sm"
            />
            <input
              type="text"
              placeholder="Password"
              className="border border-gray-800 w-75/100 h-22/100 rounded-3xl px-3 placeholder-gray-800 placeholder: text-sm"
            />
            <div className="flex w-75/100 justify-between">
              {" "}
              <div className="text-gray-800 md:block hidden">
                {" "}
                <input
                  type="checkbox"
                  className=" accent-purple-500 cursor-pointer w-3 h-3 border border-gray-800 "
                />{" "}
                Remember me{" "}
              </div>
              <a href="" className="text-purple-500 md:m-0 mx-1">
                Forgot password?
              </a>
            </div>
            <button className="w-70/100 h-22/100 rounded-3xl bg-purple-500 hover:bg-purple-600">
              Sign In
            </button>
          </form>
          <div className="text-gray-800 text-center">
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
