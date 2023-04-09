import React from 'react';

import { Icon } from '@/cmps/Els/Icon';

const Section = () => {
  return (
    <div className="p-7">
      <h2 className="flex-col gap-3 font-primary text-2xl text-black dark:text-white">
        Startup
      </h2>
      <ul className="flex gap-3">
        <li>
          <Icon name="github"></Icon>
        </li>
      </ul>
    </div>
  );
};

export { Section };
