import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Did you know?</h2>
        <p>
          Nearly 25% of college roommates who start as strangers end up becoming best friends for life!!
        </p>
      </div>
      <div className="login-form-box">
        <h3>Login</h3>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p className="forgot">Forgot your password?</p>
          <p className="create-account">Don’t have an account yet?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
