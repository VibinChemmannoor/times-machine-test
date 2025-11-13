import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import useLogin from "./useLogin";

const Login = () => {
  const { formik, error, handleUserEmail, handlePassword } = useLogin();
  return (
    <div className="flex flex-1 flex-col justify-center items-left bg-white px-8 py-10 md:px-25">
      <h1 className="text-4xl font-semibold mb-6 text-gray-800">Sign In</h1>
      <p>
        New user?{" "}
        <a className="" href="#">
          Create an account
        </a>
      </p>

      <form
        className="w-full max-w-sm space-y-4"
        onSubmit={formik.handleSubmit}
      >
        <Input
          type={`text`}
          label={`Email`}
          name={`email`}
          onChange={handleUserEmail}
          placeholder={`Enter valid email`}
          formik={formik}
          error={formik.errors.email && formik.touched.email}
        />

        <Input
          type={`password`}
          label={`Password`}
          name={`password`}
          onChange={handlePassword}
          placeholder={`Enter your password`}
          formik={formik}
          error={formik.errors.password && formik.touched.password}
        />
        {error && <p className="font-small text-red-400">{error}</p>}
        <Button
          label={"Sign In"}
          type={"button"}
          handleSubmit={formik.handleSubmit}
        />

        {/* Social Media Login */}
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-500 text-sm">Or sign in with</span>
        </div>

        <div className="flex justify-center space-x-4 mt-3">
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-100">
            {/* <FaFacebookF className="text-blue-600" /> */}f
          </button>
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-100">
            {/* <FaGoogle className="text-red-500" /> */}g
          </button>
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-100">
            {/* <FaLinkedinIn className="text-blue-700" /> */}l
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
