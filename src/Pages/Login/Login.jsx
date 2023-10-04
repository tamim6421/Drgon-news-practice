import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log('login', location)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get('password')
    // console.log(email, password)

    signInUser(email, password)
    .then( res =>{
        const user = res.user
        console.log(user)
        e.target.reset()
        navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
        console.log(error)
    })
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="p-7">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="p-3">Do not have an account? <Link className="text-lg text-blue-600 font-semibold" to='/register'> Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
