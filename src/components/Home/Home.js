import React from 'react';
import Form from '../Form/Form';
import HeadlineContainer from '../HeadlineContainer/HeadlineContainer';

const Home = ({ news }) => {
  return (
    <div>
      <Form />
      <HeadlineContainer />
    </div>
  );
}

export default Home;