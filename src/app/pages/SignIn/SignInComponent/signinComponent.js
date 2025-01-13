import "./signinStyles.css";
export default function SignInComponent() {
  return (
    <div className="signin-page">
      <div className="container-form-signin">
        <div className="form-details">
          <form action="">
            <div className="formControl">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="formControl">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="formControl-password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="container-btn-signIn">
              <button className="btn-sendSignIn">Registrar cuenta</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
