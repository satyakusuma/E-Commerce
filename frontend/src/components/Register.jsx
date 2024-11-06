import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Register = () => {
    const [message, setMassage] = useState("");
    const [username, setUsername] = useState('')
    const [email, setEmail] =useState('');
    const [password,setPassword] = useState('');
    const handRegister = async (e) => {
        e.preventDefault();
        const data = {
            username,
            email,
            password
        }
  }
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-sm border shadow bg-white mx-auto p-8">
        <h2 className="tex-2xl font-semibold pt-5">Please Register</h2>
        <form onSubmit={handRegister} className="space-y-5 max-w-sm mx-auto pt-8">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="w-full bg-gray-100 focus:outline-none px-5 py-3"
          />
          {message && <p className="text-red-500">{message}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white hover:bg-indigo-500 font-medium py-3 rounded-md"
          >
            Register
          </button>

          <p className="my-5 italic text-sm text-center">
            Already have an account? Please <Link to="/login" className="text-red-700 px-1 underline">Login</Link> here.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Register