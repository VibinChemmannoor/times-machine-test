import Login from "../../components/Authentication/Login";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">

      {/* Left (form) */}
      <Login />

      {/* Right illustration */}
      <div className="hidden md:flex flex-1 justify-center items-center bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
          alt="Login Illustration"
          className="object-contain w-3/4"
        />
      </div>
    </div>
  );
};

export default LoginPage;
