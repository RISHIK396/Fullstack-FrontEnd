import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  // validation schema
  const userSchema = z.object({
    userName: z.string().min(3, { message: "👤 Username must be at least 3 characters" }),
    password: z.string().min(8, { message: "🔑 Password must be at least 8 characters" }),
    email: z.string().email({ message: "📧 Please enter a valid email" }),
  });

  const changeEmail = (e) => setEmail(e.target.value);
  const changePassword = (e) => setPassword(e.target.value);
  const changeUser = (e) => setUser(e.target.value);

  const SubmitDetails = async (e) => {
    e.preventDefault();

    const data_send = {
      email: email1,
      password: password1,
      userName: user,
    };

    // ✅ validate before sending
    const result = userSchema.safeParse(data_send);

    if (!result.success) {
        toast.error(" Email or Password Are Not Correct",{icon:"⚠️"});
      return; // stop here if invalid
    }

    try {
      const response = await fetch("https://fullstack-backend-ole8.onrender.com/app/signUp", {
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
        toast.success("🎉 Signup Successful!", { icon: "🚀" });
        setEmail("");
        setPassword("");
        setUser("");
        navigate("/quiz");
      } else {
        toast.error("⚠️ Signup failed. Please try again.", { icon: "❌" });
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Something went wrong. Try again later!");
    }
  };

  return (
    <div className='wholePage'>
    <div className='form_box'>
      <form onSubmit={SubmitDetails} className='form'>
        <h1>Sign-Up Form</h1>
        <input
          type="text"
          placeholder="Enter Your UserName"
          value={user}
          onChange={changeUser}
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/login">Already a Customer?</Link>
    </div>
    </div>
  );
};

export default SignUp;
