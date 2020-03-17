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

  const renderCards = ideas => {
    if (viewFavorites) {
      return renderFavoriteCards(ideas);
    } else if (ideas.length) {
      return ideas.map(idea=> 
        <Card key={idea.id}
          idea={idea}
          deleteIdea={deleteIdea}
          toggleFavorite={toggleFavorite} />
      );
    } else {
      return <h1>No Ideas! Create Some!</h1>;
    }
  }

  return (
    <section className='ideascontainer-section'>
      {renderCards(ideas)}
    </section>
  )
}

export default IdeasContainer;