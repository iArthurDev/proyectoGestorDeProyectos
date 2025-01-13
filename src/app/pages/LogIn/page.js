import "./LogInStyles.css";
import Image from "next/image";
import LogInComponent from "./loginComponent/loginComponent";

export default function LogIn() {
  return (
    <div className="login-page">
      <LogInComponent />
      <div className="contenedor-logo">
        <Image
          src="/images/logo.png"
          className="logo"
          alt="Logo"
          width={800}
          height={500}
        />
      </div>
    </div>
  );
}
