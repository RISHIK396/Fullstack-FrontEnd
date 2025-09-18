import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

const Login = () => {

  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");

  const navigate = useNavigate();

  // validation schema
  const userSchema = z.object({
    password: z.string().min(8, { message: "🔑 Password must be at least 8 characters" }),
    email: z.string().email({ message: "📧 Please enter a valid email" }),
  });

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);


  const SubmitDetails = async (e) => {
    e.preventDefault();

    const data_send = {
      email: email1,
      password: password1
    };

    // ✅ validate before sending
    const result = userSchema.safeParse(data_send);

    if (!result.success) {
        toast.error(" Email or Password Are Not Correct",{icon:"⚠️"});
      return; // stop here if invalid
    }

    try {
      const response = await fetch("https://fullstack-backend-ole8.onrender.com/app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(result.data), // ✅ only send if valid
      });

      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        toast.success("🎉 Login successful!", { icon: "🚀" });
        setEmail("");
        setPassword("");

        navigate("/quiz");
      } else {
        toast.error("⚠️ Login failed. Please try again.", { icon: "❌" });
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong. Try again later!");
    }
  };

  return (
    <div className='wholePage'>
    <div className='form_box'>
        <h1>Login Form</h1>
      <form onSubmit={SubmitDetails} className='form'>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={changeEmail}
          value={email1}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={changePassword}
          value={password1}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signUp">New to Our WebSite</Link>
    </div>
    </div>
  );
};

export default Login