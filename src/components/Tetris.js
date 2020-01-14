import React from 'react';

//components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

//arrow function
const Tetris = () => {

  return (
    <div>
      <Stage />
      <aside>
      <div>
        <Display text = "Score"/>
        <Display text = "Rows"/>
        <Display text = "Levels"/>
      </div>
        <StartButton />
        </aside>
      </div>
  );
};
export default Tetris;
