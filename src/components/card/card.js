import React from 'react';
import './Card.scss';

const Card = ({ idea, deleteIdea, toggleFavorite }) => {
  const favorite = idea.fav ? 'favorite' : null;

  return (
    <article className={favorite} key={idea.id}>
      <h2>{idea.title}</h2>
      <p>{idea.description}</p>
      <div>
        <button type='button'
          onClick={() => toggleFavorite(idea.id)}>Favorite</button>
        <button type='button'
          onClick={ () => deleteIdea(idea.id)}>Delete</button>
      </div>
    </article>
  )
}

export default Card;