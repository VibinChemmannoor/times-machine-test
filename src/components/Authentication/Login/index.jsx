const Login = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-white px-8 py-10 md:px-16">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Sign In</h1>

      <form className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Sign In
        </button>

        {/* Social Media Login */}
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-500 text-sm">Or sign in with</span>
        </div>

        <div className="flex justify-center space-x-4 mt-3">
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-100">
            <FaFacebookF className="text-blue-600" />
          </button>
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-100">
            <FaGoogle className="text-red-500" />
          </button>
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-100">
            <FaLinkedinIn className="text-blue-700" />
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
