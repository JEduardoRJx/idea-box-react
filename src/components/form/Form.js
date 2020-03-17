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

  const addIdea = () => {
    submitIdea({...newIdea, id: numOfIdeas + 1 });
    createNewIdea({
      id: null,
      title: '',
      description: ''
    });
  }

  const renderButton = () => {
    if (newIdea.title !== '' && newIdea.description !== '') {
      return <button type='button'
        onClick={() => addIdea()}>Create Idea</button>;
    }
  }

  return (
    <form>
      <label htmlFor='title'>Title:</label>
      <input type='text' 
        value={newIdea.title}
        placeholder='Enter Title'
        name='title'
        onChange={e => handleChange(e)} />
      <label htmlFor='description'>Description:</label>
      <textarea type='text' 
        value={newIdea.description}
        placeholder='Enter Description'
        name='description'
        onChange={e => handleChange(e)} />
        {renderButton()}
    </form>
  );
}

export default Form;