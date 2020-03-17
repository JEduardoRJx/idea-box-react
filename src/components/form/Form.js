import React, { useState } from 'react';
import './Form.scss';

const Form = ({ submitIdea, numOfIdeas }) => {
  const [newIdea, createNewIdea] = useState({
    id: null,
    title: '',
    description: '',
    fav: false
  });

  const handleChange = (e) => {
    createNewIdea({...newIdea, [e.target.name]: e.target.value});
  }


  return (
    <form>

    </form>
  );
}

export default Form;