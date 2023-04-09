import React from 'react';

import { SVG_github } from '@/assets/icons';

console.log(SVG_github);

const Section = () => {
  return (
    <div className="p-7">
      <h2 className="flex-col gap-3 font-primary text-2xl text-black dark:text-white">
        Startup
      </h2>
      <ul className="flex gap-3">
        <li>
          <svg className="h-5 w-5 fill-black dark:fill-white">
            <path d={SVG_github} />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export { Section };
