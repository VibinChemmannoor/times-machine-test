import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import useLogin from "./useLogin";

const Login = () => {
  const { formik, error, handleUserEmail, handlePassword } = useLogin();

  return (
    <div className="flex flex-col justify-center px-8 md:px-16 py-12 bg-white w-full md:w-1/2">
      <h1 className="text-2xl font-semibold mb-2">Sign In</h1>
      <p className="text-sm text-gray-600 mb-6">
        New user?{" "}
        <a className="text-blue-600 underline cursor-pointer">Create an account</a>
      </p>
      <form onSubmit={formik.handleSubmit} className="space-y-4 w-full max-w-sm">
        <Input
          type="text"
          label="Username or email"
          name="email"
          onChange={handleUserEmail}
          placeholder="Enter your email"
          formik={formik}
          error={formik.errors.email && formik.touched.email}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          onChange={handlePassword}
          placeholder="Enter your password"
          formik={formik}
          error={formik.errors.password && formik.touched.password}
        />
        <div className="flex items-center gap-2 mt-1">
          <input
            type="checkbox"
            className="h-4 w-4 border-gray-400 rounded"
          />
          <span className="text-sm text-gray-600">Keep me signed in</span>
        </div>
         {error && <p className="font-small text-red-400">{error}</p>}
        <Button
          label={"Sign In"}
          type={"button"}
          handleSubmit={formik.handleSubmit}
        />
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">Or Sign In With</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </form>
      <div className="flex justify-center space-x-4 mt-2">
        <button className="border border-gray-400 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">f</button>
        <button className="border border-gray-400 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">g</button>
        <button className="border border-gray-400 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">in</button>
      </div>

    </div>
  );
};

export default Login;
