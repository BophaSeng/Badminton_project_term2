import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const signin = () => {
    if (!email || !password) {
      alert("Please fill the fields!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      alert("Login successfully!");
      localStorage.setItem("userProfile", JSON.stringify(user));
      navigate("/"); // Redirect to home page
    } else {
      alert("Wrong email or password!");
    }
  };

  return (
    <main style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <div
        className="box"
        style={{
          width: "320px",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <button
          onClick={signin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Sign In
        </button>

        <p style={{ marginTop: "10px" }}>
          Don't have an account?{' '}
          {/* Changed <a> to <Link> and fixed the path to match your App.jsx */}
          <Link to="/signup" style={{ color: "#2196F3", textDecoration: "none" }}>
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Signin;