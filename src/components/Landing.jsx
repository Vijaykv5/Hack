import React from 'react';

const LandingPage = () => {
  return (
    <div className=" min-h-screen bg-[#2D5280]">
      <header className="bg-[#FAAA27] p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-4 text-white font-bold text-2xl">
              <h1>FEDERAL BANK </h1>
            </div>
          </div>
          <ul className="flex space-x-4">
            <li className="ml-auto">
              <a href="/register" className=" bg-[#2D5281] px-5 py-3 rounded-md text-white">Register</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-8 flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white ">Get Easy Digital Loans</h1>
            <p className="text-white">Your compelling heading text goes here...</p>
            <button className='bg-[#FAAA27]  py-2 px-4 rounded-md'>Get Started here</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://i.ibb.co/XJ2QC8D/Screenshot-2023-12-16-at-9-46-32-AM.png" alt="Image" className="w-full rounded-lg shadow-lg" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
