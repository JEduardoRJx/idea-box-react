import React from 'react';
import './IdeasContainer.scss';
import Card from '../card/Card';

const IdeasContainer = ({ ideas, deleteIdea, toggleFavorite, viewFavorites }) => {

  const renderFavoriteCards = ideas => {
    const favIdeas = ideas.filter(idea=> idea.fav === true);
    if (favIdeas.length) {
      return favIdeas.map(idea =>
        <Card key={idea.id}
          idea={idea}
          deleteIdea={deleteIdea}
          toggleFavorite={toggleFavorite} />
      );
    } else {
      return <h1>Favorite Some Ideas!</h1>;
    }
  }

  return (
    <section className='ideascontainer-section'>

    </section>
  )
}

export default IdeasContainer;