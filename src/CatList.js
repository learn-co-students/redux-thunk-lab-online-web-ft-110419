// write your CatList component here
import React from 'react';

const CatList = props => (
  <div>
    {props.catPics.map(cat => (
      <img src={cat.url} key={cat.id} alt={cat.id} />
    ))}
  </div>
);

export default CatList;