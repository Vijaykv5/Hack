import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../constants/firebaseConfig";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
        // You might want to save user data to the database here using 'database'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorCode, errorMessage);
      });

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="bg-blue-600">
    <form className="mt-56 max-w-md mx-auto p-6  shadow-md rounded-lg">
  <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
  
  <input
    className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
    type="text"
    name="name"
    placeholder="Name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  <input
    className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
  />
  <input
    className="w-full mb-3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
    type="password"
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    required
  />
  <button
    className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
    type="submit"
    onClick={handleSubmit}
  >
    Register
  </button>
</form>
</div>

  );
};

export default Register;
