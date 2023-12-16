import React, { useState } from 'react';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as databaseRef, push, set } from 'firebase/database';

const storage = getStorage(); // Initialize Firebase Storage
const database = getDatabase(); // Initialize Firebase Realtime Database

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    resadd: '',
    contact: '',
    occupation: '',
    bankaddr: '',
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      picture: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, dob, resadd, contact, occupation, bankaddr, picture } = formData;

    // Upload image to Firebase Storage
    const fileName = `${name}_${dob}`;
    const storageReference = storageRef(storage, `Aadhar/${fileName}`);
    await uploadBytes(storageReference, picture);

    // Get the download URL of the uploaded image
    const imageURL = await getDownloadURL(storageReference);

    // Save form data including image URL to Firebase Realtime Database
    const databaseReference = databaseRef(database, 'UserData');
    const newPostRef = push(databaseReference);
    const postData = {
      name,
      dob,
      resadd,
      contact,
      occupation,
      bankaddr,
      picture: imageURL,
    };
    await set(newPostRef, postData);

    alert('Data Added Successfully');

    setFormData({
      name: '',
      dob: '',
      resadd: '',
      contact: '',
      occupation: '',
      bankaddr: '',
      picture: null,
    });
  };


  return (
    <div className=' bg-[#2D5281] h-full'>
      
      
     <form className="bg-white mt-20 max-w-md mx-auto p-6 rounded-lg shadow-md">
      <div className="mb-4 ">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter Name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aadharNo" className="block text-gray-700 font-semibold mb-2">
          Enter your DOB
        </label>
        <input
          type="text"
          id="aadharNo"
          name="aadharNo"
          value={formData.dob}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter Aadhar No"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
          Residential Details
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={formData.resadd}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter Amount"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
          Contact details
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={formData.contact}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter Amount"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
          Occupation
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={formData.occupation}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter Amount"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">
          Bank Account no
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          value={formData.bankaddr}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter Amount"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="picture" className="block text-gray-700 font-semibold mb-2">
          Upload Your Pic
        </label>
        <input
          type="file"
          id="picture"
          name="picture"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border-gray-300 focus:border-indigo-500 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Submit
      </button>
    </form>
    
   </div>
  );
};

export default FormComponent;
