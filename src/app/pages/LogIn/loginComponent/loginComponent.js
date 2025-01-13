"use client";
import Link from "next/link";
import { useState } from "react";
import "./loginComponent.css";

export default function LogInComponent() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (userEmail && password) {
      window.location.href = "/pages/Home";
    } else {
      alert("Ocurrio un error");
    }
  };

  return (
    <div>
      <div className="contenedor-login">
        <div className="contenedor-login-details">
          <form action="" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn-ingresar">
              Ingresar
            </button>
          </form>

          <div className="contenedor-lbl-signin">
            <Link href="/pages/SignIn" className="lbl-signin">
              Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
