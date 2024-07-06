import React from 'react';

import { MyFoo } from './components/MyFoo/MyFoo';

export const App: React.FC = () => {
  return (
    <>
      <MyFoo active={true} />
    </>
  );
};
