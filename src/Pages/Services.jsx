import React from "react";

const Services = () => {
  return (
    <div className="bg-mybrown min-h-screen">
      <div className=" text-white  p-10 pt-20 flex justify-between items-center ">
        <h2 className=" font-poppins text-5xl border-b border-white p-2">FRONT-END DEVELOPMENT</h2>
        <div className=" w-[50%]">
          <div className=" flex flex-wrap gap-4 font-medium  font-poppins ">
            <button className="uppercase text-lg md:text-3xl  border py-2 px-4  border-[#F5EEE6] rounded-full">
            Responsive Web Design
            </button>
            <button className="uppercase md:text-3xl lg:text-3xl border py-2 px-4  border-[#F5EEE6] rounded-full">High-Performance & Fast Websites</button>
            <button className="uppercase md:text-3xl lg:text-3xl border py-2 px-4  border-[#F5EEE6] rounded-full">Modern & Intuitive UI/UX Design</button>
            <button className="uppercase md:text-3xl lg:text-3xl border py-2 px-4  border-[#F5EEE6] rounded-full">API & Backend Integration</button>
            <button className="uppercase md:text-3xl lg:text-3xl border py-2 px-4  border-[#F5EEE6] rounded-full"> E-Commerce</button>
            <button className="uppercase md:text-3xl lg:text-3xl border py-2 px-4  border-[#F5EEE6] rounded-full">Dashboard Interfaces</button>
            <button className="uppercase md:text-3xl lg:text-3xl border py-2 px-4  border-[#F5EEE6] rounded-full"> Animations & Interactive Elements</button>
            <button className="uppercase md:text-3xl lg:text-3xl border py-2 px-4  border-[#F5EEE6] rounded-full">SEO & Accessibility Optimization</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

// import React from 'react';
// import img from './../assets/bg/black-thread--light--1920x1080.png'
// const Services = () => {
//   return (
//     <div className="py-12 bg-ivory min-h-screen text-white font-bold text-3xl" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-cinzel text-gold text-center mb-8">Hizmetlerim</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Frontend Kartı */}
//           <div className="bg-antique-white p-8 rounded-lg border-4 border-gold shadow-lg transform transition-transform duration-300 hover:scale-105">
//             <div className="text-center">
//               <h3 className="text-2xl font-playfair text-dark-red mb-4">Frontend</h3>
//               <ul className="space-y-2 text-antique-brown font-lora">
//                 <li>Pure JS</li>
//                 <li>React</li>
//                 <li>Next.js</li>
//                 <li>TypeScript</li>
//               </ul>
//             </div>
//           </div>

//           {/* Backend Kartı */}
//           <div className="bg-antique-white p-8 rounded-lg border-4 border-gold shadow-lg transform transition-transform duration-300 hover:scale-105">
//             <div className="text-center">
//               <h3 className="text-2xl font-playfair text-dark-red mb-4">Backend</h3>
//               <ul className="space-y-2 text-antique-brown font-lora">
//                 <li>Node.js</li>
//                 <li>Express</li>
//                 <li>Django</li>
//                 <li>GraphQL</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
