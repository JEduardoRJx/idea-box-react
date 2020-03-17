import React, { useState } from 'react';
import './Form.scss';

const Form = ({ submitIdea, numOfIdeas }) => {
  const [newIdea, createNewIdea] = useState({
    id: null,
    title: '',
    description: '',
    fav: false
  });


  return (
    <form>

    </form>
  );
}

export default Form;