import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardItem = ({ name, email, id }) => {
  return (
    // <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
    //   <img alt='img' src={`https://robohash.org/${id}?size=200x200`} />
    //   <div>
    //     <h2>{name}</h2>
    //     <p>{email}</p>
    //   </div>
    // </div>
    <Card>
      <Image
        src={`https://robohash.org/${id}?size=200x200`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>

        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CardItem;
