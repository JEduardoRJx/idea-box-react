import React, { useState } from 'react';
import './App.scss';
import Form from '../components/form/Form';
import IdeasContainer from '../components/ideascontainer/IdeasContainer';

const App = () => {
  
  const [viewFavorites, updateViewFavorites] = useState(false);
  const [ideas, updateIdeas] = useState([
    { id: 1, title: 'Bake Cake', description: 'Need to use all my eggs and milk', favorite: false },
    { id: 2, title: 'Evil Plan', description: 'Take Over the World', fav: true },
    { id: 3, title: 'Write a Book', description: 'Write a childs book about planets', fav: false },
  ]);

  const submitIdea = (newIdea) => {
    updateIdeas([...ideas, newIdea]);
  }

  const deleteIdea = (id) => {
    const updatedIdeaList = ideas.filter(idea => idea.id !== id);
    updateIdeas([...updatedIdeaList]);
  }
  
  const toggleFavorite = (id) => {
    let updatedIdeaList = ideas.map(idea => {
    if (idea.id === id) {
      return {...idea, fav: !idea.fav }
    } else {
      return idea
    }
    });
    updateIdeas([...updatedIdeaList])
  }

  return (
    <>
      <section className='form-wrapper'>
        <h1>IdeaBox</h1>
        <Form submitIdea={submitIdea}
          numOfIdeas={ideas.length} />
        <button className='fav-btn'
          type='button'
          onClick={() => toggleViewFavorites()}>View Favorites</button>
      </section>
        <IdeasContainer ideas={ideas} 
          deleteIdea={deleteIdea} 
          toggleFavorite={toggleFavorite} 
          viewFavorites={viewFavorites} />
    </>
  )
}

export default App;