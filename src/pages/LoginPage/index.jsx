import Login from "../../components/Authentication/Login";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Login />
      <div className="hidden md:flex flex-1 items-center justify-center bg-blue-600">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
