import React from 'react';
import Button from './Button';

const buttonName = [
  'All',
  'Live',
  'React',
  'Namaste React',
  'Music',
  'Cricket',
  'JavaScript',
  'RCB',
  'Communication',
  'World Test Championship',
  'Chess',
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonName.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
