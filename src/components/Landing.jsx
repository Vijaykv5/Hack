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
        <h2 className="text-5xl font-bold text-white mt-20 mb-4">Unlock Quick Funds with Gold Loans</h2>
<p className="text-white mb-6">Empower your financial future by leveraging the value of your gold assets. Our gold loan services offer a hassle-free and efficient way to access immediate funds for your needs.</p>
<p className="text-white mb-6">With flexible repayment options and competitive interest rates, our platform simplifies the process of obtaining a loan against your gold possessions. Your gold stays secure while you gain the financial support you require.</p>
<p className="text-white mb-6">Our dedicated team ensures a transparent and seamless experience, guiding you through every step of the process. Whether it's for personal or business needs, our gold loan services are tailored to suit your requirements.</p>
<a href="/register"><button className='bg-[#FAAA27] py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300 ease-in-out'>Get Started Here</button></a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://i.ibb.co/YtS9dHb/Screenshot-2023-12-16-at-9-46-32-AM-removebg-preview.png" alt="Image" className="w-full rounded-lg shadow-lg" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
