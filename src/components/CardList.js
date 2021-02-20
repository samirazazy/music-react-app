import React from 'react';
import CardItem from './CardItem';

const CardList = ({ elements }) => {
  return (
    <div>
      {elements.map((user, i) => {
        return (
          <CardItem
            key={i}
            id={elements[i].id}
            name={elements[i].title}
            // email={elements[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
