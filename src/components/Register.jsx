import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../constants/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate(); // Moved inside the component

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    const auth = getAuth();
    toast.success('User Registered Successfully')

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User registered:", user);

      // Generate a token once the user is verified
      const idToken = await user.getIdToken();
      console.log("User token:", idToken);
      localStorage.setItem("token", idToken);

      // You might want to save user data to the database here using 'database'

      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/main");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Registration error:", errorCode, errorMessage);
    }
  };

  return (
    <div className="bg-[#2D5281] min-h-screen flex items-center justify-center">
      <form className="bg-white max-w-md mx-auto p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">REGISTER</h2>

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
          className="w-full bg-[#2D5281] text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition duration-300"
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default Register;
