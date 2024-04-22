import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import REACT from '../assets/react.png';
import NODE from '../assets/node.png';
import MONGO from '../assets/mongo.png';
import GIT from '../assets/github.png';
import TAILWIND from '../assets/tailwind.png';
import AWS from '../assets/aws.png';
import FIREBASE from '../assets/firebase.png';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'JavaScript', icon: JS },
    { name: 'React', icon: REACT },
    { name: 'Node', icon: NODE },
    { name: 'MongoDB', icon: MONGO },
    { name: 'Git', icon: GIT },
    { name: 'Tailwind', icon: TAILWIND },
  ];

  return (
    <div name="skills" className="bg-primary text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill) => (
            <div className="hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={skill.icon}
                alt={`${skill.name} icon`}
              />
              <p className="my-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
