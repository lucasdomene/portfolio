import React from 'react';
import WorkImg from '../assets/projects/workImg.jpeg';
import RealState from '../assets/projects/realestate.jpg';

export default function Work() {
  const projects = [
    {
      image: WorkImg,
    },
    {
      image: RealState,
    },
    {
      image: WorkImg,
    },
    {
      image: RealState,
    },
    {
      image: WorkImg,
    },
    {
      image: RealState,
    },
  ];

  return (
    <div name="work" className="bg-primary w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <WorkItem image={project.image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkItem({ image }) {
  return (
    <div className="relative shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center mx-auto">
      <img src={image} alt="Work Item" className="rounded-md" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-75 bg-purple-700" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex justify-center items-center">
        <a href="https://www.google.com">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Demo
          </button>
        </a>
        <a href="https://www.google.com">
          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
            Code
          </button>
        </a>
      </div>
    </div>
  );
}
