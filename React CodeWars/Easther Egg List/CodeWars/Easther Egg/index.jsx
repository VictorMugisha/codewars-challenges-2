import React from 'react';

export const EggList = (props) => {
  const eggs = ["Lindt", "Cadbury", "Milka", "Maltesers"];
  const result = eggs.map((egg,  index) => (
    <EasterEgg name={egg} key={index} />
  ))
  return (
      <ul>
        {result}
      </ul>
  )
};

export const EasterEgg = (props) => {
  return (
    <li>{props.name}</li>
  )
};