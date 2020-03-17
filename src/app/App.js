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

  return (
    <>

    </>
  )
}

export default App;